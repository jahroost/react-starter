import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Currently Watching </h4>
    There are { props.shows.length } items.
    { props.shows.map(show => <ListItem show={show}/>)}
  </div>
)

export default List;
