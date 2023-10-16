import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Intro = () => {
  return (
    <>
        <div className='intro'>
            <div className="main-bg"></div>
            <h1>한국의 이로움으로 전하는 균형 잡힌 아름다움 | 한율</h1>
            <Link to='work'>입장</Link>
        </div>
    </>
  )
}

export default Intro