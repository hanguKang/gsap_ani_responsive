export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'normal';

export interface ButtonProps {
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}