// src/App.tsx
import React from 'react';
import GlobalStyle from './styles/GlobalStyle'; // Styled Components의 GlobalStyle 임포트
import EnterpriseLayout from './components/layout/EnterpriseLayout';

function App() {
  

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
      <EnterpriseLayout>

      </EnterpriseLayout>
      <div style={{ padding: '2rem', minHeight: '150vh', backgroundColor: '#f0f4f8' }}>
        <h2>메인 콘텐츠 영역</h2>
        <p>여기에 웹사이트의 주요 내용이 들어갑니다.</p>
        <p>스크롤을 내려보세요!</p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>콘텐츠 {i + 1}</p>
        ))}
      </div>
    </>
  );
}

export default App;