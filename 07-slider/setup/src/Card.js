import React from "react";
import { FaQuoteRight } from 'react-icons/fa';

const Card = ({
    id, 
    image, 
    name, 
    title, 
    quote, 
    index: stateIndex, 
    personIndex, 
    people
    }) => {
        let position = 'nextSlide';
          if(personIndex === stateIndex) {
            position = "activeSlide";
          }
          if(personIndex === stateIndex - 1 || 
            (stateIndex === 0 && personIndex === people.length - 1)) {
            position = "lastSlide";
          }
        return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
        );
}

export default Card;