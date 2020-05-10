import React, { memo } from 'react';

import './styles.scss';

function Title(props){
  const { children } = props;

  return (
    <h1 className='title'>
      {children}
    </h1>
  );
}

export default memo(Title);