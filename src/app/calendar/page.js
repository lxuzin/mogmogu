'use client'
import { useState } from 'react'
// import Calendar from "react-calendar";
import Styles from './Calendar.module.css'
import "./MoangCalendar.css";
import dynamic from 'next/dynamic'

const Calendar = dynamic(() => import('react-calendar'), { ssr: false })

export default function CalendarPage() {
  const [value, onChange] = useState(new Date().toDateString());
  return (
    <div className={Styles.calendarWrapper}>
      <Calendar
        className={Styles.calendar}
        onChange={onChange}
        value={value}
        locale='ko-KR'
        formatDay={(locale, date) => date.toLocaleDateString('en-US', { day: 'numeric' })}
      />
      <div className={Styles.reminder}>
        {value.toString()}
      </div>
    </div>
  )
}