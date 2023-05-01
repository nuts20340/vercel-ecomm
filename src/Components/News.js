import './NewsStyles.css'

import React from 'react'

const News = () => {
  return (
    <div className='news'>
      <div className='new'>
      <h1>Newsletter</h1>
      <p>Stay update with our latest Updates & products</p>
      <form>
      <label>Enter Your Email</label>
            <input type="text" />
            </form>
    </div>
    </div>
  )
}

export default News
