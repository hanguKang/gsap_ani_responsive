import { css } from '@emotion/react';
import { MainContentProps } from '../../types';
import { ContensProps } from '../../types';
import Button from '../common/Button';


const PageOne :React.FC<ContensProps> = function({title, children}){


    return(
        <>
            <div className='pageOne'>
                <h2>{title} 입니다.</h2>
                {children}
                
                <Button label="확인" size="medium" variant="primary" onClick={() => alert('확인')} />
                <Button label="취소" size="small" variant="secondary" disabled />
            </div>
        </>
    )
}

export default PageOne;