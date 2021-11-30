import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./FavoritePage.css"
import { Popover } from 'antd';
import { MOVIE_URL, IMAGE_BASE_URL } from '../../Config';

function FavoritePage() {
    const userFrom = localStorage.getItem('userId')
    const [MyFavoriteList, setMyFavoriteList] = useState([])


    useEffect(() => {
        fetchFavoredMovie()
    }, []);


    const onClickDelete = (movieId, userFrom) => {
        const variables = { movieId, userFrom }
        Axios.post('api/favorite/remove', variables)
            .then(res => {
                if (res.data.success) {
                    fetchFavoredMovie()
                } else { alert('실패') }
            })
    }

    const fetchFavoredMovie = () => {
        Axios.post("api/favorite/favoritelist", { userFrom })
            .then(res => {
                if (res.data.success) {
                    // const list = res.data.favoriteData
                    setMyFavoriteList(res.data.favoriteData)
                    console.log(res.data.favoriteData)

                    // list.map((favorites, index) => {
                    //     const moviId = favorites.movieId
                    //     Axios.post("/api/favorite/favoriteNumber", { movieId: moviId })
                    //         .then(response => {
                    //             if (response.data.success) {
                    //                 favorites['likeNum'] = response.data.favoriteNumber
                    //                 // console.log(favorites)
                    //             }
                    //         })
                    // })
                    // setMyFavoriteList(res.data.favoriteData)
                }
            })
    }

    const renderCards = MyFavoriteList.map((favorite, index) => {

        const content = (
            <div>
                {favorite.moviePost ?

                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`} /> : "no image"}


            </div>
        )


        return <tr key={index}>

            <Popover content={content} title={`${favorite.movieTitle}`} >
                <td>{favorite.movieTitle}</td>
            </Popover>

            <td>{favorite.movieRunTime} mins</td>
            <td>{favorite.movieId} </td>

            <td><button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>Remove</button></td>

        </tr>
    })


    return (
        <div>
            <div style={{ width: "85%", margin: "3rem auto" }}>
                <h2>My Favorite movie list</h2>

                <hr />

                <table>
                    <thead>
                        <tr>
                            <th>Movie Title</th>
                            <th>Movie Runtime</th>
                            <th>Movie Id</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FavoritePage
