import React, {useState} from 'react'
import axios from 'axios'
import logo from './../../assets/placeholder_logo.png'
import {AuthContainer, Img, H1, P, Input, CheckBox, Span, Button} from './AuthenticationStyles'

const Register = (props) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verPassword, setVerPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const isAdminToggle = () => {
        setIsAdmin(!isAdmin)
    }

    const registerEmployee = () => {
        if(password === verPassword){
            console.log(fullName)
            axios.post('/auth/register', {fullName, email, password, isAdmin})
            .then(res => props.history.push('/tasks'))
        } else {
            alert(`Passwords don't match`)
        }
    }

    return(
        <AuthContainer>
            <Img src={logo} alt='logo'/>
            <H1>Register</H1>
            <P>Create your account to start managing tasks</P>
            <div>
                <Input
                    value={fullName} 
                    placeholder='Full Name'
                    onChange={e => setFullName(e.target.value)}/>
            </div>
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
            <div>
                <Input
                    type='password'
                    value={verPassword}
                    placeholder='Verify Password'
                    onChange={e => setVerPassword(e.target.value)}/>
            </div>
            <div>
                <CheckBox 
                   type='checkbox'
                   onChange={isAdminToggle}/>
                <Span>Register as an Admin</Span>
            </div>
            <Button onClick={registerEmployee}>Register</Button>
        </AuthContainer>
    )
}

export default Register;