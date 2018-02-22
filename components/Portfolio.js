import React, { Component} from 'react';
import Footer from './Footer';
import PortfolioItem from './PortfolioItem';


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
