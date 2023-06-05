import './Collection.css'

export const Collection = ({fish}) => {
  return (
    <div className='collection'>
      <img className='fishIcon' src={fish.icon_uri} alt={fish['file-name']}/>
      <p className='fishName'>{fish['file-name'].replace('_', ' ')}</p>
    </div>
  )
}