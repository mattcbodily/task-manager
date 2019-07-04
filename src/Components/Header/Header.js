import React from 'react'
import './Header.css'
import {HeaderContainer, Img, Span} from './HeaderStyles'
import logo from './../../assets/placeholder_logo.png'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)

const Header = () => {
    return(
        <HeaderContainer>
            <Span>Welcome, User</Span>
            <Img src={logo} alt='user'/>
            <Span>My account</Span>
            <FontAwesomeIcon icon='chevron-down' className='icon'/>
        </HeaderContainer>
    )
}

export default Header;