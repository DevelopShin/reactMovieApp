import React,{useEffect, useState} from 'react'
import Axios from 'axios'


export default function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieRunTime = props.movieInfo.runtime

    const [FavoriteNumber, setFavoriteNumber] = useState(0)
    const [Favorited, setFavorited] = useState(0)

    let variables={
        userFrom, movieId, movieTitle, moviePost, movieRunTime
    }

    useEffect(() => {

        Axios.post("/api/favorite/favoriteNumber",variables)
            .then(response => {
                console.log('test',1)
                if(response.data.success){
                    setFavoriteNumber(response.data.favoriteNumber)
                }else{
                    alert("정보불러오는데 실패했습니다.")
                }
            })

        Axios.post("/api/favorite/favorited",variables)
        .then(response => {
            console.log('test',2)

            if(response.data.success){
                setFavorited(response.data.favorited)
            }else{
                alert("정보불러오는데 실패했습니다.")
            }
        })

    
    }, [])

    const onClickFavoritHandler=()=>{
        
        Axios.post("/api/favorite/removeOrAdd", variables)
            .then(response=>{
                const successType = response.data.successType
                if(response.data.success){
                    setFavorited(successType)
                    successType ? setFavoriteNumber(FavoriteNumber+1) : setFavoriteNumber(FavoriteNumber-1)
                }
            })
    }

    return (

        <button onClick={onClickFavoritHandler}>
            {Favorited ? "Not Favorite " : "add to Favorite "} {FavoriteNumber}
        </button>

    )
}
