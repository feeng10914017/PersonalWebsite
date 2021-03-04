import React, { useState, useEffect } from 'react'
import { Jumbotron, Container, Card, Row, Col, Button } from 'react-bootstrap'
function Exercise(props) {
  return (
    <>
      <article className="eArticle">
        {/* practice */}
        <Jumbotron className="bgYe">
          <Container className="bgYeSquare">
            <div className="bgYeTitle mb-5">
              <Card.Title className="bgYeTitle1 mb-0">practice</Card.Title>
              {/* <Card.Title className="bgYeTitle2 mb-0">應用練習</Card.Title> */}
            </div>
            <Row className="eCard">
              <Col xl={3} md={6} xs={12}>
                <Card border="primary" className="text-center">
                  <Card.Img
                    variant="bottom"
                    src="http://localhost:3000/images/Exercise/hairmap.png"
                  />
                  <Card.Body>
                    <Card.Title>髮廊首頁實作</Card.Title>
                    <Card.Text>
                      使用HTML與CCS的flex來排版製作RWD響應是網站。
                    </Card.Text>
                    <Button
                      variant="primary"
                      target="_blank"
                      href="https://feeng10914017.github.io/Portfolios/flex_RWD/layout.html"
                    >
                      前往頁面
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} md={6} xs={12}>
                <Card border="primary" className="text-center">
                  <Card.Img
                    variant="bottom"
                    src="http://localhost:3000/images/Exercise/library.png"
                  />
                  <Card.Body>
                    <Card.Title>博物館圖書資訊實作</Card.Title>
                    <Card.Text>
                      使用Bootstrap來排版製作RWD響應是網站。
                    </Card.Text>
                    <Button
                      variant="primary"
                      target="_blank"
                      href="https://feeng10914017.github.io/Portfolios/Bootstrap_RWD/boostrap.html"
                    >
                      前往頁面
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} md={6} xs={12}>
                <Card border="primary" className="text-center">
                  <Card.Img
                    variant="bottom"
                    src="http://localhost:3000/images/Exercise/flipCard.png"
                  />
                  <Card.Body>
                    <Card.Title>翻牌小遊戲實作</Card.Title>
                    <Card.Text>
                      從隨機洗牌，到記住與判斷卡片是否相同等功能皆是使用jQuery製作。
                    </Card.Text>
                    <Button
                      variant="primary"
                      target="_blank"
                      href="https://feeng10914017.github.io/Portfolios/flip-card/flip-card.html"
                    >
                      前往頁面
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={3} md={6} xs={12}>
                <Card border="primary" className="text-center">
                  <Card.Img
                    variant="bottom"
                    src="http://localhost:3000/images/Exercise/shppingCart.png"
                  />
                  <Card.Body>
                    <Card.Title>購物車功能實作</Card.Title>
                    <Card.Text>
                      模擬從後端接受到資料後，使用Ajax將接收的資料渲染製網頁上。
                    </Card.Text>
                    <Button
                      variant="primary"
                      target="_blank"
                      href="https://feeng10914017.github.io/Portfolios/Ajax-add-cart/ajax-add-cart.html"
                    >
                      前往頁面
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        {/* project */}
      </article>
    </>
  )
}

export default Exercise
