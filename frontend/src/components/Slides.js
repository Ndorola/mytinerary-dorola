import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    images: [
      {img: 'bangkok.png', citie: 'Bangkok'},
      {img: 'london.png', citie: 'London'},
      {img: 'paris.png', citie: 'Paris'},
      {img: 'bali.png', citie: 'Bali'},
    ]
  },
  {
    images: [
      {img: 'iguazu.png', citie: 'Puerto Iguazú'},
      {img: 'cafayate.png', citie: 'Cafayate'},
      {img: 'calafate.png', citie: 'Calafate'},
      {img: 'villaLaAngostura.png', citie: 'Villa la Angostura'},
    ]
  },
  {
    images: [
      {img: 'rioDeJaneiro.png', citie: 'Rio de Janeiro'},
      {img: 'roma.png', citie: 'Rome'},
      {img: 'newYork.png', citie: 'New York'},
      {img: 'miami.png', citie: 'Miami'},
    ]
  }
]
 

const Slides = (props) => {
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
          <div className="sliderImage"  key={image.citie} style={{backgroundImage: `url("/assets/${image.img}")`}}
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

export default Slides;