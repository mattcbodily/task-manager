import React from 'react'
import './Menu.css'
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
            <FontAwesomeIcon icon='users' className='icons'/>
            <P>Teams</P>
            <FontAwesomeIcon icon='comment-alt' className='icons'/>
            <P>Messages</P>
            <FontAwesomeIcon icon='tasks' className='icons'/>
            <P>Tasks</P>
            <FontAwesomeIcon icon='calendar-alt' className='icons'/>
            <P>Schedule</P>
        </MenuContainer>
    )
}

export default Menu;