import React from 'react';
import SwiperItem from './SwiperItem'


const Swiper = (props) => {
  return(
    <div className="swiper-container swiper-button-box no-padding">
      <div className="swiper-wrapper">

          { props.feeds.map((item) =>
            <SwiperItem key={item.id} feed={item} />
          )}


        {/*
        <div className="swiper-slide">
          <header className="header header-inverse h-fullscreen p-0" style={{backgroundImage: `url(assets/img/commercialAR.jpg)`}} data-overlay="6">
            <div className="container text-center">
              <div className="row h-full hidden-md-down">
                <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                  <h1 className="display-3">AR Assisted Product Maintenance &amp; Service</h1>
                  <br />
                  <p className="lead text-white fs-18"><strong>Improve Productivity - Reduce Errors - IoT Ready – Future Focused</strong></p>
                </div>
              </div>
              <div className="row h-full hidden-lg-up">
                <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                   <h1>AR Assisted Product Maintenance &amp; Service</h1>
					         <br />
					         <p className="text-white fs-16"><strong>Improve Productivity - Reduce Errors - IoT Ready – Future Focused</strong></p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="swiper-slide">
          <header className="header header-inverse h-fullscreen p-0" style={{backgroundImage: `url(assets/img/eventsAR.jpg)`}} data-overlay="6">
            <div className="container text-center">
              <div className="row h-full hidden-md-down">
                <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                  <h1 className="display-3">Ground-Breaking Bespoke AR Concepts</h1>
					             <br />
					             <p className="lead text-white fs-18"><strong>We pride ourselves on creating world-firsts in the field of AR</strong></p>
                </div>
              </div>
              <div className="row h-full hidden-lg-up">
                <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                    <h1>Ground-Breaking Bespoke AR Concepts</h1>
					          <br />
					          <p className="text-white fs-16"><strong>We pride ourselves on creating world-firsts in the field of AR</strong></p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="swiper-slide">
          <header className="header header-inverse h-fullscreen p-0" style={{backgroundImage: `url(assets/img/creativeAR.jpg)`}} data-overlay="6">
            <div className="container text-center">
              <div className="row h-full hidden-md-down">
                <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                  <h1 className="display-3">The Next Industrial Revolution Is Here </h1>
					        <br />
					        <p className="lead text-white fs-18"><strong>AR is already changing the way we live and work</strong></p>
                </div>
              </div>
              <div className="row h-full hidden-lg-up">
                <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                  <h1>The Next Industrial Revolution Is Here </h1>
	                 <br />
			             <p className="text-white fs-16"><strong>AR is already changing the way we live and work</strong></p>
                </div>
              </div>
            </div>
          </header>
        </div>
        */}

        <div className="swiper-button-prev hidden-sm-down"></div>
        <div className="swiper-button-next hidden-sm-down"></div>

      </div>
  </div>
  )
}

export default Swiper;
