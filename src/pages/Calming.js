import React from 'react'
import Header from '../comtonent/Header'
import Footer from '../comtonent/Footer'
import './style.css'

const Calming = () => {
  return (
    <>
        <Header />
        <div className='product-info'>
            <div className='product-title'>
                <p className='top-title'>어린쑥 수분진정 패드</p>
                <p className='top-en-title'>Pure Artemisia Calming Pad</p>
            </div>
            <div className="product-img">
            <img src="/img/hanyul2.jpg" alt='어린쑥 수분진정 패드' />
            </div>
            <div className="product-text">
                <h4>#화잘먹치트키</h4>
                <p>시카보다 4배 강한 쑥시카로 민감해진 피부를 진정하고 <br />피부 속까지 촉촉하게 채우는! 붙이는 진정 에센스 패드</p>
            </div>
            <button className='product-btn'>구매하기</button>
        </div>
        <Footer />
    </>
  )
}

export default Calming