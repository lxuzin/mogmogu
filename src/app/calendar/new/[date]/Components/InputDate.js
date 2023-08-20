import Styles from '../NewContent.module.css'
import DatePicker from 'react-datepicker';
import "./react-datepicker.css";
import { formatDateKR } from '@/app/calendar/Utils/calendar-utils';

export default function InputDate({ data }) {
  const [getDateDiff, mockOpened, setMockOpened, content, setContent ] = data;

  const handleImageUpload = (e) => {
    if (e.target.files.length === 0)
      return;

    const reader = new FileReader();
    const icon = document.querySelector(`.${Styles.icon_image}`);

    reader.onloadend = () => {
      const base64 = reader.result;
      icon.style.backgroundImage = `url(${base64})`;

      setContent({
        ...content, image: {
          name: e.target.files[0].name,
          base64: base64,
        }
      });
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleDatePick = (which, date) => {
    const newContents = { ...content };

    if (which === 'start') {
      if (getDateDiff(date, content.endDate) < 0)
        newContents.endDate = date;
      newContents.startDate = date;
    }
    else {
      if (getDateDiff(content.startDate, date) < 0)
        newContents.startDate = date;
      newContents.endDate = date;
    }
    setContent(newContents);
  }
  
  return (
    <div className={Styles.contentWrapper}>
    <div className={`${Styles.contentInputWrapper}`}>
      <button
        className={Styles.dateSelectionButton}
        onClick={() => setMockOpened(true)}
      >모의 데이트</button>
    </div>
    <div
      className={`${Styles.contentInputWrapper} ${Styles.dateSelectionWrapper}`}
    >
      <div className={`${Styles.icon} ${Styles.icon_clock}`}>
      </div>
      <div className={Styles.dates}>

        <DatePicker
          className={Styles.date}
          calendarClassName={Styles.datePicker}
          selected={content.startDate}
          onChange={date => handleDatePick('start', date)}
          value={formatDateKR(content.startDate)} />
        <DatePicker
          className={Styles.date}
          calendarClassName={Styles.datePicker}
          selected={content.endDate}
          onChange={date => handleDatePick('end', date)}
          value={formatDateKR(content.endDate)} />
      </div>
    </div>
    <div className={`${Styles.contentInputWrapper}`}>
      <div className={`${Styles.icon} ${Styles.icon_food_bank}`}></div>
      <div className={Styles.food}>
        <input
          type='text'
          className={Styles.contentInput}
          placeholder='Food'
          onChange={(e) => setContent({ ...content, food: e.target.value })} value={content.food}
        />
      </div>
    </div>
    <div className={`${Styles.contentInputWrapper}`}>
      <div className={`${Styles.icon} ${Styles.icon_star}`}></div>
      <div className={Styles.place}>
        <input
          type='text'
          className={Styles.contentInput}
          placeholder='Place'
          onChange={(e) => setContent({ ...content, place: e.target.value })} value={content.place}
        />
      </div>
    </div>
    <div className={`${Styles.contentInputWrapper} ${Styles.seperator}`}>
      오늘 데이트 어땠어?
    </div>
    <div className={`${Styles.contentInputWrapper}`}>
      <div className={`${Styles.icon} ${Styles.icon_image}`}></div>
      <div className={Styles.photo}>
        <input
          className={`${Styles.photoInput}`}
          id="input-file"
          type="file"
          accept="image/png, image/jpeg"
          placeholder='Photo'
          onChange={handleImageUpload}
        />
        <label htmlFor="input-file" className={`${Styles.contentInput} ${Styles.photoLabel}`}>{content.image.name}</label>
      </div>
    </div>
    <div className={`${Styles.contentInputWrapper}`}>
      <div className={`${Styles.icon} ${Styles.icon_edit}`}></div>
      <div className={Styles.diary}>
        <input
          type='text'
          className={Styles.contentInput}
          placeholder='Diary'
          onChange={(e) => setContent({ ...content, diary: e.target.value })} value={content.diary}
        />
      </div>
    </div>
  </div>
  );
}