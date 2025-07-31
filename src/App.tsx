// src/App.tsx
import React from 'react';
import GlobalStyle from './styles/GlobalStyle'; // Styled Components의 GlobalStyle 임포트
import Header from './components/layout/Header'; // Header 컴포넌트 임포트
//import { NavigationItem, SearchProps } from './types'; // 필요한 타입 임포트
import { NavigationItem } from './types'; // 필요한 타입 임포트

function App() {
  // 내비게이션 아이템 데이터
  const navItems: NavigationItem[] = [
    { id: '1', label: 'HOME', href: '/' },
    { id: '2', label: 'ABOUT US', href: '/about' },
    { id: '3', label: 'PAGES', href: '/pages', children:[
      {id:'3-1', label: 'PAGES children1', href:'/pages/page1'},
      {id:'3-2', label: 'PAGES children2', href:'/pages/page2'},
      {id:'3-3', label: 'PAGES children3', href:'/pages/page3'},
    ]},
    { id: '4', label: 'FEATURES', href: '/features', children:[
      {id:'4-1', label:'FEATURES children1', href:'/featrues/page1'},
      {id:'4-2', label:'FEATURES children2', href:'/featrues/page2'},
      {id:'4-3', label:'FEATURES children3', href:'/featrues/page3'},
      {id:'4-4', label:'FEATURES children4', href:'/featrues/page4'},
    ] },
    { id: '5', label: 'PORTFOLIO', href: '/portfolio', children:[
      {id:'5-1', label:'PORTFOLIO children1', href:'/portfolio/page1'},
      {id:'5-2', label:'PORTFOLIO children2', href:'/portfolio/page2'},
      {id:'5-3', label:'PORTFOLIO children3', href:'/portfolio/page3'},
      {id:'5-4', label:'PORTFOLIO children4', href:'/portfolio/page4'},
      {id:'5-5', label:'PORTFOLIO children5', href:'/portfolio/page5'},
    ] },
    { id: '6', label: 'BLOG', href: '/blog', children:[
      {id:'6-1', label:'BLOG children1', href:'/blog/page1'},
      {id:'6-2', label:'BLOG children2', href:'/blog/page2'},
      {id:'6-3', label:'BLOG children3', href:'/blog/page3'},
    ] },
    { id: '7', label: 'SHOP', href: '/shop', children:[
      {id:'7-1', label:'SHOP children1', href:'/shop/page1'},
      {id:'7-2', label:'SHOP children2', href:'/shop/page2'},
    ] },
    { id: '8', label: 'CONTACT US', href: '/contact' },
  ];

  // 검색 Props 데이터 (더미 함수)
  // const searchProps: SearchProps = {
  //   onSearch: (query, filters) => {
  //     console.log('검색 실행:', query, filters);
  //     // 실제 검색 로직 구현
  //   },
  //   onClear: () => {
  //     console.log('검색 초기화');
  //     // 실제 초기화 로직 구현
  //   },
  //   placeholder: '검색어를 입력하세요...',
  //   showFilters: true,
  // };

  return (
    <>
      <GlobalStyle />
      {/* <Header navigationItems={navItems} searchProps={searchProps} /> */}
      <Header navigationItems={navItems} />
      <main style={{ padding: '2rem', minHeight: '150vh', backgroundColor: '#f0f4f8' }}>
        <h2>메인 콘텐츠 영역</h2>
        <p>여기에 웹사이트의 주요 내용이 들어갑니다.</p>
        <p>스크롤을 내려보세요!</p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>콘텐츠 {i + 1}</p>
        ))}
      </main>
      <footer style={{ padding: '2rem', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>푸터 영역</p>
      </footer>
    </>
  );
}

export default App;