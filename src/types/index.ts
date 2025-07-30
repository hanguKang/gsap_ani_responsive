export interface NavigationItem {
  id: string;
  label: string;
  isActive?: boolean;
  href?: string; // 링크를 위한 href 속성 추가
}

export interface HeaderProps {
  navigationItems: NavigationItem[];
}