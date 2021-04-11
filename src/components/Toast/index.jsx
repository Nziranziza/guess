import React, { useState, useEffect } from 'react';

import './index.scss';

const Toast = ({
  show,
  message,
  type,
  onClose
}) => {
  const [isOpen, setIsOpen] = useState(show);
  useEffect(() => {
    setIsOpen(show);
  }, [show]);

  useEffect(() => {
    if(isOpen) {
      setTimeout(() => {
        onClose()
      }, 1500);
    }
  }, [isOpen]);

  return <div className={`toast-container ${isOpen ? 'show' : ''}`}>
    <div className={type}>
      <span>{message}</span>
    </div>
  </div>
};

export default Toast;
