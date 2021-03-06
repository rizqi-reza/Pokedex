export interface IModal extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  title?: any;
  onClose: () => void;
}

export interface ISubModal {
  Body: React.FC<IModalBody>;
  Footer: React.FC;
}

export interface IModalWrapper {
  show?: boolean;
  backgroundColor?: string;
  zIndex?: number;
}

export interface IModalBody {
  withOutFooter?: boolean;
  maxHeight?: boolean;
  fullHeight?: boolean;
}
