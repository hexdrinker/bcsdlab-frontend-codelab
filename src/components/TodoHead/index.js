import React from 'react'
import './index.css'

export default function TodoHead({ unDoneTodos }) {
  const date = new Date();
  const setDay = () => {
    switch(date.getDay()) {
      case 0: return "일요일";
      case 1: return "월요일";
      case 2: return "화요일";
      case 3: return "수요일";
      case 4: return "목요일";
      case 5: return "금요일";
      case 6: return "토요일";
      default: return "일요일";
    }
  }
  return (
    <div className="todo-head">
      <h1>{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일</h1>
      <div className="day">{setDay()}</div>
      <div className="tasks-left">할 일 {unDoneTodos}개 남음</div>
    </div>
  )
}
