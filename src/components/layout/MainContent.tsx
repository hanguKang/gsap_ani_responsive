import { css } from '@emotion/react';
import { MainContentProps } from '../../types';



const MainContent: React.FC<MainContentProps> = ({ title, children }) => {



    return (
        <>
            <div className='main'>
                <h2>{title}</h2>
                {children}
            </div>
           
        </>
    );
};

export default MainContent;