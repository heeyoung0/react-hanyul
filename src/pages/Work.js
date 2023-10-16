import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../comtonent/Header'
import Footer from '../comtonent/Footer'
import './style.css'


const Work = () => {
  return (
    <>
        <Header />
        <div className='list'>
            <div className="imgBox">
                <Link to='/Boodle'>
                <img src="/img/hanyul1.jpg" alt='부들밤 모공수축 패드' />
                <div className="list-info">
                    <p className='title'>부들밤 모공수축 패드</p>
                    <p className='price'>23,200원</p>
                </div>
                </Link>
                <Link to='/Calming'>
                <img src="/img/hanyul2.jpg" alt='어린쑥 수분진정 패드' />
                <div className="list-info">
                    <p className='title'>어린쑥 수분진정 패드</p>
                    <p className='price'>23,200원</p>
                </div>
                </Link>
                <Link to='/Yuja'>
                <img src="/img/hanyul3.jpg" alt='달빛유자 수면팩' />
                <div className="list-info">
                    <p className='title'>달빛유자 수면팩</p>
                    <p className='price'>23,200원</p>
                </div>
                </Link>
                <Link to='/Purecream'>
                <img src="/img/hanyul4.jpg" alt='어린쑥 수분진정 크림' />
                <div className="list-info">
                    <p className='title'>어린쑥 수분진정 크림</p>
                    <p className='price'>23,200원</p>
                </div>
                </Link>
            </div>
        </div>
        <Link to='/About'>
            <p className='info-btn'>한율 소개</p>
        </Link>
        <Footer />
    </>
  )
}

export default Work