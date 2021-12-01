import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Form, Button, Input } from 'antd';
import Axios from 'axios'
import moment from 'moment';
import CommentBoard from './CommentBoard';
const userFrom = localStorage.getItem('userId')



function ChatCom() {
    const { TextArea } = Input

    const [Text, setText] = useState("")
    const [TextList, setTextList] = useState([])

    useEffect(() => {
        console.log('useEffect')
    }, [])





    const onSubmitHandler = (e) => {
        console.log(e.target.vaue)
        e.preventDefault()
        // Axios.post('api/comment/textditor')

        setTextList([...TextList, Text])
        setText("")
    }


    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <div style={{ margin: "2rem auto", maxWidth: "1268px", border: 'solid 1px #f0f0f0' }}>
            <div style={{ width: "100%", borderBottom: "1px solid #f0f0f1", minHeight: '100px' }}>
                {TextList.map((comment, index) => {
                    return (
                        <CommentBoard comment={comment} key={index} />
                    )
                })
                }

            </div>

            {/** text editor */}
            <div style={{ width: '100%', margin: '2rem auto' }}>

                <Form style={{ margin: '1rem ' }} onSubmit>
                    <Form.Item>
                        <TextArea rows={4} onChange={onChangeHandler} value={Text} />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={onSubmitHandler} type="primary">
                            Add Comment
                        </Button>
                    </Form.Item>
                </Form>

            </div>

        </div>
    );
};

export default ChatCom