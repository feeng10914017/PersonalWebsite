import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//排版用元件
import MyNavbar from './components/MyNavbar'
import MainContent from './components/MainContent'

//頁面元件
import Home from './pages/Home'
import About from './pages/About'
import Exercise from './pages/Exercise'
import Portfolio from './pages/Portfolio'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/exercise">
              <Exercise />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
      </Router>
    </>
  )
}

export default App
