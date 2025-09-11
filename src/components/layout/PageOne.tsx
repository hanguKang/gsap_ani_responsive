import { useState } from 'react';
import { css } from '@emotion/react';
import { MainContentProps } from '../../types';
import { ContentsProps } from '../../types';
import Button from '../common/Button';
import { Modal } from '../Modal/Modal';
import BackDrop from '../BackDrop/BackDrop';

const PageOne :React.FC<ContentsProps> = function({title, children}){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = ()=>{
        setModalIsOpen(true);
    }
    const closeModal = ()=>{
        setModalIsOpen(false);
    }
    return(
        <>
            <div className='pageOne'>
                <h2>{title} 입니다.</h2>
                {children}
                
                <Button label="확인" size="medium" variant="primary" onClick={() => alert('확인')} />
                <Button label="취소" size="small" variant="secondary" disabled />
                <Button label="모달" size="large" variant='normal' onClick={openModal}>
                    <span>모달열기</span>
                </Button>
                <Modal show={modalIsOpen} isClose={closeModal} />
                modalIsOpen && <BackDrop show={modalIsOpen}/>
            
            </div>
        </>
    )
}

export default PageOne;