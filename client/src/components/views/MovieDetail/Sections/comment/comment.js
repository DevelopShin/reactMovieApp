import React, { createElement, useState, useEffect } from 'react';
import { Comment, Tooltip, Avatar, Form, Button, Input, TextArea } from 'antd';
import Axios from 'axios'
import moment from 'moment';
// import CommentBoard from './CommentBoard';
import SingleComment from './SingleComment.js';

const userFrom = localStorage.getItem('userId')

function ChatCom(props) {
    const { TextArea } = Input

    const [Text, setText] = useState("")
    const [TextList, setTextList] = useState([])
    
    const variable = {
        text: Text,
        userFrom: userFrom,
        movieId: props.movieId,
    }
    useEffect(() => {
        fetchComment()
    }, [])


    const fetchComment = () => { //포스트에 대한 모든 댓글 블러오기
        Axios.post('/api/comment/loadcomment', { movieId: props.movieId })
            .then(req => {
                if (req.data.success) {
                    console.log(req.data.commentList)
                    setTextList(req.data.commentList)

                } else {
                    alert('전체댓글 블러오는데 실패')
                }
            })
    }

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()


        let blank_pattern = /^\s+|\s+$/g;  // 공백패턴
        if (Text.replace(blank_pattern, '') !== "") {
            console.log('text:', variable.text)
            Axios.post('/api/comment/savetext', variable)
                .then(res => {
                    if (res.data.success) {
                        console.log(res.data.result)
                        fetchComment()
                        setText('')

                    } else {
                        console.log('err: ', res.data.err)
                        setText('')
                    }
                })

            // setTextList([...TextList, Text])
        } else {
            alert("내용을 입력하세요")
            setText('')
        }
    }


    return (
        <div style={{ margin: "2rem auto", maxWidth: "1268px", border: 'solid 1px #f0f0f0' }}>

            <div style={{ width: "100%", borderBottom: "1px solid #f0f0f1", minHeight: '100px' }}>
                {TextList && TextList.map((comment, index) => (
                        <React.Fragment key={index}>
                            {/* <CommentBoard comment={comment.text} commentInfo={comment} /> */}
                            <SingleComment comment={comment} fetchComment={fetchComment}/>
                        </React.Fragment>
                    
                ))}

            </div>

            {/** text editor */}
            <div style={{ width: '100%', margin: '2rem auto' }}>
                <Form style={{ margin: '1rem ' }} >
                    <Form.Item>
                        <TextArea rows={4} onChange={onChangeHandler} value={Text} placeholder="댓글을입력해주세요"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='htmlSubmit' onClick={onSubmitHandler} type="primary">
                            Add Comment
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ChatCom