import React, { FunctionComponent, useEffect, useState } from 'react';
import { withOutsideClick } from '../../../hocs';
import { Button } from '../../button';
import { EventT } from '../../../interfaces';
import './style.css';

type OptionT = {
  text: string;
  value: string;
  component?: React.ElementType;
};

type DropdownProps = {
  options: OptionT[];
  onChange: Function;
  outsideClick: boolean;
  value: string;
  [x: string]: any;
};

const DefaultOption = (props: OptionT) => (
  <Button value={props.value}>{props.text}</Button>
);

const Input: FunctionComponent<DropdownProps> = ({
  options,
  onChange,
  outsideClick,
  value,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(outsideClick);
  useEffect(() => {
    if (isOpen === true && outsideClick === true) {
      setIsOpen(false);
    }
  }, [outsideClick]);

  useEffect(() => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  }, [value]);

  const handleToggle = () => setIsOpen(!isOpen);
  const dropdownText = options.find((option) => {
    if (option !== undefined) {
      return option.value === value;
    }
    return {};
  });

  const Options = options.map((option) => {
    const OptionComponent = option.component || DefaultOption;
    const updateEventValue = (e: EventT, value: string): EventT => ({
      ...e,
      target: { ...e.target, value },
    });
    return (
      <OptionComponent
        key={option.value}
        onClick={(e: EventT) => {
          const updatedEvent = updateEventValue(e, option.value);
          onChange(updatedEvent);
        }}
        {...option}
      />
    );
  });

  return (
    <>
      <Button
        {...rest}
        className={`blue ${isOpen ? 'arrow-opened' : 'arrow-closed'}`}
        onClick={handleToggle}
      >
        {dropdownText ? dropdownText.text : 'Select'}
      </Button>
      {isOpen && <div className="options">{Options}</div>}
    </>
  );
};

export const Dropdown = withOutsideClick(Input);
