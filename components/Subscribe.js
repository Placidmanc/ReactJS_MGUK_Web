import React from 'react';

const Subscribe = (props) => {
  return(
    <section className="section section-inverse overflow-hidden" style={{backgroundColor: `#37373a`}}>
      <div className="container text-center">

        <div className="row align-items-center">

        <div className="col-12 col-md-12 pb-50">
          <h2 className="text-center">Stay Tuned</h2>
          <p className="lead">Subscribe to our newsletter and receive the latest news from Media Grand</p>
          <br />
          <form className="form-inline form-glass justify-content-center validate" action="https://mediagrand.us5.list-manage.com/subscribe/post?u=6b5dcab5bdb6cfb9b0c8a248b&amp;id=35c99f57af" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
          <div className="input-group input-group-lg">
            <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
            <input type="email" name="EMAIL" className="form-control" placeholder="Email Address" />
          </div>

          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{display:`none`}}></div>
            <div className="response" id="mce-success-response" style={{display:`none`}}></div>
          </div>
          <div style={{position: `absolute`, left: `-5000px`}} aria-hidden="true"><input type="text" name="b_6b5dcab5bdb6cfb9b0c8a248b_35c99f57af" tabIndex="-1" value="" /></div>

          <button className="btn btn-lg btn-primary ml-12">Subscribe</button>
          </form>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Subscribe;
