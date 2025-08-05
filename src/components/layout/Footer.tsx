import { css, useTheme } from '@emotion/react';
import { FooterProps } from '@/types';

const Footer : React.FC<FooterProps>=({title})=>{
    return (
        <>
            <footer>
                <h2>{title}</h2>
                <address>
                    <p>주소</p>
                    <p>전화번호</p>
                </address>
            </footer>
        </>
    )
}

export default Footer;