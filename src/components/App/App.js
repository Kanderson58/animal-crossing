import './App.css';
import { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
import { getFish } from '../../apiCalls';
import { Collection } from '../Collection/Collection';
import { Fish } from '../Fish/Fish';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allFish: [],
      collectedFish: [],
      caughtFish: {}
    }
    this.fishList = [];
  }

  componentDidMount = () => {
    getFish().then(data => {
      this.setState({ allFish: Object.keys(data).map(key => data[key]) })
    })
  }

  goFishing = () => {
    this.fishList.push((this.state.allFish[Math.floor(Math.random() * 80)]))
    this.setState({ 
      caughtFish: this.fishList[this.fishList.length - 1], 
      collectedFish: (this.state.allFish.filter(fish => this.fishList.includes(fish))) 
    })
  }
  
  render() {
    return (
      <div>
        <Fish goFishing={this.goFishing}/>
        <h1>My Collection</h1>
        <div className='main'>
          {this.state.collectedFish.sort((a, b) => a.id - b.id).map(fish => {
            return <Collection key={fish['file-name']} fish={fish} />})}
        </div>
      </div>
    )
  }
}

export default App;