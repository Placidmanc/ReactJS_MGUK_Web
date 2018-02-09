import React from 'react';


const ClientItem = (item: Item) => {
  return(
    <img src={item.feed.src} alt={item.feed.alt} />
  )
}

export default ClientItem;
