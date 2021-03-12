export interface IModal extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  title?: any;
  info?: any;
  as?: 'modal' | 'drawer';
  onClose: () => void;
}

export interface IModalWrapper {
  show?: boolean;
  backgroundColor?: string;
}

export interface ISubModal {
  Body: React.FC<IModalBody>;
  Footer: React.FC;
  Image: React.FC;
}

export interface IModalHeader {
  show?: boolean;
  variant?: 'light' | 'dark';
}

export interface IModalBody {
  withOutFooter?: boolean;
  maxHeight?: boolean;
  fullHeight?: boolean;
}
