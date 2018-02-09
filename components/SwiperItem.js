import React from 'react';


const SwiperItem = (item: Item) => {
  return(
    <div className="swiper-slide">
      <header className="header header-inverse h-fullscreen p-0" style={{ backgroundImage: `url(${item.feed.headerImg})` }} data-overlay="6">
        <div className="container text-center">
          <div className="row h-full hidden-md-down">
            <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
              <h1 className="display-3">{item.feed.title}</h1>
              <br />
              <p className="lead text-white fs-18"><strong>{item.feed.description}</strong></p>
            </div>
          </div>
          <div className="row h-full hidden-lg-up">
            <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
               <h1>{item.feed.title}</h1>
               <br />
               <p className="text-white fs-16"><strong>{item.feed.description}</strong></p>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SwiperItem;
