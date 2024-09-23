import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const SwiperCards = () => {
  // Sample data for the cards
  const cards = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
    { title: 'Card 4', description: 'This is the fourth card.' },
    { title: 'Card 5', description: 'This is the fifth card.' },
    { title: 'Card 6', description: 'This is the sixth card.' },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
    
      
      <Swiper
        slidesPerView={1} // Display 1 card at a time
        spaceBetween={10} // Space between cards
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className='cursor-pointer flex-col p-44'>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="swiper-pagination mt-4 flex justify-center "></div>
    </div>
  );
};

export default SwiperCards;
