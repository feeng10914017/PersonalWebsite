import React, { useEffect } from 'react'
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
  //skillsBar animate
  useEffect(() => {
    const el = document.querySelectorAll('div.hSkill-box span.bar')
    const delayAnimate = (index, data, frequency, interval) => {
      setTimeout(() => {
        for (let j = 0; j < frequency; j++) {
          const step = j + 1
          const millisecond = 1000 / frequency
          delayAnimate2(index, data, frequency, step, millisecond)
        }
      }, index * interval)
    }
    const delayAnimate2 = (index, data, frequency, step, millisecond) => {
      const blockWidth = (data * step) / frequency
      setTimeout(() => {
        el[index].style.width = blockWidth + '%'
        el[index].firstElementChild.innerHTML = Math.round(blockWidth) + '%'
      }, step * millisecond)
    }
    for (let i = 0; i < el.length; i++) {
      const data = Number(el[i].parentElement.getAttribute('data-percent'))
      delayAnimate(i, data, 70, 350)
    }
  }, [])
  return (
    <>
      <div className="hTitle d-none d-lg-block d-xl-block">
        <h1 className="hTitle1">welcome to syuan en's portfolio</h1>
        <h1 className="hTitle2">frontend engineer</h1>
      </div>
      <div className="hMain">
        {/* Introduction */}
        <Container className="hintro">
          <Row className="mb-3">
            <Col xs={12} lg={{ span: 7, offset: 5 }}>
              <Image
                src="./images/Home/S__20652133.jpg"
                rounded="true"
                className="hIntroPhoto"
              />
            </Col>
          </Row>
          <Card className="hIntroContent bg-text p-4">
            <Card.Body className="mx-auto">
              <Card.Title className="hIntroTitle1 mb-0">
                Introduction
              </Card.Title>
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
        {/* skiils Box */}
        <Jumbotron className="bgYe">
          <Container className="bgYeSquare">
            {/* skiils Box title */}
            <div className="bgYeTitle mb-5">
              <Card.Title className="bgYeTitle1 mb-0">skills</Card.Title>
              <Card.Title className="bgYeTitle2 mb-0">技能與專長</Card.Title>
            </div>
            {/* skiils Box content */}
            <Row>
              <Col lg={6} md={12}>
                <div className="hSkill-box">
                  <h3>Programming Language</h3>
                  <div className="hSkillsList">
                    <ul>
                      <li data-percent="80">
                        <span>HTML & CSS</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="45">
                        <span>HTML5</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="60">
                        <span>CSS3</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="70">
                        <span>JavaScript</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="75">
                        <span>jQuery</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="40">
                        <span>PHP</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="hSkill-box">
                  <h3>Framework</h3>
                  <div className="hSkillsList">
                    <ul>
                      <li data-percent="70">
                        <span>Bootstrap</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="45">
                        <span>ReactJS</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                      <li data-percent="35">
                        <span>NodeJS</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hSkill-box">
                  <h3>Database</h3>
                  <div className="hSkillsList">
                    <ul>
                      <li data-percent="35">
                        <span>MySQL</span>
                        <span className="bar">
                          <b></b>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    </>
  )
}

export default Home
