import React from 'react';



const ClientItem = (item: Item) => {
  return(
    <img src={item.feed.src} alt={item.feed.alt} />
  )
}


const Clients = (props) => {
  return(
    <section className="section">
      <div className="container">

        <header className="section-header">
          <h2>Just some of our many clients</h2>
        </header>

        <div className="partner">

          { props.feeds.map((item) =>
            <ClientItem key={item.id} feed={item} />
          )}

        </div>

      </div>
    </section>
  )
}

export default Clients;
