import React from 'react';

const ListItem = (props) => (
  console.log(props.show.show),
  <div>
    <div className="showTitle">
      { props.show.show.currVideo.title }
    </div>
    
  </div>
)

export default ListItem;
