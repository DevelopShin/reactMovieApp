const express = require('express');
const router = express.Router();
const {Favorite} =require("../models/Favorite")

//=================================
//             User
//=================================

router.post('/FavoriteNumber', (req, res)=>{
    const movieId = req.body.movieId

    // DB에서 죻아요 숫자 가져오기
    Favorite.find({"movieId": movieId})
        .exec((err, info) => {
            if (err) return res.status(400).send(err)

            res.status(200).json({success:true, favoriteNumber: info.length})

        })

})




module.exports = router;
