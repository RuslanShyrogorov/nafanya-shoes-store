import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Button from '../Button/Button';
import { FaTimes } from 'react-icons/fa';
import s from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

interface IModalProps {
  className?: string;
  children?: React.ReactNode;
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
                  <FaTimes className={s.modalCloseBtnIcon} />
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
