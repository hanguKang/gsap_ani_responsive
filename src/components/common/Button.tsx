
import { css } from '@emotion/react';
import { ButtonProps } from '@/types/button';

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
  children,
}) => {

  return (
    <button css={buttonStyle(size, variant, disabled)} onClick={onClick} disabled={disabled}>
      {children?children:label}
    </button>
  );
};

export default Button;

// 스타일 함수
const buttonStyle = (size:string, variant:string, disabled:boolean) => css`
  padding: ${size === 'small' ? '6px 12px' : size === 'large' ? '12px 24px' : '10px 20px'};
  font-size: ${size === 'small' ? '12px' : size === 'large' ? '16px' : '14px'};
  background-color: ${variant === 'primary' ? '#007BFF' : '#6C757D'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  opacity: ${disabled ? 0.5 : 1};

  &:hover {
    background-color: ${variant === 'primary' ? '#0056b3' : '#5a6268'};
  }
`;
