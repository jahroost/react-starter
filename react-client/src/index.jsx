import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import exampleData from './data/exampleData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: exampleData
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
      <h1>Shows</h1>
      <List shows={this.state.shows}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
