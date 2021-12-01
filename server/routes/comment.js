const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment")

//=================================
//             Comment
//=================================

router.post('/savetext', (req, res) => {
    // console.log(req.body.text)
    const comment = new Comment(req.body)
    comment.save((err, comment)=>{
        if(err) return res.json({success:false, err})
        Comment.find({'_id': comment._id})
            .populate('userFrom')
            .exec((err, result)=>{
                if(err) return res.json({success:false, err})
                return res.status(200).json({success:true, result})
            })
    })

})


router.post('/loadcomment', (req, res) => {
    const movieId = req.body.movieId

    // DB에서 죻아요 숫자 가져오기
    Comment.find({ "movieId": movieId })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, commentList: info })

        })

})


module.exports = router;
