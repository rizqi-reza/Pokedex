export interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur' | 'size'> {
  invalid?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  disabled?: boolean;
  loading?: boolean;
  message?: string;
}

export interface IInputWrapper {
  size?: 'sm' | 'md' | 'lg';
  invalid?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}
