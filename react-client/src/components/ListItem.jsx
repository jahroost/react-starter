import React from 'react';

const ListItem = (props) => (
  console.log('in ListItem: ', props),
  <div className="showTitle">
    { props.show.currVideo.title }
    <form><input size="3"></input></form>
  </div>
)

export default ListItem;
