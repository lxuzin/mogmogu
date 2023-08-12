'use client'
import { useState } from "react";
import Calendar from "react-calendar";
import "./MoangCalendar.css";

export default function MoangCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Calendar 
        onChange={onChange} 
        value={value}
        locale="en-US"
      />
    </>
  )
}