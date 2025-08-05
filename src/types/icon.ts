export type IconType = 'home' | 'user' | 'more' | 'menu';
export type IconSize = 'small' | 'medium' | 'large';

export interface AppIconData {
  id: string;
  icon?: string;
  label: string;
  isActive?: boolean;
  customContent?: string;
}

export interface AppIconProps extends AppIconData {
  size?: IconSize;
  type?: IconType;
}