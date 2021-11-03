import React from 'react'
import { Chrono } from 'react-chrono'
import timelineData from '@/data/timelineData'

export default function Experience() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chrono
        items={timelineData}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: 'black',
          secondary: 'skyblue',
          cardBgColor: 'white',
          cardForeColor: 'brown',
          titleColor: 'black',
        }}
        cardHeight="100"
      >
        <div className="chrono-icons">
          <img src="https://img.icons8.com/color/48/000000/briefcase.png" alt="briefcase" />
          <img src="https://img.icons8.com/color/48/000000/trophy.png" alt="trophy" />
          <img src="https://img.icons8.com/color/48/000000/briefcase.png" alt="briefcase" />
          <img src="https://img.icons8.com/color/48/000000/briefcase.png" alt="briefcase" />
          <img src="https://img.icons8.com/color/48/000000/briefcase.png" alt="briefcase" />
          <img src="https://img.icons8.com/color/48/000000/training.png" alt="training" />
          <img src="https://img.icons8.com/color/48/000000/training.png" alt="training" />
          <img src="https://img.icons8.com/color/48/000000/prize.png" alt="prize" />
          <img src="https://img.icons8.com/color/48/000000/university.png" alt="university" />
          <img src="https://img.icons8.com/color/48/000000/training.png" alt="training" />
        </div>
      </Chrono>
    </div>
  )
}
