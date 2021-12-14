import React from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Card from './Card';


const Slider = ({people, index, setIndex}) => {
    return (
        <div className="section-center">
        {people.map((person, personIndex) => {
          return <Card key={person.id} {...person} personIndex={personIndex} index={index} people={people}/>
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    );
}

export default Slider;