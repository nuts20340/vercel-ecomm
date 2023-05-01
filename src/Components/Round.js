import './RoundStyles.css';
import React from 'react'

import round1 from '../assets/cashew.png'
import round2 from '../assets/nuts.png'
import round3 from '../assets/candle.png'
import round4 from '../assets/book.png'
import round5 from '../assets/honey.png'


const Round = () => {
  return (
    <div className='round'>
      <div className="round-container">
        <div className="round1">
            <div className="r1">
            <img className='imgg1' src={round1} alt="round1" />
            <h5>NUTS</h5>
            </div>
            <div className="r2">
            <img className='imgg2' src={round2} alt="round2" />
            <h5>CHOCO CRISPIES</h5>
            </div>
            <div className="r3">
            <img className='imgg3' src={round3} alt="round3" />
            <h5>DRINKING CHOCLATE</h5>
            </div>
            <div className="r4">
            <img className='imgg4' src={round4} alt="round4" />
            <h5>GIFT BOXES</h5>
            </div>
            <div className="r5">
            <img className='imgg5' src={round5} alt="round5" />
            <h5>NATURAL HONEY</h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Round
