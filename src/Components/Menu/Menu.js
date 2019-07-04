import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
import {MenuContainer, Img, P} from './MenuStyles'
import logo from './../../assets/placeholder_logo.png'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faCommentAlt, faTasks, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faUsers, faCommentAlt, faTasks, faCalendarAlt)

const Menu = () => {
    return(
        <MenuContainer>
            <Img src={logo} alt='logo'/>
            <Link to='/teams' className='menu-links'>
                <FontAwesomeIcon icon='users' className='icons'/>
                <P>Teams</P>
            </Link>
            <Link to='/messages' className='menu-links'>
                <FontAwesomeIcon icon='comment-alt' className='icons'/>
                <P>Messages</P>
            </Link>
            <Link to='/tasks' className='menu-links'>
                <FontAwesomeIcon icon='tasks' className='icons'/>
                <P>Tasks</P>
            </Link>
            <Link to='/schedule' className='menu-links'>
                <FontAwesomeIcon icon='calendar-alt' className='icons'/>
                <P>Schedule</P>
            </Link>
        </MenuContainer>
    )
}

export default Menu;