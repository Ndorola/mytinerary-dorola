import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

console.log('renderice')

const items = [
  {
    images: [
      {img: 'Bangkok.jpg', citie: 'Bangkok'},
      {img: 'London.jpg', citie: 'London'},
      {img: 'Paris.jpg', citie: 'Paris'},
      {img: 'Bali.jpg', citie: 'Bali'},
    ]
  },
  {
    images: [
      {img: 'iguazu.jpg', citie: 'Puerto Iguazú'},
      {img: 'Cafayate.jpg', citie: 'Cafayate'},
      {img: 'Calafate.jpg', citie: 'Calafate'},
      {img: 'villaLaAngostura.jpg', citie: 'Villa la Angostura'},
    ]
  },
  {
    images: [
      {img: 'RioDeJaneiro.jpg', citie: 'Rio de Janeiro'},
      {img: 'roma.jpg', citie: 'Rome'},
      {img: 'NewYork.jpg', citie: 'New York'},
      {img: 'miami.jpg', citie: 'Miami'},
    ]
  }
]

const Carrousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item, index) => {
      return (
        
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
          >
  
          <div className="carrouselSection">
            <div className="boxSlider">
            {item.images.map((image => (
            <div className="sliderImage"  key={image.citie} style={{backgroundImage: `url("/assets/fotos/${image.img}")`}}
            > <p>{image.citie}</p> 
            </div>
          )))}
                </div>
            </div>
            
          </CarouselItem>
        
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={slides} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default Carrousel;

