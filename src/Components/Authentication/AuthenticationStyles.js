import styled from 'styled-components'

export const AuthContainer = styled.div`
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    padding-top: 100px;
    background-color: #232729;
`

export const Img = styled.img`
    height: 100px;
`

export const H1 = styled.h1`
    margin: 10px 0px;
    font-size: 45px;
    font-weight: 300;
    color: white;
`

export const P = styled.p`
    margin: 25px 0px 30px 0px;
    font-size: 17px;
    font-weigth: 300;
    color: white;
`

export const Input = styled.input`
    &::placeholder{
        color: white;
    }
    height: 40px;
    width: 260px;
    padding-left: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 12px;
    background-color: #6C787D;
    font-size: 18px;
    font-weight: 400;
    color: white;
    outline: none;
`

export const CheckBox = styled.input`

`

export const Span = styled.span`
    font-size: 17px;
    font-weight: 300;
    color: white;
`

export const Button = styled.button`
    height: 40px;
    width: 273px;
    border: none;
    border-radius: 12px;
    background-color: #51E800;
    font-size: 18px;
    font-weight: 400;
    color: white;
`