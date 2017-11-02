import React from 'react';

const ListItem = (props) => (
  console.log('in ListItem: ', props),
  <div className="showTitle">
    { props.show.title }
    <button onClick={props.finishedShow} style={{marginLeft:'10px'}}>Done</button>
  </div>
)

export default ListItem;
