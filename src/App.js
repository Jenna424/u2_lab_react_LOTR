import React from 'react'
import './App.css'
import Movie from './components/Movie'

const movies = [
  {
    title: 'The Fellowship of the Ring',
    hours: 2,
    minutes: 58,
    poster:
      'https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
  },
  {
    title: 'The Two Towers',
    hours: 2,
    minutes: 59,
    poster:
      'https://image.tmdb.org/t/p/original/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg'
  },
  {
    title: 'The Return of the King',
    hours: 3,
    minutes: 21,
    poster:
      'https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
  }
]

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings: A Trilogy</h1>
      </header>
      <main>
        {movies.map(({ title, hours, minutes, poster }) => (
          <Movie
            key={title}
            title={title}
            hours={hours}
            minutes={minutes}
            poster={poster}
          />
        ))}
      </main>
    </div>
  )
}

export default App
