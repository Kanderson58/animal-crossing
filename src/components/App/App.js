import './App.css';
import { getFish } from '../../apiCalls';
import { Collection } from '../Collection/Collection';
import { Fish } from '../Fish/Fish';
import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import React from 'react';

const App = () => {
  const [allFish, setAllFish] = useState([]);
  const [collectedFish, setCollectedFish] = useState([]);
  const [fishList, setFishList] = useState([]);
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
    if (!fishList.find(fish => fish.id === newFish.id)) {
      setFishList([...fishList, newFish]);
    }
    setCollectedFish([...fishList, newFish]);
  }
  
  return (
    <div>
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
      <h1>My Collection</h1>
      <div className='main'>
        {collectedFish.sort((a, b) => a.id - b.id).map(fish => {
          return <Collection key={fish['file-name']} fish={fish} />})}
      </div>
      </>}
    </div>
  )
}

export default App;