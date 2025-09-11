import React from 'react';
import './Modal.css';
import { Transition, TransitionStatus } from 'react-transition-group';

const animationTiming = {
  enter: 400,
  exit: 1000,
};

export const Modal = (prop:{show:boolean, isClose:()=>void})=>{
    return (
        <Transition in={prop.show} timeout={animationTiming} mountOnEnter unmountOnExit>
            {(state:  TransitionStatus )=>{
                const classNames = ['Modal', state === 'entering'?'ModalOpen': state === 'exiting'?'ModalClosed': null]
                return (<div className={classNames.join(' ')}>
                    <h1>모달</h1>
                    <button onClick={prop.isClose}> 닫기 </button>
                </div>)
            }}
        </Transition>
    )
}