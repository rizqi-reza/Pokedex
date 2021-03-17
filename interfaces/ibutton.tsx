export type IButtonColor = 'primary' | 'danger';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  color?: IButtonColor;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  block?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
}
