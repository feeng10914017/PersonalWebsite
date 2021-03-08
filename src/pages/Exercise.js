import React from 'react'
import ReactPlayer from 'react-player'
import {
  Jumbotron,
  Container,
  Card,
  Row,
  Col,
  Button,
  Image,
} from 'react-bootstrap'
function Exercise(props) {
  function videoOnPlay() {
    const myProjectVideo = document.getElementById('eProject2')
    myProjectVideo.classList.add('active')
  }
  function videoOnEnded() {
    const myProjectVideo = document.getElementById('eProject2')
    myProjectVideo.classList.remove('active')
  }
  return (
    <>
      <article className="eArticle">
        {/* project */}
        <Container className="eProject">
          <section>
            <div className="eProjectTitle d-flex">
              <Card className="bg-text p-5 d-flex ml-auto rounded">
                <Card.Body className="p-0">
                  <Card.Title className="eProjectTitle1 mb-0">
                    project 1
                  </Card.Title>
                  <Card.Title className="eProjectTitle2 mb-0">
                    後臺管理系統
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <Image
              src="./images/Exercise/project1.webp"
              className="eProjectPhoto mx-auto d-flex"
              // fluid
              rounded
            />
            <div className="eProjectText">
              <Card className="bg-text p-5 d-flex ml-auto rounded">
                <Card.Body className="p-0">
                  <Card.Text>
                    運用 Bootstrap 排版，使用 PHP 串接 MySQL資料庫，透過 Ajax
                    來做頁面更新，並採用前、後端混和的編寫方式
                    ，實作新增、搜尋、修改、刪除等功能。
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
          <section id="eProject2">
            <div className="eProjectTitle d-flex">
              <Card className="bg-text p-5 d-flex ml-auto rounded">
                <Card.Body className="p-0">
                  <Card.Title className="eProjectTitle1 mb-0">
                    project 2
                  </Card.Title>
                  <Card.Title className="eProjectTitle2 mb-0">
                    JREAM 機車租賃網站
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="eProjectPhoto eProjectVideoWrapper mx-auto d-flex">
              <ReactPlayer
                controls="true"
                width="100%"
                height="100%"
                className="eProjectVideo"
                url="https://www.youtube-nocookie.com/embed/bPlqrH9VUTs"
                onPlay={videoOnPlay}
                onPause={videoOnEnded}
                onEnded={videoOnEnded}
              />
            </div>
            <div className="eProjectText">
              <Card className="bg-text p-5 d-flex ml-auto rounded">
                <Card.Body className="p-0">
                  <Card.Text>
                    JREAM是由「Just、Ride、Enjoy、Action、Motor」組合而成，取DREAM夢想的諧音，希望顧客像我們租車後可以享受騎乘的快感，一圓他們的重機夢‧
                  </Card.Text>
                  <h4>我所負責的部分 MY PART</h4>
                  <Card.Text>
                    <ul>
                      <li>首頁設計、製作</li>
                      <li>購物車系統</li>
                      <li>版本控管、系統整合</li>
                      <li>網站主視覺規劃</li>
                    </ul>
                  </Card.Text>
                  <Card.Text>
                    此專案主要使用React作為前端開發並使用Bootstrap框架架設網站，後端使用Node.js連接資料庫(MySQL)。使用GitHub進行版本管控。
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </section>
        </Container>

        {/* practice */}
        <Jumbotron className="bgYe">
          <Container className="bgYeSquare">
            <div className="bgYeTitle mb-5">
              <Card.Title className="bgYeTitle1 mb-0">practice</Card.Title>
            </div>
            <Row className="eCard">
              <Col xl={3} md={6} xs={12}>
                <Card border="primary" className="text-center">
                  <Card.Img
                    variant="bottom"
                    src="./images/Exercise/hairmap.png"
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
                    src="./images/Exercise/library.png"
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
                    src="./images/Exercise/flipCard.png"
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
                    src="./images/Exercise/shppingCart.png"
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
      </article>
    </>
  )
}

export default Exercise
