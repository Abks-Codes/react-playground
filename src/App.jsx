import './App.css'
import AnimeCard from './MovieCard.jsx'

function App() {

  
  const animelist = [
    {
      title: "Naruto",
      year: 2002,
      genre: "Ninja",
      rating: "10/10",
      detail: "Naruto is a kid who wants to be hokage(Leader of a village)",
      epi: "Episodes: 720",
    },

    {
      title: "One Piece",
      year: 1999,
      genre: "Pirates",
      rating: "9/10",
      detail: "Luffy is a kid who wants to be become Pirate King",
      epi: "Episodes: 1100+",
    },

    {
      title: "Attack on Titan",
      year: 2013,
      genre: "Titans",
      rating: "8/10",
      detail: "Eren wants absoultue freedome for the world",
      epi: "Episodes: 94"
    }
  ]

  return (
    <>
    <h1>K7 React</h1>
    <p>Kirito The Goat</p>
    {animelist.map((anime) => (
     <AnimeCard title = {anime.title} genre = {anime.genre} year = {anime.year} rating = {anime.rating} dec = {anime.detail} ep = {anime.epi}/>
    ))}

    
    
    </>
  )
}

export default App