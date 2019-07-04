import React from 'react'
import logo from './../../assets/placeholder_logo.png'
import {AuthContainer, Img, H1, P, Input, Button} from './AuthenticationStyles'

const Login = () => {
    return(
        <AuthContainer>
            <Img src={logo} alt='logo'/>
            <H1>Sign in</H1>
            <P>Sign in to start managing your tasks!</P>
            <div>
                <Input 
                    placeholder='Email'/>
            </div>
            <div>
                <Input 
                    placeholder='Password'/>
            </div>
            <Button>Login</Button>
        </AuthContainer>
    )
}

export default Login;