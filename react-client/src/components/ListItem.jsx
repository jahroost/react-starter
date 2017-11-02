import React from 'react';

const ListItem = (props) => (
  console.log('in ListItem: ', props),
  <div className="showTitle">
    { props.show.currVideo.title }
    <button style={{marginLeft:'10px'}}>Finished</button>
  </div>
)

export default ListItem;
