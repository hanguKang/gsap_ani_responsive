import React from 'react';

import './Backdrop.css';

const BackDrop = (props:{show:boolean}) => {
  const cssClass = [
    'Backdrop',
    props.show ? 'BackdropOpen' : 'BackdropClosed',
  ];
  return <div className={cssClass.join(' ')}></div>;
};

export default BackDrop;
