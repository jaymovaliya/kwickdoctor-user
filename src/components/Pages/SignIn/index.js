import React, { memo } from 'react';
import { AuthLayout } from '../../Layouts';
import { Title, Button } from '../../Core-UI';


import './styles.scss';

function SignIn(props){
  return (
    <AuthLayout>
    	<Title>{'Sign In'}</Title>
    	<Button>{'Continue'}</Button>
    </AuthLayout>
  );
}

export default memo(SignIn);