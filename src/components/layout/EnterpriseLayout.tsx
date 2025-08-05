import { css } from '@emotion/react';
import { useState } from 'react';
import Header from './Header'; // Header 컴포넌트 임포트
//import { NavigationItem, SearchProps } from './types'; // 필요한 타입 임포트
import { NavigationItem } from '../../types'; // 필요한 타입 임포트
import MainContent from './MainContent';
import Footer from './Footer';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import AnimatedList from '../ui/AnimatedList';
import SwiperList from '../ui/Swiper';
import { useRouteStore } from '@/store/routeStore';


interface EnterpriseLayoutProps {
  children?: React.ReactNode;
}

const EnterpriseLayout: React.FC<EnterpriseLayoutProps> = ({ children }) => {


    const { currentPage } = useRouteStore();

    const renderPage = () => {
        switch (currentPage) {
            case 'pageOne':
                return (
                <PageOne title="첫번재 페이지">
                    <div className='contents'></div>
                </PageOne>);
            case 'pageTwo':
                return ( 
                <PageTwo title="두번째 페이지">
                    <div className='contents'></div>
                </PageTwo>);
            case 'main':
            default:
            return (
            <MainContent title="Main Contents Start!!">
                <div
                css={css`
                    padding: 20px;
                    color: #666;
                    text-align: center;
                    font-size: 16px;
                `}
                >
                <AnimatedList />
                <SwiperList />
                </div>
            </MainContent>
            );
        }
    };


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

  
    return (
        <>
            <Header navigationItems={navItems}></Header>
            <main>
                {renderPage()}
            </main>
            
            <Footer title="마무리 내용"></Footer>
        </>
    )
};

export default EnterpriseLayout;