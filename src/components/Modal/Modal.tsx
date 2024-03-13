import React, { ReactNode, useEffect } from 'react';
import ReactDom from 'react-dom';
import { IoMdClose } from 'react-icons/io';

import { Button } from 'components';

import s from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

interface IModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: IModalProps) {
  const onPressEscape = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onPressEscape);

    return () => window.removeEventListener('keydown', onPressEscape);
  }, []);

  return modalRoot
    ? ReactDom.createPortal(
        isOpen && (
          <div className={s.modal}>
            <div className={s.modalWrapper} onClick={onBackdropClick}>
              <div className={s.modalContent}>
                <Button
                  className={s.modalCloseBtn}
                  variant='icon'
                  onClick={onClose}
                >
                  <IoMdClose className={s.modalCloseBtnIcon} />
                </Button>
                {children}
              </div>
            </div>
          </div>
        ),
        modalRoot
      )
    : null;
}
