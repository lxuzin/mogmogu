'use client'
import { useGlobalContext, getEmptyContent } from '@/app/Context/store';
import { formatDateKR, handleDday } from '../../Utils/calendar-utils';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import Styles from './NewContent.module.css'
import MockStyles from './Mock.module.css'
import DatePicker from 'react-datepicker';
import "./react-datepicker.css";
import { useRouter } from 'next/navigation';
import { activities, foods } from '../../Utils/selections';

const categories = [ 'activity', 'food', 'foodSelection' ];

export default function NewContent({ params: { date } }) {
  const { daysElapsed, calendarContents, setCalendarContents } = useGlobalContext();

  const router = useRouter();
  const emptyContent = getEmptyContent(date);

  const [mockOpened, setMockOpened] = useState(false);
  const [category, setCategory] = useState('activity');
  const [content, setContent] = useState(emptyContent);
  const [selectedActs, setSelectedActs] = useState([]);
  const [cost, setCost] = useState(0);

  const year = new Date(date).getFullYear();
  if (year < 2000 || year > 3000)
    notFound();

  useEffect(() => {
    setCost(selectedActs.reduce((acc, cur) => acc + cur.cost, 0));

    selectedActs.forEach(act => {
      const element = document.getElementById(act.name);
      element.style.width = `${act.cost / maxCost * 100}%`;
    });

  }, [content, cost, selectedActs]);

  const getDateDiff = (date1 = new Date(), date2 = new Date()) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const elapsed = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    return elapsed;
  }

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

  const handleSaveBtn = () => {
    if (mockOpened) {
      setMockOpened(false);
      return;
    }
    if (content.keyword === '') {
      alert('키워드를 입력해주세요');
      return;
    }
    setCalendarContents([...calendarContents, content]);
    setContent(emptyContent);
    router.push('/calendar');
  }

  // mock
  const handleMockActSelect = (e) => {
    const res = selectedActs.find(act => act.name === e.target.innerText);
    setCategory('food');
    if (res) {
      setSelectedActs(selectedActs.filter(act => act.name !== e.target.innerText));
      return;
    }
    setSelectedActs([...selectedActs, activities.find(act => act.name === e.target.innerText)]);
  }

  const handleMockFoodSelect = (e) => {
    const res = foods.find(food => food.name === e.target.innerText);
    setCategory('foodSelection');
  }

  return (
    <div className={Styles.background}>
      <div className={Styles.dateKeywordInputWrapper}>
        <div className={Styles.dateInfo}>
          <div className={Styles.dateSelected}>{new Date(date).getDate()}</div>
          <div className={Styles.d_day}>{handleDday(date)}</div>
        </div>
        <div className={Styles.keywordInputWrapper}>
          <input
            type='text'
            className={Styles.keywordInput}
            onChange={(e) => setContent({ ...content, keyword: e.target.value })}
            value={content.keyword}
            placeholder='데이트 키워드'
          />
          <div className={Styles.daysElapsed}>{getDateDiff(daysElapsed, new Date())}</div>
        </div>
      </div>

      {
        mockOpened ? (
          <>
            <div className={Styles.contentWrapper}>
              <div className={`${MockStyles.costIndicatorWrapper}`}>
                <div className={MockStyles.costIndicator}>
                  {
                    /* 액티비티 + 식사 */
                    selectedActs.map((act, index) => (
                      <div className={MockStyles.costIndicatorItem}
                        key={index}
                        id={act.name}>
                        {act.name}
                      </div>
                    ))
                  }
                </div>
                <p>하루적정지출금액 ({cost}/{maxCost})</p>
              </div>
              <div className={`${MockStyles.selectionWrapper}`}>
                {
                  category === 'activity' && (
                    activities.map((act, index) => (
                      <button
                        className={`${MockStyles.selection} ${selectedActs.find(selected => selected.name === act.name) ? MockStyles.selected : ''}`}
                        key={`${act.name}-${index}`}
                        onClick={handleMockActSelect}
                      >{act.name}
                      </button>
                    )))
                }
                {
                  category === 'food' && (
                    foods.map((food, index) => (
                      <button
                        className={`${MockStyles.selection} ${MockStyles.food} ${foods.find(selected => selected.name === food.name) ? MockStyles.selected : ''}`}
                        key={`${food.name}-${index}`}
                        onClick={handleMockFoodSelect}
                      >{food.name}
                        <img
                          src={food.imageUrl}
                          alt={food.name}
                        />
                      </button>
                    )))
                }
                {
                  category === 'foodSelection' && (
                    foods.map((food, index) => (
                      <button
                        className={`${MockStyles.selection} ${MockStyles.food} ${foods.find(selected => selected.name === food.name) ? MockStyles.selected : ''}`}
                        key={`${food.name}-${index}`}
                        onClick={handleMockFoodSelect}
                      >{food.name}
                        <img
                          src={food.imageUrl}
                          alt={food.name}
                        />
                      </button>
                    )))
                }
              </div>
            </div>
          </>
        ) : (
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
        )
      }
      <button
        className={`${Styles.addButton} ${mockOpened ? MockStyles.mockAddButton : ''}`}
        onClick={handleSaveBtn}
      >+</button>
      <img
        src='/assets/images/chevron-left.svg'
        alt='back'
        onClick={() => setCategory(categories[categories.indexOf(category) - 1])}
        className={`${MockStyles.backButton} `}
        style={{ display: mockOpened && categories.indexOf(category) > 0 ? 'block' : 'none' }}
      />
    </div>
  )
}

const maxCost = 70000;