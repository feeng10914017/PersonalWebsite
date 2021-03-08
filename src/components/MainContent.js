import React from 'react'
import { withRouter } from 'react-router-dom'
import MyFooter from './MyFooter'

function MainContent(props) {
  const { location } = props
  const display = (
    <>
      <main className="container mainContentBg">{props.children}</main>
    </>
  )
  const noneContainer = (
    <>
      <main className="mainContentBg">{props.children}</main>
    </>
  )
  return (
    <>
      {location.pathname === '/'
        ? noneContainer
        : location.pathname === '/exercise'
        ? noneContainer
        : location.pathname === '/about'
        ? noneContainer
        : display}
      <MyFooter />
    </>
  )
}

export default withRouter(MainContent)
