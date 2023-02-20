import { Portal } from 'components/Portal';
import { MouseEventHandler, ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, close, children }: ModalProps) => {
  const onModalCick: MouseEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
  };

  if (isOpen) {
    return (
      <Portal>
        <div className={styles['modal-background']} onClick={close}>
          <div className={styles.modal} onClick={onModalCick}>
            {children}
          </div>
        </div>
      </Portal>
    );
  }
  return null;
};
