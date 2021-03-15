export interface ISheet {
  show: boolean;
  snapPoints: number[];
  initialSnap?: number;
  backdropColor: string;
  customBackdrop?: any;
  onClose?: () => void;
  onSnap?: (index: number) => void;
}
