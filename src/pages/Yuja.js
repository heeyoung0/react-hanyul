import React from 'react'
import Header from '../comtonent/Header'
import Footer from '../comtonent/Footer'
import './style.css'

const Yuja = () => {
  return (
    <>
        <Header />
        <div className='product-info'>
            <div className='product-title'>
                <p className='top-title'>달빛유자 수면팩</p>
                <p className='top-en-title'>Hanyul Yuja Vitamin Sleeping Mask</p>
            </div>
            <div className="product-img">
            <img src="/img/hanyul3.jpg" alt='달빛유자 수면팩' />
            </div>
            <div className="product-text">
                <h4>#톤결광수면팩</h4>
                <p>톤·결·광! 푹 자고 만나는 눈부신 아침 피부 <br />유자 유래 비타민P의 환한 브라이트닝 효과로 피부 피로회복에 <br />도움을 주어 눈부신 아침 피부로 가꿔주는 통유자 6개 듬뿍 수면팩</p>
            </div>
            <button className='product-btn'>구매하기</button>
        </div>
        <Footer />
    </>
  )
}

export default Yuja