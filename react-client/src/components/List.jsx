import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  console.log('props.shows: ', props),
  <div className="currentlyWatching">
    <h4> Currently Watching </h4>
    { props.shows.map(show => <ListItem show={show}/>)}
  </div>
)

// const ListOld = (props) => (
//   <div className
// )

export default List;
