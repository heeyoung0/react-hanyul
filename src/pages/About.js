import React from 'react'
import Header from '../comtonent/Header'
import Footer from '../comtonent/Footer'
import './style.css'



const About = () => {
  return (
    <>
        <Header />
        <div className='about-info'>
            <div className='title-area'>
              <h2>균형 잡힌 아름다움, <br/>Active Balanced Beauty</h2>
              <p>건강한 피부 균형과 내면의 단단함을 통해 어떤 문제에도 <br />
              쉽게 무너지지 않는 균형 잡힌 아름다움에 진정으로 가까워 집니다. <br />
              로컬 원료에서 찾은 고효능 성분으로 피부 표면의 문제를 즉시 해결함과 <br />
              동시에 근본의 힘을 길러 내외면의 균형을 이루게 합니다. <br />
              나아가 피부에 편안한 제형, 기분 좋은 자연의 향, <br />
              한국적 미학을 담은 패키지의 시각적 즐거움을 담아 모든 경험의 <br />
              순간에 안식과 힐링을 전하기 위해 노력합니다.</p>
            </div>
            <div className="image-area">
            <img src="/img/info.jpg" alt='어린쑥 수분진정 패드' />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About