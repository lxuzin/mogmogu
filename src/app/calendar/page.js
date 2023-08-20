'use client'
import { useEffect, useState } from 'react'
import Calendar from "react-calendar";
import Styles from './Calendar.module.css'
import "./MoangCalendar.css";
import CalendarContent from './Components/CalendarContent';
import { useRouter } from 'next/navigation';
import { formatDate, handleDday, week } from './Utils/calendar-utils';
import { useGlobalContext } from '../Context/store';

export default function CalendarPage() {
  const router = useRouter();
  const { setNavIdx, calendarContents } = useGlobalContext();

  const [today, setToday] = useState(new Date());
  const [dateSelected, setDateSelected] = useState(today);
  const [detail, setDetail] = useState(calendarContents.find(x => {
    return x.startDate.toDateString() === today.toDateString();
  }));

  useEffect(() => {
    setNavIdx(1);
    setDetail(calendarContents.find(x => {
      return x.startDate.toDateString() === dateSelected.toDateString();
    }));
  }, [today, dateSelected])

  const handleTileContent = ({ date, view }) => {
    if (view !== 'month')
      return null;

    const content = calendarContents.find(x => formatDate(x.startDate) === formatDate(date));
    if (!content)
      return null;
    return (
      <CalendarContent
        cost={content.cost}
        keyword={content.keyword}
      />
    );
  }

  const getShortDate = (date) => {
    return `${date.getMonth() + 1}.${date.getDate()} ${week[date.getDay()]}`;
  }

  const getDetailPeriod = (startDate, endDate) => {
    if (startDate.toDateString() === endDate.toDateString())
      return getShortDate(startDate);
    return `${getShortDate(startDate)} - ${getShortDate(endDate)}`;
  }

  return (
    <div className={Styles.calendarWrapper}>
      <Calendar
        tileContent={handleTileContent}
        next2Label={null}
        prev2Label={null}
        formatMonthYear={(locale, date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
        formatMonth={(locale, date) => `${date.getMonth() + 1}월`}
        formatShortWeekday={(locale, date) => week[date.getDay()]}
        onClickDay={setDateSelected}
        className={Styles.calendar}
        value={dateSelected}
        locale='en-US'
      />

      <div className={Styles.details}>
        <div className={Styles.dateInfo}>
          <div className={Styles.dateSelected}>{new Date(dateSelected).getDate()}</div>
          <div className={Styles.d_day}>{handleDday(dateSelected)}</div>
        </div>
        <button
          className={Styles.addButton}
          onClick={() => router.push(`/calendar/new/${formatDate(dateSelected)}`)}>+
        </button>

        {detail &&
          (
            <div className={Styles.detailContent}>
              <div className={Styles.detailTitle}>{detail.keyword}</div>
              <div className={Styles.detailDate}>
                {getDetailPeriod(detail.startDate, detail.endDate)}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}