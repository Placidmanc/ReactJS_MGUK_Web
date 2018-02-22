import React, {Component} from 'react';
import Footer from './Footer';



class Products extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
      console.log("products mounted")
      window.scrollTo(0, 0);
  }



 render() {
  return(
    <div>
      <header className="header header-inverse" ref="prodheader" data-parallax="assets/img/creativeAR.jpg" data-overlay="8">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h1>Media Grand's</h1>
              <p className="fs-22"><strong>Creative AR Apps</strong></p>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">

  		    <section className="section bg-gray py-120">
  			       <div className="container">
  			            <div className="row gap-y align-items-center">

  				                <div className="col-12 col-lg-6">
  				                      <h3>Creative AR Apps</h3>
  				                      <p>When you think of AR, you might think of placing virtual furniture in a room with IKEA Place or playing Pokémon Go with your friends. Both are great examples of AR, but they lack the creativity that we thrive on, which is why we built our very own Creative AR platform.</p>
  				                       <br />
  				                       <div className="row gap-y gap-3">
                          					<div className="col-12 col-md-6">
                          					  <h6 className="heading-alt">Customisable </h6>
                          					  <p>Add as many of your own brand assets as you like to provide users with creative storytelling elements.</p>
                          					</div>
                          					<div className="col-12 col-md-6">
                          					  <h6 className="heading-alt">Social</h6>
                          					  <p>Sharing is built in as standard, you just need to decide if it will be location, email, PDF, video, animated GIF, social media, or all of the above.</p>
                          					</div>
                          					<div className="col-12 col-md-6">
                          					  <h6 className="heading-alt">Storytelling</h6>
                          					  <p>Create multi-frame comic strips, or animations to bring your story to life.</p>
                          					</div>
                          					<div className="col-12 col-md-6">
                          					  <h6 className="heading-alt">White Label</h6>
                          					  <p>Completely customisable design including graphics, UI, colours and fonts.</p>
                          					</div>
  				                     </div>
  				               </div>
  				               <div className="col-12 col-lg-6 text-center">
  				                     <div className="video-btn-wrapper" data-aos="fade-up">
  					                          <img className="shadow-2" src="assets/img/product/legofire.jpg" alt="Lego Fire Reality Comic Creator" />
  					                          <a className="btn btn-circular btn-lg btn-danger" href="//youtu.be/nvvPX90FhKc" data-provide="lightbox"><i className="fa fa-play"></i></a>
  				                     </div>
  				               </div>

  			            </div>
  			       </div>
  		   </section>

      		<section className="section bg-gray section-inverse text-center overflow-hidden" style={{backgroundColor: `#37373a`}}>
        		   <h2 className="mb-20">Interested in Creative AR?</h2>
        		   <p className="lead text-muted">Contact us today to find out how our Creative AR platform can benefit your brand.</p>
        		   <hr className="w-50" />
        		   <a className="btn btn-lg btn-round btn-success" href="/#contact">Get in Touch</a>
      		</section>

  		    <section className="section">
  			       <div className="container">

        			       <header className="section-header"><h2>Creative AR Apps</h2></header>
        			       <div className="row no-gap">
        				          <div className="col-12 col-md-6 bg-img" style={{backgroundImage: `url(assets/img/product/foi1.jpg)`}}></div>
        				          <div className="col-12 offset-md-1 col-md-4 py-90">
        				                <h5>Forest of Imagination</h5>
        				                <p>The first publicly available version made it possible for anyone to create and share geocoded forests.</p>
        				          </div>
                          <div className="col-12 offset-md-1 col-md-4 py-90">
        					               <h5>SantAR</h5>
        					               <p>A Christmas designer app that put festive creations anywhere and everywhere for people to share via email and location with friends and family</p>
        				          </div>
                          <div className="col-12 offset-md-1 col-md-6 bg-img" style={{backgroundImage: `url(assets/img/product/santar1.jpg)`}}></div>
        			       </div>
        			       <div className="row no-gap">
        				         <div className="col-12 col-md-6 bg-img" style={{backgroundImage: `url(assets/img/product/rcc1.jpg)`}}></div>
                         <div className="col-12 offset-md-1 col-md-4 py-90">
        				               <h5>Reality Comic Creator</h5>
        				               <p>The first version to integrate a wide range of drawing and text tools for creative freedom. Introduced the concept of frames for storytelling. </p>
        				         </div>
                         <div className="col-12 offset-md-1 col-md-4 py-90">
        					             <h5>Reality TAGR</h5>
        					             <p>A more grown up version of Comic Creator that makes it possible to create virtual street art on buildings, or to tag existing street art with your own designs. </p>
        				        </div>
                        <div className="col-12 offset-md-1 col-md-6 bg-img" style={{backgroundImage: `url(assets/img/product/tagr1.jpg)`}}></div>
        			      </div>
  			    </div>
  		   </section>

      		<section className="section bg-gray section-inverse text-center overflow-hidden" style={{backgroundColor: `#37373a`}}>
          		<h2 className="mb-20">Get in Touch</h2>
          		<p className="lead text-muted">Share our vision and let us turn your concept into a new reality.</p>
          		<hr className="w-50" />
          		<a className="btn btn-lg btn-round btn-success" href="/#contact">WORK WITH US</a>
      		</section>

      </main>

      <Footer />

    </div>
  )}
}

export default Products;
