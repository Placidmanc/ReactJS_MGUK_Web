import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Swiper from './components/Swiper';
import About from './components/About';
import Welcome from './components/Welcome';
import Clients from './components/Clients';
import Subscribe from './components/Subscribe';
import TwitterGrid from './components/TwitterGrid';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Products from './components/Products';
import Portfolio from './components/Portfolio';


import swiperData from './data/swiper.json'
import clientsData from './data/clients.json'




class App extends Component {

  constructor(props){
    super(props)
    this.swiperFeed = swiperData
    this.clientsFeed = clientsData
    this.state = {
    }
  }


  render() {
    return (
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <div>

            <Topbar />
            <Switch>
                <Route exact path="/" render={(props) => (
                    <div>
                      <Swiper feeds={this.swiperFeed} />

                      <main className="main-content">
                        <Welcome />
                        <About />
                        <Clients feeds={this.clientsFeed} />
                        <Subscribe />
                        <TwitterGrid />
                        <Contact />
                      </main>

                      <Footer />

                    </div>
                )} />

                <Route exact path='/Products' component={Products} />
                <Route exact path='/Portfolio' component={Portfolio} />


             </Switch>

          </div>
      </Router>
    );
  }
}

export default App;
