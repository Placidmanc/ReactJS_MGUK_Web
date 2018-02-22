import React from 'react';
import SwiperItem from './SwiperItem'


const Swiper = (props) => {
  return(
    <div className="swiper-container swiper-button-box no-padding">
      <div className="swiper-wrapper">

          { props.feeds.map((item) =>
            <SwiperItem key={item.id} feed={item} />
          )}


        <div className="swiper-button-prev hidden-sm-down"></div>
        <div className="swiper-button-next hidden-sm-down"></div>

      </div>
  </div>
  )
}

export default Swiper;
