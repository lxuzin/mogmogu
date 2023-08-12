'use client'
import { useState } from 'react'
import Calendar from "react-calendar";
import Styles from './Calendar.module.css'
import "./MoangCalendar.css";

export default function CalendarPage() {
  const [value, onChange] = useState(1692000000000);
  return (
    <div className={Styles.calendarWrapper}>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en-US"
      />
      <div className={Styles.reminder}>
        {value.toString()}
      </div>
    </div>
  )
}