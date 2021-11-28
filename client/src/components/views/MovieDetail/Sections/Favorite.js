import React,{useEffect} from 'react'
import Axios from 'axios'


export default function Favorite(props) {
    const movieId = props.movieId
    const userFrom = props.userFrom
    const movieTitle = props.movieInfo.title
    const moviePost = props.movieInfo.backdrop_path
    const movieUnTime = props.movieInfo.runtime

    useEffect(() => {
        let variables={
            userFrom, movieId
        }
        Axios.post("/api/favorite/FavoriteNumber",variables)
            .then(response => {
                console.log(response.data)

                if(response.data.success){
                }else{
                    alert("정보불러오는데 실패했습니다.")
                }
            })

    
    }, [])
    return (

        <button>
            Favorite
        </button>

    )
}
