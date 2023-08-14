import css from "styled-jsx/css"

const styles = css`
  .calendar-content {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .cost {
    font-size: 14px;
    color: #F6ABE5;
  }

  .content {
    font-size: 14px;
  }
`;

function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CalendarContent({cost, content}) {
  return (
    <div className="calendar-content">
      <div className="cost">{addCommas(cost)}</div>
      <div>{content}</div>
      <style jsx>{styles}</style>
    </div>
  )
}