import { useState } from 'react'

function AnimeCard({title, year, genre, rating, dec, ep})
{
 const[favorite, setFavorite] = useState(false)
 const[status, setStatus] = useState(false)
 const[details, setDetails] = useState(false)
 const[counter, setCounter] = useState(0)
 const[episodes, toggleEp] = useState(false)

  const favoriteToggle = () =>
  {
   setFavorite(!favorite)
  }

  const statusToggle = () =>
  {
    setStatus(!status)
  }

  const showDetails = () =>
  {
    setDetails(!details)

  }

  const add = () =>
  {
    setCounter(counter + 1)
  }
   const subtract = () =>
  {
    if(counter < 1)
    {
      setCounter(0)
    }
    else
    {
      setCounter(counter - 1)
    }
    
  }

  const reset = () =>
  {
    setCounter(0)
  }

  const showEpisodes = () =>
  {
    toggleEp(!episodes)
  }


  return(
    <div>
      <h1>{counter}</h1>
      <h1>{title}</h1>
      <h2>{genre}</h2>
      <h2>{year}</h2>
      <h2>{rating}</h2>
      
      {favorite ? <h2>❤️</h2> : <h2>🤍</h2>}  
      {status ? <h2>Status: Finished</h2> : <h2>Status: Watching</h2>}
      {details && <p>{dec}</p>}
      {episodes && <h2>{ep}</h2>}


      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={reset}>reset</button>

      <button onClick={favoriteToggle}>Toggle Favorite</button>
      <button onClick={statusToggle}>Toggle Status</button>
      <button onClick={showDetails}>Toggle Details</button>
      <button onClick={showEpisodes}>Toggle Episodes</button>
    </div>
  )



}

export default AnimeCard;