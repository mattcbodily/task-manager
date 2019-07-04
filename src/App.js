import React from 'react'
import './App.css'
import {RoutesContainer} from './AppStyles'
import {HashRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Menu />
        <RoutesContainer>
          {routes}
        </RoutesContainer>
      </div>
    </HashRouter>
  );
}

export default App;
