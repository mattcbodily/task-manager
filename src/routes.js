import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import Messages from './Components/Messages/Messages'
import Schedule from './Components/Schedule/Schedule'
import Tasks from './Components/Tasks/Tasks'
import Teams from './Components/Teams/Teams'

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/messages' component={Messages}/>
        <Route path='/schedule' component={Schedule}/>
        <Route path='/tasks' component={Tasks}/>
        <Route path='/teams' component={Teams}/>
    </Switch>
)