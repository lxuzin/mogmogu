import { useGlobalContext } from '@/app/Context/store';
import Styles from '../NewContent.module.css'
import MockStyles from './Mock.module.css';
import { activities, foodCategory, korean } from '@/app/calendar/Utils/selections';
import { useEffect } from 'react';

export default function MockDate({data}) {
  const { maxcostPerDate, navIdx } = useGlobalContext();
  const [ mockOpened, setMockOpened, content, setContent, category, setCategory, selectedActs, setSelectedActs, cost, setCost] = data;

  useEffect(() => {
    selectedActs.forEach(act => {
      const element = document.getElementById(act.name);
      element.style.width = `${act.cost / maxcostPerDate * 100}%`;
    });
  }, [maxcostPerDate, category]);
  // mock
  const handleMockActSelect = (e) => {
    console.log(e.target.innerText);
    const res = selectedActs.find(act => act.name === e.target.innerText);
    if (res) {
      setSelectedActs(selectedActs.filter(act => act.name !== e.target.innerText));
      return ;
    }
    setSelectedActs([...selectedActs, activities.find(act => act.name === e.target.innerText)]);
    setCategory('foodCategory');
  }

  const handleMockFoodCategorySelect = (e) => {
    const res = foodCategory.find(food => food.name === e.target.tag);
    console.log(res);
    setCategory('foodSelection');
  }

  const handleMockFoodSelect = (e) => {
    console.log(e.target.innerText);
    const res = selectedActs.find(act => act.name === e.target.innerText);
    if (res) {
      setSelectedActs(selectedActs.filter(act => act.name !== e.target.innerText));
      return ;
    }
    setSelectedActs([...selectedActs, activities.find(act => act.name === e.target.innerText)]);
    setCategory('foodCategory');
  }

  return (
    <div className={Styles.contentWrapper}>
    <div className={MockStyles.costIndicatorWrapper}>
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
      <p>하루적정지출금액 ({cost}/{maxcostPerDate})</p>
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
        category === 'foodCategory' && (
          foodCategory.map((food, index) => (
            <button
              className={`${MockStyles.selection} ${MockStyles.food} ${foodCategory.find(selected => selected.name === food.name) ? MockStyles.selected : ''}`}
              key={`${food.name}-${index}`}
              tag={food.tag}
              onClick={handleMockFoodCategorySelect}
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
        korean.map((food, index) => (
            <button
              className={`${MockStyles.selection} ${korean.find(selected => selected.name === food.name) ? MockStyles.selected : ''}`}
              key={`${food.name}-${index}`}
              onClick={handleMockFoodSelect}
              >{food.name}
              </button>
          )))
      }
    </div>
  </div>
  );
}