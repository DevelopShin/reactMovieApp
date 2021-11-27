import React,{useEffect, useState} from 'react'
import { MOVIE_URL, API_KEY,IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './MovieInfo';
function MovieDetail(props) {
      const [Movie, setMovie] = useState([])
 
      useEffect(() => {
            const movieId = props.match.params.movieId
            const endpointCrew = `${MOVIE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
            const endpointInfo = `${MOVIE_URL}/movie/${movieId}?api_key=${API_KEY}`
            fetch(endpointInfo)
            .then(response =>response.json())
            .then(response =>{
                  setMovie(response)
            })
      }, [])

      return (
            <div style={{width: '100%', margin: '1rem auto'}}>
                  {/* header*/}
                  
                  {Movie.backdrop_path && <MainImage image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                        title = {Movie.original_title}
                        text = {Movie.overview}
                        />} 

                  {/* body*/}
                  <div style={{width:'100%', margin: '1rem, auto'}}>
                        <br/>

                        {/*actor grid */}

                        <div style={{display:'flex', justifyContent: 'center', margin: '2rem auto', width: '100%'}}>
                              
                              <MovieInfo movie = {Movie}/>
                        </div>
                  </div>
                  
            </div>
      )
}

export default MovieDetail
