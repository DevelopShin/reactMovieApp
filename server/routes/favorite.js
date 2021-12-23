const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite")

//=================================
//             Comment
//=================================

router.post('/favoriteNumber', (req, res) => {
    const movieId = req.body.movieId

    // DB에서 죻아요 숫자 가져오기
    Favorite.find({ "movieId": movieId })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, favoriteNumber: info.length })

        })

})

router.post('/favorited', (req, res) => {
    const movieId = req.body.movieId
    const userFrom = req.body.userFrom


    // DB에서 죻아요 숫자 가져오기
    Favorite.find({ "movieId": movieId, "userFrom": userFrom })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)

            let result = false;
            if (info.length != 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result })

        })

})


router.post('/removeOrAdd', (req, res) => {
    const movieId = req.body.movieId
    const userFrom = req.body.userFrom

    // DB에서 죻아요 숫자 가져오기
    Favorite.find({ "movieId": movieId, "userFrom": userFrom })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)

            if (info.length == 0) { //좋아요 추가
                const favorit = new Favorite(req.body)
                favorit.save((err, doc) => {
                    if (err) {
                        return res.status(400).send(err)
                    }
                    return res.status(200).json({ success: true, successType: true })

                })

            } else { //좋아요 취소
                Favorite.findOneAndDelete({ movieId: movieId, userFrom: userFrom })
                    .exec((err, doc) => {
                        if (err) return res.status(400).send(err)
                        return res.status(200).json({ success: true, successType: false })

                    })
            }
        })

})

router.post('/remove', (req, res) => {
    
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, result) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true })
        })

})



router.post('/favoritelist', (req, res) => {
    const userFrom = req.body.userFrom

    // DB에서 죻아요 숫자 가져오기
    Favorite.find({ "userFrom": userFrom })
        .exec((err, favoriteData) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({
                success: true,
                favoriteData
            })


        })

})

module.exports = router;
