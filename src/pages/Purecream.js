import React from 'react'
import Header from '../comtonent/Header'
import Footer from '../comtonent/Footer'
import './style.css'

const Purecream = () => {
  return (
    <>
        <Header />
        <div className='product-info'>
            <div className='product-title'>
                <p className='top-title'>어린쑥 수분진정 크림</p>
                <p className='top-en-title'>Pure Artemisia Calming Water Cream</p>
            </div>
            <div className="product-img">
            <img src="/img/hanyul4.jpg" alt='어린쑥 수분진정 크림' />
            </div>
            <div className="product-text">
                <h4>#민감진정크림</h4>
                <p>시카보다 4배 강한 쑥시카로 예민해진 피부를 진정하고, <br />붉은기, 건조, 손상 장벽까지 케어하는 저자극 수분진정 크림</p>
            </div>
            <button className='product-btn'>구매하기</button>
        </div>
        <Footer />
    </>
  )
}

export default Purecream