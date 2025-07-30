import { css } from '@emotion/react';
import { HeaderProps } from '../../types';


const Header: React.FC<HeaderProps> = ({ navigationItems }) => {

    return (
        <>
            <header>
                <h1><a href="./"><img src="/images/common/logo_blue.png" alt="swing 로고"/></a></h1>
            </header>
        </>
    );
}

export default Header;