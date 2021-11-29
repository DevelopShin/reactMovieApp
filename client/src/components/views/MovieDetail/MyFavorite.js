import React,{useEffect,useState} from 'react'
import Axios from 'axios'


export default function MyFavorite() {

    const [MyFavoriteList, setMyFavoriteList] = useState()
    useEffect(() => {

        Axios.post("api/favorite/mylist",variable)
    }, [input])
    return (
        <div>
            
        </div>
    )
}
