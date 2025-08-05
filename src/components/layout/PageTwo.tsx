import { css } from '@emotion/react';
import { MainContentProps } from '../../types';
import { ContensProps } from '../../types';

const PageTwo :React.FC<ContensProps> = function({title, children}){


    return(
        <>
            <div className='pageTwo'>
                <h2>{title} 입니다.</h2>
                <p>두 번째 페이지라구요~~!!!</p>
                {children}
            </div>
        </>
    )
}

export default PageTwo;