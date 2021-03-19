import React, { useEffect, useState } from 'react';
import { ISheet } from '@interfaces/isheet';
import Sheet, { SheetRef } from 'react-modal-sheet';
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
  const [isMaxSnap, setIsMaxSnap] = useState<boolean>(false);
  const [showCustom, setShowCustom] = useState<boolean>(false);
  const ref = React.useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const contentClassName = 'react-modal-sheet-content';

  useEffect(() => {
    const content = show ? document.getElementsByClassName(contentClassName)[0] : null;
    content?.addEventListener('scroll', handleOnScroll);
    return () => content?.removeEventListener('scroll', handleOnScroll);
  });

  useEffect(() => {
    if (show && document) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }, [show]);

  const handleOnScroll = () => {
    const content = show ? document.getElementsByClassName(contentClassName)[0] : null;
    if (content?.scrollTop <= 0) {
      snapTo(initialSnap);
    }
  };

  const handleClose = () => {
    onClose && onClose();
  };

  const handleSnap = (index: number) => {
    onSnap && onSnap(index);

    if (show && index === 0) {
      setIsMaxSnap(true);
    } else {
      setIsMaxSnap(false);
    }
  };

  return (
    <>
      {customBackdrop && (
        <>
          <Mask show={showCustom} backgroundColor={backdropColor} />
          <Mask show={showCustom}>
            <Image src={pokeballImage} alt="sheets_header_background" width={300} height={300} />
          </Mask>
        </>
      )}
      <Sheet
        isOpen={show}
        onClose={handleClose}
        onCloseStart={() => setShowCustom(false)}
        onOpenStart={() => setShowCustom(true)}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        onSnap={handleSnap}
        ref={ref}
      >
        <SheetWrapper>
          <Sheet.Container>
            <Sheet.Header />
            {customHeader && <Sheet.Header>{customHeader}</Sheet.Header>}
            <Sheet.Content style={{ padding: 8, overflow: isMaxSnap ? 'scroll' : 'hidden' }}>
              {children}
            </Sheet.Content>
          </Sheet.Container>

          {customBackdrop ? showCustom ? customBackdrop : undefined : <Sheet.Backdrop />}
        </SheetWrapper>
      </Sheet>
    </>
  );
};

export default SheetModal;
