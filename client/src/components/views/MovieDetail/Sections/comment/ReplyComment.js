import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment'


function ReplyComment(props) {
    const [OnOffChildComment, setOnOffChildComment] = useState(false)
    const TextList = props.comment
    const [ChildCommentNum, setChildCommentNum] = useState(0)
    // console.log(props.parentComment._id)
    // console.log('Re all:',props.comment[8].responseTo)

    useEffect(() => {
        let commentNumber = 0
        props.comment.map((comment, index) => {
            if (comment.responseTo === props.parentComment._id) {
                commentNumber ++
                console.log('num: ',commentNumber)
            }
        })
        setChildCommentNum(commentNumber)
    }, [TextList, props.parentComment])

    let renderReplyComment = (parentCommentId) => 
        props.comment.map((comment, index) => (
            

            <React.Fragment key={index}>
                {comment.responseTo === parentCommentId &&
                    <div style={{width:"70%", marginLeft:"3rem", fontSize:'12px'}}>
                        <SingleComment comment={comment} fetchComment={props.fetchComment} movieId= {props.movieId}/>
                        <ReplyComment comment={props.comment} parentComment = {comment} fetchComment={props.fetchComment} movieId= {props.movieId}/>
                    </div>
                }

            </React.Fragment>
        ))
    
    const onClickHandler = () => {
        setOnOffChildComment(!OnOffChildComment)
    }
    return (
        <div>
            {ChildCommentNum > 0 &&
                <p style={{ fontSize: '12px', margin: 0, color: 'gray', marginTop:0 , marginLeft:'3rem',cursor: "pointer"}} onClick={onClickHandler}>
                    view <h5 style={{display:'inline'}}>{ChildCommentNum}</h5> more comment(s)
                </p>
            }
        
            {/**대댓 */}
            {OnOffChildComment && renderReplyComment(props.parentComment._id)}

        </div>
    )
}

export default ReplyComment
