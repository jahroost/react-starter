import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  console.log('props.shows: ', props),
  <div className="currentlyWatching">
    <h4> Currently Watching </h4>
    { props.shows.filter(show => show.status === 'watching').map((show, i) => <ListItem key={show.id} show={show} finishedShow={() => props.finishedShow(i)}/>)}
  </div>
)

// const ListOld = (props) => (
//   <div className
// )

export default List;
