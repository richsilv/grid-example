import React from 'react'
import Chance from 'chance'
import './style.css'

const chance = new Chance()

export default function () {
  return (
    <div id='grid'>
      <div id='title'>
        <h1>Main heading</h1>
      </div>
      <div id='image' className='picture' style={{ backgroundImage: 'url(\'http://loremflickr.com/400/400/nature\')' }} />
      <div id='bar' className='green' />
      <div id='body'>
        {chance.paragraph({sentences: chance.integer({ max: 10, min: 1 })})}
      </div>
      <div id='footer'>
        This is some text that appears at the bottom, probably a disclaimer.
      </div>
    </div>
  )
}
