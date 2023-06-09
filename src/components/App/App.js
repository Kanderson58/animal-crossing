import './App.css';
import { getFish } from '../../apiCalls';
import { Collection } from '../Collection/Collection';
import { Fish } from '../Fish/Fish';
import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';
import Login from '../Login/Login';
import CaughtFish from '../CaughtFish/CaughtFish';

const App = () => {
  const [allFish, setAllFish] = useState([]);
  const [collectedFish, setCollectedFish] = useState([]);
  const [fishList, setFishList] = useState([]);
  const [caughtFish, setCaughtFish] = useState({});
  const [music, setMusic] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getFish().then(data => {
      setAllFish(Object.keys(data).map(key => data[key]))
    })
    
    fetch('https://acnhapi.com/v1/backgroundmusic/')
      .then(response => response.json())
      .then(data => setMusic(data.BGM_24Hour_00_Rainy))

    if(loggedIn) {
      document.getElementById('audioPlayer').play();
    }
  }, [fishList]);

  const goFishing = () => {
    const newFish = allFish[Math.floor(Math.random() * allFish.length)];
    setCaughtFish(newFish);

    setFishList([...fishList, newFish]);
    setCollectedFish([...fishList, newFish]);
  }

  const uniqueFish = collectedFish?.reduce((acc, cur) => {
    if(acc[cur.id]) {
      acc[cur.id] = cur;
    } else {
      acc[cur.id] = cur;
    }
    return acc;
  }, {})
  
  const fishDisplay = Object.values(uniqueFish)?.sort((a, b) => a.id - b.id).map(fish => {
    return <Collection key={fish['file-name']} fish={fish} />})
  
  return (
    <main>
      {!loggedIn && <Login setLoggedIn={setLoggedIn}/>}
      {loggedIn && <>
      <ReactAudioPlayer
        src={`${music.music_uri}`}
        autoPlay={true}
        controls
        loop={true}
        id='audioPlayer'
        volume={(0.2)}
        className='audio-player'
      />
      <Fish goFishing={goFishing}/>
      {caughtFish['file-name'] && <CaughtFish caughtFish={caughtFish}/>}
      <h1>My Collection</h1>
      <div className='main'>
        {fishDisplay}
      </div>
      </>}
    </main>
  )
}

export default App;