import { IModal, IModalBody, ISubModal } from '@interfaces/imodal';
import {
  Body,
  Footer,
  Mask,
  ModalClose,
  ModalHeader,
  ModalStyled,
  ModalTitle,
  ModalWrapper,
} from '@styles/modal.styles';
import React, { useRef, useEffect } from 'react';

const ModalBody: React.FC<IModalBody> = ({ withOutFooter, maxHeight, children, fullHeight }) => {
  return (
    <Body withOutFooter={withOutFooter} maxHeight={maxHeight} fullHeight={fullHeight}>
      {children}
    </Body>
  );
};

const ModalFooter: React.FC = ({ children }) => {
  return <Footer>{children}</Footer>;
};

const Modal: React.FC<IModal> & ISubModal = ({
  show,
  title,
  info,
  color,
  children,
  onClose,
  ...props
}) => {
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    !node?.current?.contains(e.target) && handleClose();
  };

  const handleClose = () => {
    show && onClose && onClose();
  };

  useEffect(() => {
    if (show && document) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [show]);

  return (
    <>
      <Mask show={show} />
      <ModalWrapper show={show}>
        <ModalStyled show={show} ref={node} {...props}>
          <ModalHeader show={show} variant="dark">
            <ModalTitle>{title}</ModalTitle>
            <ModalClose onClick={handleClose}>&times;</ModalClose>
          </ModalHeader>
          {children}
        </ModalStyled>
      </ModalWrapper>
    </>
  );
};

Modal.displayName = 'Modal';
ModalBody.displayName = 'Modal.Body';
ModalFooter.displayName = 'Modal.Footer';

export default Modal;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
