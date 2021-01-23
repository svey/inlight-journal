import React, { FunctionComponent } from 'react';
import './style.css';

interface PostItI {
  className?: string;
}

export const PostIt: FunctionComponent<PostItI> = ({ className, children }) => (
  <div className={`post-it ${className}`}>
    {children}
  </div>
);
