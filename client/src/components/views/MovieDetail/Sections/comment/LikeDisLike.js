import React, { createElement, useState, Form } from 'react';
import {Tooltip } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

function LikeDisLike() {
    const userFrom = localStorage.getItem('userId')
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [OnOff, setOnOffn] = useState(false);
    const [action, setaction] = useState(null)
    const like = () => {
        setLikes(1);
        setDislikes(0);
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
    };

    const DisplayHandler=()=>{
        setOnOffn(!OnOff)
    }
        
    return (
        <div style={{width:"150px", borderBottom:"1px solid #DCDCDC", borderWidth:"5%"}}>
                <span onClick={like}>
                    {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                    <span className="comment-action" style={{padding:'5px'}}>{likes}</span>
                </span>
                <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className="comment-action" style={{padding:'5px'}}>{dislikes}</span>
                </span>
            <span onClick={DisplayHandler} key="comment-basic-reply-to" style={{padding:'8px',fontWeight:'normal' } }>Reply to</span>
            {OnOff && <div>사라지자</div> }

        </div>
    )
};

export default LikeDisLike