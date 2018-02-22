import React from 'react';
import ReactHtmlParser from 'react-html-parser';


const PortfolioItem = (item: Item) => {
  return(

    <div className="col-6 col-lg-3" data-shuffle="item" data-groups={item.feed.groups}>
      <a className="portfolio-1" href={item.feed.url}>
        <img src={item.feed.thumb} alt={item.feed.alt} />
        <div className="portfolio-details">
          <h5>{ReactHtmlParser(item.feed.title)}</h5>
          <p>{item.feed.tracking}</p>
        </div>
      </a>
    </div>
  )
}

export default PortfolioItem;
