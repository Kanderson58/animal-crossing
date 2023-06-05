import './App.css';
import { getFish } from '../../apiCalls';
import { Collection } from '../Collection/Collection';
import { Fish } from '../Fish/Fish';
import { useEffect, useState } from 'react';

const App = () => {
  const [allFish, setAllFish] = useState([]);
  const [collectedFish, setCollectedFish] = useState([]);
  const [fishList, setFishList] = useState([]);

  useEffect(() => {
    getFish().then(data => {
      setAllFish(Object.keys(data).map(key => data[key]))
    })
  })

  const goFishing = () => {
    setFishList([...fishList, allFish[Math.floor(Math.random() * 80)]]);
    setCollectedFish(allFish.filter(fish => fishList.includes(fish)))
  }

  return (
    <div>
      <Fish goFishing={goFishing}/>
      <h1>My Collection</h1>
      <div className='main'>
        {collectedFish.sort((a, b) => a.id - b.id).map(fish => {
          return <Collection key={fish['file-name']} fish={fish} />})}
      </div>
    </div>
  )
}

export default App;