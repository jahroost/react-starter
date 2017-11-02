import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  console.log('props.shows: ', props),
  <div className="currentlyWatching">
    <h4> Currently Watching </h4>
    { props.shows.filter(show => show.finished === 0).map((show, i) => <ListItem show={show} finishedShow={() => props.finishedShow(i)}/>)}
  </div>
)

// const ListOld = (props) => (
//   <div className
// )

export default List;
