import React, { useState, useEffect } from 'react'
import { Jumbotron, Container, Card, Row, Col, Button } from 'react-bootstrap'

function About(props) {
  return (
    <>
      <article className="aArticle">
        <Jumbotron className="bgYe">
          <Container>
            <Col
              lg={{ span: 8, offset: 2 }}
              md={{ span: 10, offset: 1 }}
              className="bgYeSquare"
            >
              <div className="bgYeTitle mb-3">
                <Card.Title className="bgYeTitle1 mb-0">about me</Card.Title>
                {/* <Card.Title className="bgYeTitle2 mb-0">應用練習</Card.Title> */}
              </div>
              <h3 className="bgYeTitle2 mb-3">學歷</h3>
              <ul>
                <li>
                  <Row>
                    <Col xl={9} lg={10} md={11} sm={12}>
                      <Row>
                        <Col xl={5} lg={6} md={6} sm={12}>
                          <h5>國立台北商業大學</h5>
                        </Col>
                        <Col>
                          <h6>資訊管理系（假日班）</h6>
                        </Col>
                      </Row>
                    </Col>
                    <Col xl={3} lg={12}>
                      <p>09/2020 - 05/2022</p>
                    </Col>
                  </Row>
                </li>
              </ul>
              <h3 className="bgYeTitle2 mb-3">專業訓練</h3>
              <ul>
                <li>
                  <Row>
                    <Col>
                      <h5>前端工程師就業養成班</h5>
                      <h6>
                        財團法人資訊工業策進會 <br />
                        數位教育研究所 中壢教育中心
                      </h6>
                    </Col>
                    <Col xl={3} lg={12}>
                      <p>09/2020 - 01/2021</p>
                    </Col>
                  </Row>
                </li>
              </ul>
              <h3 className="bgYeTitle2 mb-3">經歷</h3>
              <ul>
                <li>
                  <Row>
                    <Col xl={4} lg={12}>
                      <h5>線上文字客服專員</h5>
                    </Col>
                    <Col>
                      <Row>
                        <Col md={7} sm={7} xs={12}>
                          <h6>颢玥數位科技有限公司</h6>
                        </Col>
                        <Col>
                          <p>01/2020 - 05/2020</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col xl={4} lg={12}>
                      <h5>電話客服專員</h5>
                    </Col>
                    <Col>
                      <Row>
                        <Col md={7} sm={7} xs={12}>
                          <h6>中嘉數位股份有限公司</h6>
                        </Col>
                        <Col>
                          <p>12/2018 - 12/2019</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </li>
                <li>
                  <Row>
                    <Col xl={4} lg={12}>
                      <h5>服務行銷專員</h5>
                    </Col>
                    <Col>
                      <Row>
                        <Col md={7} sm={7} xs={12}>
                          <h6>富邦人壽保險股份有限公司</h6>
                        </Col>
                        <Col>
                          <p>12/2016 - 03/2018</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </li>
              </ul>
            </Col>
          </Container>
        </Jumbotron>
      </article>
    </>
  )
}

export default About
