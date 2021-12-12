import React from 'react'
import { Chrono } from 'react-chrono'
import timelineData from '@/data/timelineData'
import PageTitle from '@/components/PageTitle'

export default function Timeline() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <PageTitle>Timeline</PageTitle>
      </div>
      <div style={{ width: '100%', height: '100%' }} className="py-7">
        <Chrono
          items={timelineData}
          mode="VERTICAL"
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
    </div>
  )
}
