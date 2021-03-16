import React, { useEffect } from 'react';
import { ISheet } from '@interfaces/isheet';
import Sheet from 'react-modal-sheet';
import { SheetWrapper } from '@styles/sheet.styles';
import { Mask } from '@styles/modal.styles';
import { pokeballImage } from '@utils/constant';
import Image from 'next/image';

const SheetModal: React.FC<ISheet> = ({
  show,
  snapPoints,
  initialSnap = 0,
  children,
  backdropColor,
  customBackdrop,
  customHeader,
  onClose,
  onSnap,
}) => {
  const handleClose = () => {
    onClose && onClose();
  };
  const handleSnap = (index) => {
    onSnap && onSnap(index);
  };

  useEffect(() => {
    if (show && document) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }, [show]);

  return (
    <>
      {customBackdrop && (
        <>
          <Mask show={show} backgroundColor={backdropColor} />
          <Mask show={show}>
            <Image src={pokeballImage} alt="sheets_header_background" width={300} height={300} />
          </Mask>
        </>
      )}
      <Sheet
        isOpen={show}
        onClose={handleClose}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        onSnap={handleSnap}
      >
        <SheetWrapper>
          <Sheet.Container>
            <Sheet.Header />
            {customHeader && <Sheet.Header>{customHeader}</Sheet.Header>}
            <Sheet.Content style={{ padding: 8 }}>{children}</Sheet.Content>
          </Sheet.Container>

          {customBackdrop && show ? customBackdrop : <Sheet.Backdrop />}
        </SheetWrapper>
      </Sheet>
    </>
  );
};

export default SheetModal;
