import React, {useState} from 'react'
import axios from 'axios'
import logo from './../../assets/placeholder_logo.png'
import {AuthContainer, Img, H1, P, Input, Button} from './AuthenticationStyles'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginEmployee = () => {
        axios.post('/auth/login', {email, password})
        .then(res => props.history.push('/tasks'))
    }

    return(
        <AuthContainer>
            <Img src={logo} alt='logo'/>
            <H1>Sign in</H1>
            <P>Sign in to start managing your tasks!</P>
            <div>
                <Input
                    value={email} 
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <Input
                    type='password'
                    value={password} 
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <Button onClick={loginEmployee}>Login</Button>
        </AuthContainer>
    )
}

export default Login;