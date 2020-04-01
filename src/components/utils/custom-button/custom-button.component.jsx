import React from 'react';
import { CustomButtonContainer } from './custom-button.style.jsx';
function CustomButton({ children, ...props }) {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
}

export default CustomButton;
