import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  console.log('props.shows: ', props.shows),
  <div>
    <div className="currentlyWatching">
      <h4> Currently Watching </h4>
      { props.shows.shows.map(show => <ListItem show={show}/>)}
    </div>
    <div className="previouslyWatched">
      <h4> Previously Watched </h4>
      { props.shows.shows.map(show => <ListItem show={show}/>)}
    </div>
  </div>
)

// const ListOld = (props) => (
//   <div className
// )

export default List;
