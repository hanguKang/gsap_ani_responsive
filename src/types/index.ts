export interface NavigationItem {
  id: string;
  label: string;
  isActive?: boolean;
  href?: string; // 링크를 위한 href 속성 추가
  children?: NavigationItem[]; // <-- 이 부분이 핵심입니다. NavigationItem 타입의 배열
}

export interface HeaderProps {
  navigationItems: NavigationItem[];
}

export interface MainContentProps {
  title: string;
  children: React.ReactNode;
}

export interface ContensProps extends MainContentProps{

}

export interface FooterProps {
  title: string
}
