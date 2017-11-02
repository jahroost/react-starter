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
    this.addVideo = () => {
      console.log('this was clicked');
      this.shows.push(newShow)
    }
  }


  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        console.log('insex.jsx data: ', data);
        this.setState({
          shows: data
        })
      },
      error: (err) => {
        console.log('INDEX.JSX err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <form className="addShow">
          <input newShow={this.state.inputValue} type="text"></input>
          <input onClick={this.addVideo} type="submit"></input>
        </form>
        <List shows={this.state.shows}/>
        <ListOld oldShows={this.state.oldShows}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
