import { css, useTheme } from '@emotion/react';
import { HeaderProps, NavigationItem } from '@/types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../common/Button';
import Icon from '../common/Icon';
import { useRouteStore, Route } from '@/store/routeStore';



const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
    // GSAP 플러그인 등록 (앱 초기 로드 시 한 번만 실행)
    gsap.registerPlugin(ScrollTrigger);
    const theme = useTheme(); // Emotion 테마에 접근

  // 사이드바 전체 스타일
  let width_wide='1280px';

  const display_flex = ()=>`display:flex;  justify-content:space-between; align-items:end;`;

  const headerStyle = css`
    position:relative;
    width: 100%;
    background-color: transparent;
    
    &.fixed {
        position: fixed;
        background-color: rgba(0,0,0,.1);
    }
    .top_inner {
        margin: 0 auto;
        padding: 30px 0 6px 0;
        width: ${width_wide};
        box-sizing: border-box;

        header{
            ${display_flex()}
            width:100%;

            .logo{ height:40px;
                a{
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }
  `;

  const navStyle = css`
    .gnbBox{
        display:flex; 
        justify-content:space-around;
        .depth1 {
            &>a {
                display: block;
                padding: 0 25px;
                line-height: 40px;
                text-transform: uppercase;
                font-size: 0.875em;
                font-weight: 400;
                color: #000;
            }
            &>a:hover,
            &.active>a{
                color: #e5493a;
            }
        }
    }`;
    const gnbBox_outer = css`
        display:none;
        position:absolute;
        left:0; top:76px;
        width:100%;  
        background-color:#fff;
        box-shadow:inset 0 -1px 0 #a1a1a1;
        .depth2_wrapper{
            margin:0 auto; 
            ${display_flex()}
            width:${width_wide};
            &:before{
                display:block;
                content:"";
                width:134px; height:40px;
            }
            .gnbBox2{
                padding-bottom:12px;
                width:830px; 
                display:flex;  
                li{
                    a{
                        display:block;
                        padding:4px 16px;
                    }
                }
            }
        }
    }`;

    const handleMenu = ()=>{
        alert('메뉴열림~!!');
    }

    const setPage = useRouteStore((state)=> state.setPage)
    const handleNavClick = (routeType?:string) => {
        if(routeType){
            setPage(routeType as Route);
        }
    }
    return (
        <>
        <div className="top" css={headerStyle}>
            <div className="top_inner">
                <header>
                    <h1 className='logo'><a href="./"><img src="/images/common/logo_blue.png" alt="swing 로고"/></a></h1>
                    <nav id="gnb" css={navStyle}>
                        <h1 className="sr-only">페이지 목록</h1>
                        <ul className='gnbBox'>
                            {/* <li className="depth1"><a href="#area1">HOME</a></li>
                            <li className="depth1"><a href="#area2">ABOUT US</a></li>
                            <li className="depth1"><a href="#area3">PAGES</a>
                                <div className="depth2_outer" css={gnbBox_outer}>
                                    <div className="depth2_wrapper">
                                        <ul className="gnbBox2">
                                            <li className="depth2"><a href="#none">PAGES children1</a></li>
                                            <li className="depth2"><a href="#none">PAGES children2</a></li>
                                            <li className="depth2"><a href="#none">PAGES children3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="depth1"><a href="#area4">FEATURES</a>
                                <div className="depth2_outer" css={gnbBox_outer}>
                                    <div className="depth2_wrapper">                                        
                                        <ul className="gnbBox2">
                                            <li className="depth2"><a href="#none">FEATURES children1</a></li>
                                            <li className="depth2"><a href="#none">FEATURES children2</a></li>
                                            <li className="depth2"><a href="#none">FEATURES children3</a></li>
                                            <li className="depth2"><a href="#none">FEATURES children4</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="depth1"><a href="#area5">PORTFOLIO</a>
                                <div className="depth2_outer" css={gnbBox_outer}>
                                    <div className="depth2_wrapper">
                                        <ul className="gnbBox2">
                                            <li className="depth2"><a href="#none">PORTFOLIO children1</a></li>
                                            <li className="depth2"><a href="#none">PORTFOLIO children2</a></li>
                                            <li className="depth2"><a href="#none">PORTFOLIO children3</a></li>
                                            <li className="depth2"><a href="#none">PORTFOLIO children4</a></li>
                                            <li className="depth2"><a href="#none">PORTFOLIO children5</a></li>
                                        </ul>    
                                    </div>
                                </div>

                            </li>
                            <li className="depth1"><a href="#area6">BLOG</a>
                                <div className="depth2_outer" css={gnbBox_outer}>
                                    <div className="depth2_wrapper">         
                                        <ul className="gnbBox2">
                                            <li className="depth2"><a href="#none">BLOG children1</a></li>
                                            <li className="depth2"><a href="#none">BLOG children2</a></li>
                                            <li className="depth2"><a href="#none">BLOG children3</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </li>
                            <li className="depth1"><a href="#area7">SHOP</a>
                                <div className="depth2_outer" css={gnbBox_outer}>
                                    <div className="depth2_wrapper">        
                                        <ul className="gnbBox2">
                                            <li className="depth2"><a href="#none">SHOP children1</a></li>
                                            <li className="depth2"><a href="#none">SHOP children2</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </li>
                            <li className="depth1"><a href="#area8">CONTACT US</a></li> */}
                            {navigationItems.map((depth1Item:NavigationItem) => (
                                <li key={depth1Item.id} className="depth1">
                                <a href={depth1Item.href || '#none'} onClick={(e)=>{e.preventDefault(); handleNavClick(depth1Item?.routeType);}}>{depth1Item.label}</a>
                                {depth1Item.children && depth1Item.children.length > 0 && (
                                    <div className="depth2_outer" css={gnbBox_outer}>
                                    <div className="depth2_wrapper">
                                        <ul className="gnbBox2">
                                        {depth1Item.children.map((depth2Item) => (
                                            <li key={depth2Item.id} className="depth2">
                                            <a href={depth2Item.href || '#none'}>{depth2Item.label}</a>
                                            </li>
                                        ))}
                                        </ul>
                                    </div>
                                    </div>
                                )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button label="햄버거메뉴" size="small" variant="primary" onClick={handleMenu}>
                        <Icon id="nav" type="menu" size="small" label="햄버거 메뉴" isActive={true}></Icon>
                    </Button>
                </header>
            </div>
        </div>
        </>
    );
}

export default Header;