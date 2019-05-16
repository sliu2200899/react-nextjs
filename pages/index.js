import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import styled from 'styled-components'
import bannerImg from '../assets/img/partners_bg.jpg'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    height: 600px;
    background:url(${bannerImg}) no-repeat 100% 100%;
    background-size: 1920px;
    .title {
        padding-top: 180px;
        width: 1000px;
        margin: 0 auto;
        h3 {
          font-family: DINBold;
          font-size: 44px;
          letter-spacing: 11px;
          margin-bottom: 30px;
          text-align: left;
          color: #fff;
        }
        p {
          color: #a4a9ac;
          line-height: 22px;
          margin-bottom: 30px;
          font-size: 12px;
          width: 600px;
        }
        a {
          border: 1px solid #08aba6;
          color: #08aba6;
          height: 48px;
          font-size: 14px;
          line-height: 48px;
          padding: 14px 58px;
          border-radius: 32px;
          text-align: center;
        }
    }
`

class Index extends React.Component {
   render(){
      return (
        <Body>
          <style jsx global>{`
            body,html,h1,h2,h3,h4,h5,p{
              margin: 0;
              padding: 0;
            }
            ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
            a {
              text-decoration: none;
            }
          `}</style>
          <Header />
          <Container className="banner-container">
             <div className="title">
                <h3>Our Partners</h3>
                <p>BitMart aim to pioneer the world to a better financial system with fairness and equality. Since 2017, growing partners are joining and tightly working with BitMart for the remarkable human revolution. We believe, more efficiency, more fairness can fundamentally accelerate the word to a better place.</p>
                <a href="https://www.wrike.com/frontend/requestforms/index.html?token=eyJhY2NvdW50SWQiOjE5MTAzNTgsInRhc2tGb3JtSWQiOjE5OTA1N30JNDcwNjAxOTM4ODQxMQk1NGM2NWI1MDA4MTc1YjEwMDAwYWQ0MzA4ZWIxY2E5MTBlNDFmMjg0YWNjZjc0ZmY3YzFhZWNhODc4ZWNmYjVl" target="_blank">Be Our Partner</a>
             </div>
          </Container>
          <Partners />
          <Footer />
        </Body>
      )
   }
}

export default Index