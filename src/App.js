import React from 'react'
import {withRouter} from 'react-router-dom'
import './App.css'
import {RoutesContainer} from './AppStyles'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import routes from './routes'

function App(props) {
  return (
      <div className="App">
        {props.location.pathname === '/' || props.location.pathname === '/register'
        ? (<div>
            {routes}
          </div>)
        : (<div>
        <Header />
        <Menu />
        <RoutesContainer>
          {routes}
        </RoutesContainer>
        </div>)}
      </div>
  );
}

export default withRouter(App);
