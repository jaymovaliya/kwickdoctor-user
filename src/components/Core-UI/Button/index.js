import React, { memo } from 'react';

import './styles.scss';

function Button(props){
  const { children } = props;

  return (
    <div className='button'>
      {children}
    </div>
  );
}

export default memo(Button);