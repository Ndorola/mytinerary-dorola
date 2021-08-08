import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    imagencita: [
      {img: 'bangkok.png', citie: 'Bangkok'},
      {img: 'london.png', citie: 'London'},
      {img: 'paris.png', citie: 'Paris'},
      {img: 'bali.png', citie: 'Bali'},
    ]
  },
  {
    imagencita: [
      {img: 'iguazu.png', citie: 'Puerto Iguazú'},
      {img: 'cafayate.png', citie: 'Cafayate'},
      {img: 'calafate.png', citie: 'Calafate'},
      {img: 'villaLaAngostura.png', citie: 'Villa la Angostura'},
    ]
  },
  {
    imagencita: [
      {img: 'rioDeJaneiro.png', citie: 'Rio de Janeiro'},
      {img: 'roma.png', citie: 'Rome'},
      {img: 'newYork.png', citie: 'New York'},
      {img: 'miami.png', citie: 'Miami'},
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
            {item.imagencita.map((item => (
              <div key={item.citie} className="sliderImage" style={{backgroundImage: `url("/assets/${item.img}")`}}
              > <p className="Ciudades">{item.citie}</p> 
                  </div>
            )))}
                  </div>
          </div>



        {/* <div className="carrouselSection">
          <div className="boxSlider">
            {item.imagencita.map((slide => 
              (<div className="sliderImage" style={{backgroundImage:`url('/assets/${slide.img}')`}}></div>)))}
          </div>
        </div> */}
        
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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