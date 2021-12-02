import React, { createElement, useState, useEffect } from 'react';
import { Comment, Tooltip, Avatar, Form, Button, Input } from 'antd';
import Axios from 'axios'
import moment from 'moment';
//nfn

function SingleComment(props) {
    const { TextArea } = Input
    const [OpenReply, setOpenReply] = useState(false)
    const [Text, setText] = useState('')
    const [TextList, setTextList] = useState([])

    const variable = {
        text: Text,
        userFrom: localStorage.getItem('userId'),
        movieId: props.comment.movieId,
        responseTo: props.comment._id
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
                        props.fetchComment()
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



    const onClickReplyOpen = () => {
        setOpenReply(!OpenReply)
    }

    const actions = [
        <span onClick={onClickReplyOpen}  style={{ margin: '0', padding: '0' }}>Replay</span>
    ]

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <Comment style={{marginLeft:'1rem', padding:0}}
                author={<p>{props.comment.name}</p>}
                actions={actions}
                avatar={<Avatar src="https://picsum.photos/200/200"/>}
                content={<div>{props.comment.text} </div>}


                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm')}>
                        <span>{moment().fromNow('YYYY-MM-DD T12:HH:mm')}</span>
                    </Tooltip>
                }

            />
            {OpenReply &&
                <div style={{ width: '85%', marginLeft:'2rem'}}>
                    <Form style={{ margin: '1rem ' }} onSubmit={onSubmitHandler}>
                        <Form.Item>
                            <TextArea rows={3} onChange={onChangeHandler} value={Text} placeholder="댓글을입력해주세요" />
                        {/* </Form.Item>
                        <Form.Item> */}
                            <Button onClick={onSubmitHandler} type="primary">
                                Add Comment
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            }


        </div>
    )
}

export default SingleComment
