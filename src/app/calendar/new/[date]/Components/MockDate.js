import { useGlobalContext } from '@/app/Context/store';
import Styles from '../NewContent.module.css'
import MockStyles from './Mock.module.css';
import { activities, foodCategory, allFood } from '@/app/calendar/Utils/selections';
import { useEffect, useState } from 'react';

export default function MockDate({ data }) {
  const { maxcostPerDate, navIdx } = useGlobalContext();
  const [species, setSpecies] = useState('korean');
  const [mockOpened, setMockOpened, content, setContent, category, setCategory, selectedActs, setSelectedActs, cost, setCost] = data;

  useEffect(() => {
    selectedActs.forEach(act => {
      const element = document.getElementById(`bar-${act.name}`);
      element.style.width = `${act.cost / maxcostPerDate * 100}%`;
    });

    selectedActs.forEach(act => {
      const selected_elements = document.querySelectorAll(`.${MockStyles.selected}`);
      selected_elements.forEach(element => {
        document.getElementById(element.id).classList.remove(MockStyles.selected);
      });
    });

    selectedActs.forEach(act => {
      const element = document.getElementById(act.name);
      if (!element) return;
      element.classList.add(MockStyles.selected);
    });

  }, [maxcostPerDate, category, selectedActs]);

  const handleMockActSelect = (e) => {
    e.target.classList.add(MockStyles.selected);
    const res = selectedActs.find(act => act.name === e.target.innerText);
    if (res) {
      setSelectedActs(selectedActs.filter(act => act.name !== e.target.innerText));
      content.place.replace(e.target.innerText, '');
      return;
    }
    setSelectedActs([...selectedActs, activities.find(act => act.name === e.target.innerText)]);
    content.place += e.target.innerText + " ";
    setCategory('foodCategory');
  }
  
  const handleMockFoodCategorySelect = (e) => {
    e.target.classList.add(MockStyles.selected);
    setSpecies(e.target.id);
    setCategory('foodSelection');
  }
  
  const handleMockFoodSelect = (e) => {
    e.target.classList.add(MockStyles.selected);
    const res = selectedActs.find(act => act.name === e.target.id);
    if (res) {
      setSelectedActs(selectedActs.filter(act => act.name !== e.target.id));
      content.food.replace(e.target.id, '');
      return;
    }
    setSelectedActs([...selectedActs, allFood[species].find(act => act.name === e.target.id)]);
    content.food += e.target.id + " ";
  }

  return (
    <div className={Styles.contentWrapper}>
      <div className={MockStyles.costIndicatorWrapper}>
        <div className={MockStyles.costIndicator}>
          {
            selectedActs.map((item, index) => (
              <div className={MockStyles.costIndicatorItem}
                key={`item-${index}`}
                id={`bar-${item.name}`}>
                {item.name}
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
                className={`${MockStyles.selection}`}
                key={`${act.name}-${index}`}
                id={act.name}
                onClick={handleMockActSelect}
              >{act.name}
              </button>
            )))
        }
        {
          category === 'foodCategory' && (
            foodCategory.map((food, index) => (
              <button
                className={`${MockStyles.selection} ${MockStyles.food}`}
                key={`${food.name}-${index}`}
                id={food.tag}
                onClick={handleMockFoodCategorySelect}>
                {food.name}
                <img
                  id={food.tag}
                  src={food.imageUrl}
                  alt={food.name}
                />
              </button>
            )))
        }
        {
          category === 'foodSelection' && (
            allFood[species].map((food, index) => (
              <button
                className={`${MockStyles.selection}`}
                key={`${food.name}-${index}`}
                onClick={handleMockFoodSelect}
                id={`${food.name}`}>
                {food.name}
              </button>
            )))
        }
      </div>
    </div>
  );
}