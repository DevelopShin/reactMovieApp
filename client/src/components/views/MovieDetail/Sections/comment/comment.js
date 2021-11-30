import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar, Form, Button, Input } from 'antd';

import moment from 'moment';
import CommentBoard from './CommentBoard';



function ChatCom() {
    const { TextArea } = Input



    const [Text, setText] = useState("")
    const [TextList, setTextList] = useState([])


    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = () => {
        setTextList([...TextList, Text])
        setText("")
    }


    return (
        <div style={{ margin: "2rem 3rem", width: "85%" }}>
            <div>
                {TextList.map((comment, index) => {
                    return(
                        <CommentBoard comment={comment} key={index} />
                    )
                })
                }
                
            </div>


            <div style={{ width: '85%', margin: '1rem 2rem' }}>
                <Form.Item>
                    <TextArea rows={4} onChange={onChangeHandler} value={Text} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" onClick={onSubmitHandler} type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </div>

        </div>
    );
};

export default ChatCom