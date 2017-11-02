import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListOld from './components/ListOld.jsx';
import exampleData from './data/exampleData';
import exampleDataOld from './data/exampleDataOld';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: exampleData,
      oldShows: exampleDataOld
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         shows: window.exampleData
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render () {
    return (<div>
      <List shows={this.state.shows}/>
      <ListOld oldShows={this.state.oldShows}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
