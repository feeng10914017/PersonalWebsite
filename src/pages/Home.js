import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Image,
  Col,
  Jumbotron,
  Card,
  Button,
} from 'react-bootstrap'
import { FiMail, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom'
function Home(props) {
  return (
    <>
      <div className="hTitle d-none d-lg-block d-xl-block">
        <h1 className="hTitle1">welcome to syuan en's portfolio</h1>
        <h1 className="hTitle2">frontend engineer</h1>
      </div>
      <div className="hMain">
        <Container className="hintro">
          <Row className="mb-3">
            <Col xs={12} lg={{ span: 7, offset: 5 }}>
              <Image
                src="http://localhost:3000/images/Home/S__20652133.jpg"
                rounded
                className="hIntroPhoto"
              />
            </Col>
          </Row>
          <Card className="hIntroContent bg-text p-4">
            <Card.Body className="mx-auto">
              <Card.Title className="hIntroTitle1 mb-0">about me</Card.Title>
              <Card.Title className="hIntroTitle2 mb-4">
                我是吳暄恩！
              </Card.Title>
              <Card.Text className="hIntroText">
                歡迎來到我的個人網站！2020/09參加資策會前端工程師養成班(
                2020/09/16 - 2021/01/29 )，共582小時
                。對於前端技術及網頁設計充滿熱忱，亦了解基礎後端技術，在資策會學習期間，製作的兩個專案中皆擔任技術長的職務。
              </Card.Text>
              <div className="hIntroContact">
                <Col xs={12} md={6}>
                  <Row>
                    <FiMail />
                    <p>feeng10914017@gmail.com</p>
                  </Row>
                </Col>
                <Col xs={12} md={6}>
                  <Row>
                    <FiPhone />
                    <p> 0972 - 103583</p>
                  </Row>
                </Col>
              </div>
              <div className="hIntroButton d-flex justify-content-center">
                <Link to="/about">
                  <Button variant="dark" size="xl">
                    了解更多
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Container>
        <Jumbotron className="hSkills">
          <Container>
            <Card body rounded className="hSkillsSquare">
              <div className="hSkillTitle mb-4">
                <Card.Title className="hSkillsTitle1 mb-0">skills</Card.Title>
                <Card.Title className="hSkillsTitle2 mb-0">
                  技能與專長
                </Card.Title>
              </div>
              <Row>
                <Col lg={4} md={6} sm={12}>
                  <Card.Text>
                    <h4>HTML / CSS</h4>
                    <hr />
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3 </li>
                      <li>CSS Framework - Bootstrap</li>
                      <li>CSS Preprocessor - SCSS</li>
                      <li>響應是網頁設計 ( RWD )</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card.Text>
                    <h4>JavaScript</h4>
                    <hr />
                    <ul>
                      <li>JavaScript ES6</li>
                      <li>jQuery</li>
                      <li>XHR / Ajax / Fetch</li>
                      <li>callback / Promise / Async</li>
                      <li>HTML5 JS API (SVG / location)</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card.Text>
                    <h4>Others</h4>
                    <hr />
                    <ul>
                      <li>npm / yarn 指令</li>
                      <li>Git / Github 指令</li>
                      <li>Postman 測試 API</li>
                      <li>JSON Server 模擬 restful API</li>
                      <li>Webpack / Bable 自動打包</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card.Text>
                    <h4>React</h4>
                    <hr />
                    <ul>
                      <li>React Hooks</li>
                      <li>React Router</li>
                      <li>React Lifecycle</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card.Text>
                    <h4>Backend</h4>
                    <hr />
                    <ul>
                      <li>PHP</li>
                      <li>Node.js express</li>
                      <li>MySQL CRUD</li>
                    </ul>
                  </Card.Text>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card.Text>
                    <h4>Design</h4>
                    <hr />
                    <ul>
                      <li>Adobe Photoshop</li>
                      <li>Adobe Illustrator</li>
                      <li>Adobe XD</li>
                    </ul>
                  </Card.Text>
                </Col>
              </Row>
            </Card>
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export default Home
