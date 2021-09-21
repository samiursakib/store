import React from 'react';

export const Tab = ({ isSelected, children }) => {
  if(isSelected) {
    return(
      <div>{ children }</div>
    );
  }
  return null;
};