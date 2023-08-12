'use client'
import React from 'react'
import MoangCalendar from './Components/MoangCalendar'
import Styles from './calendar.module.css'

export default function CalendarPage() {
  return (
    <div className={Styles.calendarWrapper}>
      <div className={Styles.calendar}>
        <MoangCalendar />
      </div>
      <div className={Styles.reminder}>
        123
      </div>
    </div>
  )
}