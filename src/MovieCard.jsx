import { useState } from 'react'

function AnimeCard(data)
{
 const[favorite, setFavorite] = useState(false)
 const[status, setStatus] = useState(false)
 const[details, setDetails] = useState(false)
 const[counter, setCounter] = useState(0)

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


  return(
    <div>
      <h1>{counter}</h1>
      <h1>{data.title}</h1>
      <h2>{data.genre}</h2>
      <h2>{data.year}</h2>
      {favorite && <h2>❤️Favorite</h2> || !favorite && <h2>🤍Not Favorite</h2>}
      {status && <h2>Status: Finished</h2> || !status && <h2>Status: Watching</h2>}
      {details && <p>Description: Naruto wants to become Hokage.</p>}


      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={reset}>reset</button>

      <button onClick={favoriteToggle}>Toggle Favorite</button>
      <button onClick={statusToggle}>Toggle Status</button>
      <button onClick={showDetails}>Toggle Details</button>
    </div>
  )



}

export default AnimeCard;