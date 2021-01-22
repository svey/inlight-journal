import React from 'react';
import './style.css';

interface ColorBoxI {
  color: string;
}

export const ColorBox = (props: ColorBoxI) => (
  <div className={`color-box ${props.color}`}>{props.color}</div>
);
