import React from 'react';


const Welcome = (props) => {
  return(
    <section className="overflow-hidden">
      <div className="container">

        <header className="section-header">

          <h2>Welcome</h2>

          <p className="lead">Welcome to Media Grand, the virtual home of boundless creativity, cool innovation and ground-breaking AR concepts since 2008.</p>

          <p>Augmented reality provides the most effective visualisation medium available and is the bridge between the physical and virtual worlds that will change our lives, at work and at play, to the extent that we may one day wonder, how we lived without it.</p>

          <p>Share our vision and let us turn your concept into a new reality.</p>

          <br />

          <a className="btn btn-lg btn-round w-200 btn-success" href="/#contact">Work with us</a>

        </header>

      </div>
    </section>
  )
}

export default Welcome;
