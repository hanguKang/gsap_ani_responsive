/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { AppIconProps } from '@/types/icon';

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
};

const Icon: React.FC<AppIconProps> = ({
  type = 'home',
  size = 'medium',
  icon,
  label,
  isActive,
  customContent,
}) => {
  const dimension = sizeMap[size];

  return (
    <div
      css={css`
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: ${isActive ? '#333': '#0070f3'};
        background-color: ${isActive ? 'rgba(200,200,240,1)': 'rgba(180,180,100,1)'};
        font-size: 12px;
        &:hover{
          color: ${isActive ? '#fff': '#0070f3'};
        }
      `}
    >
      <img
        src={`/images/common/ico/${icon || type}-${size}.png`}
        alt={label || `${type} icon`}
        css={css`
          width: ${dimension}px;
          height: ${dimension}px;
          margin-bottom: 4px;
        `}
      />
      {label && <span>{label}</span>}
      {customContent && <div dangerouslySetInnerHTML={{ __html: customContent }} />}
    </div>
  );
};

export default Icon;
