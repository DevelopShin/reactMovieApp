
import React ,{useEffect, useState} from 'react'
import { MOVIE_URL, API_KEY,IMAGE_BASE_URL } from '../../Config';
import MainImage from './Sections/MainImage';
import GridCards from '../commons/GridCards';
import {Row} from 'antd';


function LandingPage() {
    const [Movies, setMovies] = useState([])
    const [MainMovieImg, setMainMovieImg] = useState()
    const [Npage, setNpage] = useState(1)

    useEffect(()=>{
        getImage(Npage)
    }, [])

    const getImage=(Npage)=>{
        const endpoint = `${MOVIE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${Npage}`;
        fetch(endpoint)
        .then(response => response.json())
        .then(response => {
            setMovies([...Movies, ...response.results])
            setMainMovieImg(response.results[0])



        })
        
    }

    const loadMoreItem = ()=>{
        setNpage(Npage+1)
        getImage(Npage)
    }

    return (
        <div style={{width: '100%', margin: '0'}}>
            {MainMovieImg &&
            <MainImage image={`${IMAGE_BASE_URL}w1280${MainMovieImg.backdrop_path}`}
                title = {MainMovieImg.original_title}
                text = {MainMovieImg.overview}
                />
            }
            
            <div style={{width : '85%', margin:'1rem auto', maxWidth:'1850px'} }>
                <h2>Movies by latest</h2>
                <hr />
                
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) =>(
                        <React.Fragment key={index}>
                            <GridCards imageUrl = {movie.poster_path ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`: console.log('noImage') }
                                movieId = {movie.id}
                                movieName = {movie.title}

                            />
                        </React.Fragment>

                    ))}
                </Row>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>

                <button className='btn_more' onClick={loadMoreItem}>Load More </button>
            </div>
        </div>
        


    )
}

export default LandingPage
