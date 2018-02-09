import React from 'react';

const TwitterGrid = (props) => {
  return(
    <section className="section">
      <div className="container">

        <h2 className="text-center">News About Augmented Reality</h2>

        <br />

        <a className="twitter-grid" data-limit="5" data-partner="tweetdeck" href="https://twitter.com/mediagranduk/timelines/900642270986334209">Augmented Reality</a>

        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>


      </div>
    </section>
  )
}

export default TwitterGrid;
