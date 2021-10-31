import React from 'react'
import { Chrono } from 'react-chrono'
import experienceData from '@/data/experienceData'

export default function Experience() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Chrono
        items={experienceData}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: 'black',
          secondary: 'skyblue',
          cardBgColor: 'white',
          cardForeColor: 'brown',
          titleColor: 'black',
        }}
        cardHeight="100"
      />
    </div>
  )
}
