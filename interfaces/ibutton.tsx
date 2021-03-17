export type IButtonColor = 'primary' | 'approval' | 'danger';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  color?: IButtonColor;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  outline?: boolean;
  flat?: boolean;
  block?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
}
