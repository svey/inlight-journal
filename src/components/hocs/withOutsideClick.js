import React, { useState, useEffect, useRef } from 'react';

export const withOutsideClick = (Component, initialState = false) => {
  const Container = (props) => {
    const [outsideClick, setOutsideClick] = useState(initialState);
    const wrapperRef = useRef();

    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOutsideClick(true);
      } else if (outsideClick === true) {
        setOutsideClick(false);
      }
    };
    
    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    });

    return (
      <div role="presentation" ref={wrapperRef}>
        <Component {...props} outsideClick={outsideClick} />
      </div>
    );
  };
  return Container;
};

export default withOutsideClick;
