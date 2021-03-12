import { IModal, IModalBody, ISubModal } from '@interfaces/imodal';
import {
  Body,
  Footer,
  ModalHeaderImage,
  Mask,
  ModalClose,
  ModalHeader,
  ModalInfo,
  ModalStyled,
  ModalTitle,
  ModalWrapper,
} from '@styles/modal.styles';
import { pokeballImage } from '@utils/constant';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

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

const ModalImage: React.FC = ({ children }) => {
  return <ModalHeaderImage>{children}</ModalHeaderImage>;
};

const Modal: React.FC<IModal> & ISubModal = ({
  show,
  as,
  title,
  info,
  color,
  children,
  onClose,
  ...props
}) => {
  const node = useRef<HTMLDivElement>(null);
  const isDrawer = as === 'drawer';

  const handleClick = (e: any) => {
    if (!isDrawer) {
      !node?.current?.contains(e.target) && handleClose();
    }
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

  return isDrawer ? (
    <>
      <Mask show={show} backgroundColor={color}>
        <Image src={pokeballImage} alt="drawer_header_background" width={300} height={300} />
      </Mask>
      {isDrawer && (
        <>
          <ModalHeader show={show} variant="light">
            <ModalTitle>
              {title}
              <ModalClose onClick={handleClose}>&times;</ModalClose>
            </ModalTitle>
            <ModalInfo>{info}</ModalInfo>
          </ModalHeader>
        </>
      )}
      <ModalWrapper show={show}>
        <ModalStyled show={show} ref={node} {...props}>
          {!isDrawer && (
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose onClick={handleClose}>&times;</ModalClose>
            </ModalHeader>
          )}
          {children}
        </ModalStyled>
      </ModalWrapper>
    </>
  ) : (
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
Modal.Image = ModalImage;
