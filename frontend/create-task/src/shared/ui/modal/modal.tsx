import React from "react";
import type { ModalProps } from './types';
import cns from './modal.module.css';

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onVisibilityChange, children } = props;

  const onMaskClick = () => {
    onVisibilityChange(false)
  }

  if(!isOpen) {
    return null;
  }

  return (
    <div>
      <div
        className={cns['modal__mask']}
        onClick={onMaskClick}
      />
      <div className={cns['modal__content']}>
        {children}
      </div>
    </div>
  )
}