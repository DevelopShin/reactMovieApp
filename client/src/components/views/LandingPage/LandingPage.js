
import React ,{useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { MOVIE_URL, API_KEY,IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';




function LandingPage() {
    const [Movies, setMovies] = useState([])
    const [MainMovieImg, setMainMovieImg] = useState(null)

    useEffect(()=>{

        const endpoint = `${MOVIE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovies([response.results])
            setMainMovieImg(response.results[0])
        })
        

    },[])

    return (
        <div style={{width: '100%', margin: '0'}}>
            {MainMovieImg &&
            <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImg.backdrop_path}`}/>
            }
            <div style={{width : '85%', margin:'1rem auto'}}>
                <h2>Movies by latest</h2>
                <hr />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <button className='btn_more'>Load More </button>
            </div>
        </div>
        


    )
}

export default LandingPage
