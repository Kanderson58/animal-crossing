import './Fish.css'

export const Fish = ({goFishing}) => {
  return (
    <div className='go-fishing'>
      <button onClick={goFishing} className='go-fishing-btn'>
      <img src='https://dodo.ac/np/images/a/a1/Fishing_Rod_%28Blue%29_NH_Icon.png' alt='fishing pole'/>
      <p>Go Fishing!</p></button>
    </div>
  )
}