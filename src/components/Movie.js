import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h1>Lord of the Rings: {props.title}</h1>
      <img src={props.poster} />
      <p>
        Runtime: {props.hours} hours and {props.minutes} minutes
      </p>
    </div>
  )
}

export default Movie
