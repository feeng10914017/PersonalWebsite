import React from 'react'
import { withRouter } from 'react-router-dom'
// import { Parallax } from 'react-parallax'
import MyFooter from './MyFooter'
function MainContent(props) {
  const { location } = props
  // const bgimg = 'http://localhost:3000/images/Home/kafeise-007.jpg'
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
      {/* <Parallax bgImage={bgimg} strength={1000} style={{ 'z-index': -99 }}> */}
      {location.pathname === '/'
        ? noneContainer
        : location.pathname === '/exercise'
        ? noneContainer
        : location.pathname === '/about'
        ? noneContainer
        : display}
      <MyFooter />
      {/* </Parallax> */}
    </>
  )
}

export default withRouter(MainContent)
