import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListOld from './components/ListOld.jsx';
import Search from './components/Search.jsx';
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
  addShow() {
    var showsCopy = this.state.shows
    showsCopy.finished = 0
    this.setState({
      show: showsCopy
    })
  }
  finishedShow(index) {
    var showsCopy = this.state.shows
    showsCopy[index].finished = 1
    this.setState({
      show: showsCopy
    })
  }


  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        console.log('insex.jsx data: ', data);
        this.setState({
          shows: data,
          finished: data.finished
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
        {/* <form className="addShow">
          <input newShow={this.state.inputValue} type="text"></input>
          <input onClick={this.addVideo} type="submit"></input>
        </form> */}
        {/* {this.state.shows.filter(newShow => newShow.finished === 3).map(newShow => <Search newShow={newShow} addShow={() => this.addShow()}/>)} */}
        <Search />
        <List shows={this.state.shows} finishedShow={this.finishedShow.bind(this)}/>
        <ListOld oldShows={this.state.shows}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
