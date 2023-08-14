'use client'
import { useState } from 'react'
// import Calendar from "react-calendar";
import Styles from './Calendar.module.css'
import "./MoangCalendar.css";
import dynamic from 'next/dynamic'
import CalendarContent from './Components/CalendarContent';

const Calendar = dynamic(() => import('react-calendar'), { ssr: false })

export default function CalendarPage() {
  const [dateSelected, setDateSelected] = useState(new Date().toDateString());

  const handleTileContent = ({ date, view }) => {
    if (view !== 'month')
      return null;

    const content = contents.find(x => x.date.toDateString() === date.toDateString());
    if (!content)
      return null;
    return (
      <CalendarContent
        cost={content.cost}
        content={content.content}
      />
    );
  }

  const handleDday = () => {
    const today = new Date();
    const gap = new Date(dateSelected).getTime() - today.getTime();
    const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
    if (result === 0)
      return '오늘';
    if (result > 0)
      return `${result}일 후`;
    if (result < 0)
      return `${Math.abs(result)}일 전`;
  }

  const handleDetailContent = () => {
    const res = contents.find(x => new Date(x.date).toDateString() == new Date(dateSelected).toDateString());
    if (!res)
      return null;
    console.log(res);
    const content = "월급날";
    const date = "8.24 목 - 8.26 토";
    return (
      <div className={Styles.detailContent}>
        <div className={Styles.detailTitle}>{res.content}</div>
        <div className={Styles.detailDate}>{date}</div>
      </div>
    )
  }


  return (
    <div className={Styles.calendarWrapper}>
      <Calendar
        tileContent={handleTileContent}
        className={Styles.calendar}
        onChange={setDateSelected}
        value={dateSelected}
        locale='ko-KR'
        formatDay={(locale, date) => date.toLocaleDateString('en-US', { day: 'numeric' })}
      />
      <div className={Styles.details}>
        <div className={Styles.dateInfo}>
          <div className={Styles.dateSelected}>{new Date(dateSelected).getDate()}</div>
          <div className={Styles.d_day}>{handleDday()}</div>
        </div>
        <div className={Styles.addButton}>+</div>
        {handleDetailContent()}
      </div>
    </div>
  )
}

const contents = [
  {
    date: new Date('2023-08-15'),
    cost: 815000,
    content: "광복절"
  },
  {
    date: new Date('2023-08-25'),
    cost: 10000,
    content: "월급날"
  },
  {
    date: new Date('2023-08-18'),
    cost: 5000,
    content: "배고파"
  },
]