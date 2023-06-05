import './CaughtFish.css'

const CaughtFish = ({caughtFish}) => {
  return (
    <div className="caught-fish">
      <p>You caught a {caughtFish['file-name'].replace('_', ' ')}!</p>
      <p>"{caughtFish['catch-phrase']}"</p>
      <img src={caughtFish.icon_uri} alt={caughtFish['file-name']}/>
    </div>
  )
}

export default CaughtFish;