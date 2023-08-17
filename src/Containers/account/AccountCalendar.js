import useAccountContext from "@/Context/account/store"
import 'react-calendar/dist/Calendar.css';
import AccountOneDay from "./AccountOneDay";
import { useState } from "react";



export default function AccountCalender() {
  const { date, setDate } = useAccountContext();
  const [dayName, setDayName] = useState();

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // 2023, 7+1 -> 31
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  /**
   * date 갱신
   */
  const handleDateChange = (day) => {
    const selectedDay = day;
    setDate(new Date(date.getFullYear(), date.getMonth(), selectedDay));
  };

  /**
   * 갱신한 date의 요일을 알수 있다.
   * @param {*} date 
   * @returns 
   */
  const getDayName = (date) => {
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  };

  return (
    <>

      <div className="AccountHorizontalScrollDiv">
        <div className="AccountHorizontalScrollDivContent">
          {daysArray.map((day, idx) => (
            <AccountOneDay
              key={idx}
              day={day}
              selectedDate={date}
              handleDateChange={handleDateChange}
              getDayName={getDayName}
            />
          ))}
        </div>
        
      </div>
      <style jsx>{`
          .AccountHorizontalScrollDiv {
            display: flex;
            max-width: 1280px;
            color: black;
            /* 넘쳐나는 내용 무조건 숨김 */
            overflow-x:hidden;
            overflow: overlay;
          }
    
          .AccountHorizontalScrollDivContent {
            display: flex;
          }
          
          .AccountDayContent {
            width: 60px
          }
          
          .AccountDayMonth {
            font-size:14px;
            color: #ABA9A9;
            margin-bottom: 0;
          }
          
          .AccountDayDay {
            font-size:24px;
            margin-top: 0;
          
          }`}</style>
    </>
  )
}