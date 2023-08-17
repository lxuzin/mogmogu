import { useEffect, useRef, useState } from "react";

export default function AccountOneDay({ day, selectedDate, handleDateChange, getDayName }) {
  const dayRef = useRef(null);

  const handleClick = () => {
    handleDateChange(day); // 선택한 날로 date 갱신
    dayRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  useEffect(() => {
    if (selectedDate.getDate() === day) {
      dayRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center' // 가운데로
      });
    }
  }, [selectedDate, day]);

  return (
    <>
      <div
        ref={dayRef}
        onClick={handleClick}
        style={{
          margin: "0.5rem",
          width: '50px',
          height: '50px',
          fontSize: "25px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backgroundColor: selectedDate.getDate() === day ? '#f0f0f0' : 'white',
          color: selectedDate.getDate() === day ? '#C998DC' : 'black'
        }}
      >
        <div>
          <div
            style={{
              textAlign: 'center',
              fontSize: "15px",
            }}
          >{getDayName(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}</div>
          <div>{day}</div>
        </div>
      </div>

    </>
  )
}