export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  block?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
}
