import './Supp1Styles.css';
import React from 'react'

import round1 from '../assets/allsup.png'
import round2 from '../assets/sup2.png'
import round3 from '../assets/sup3.png'
import round4 from '../assets/sup4.png'
import round5 from '../assets/honey.png'


const Round = () => {
  return (
    <div className='sup'>
      <div className="sup-container">
        <div className="supp">
            <div className="s1">
            <img className='imgg1' src={round1} alt="round1" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Round
