import React from 'react'
import Header from '../comtonent/Header'
import Footer from '../comtonent/Footer'
import './style.css'

const Boodle = () => {
  return (
    <>
        <Header />
        <div className='product-info'>
            <div className='product-title'>
                <p className='top-title'>부들밤 모공수축 패드</p>
                <p className='top-en-title'>Chestnut Shell Pore-tight Pads</p>
            </div>
            <div className="product-img">
            <img src="/img/hanyul1.jpg" alt='부들밤 모공수축 패드' />
            </div>
            <div className="product-text">
                <h4>#나비존집중수축</h4>
                <p>피지와 각질은 깔끔 + 모공은 쫀쫀 수축 + 부들부들 매끈결로 마무리! <br />모공 관리에 탁월한 밤 껍질과 AHA·PHA·LHA 성분이 함유되어 나비존 모공을 <br />집중 관리해주는 데일리 기능성 모공 패드</p>
            </div>
            <button className='product-btn'>구매하기</button>
        </div>
        <Footer />
    </>
  )
}

export default Boodle