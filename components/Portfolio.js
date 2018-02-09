import React, { Component} from 'react';
import Footer from './Footer';
import PortfolioItem from './PortfolioItem';

//data
import portfolioData from '../data/portfolio.json'



class Portfolio extends Component {

  constructor(props){
    super(props)
    this.state = {
      portfolioFeed: portfolioData
    }
  }



  componentDidMount() {
      console.log("portfolio mounted")
      window.scrollTo(0, 0);
  }

//const Portfolio = (props) => {


render() {
  return (
    <div>
      <div className="header header-inverse" data-parallax="assets/img/consumerAR.jpg" data-overlay="8">
        <div className="container text-center">

          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">

              <h1>Portfolio</h1>
              <p className="fs-22"><strong>A Selection of Our Work</strong></p>

            </div>
          </div>

        </div>
      </div>

      <main className="main-content">

        <section className="section overflow-hidden">
          <div className="container">

            <div data-provide="shuffle">
              <div className="text-center gap-multiline-items-2" data-shuffle="filter">
                <button className="btn btn-w-md btn-outline btn-round btn-info active" data-shuffle="button">All</button>
                <button className="btn btn-w-md btn-outline btn-round btn-info" data-shuffle="button" data-group="location">Geo</button>
                <button className="btn btn-w-md btn-outline btn-round btn-info" data-shuffle="button" data-group="twod">2D</button>
                <button className="btn btn-w-md btn-outline btn-round btn-info" data-shuffle="button" data-group="object">3D Object</button>
                <button className="btn btn-w-md btn-outline btn-round btn-info" data-shuffle="button" data-group="slam">SLAM</button>
                <button className="btn btn-w-lg btn-outline btn-round btn-info" data-shuffle="button" data-group="face">Face</button>
                <button className="btn btn-w-lg btn-outline btn-round btn-info" data-shuffle="button" data-group="glasses">Smart-Glasses</button>
              </div>
              <br/><br/>
              <div className="row gap-y gap-2" data-shuffle="list">

                {this.state.portfolioFeed.map((data) =>
                  <PortfolioItem key={data.id} feed={data} />
                )}

                {/*
                <div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/tccc-unity/">
        				<img src="./assets/img/portfolio/tcccUnity.jpg" alt="TCCC Unity" />
        				<div className="portfolio-details">
        				<h5>The Coca-Cola Company<br/>The New Unity Typeface</h5>
        				<p></p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/bbrot/">
        				<img src="./assets/img/portfolio/buddhabrot.jpg" alt="Buddhabrot" />
        				<div className="portfolio-details">
        				<h5>Buddhabrot<br/>AR enhanced book</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,slam,glasses">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/foi17/">
        				<img src="./assets/img/portfolio/forest17.jpg" alt="Forest of Imagination" />
        				<div className="portfolio-details">
        				<h5>Forest of Imagination<br/>2017</h5>
        				<p>2D, SLAM, Smart-Glasses</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/tate/">
        				<img src="./assets/img/portfolio/tate.jpg" alt="Tate" />
        				<div className="portfolio-details">
        				<h5>Tate:Re-Live<br/>AR enhanced book</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>


        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,slam">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/foi16/">
        				<img src="./assets/img/portfolio/forest.jpg" alt="Forest of Imagination" />
        				<div className="portfolio-details">
        				<h5>Forest of Imagination<br/>2016</h5>
        				<p>2D, SLAM</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/amex/">
        				<img src="./assets/img/portfolio/amex.jpg" alt="American Express" />
        				<div className="portfolio-details">
        				<h5>Amex Offers<br/>Exhibition AR game</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,object,glasses">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/bae/">
        				<img src="./assets/img/portfolio/bae.jpg" alt="BAE Systems" />
        				<div className="portfolio-details">
        				<h5>BAE Systems<br/>AR concept</h5>
        				<p>2D, 3D Object, Smart-Glasses</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/celesio/">
        				<img src="assets/img/portfolio/celesio.jpg" alt="Celesio" />
        				<div className="portfolio-details">
        				<h5>Celesio<br/>Exhibition AR driving game</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/webexpenses/">
        				<img src="assets/img/portfolio/webexpenses.jpg" alt="Webexpenses" />
        				<div className="portfolio-details">
        				<h5>Webexpenses<br/>Exhibition AR game</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/gsma/">
        				<img src="assets/img/portfolio/gsma.jpg" alt="GSMA" />
        				<div className="portfolio-details">
        				<h5>GSMA<br/>AR enhanced book</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,slam">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/all4design/">
        				<img src="assets/img/portfolio/all4ar.jpg" alt="All 4 Design" />
        				<div className="portfolio-details">
        				<h5>All 4 Design<br/>B2B AR viewer</h5>
        				<p>2D, SLAM</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="object,glasses">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/hp/">
        				<img src="assets/img/portfolio/hp.jpg" alt="Hewlett Packard" />
        				<div className="portfolio-details">
        				<h5>Hewlett Packard<br/>AR assisted maintenance</h5>
        				<p>3D Object, Smart-Glasses</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,location">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/buckinghamshire-new-university/">
        				<img src="assets/img/portfolio/bucks.jpg" alt="Buckinghamshire New University" />
        				<div className="portfolio-details">
        				<h5>Buckinghamshire New University<br/>AR Browser</h5>
        				<p>2D, Geolocation</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/jisc/">
        				<img src="assets/img/portfolio/connect.jpg" alt="Jisc" />
        				<div className="portfolio-details">
        				<h5>JISC<br/>Exhibition AR game</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="face">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/simman/">
        				<img src="assets/img/portfolio/simman.jpg" alt="SHU" />
        				<div className="portfolio-details">
        				<h5>Sheffield Hallam University<br/>AR nurse training</h5>
        				<p>Face</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,slam">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/pikcells/">
        				<img src="assets/img/portfolio/slcgi.jpg" alt="pikcells" />
        				<div className="portfolio-details">
        				<h5>Shadowlight Pikcells<br/>AR kitchen designer</h5>
        				<p>2D, SLAM</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/aura-long-road/">
        				<img src="assets/img/portfolio/aura.jpg" alt="Aura Long Road" />
        				<div className="portfolio-details">
        				<h5>Aura Long Road<br/>AR real estate viewer</h5>
        				<p>2D</p>
        				</div>
        				</a>
        				</div>


        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="object">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/bmt/">
        				<img src="assets/img/portfolio/bmt-aegir.jpg" alt="BMT" />
        				<div className="portfolio-details">
        				<h5>BMT Defence Services<br/>AR exhibition model</h5>
        				<p>3D Object</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="twod,location">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/dcc/">
        				<img src="assets/img/portfolio/dcc.jpg" alt="Denbigshire County Council" />
        				<div className="portfolio-details">
        				<h5>Discover Denbighshire<br/>AR tourism</h5>
        				<p>2D, Geolocation</p>
        				</div>
        				</a>
        				</div>

        				<div className="col-6 col-lg-3" data-shuffle="item" data-groups="location">
        				<a className="portfolio-1" href="https://mediagrand.co.uk/lions-of-bath/">
        				<img src="assets/img/portfolio/lions.jpg" alt="Lions of Bath" />
        				<div className="portfolio-details">
        				<h5>Lions of Bath<br/>AR Safari</h5>
        				<p>Geolocation</p>
        				</div>
        				</a>
        				</div>
                */}

              </div>
            </div>

          </div>
        </section>

        <section className="section bg-gray text-center">

          <h2 className="mb-20">Get a Quote</h2>
          <p className="lead text-muted">We’ve developed dozens of projects. Get in touch to discuss yours.</p>
          <hr className="w-50" />
          <a className="btn btn-lg btn-round btn-success" href="/#contact">Discuss your concept</a>

        </section>

      </main>

      <Footer />

    </div>

  )}

}

export default Portfolio;
