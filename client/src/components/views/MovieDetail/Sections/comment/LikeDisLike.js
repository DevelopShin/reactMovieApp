import React, { createElement, useState } from 'react';
import {Tooltip } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

function LikeDisLike() {
    const userFrom = localStorage.getItem('userId')
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
    };

    return (
        <div style={{width:"150px", borderBottom:"1px solid #DCDCDC", borderWidth:"5%"}}>
            <Tooltip key="comment-basic-like" title="Like" >
                <span onClick={like}>
                    {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                    <span className="comment-action" style={{padding:'5px'}}>{likes}</span>
                </span>
            </Tooltip>
            <Tooltip key="comment-basic-dislike" title="Dislike">
                <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className="comment-action" style={{padding:'5px'}}>{dislikes}</span>
                </span>
            </Tooltip>
            <span key="comment-basic-reply-to" style={{padding:'8px',fontWeight:'normal' }}>Reply to</span>

        </div>
    )
};

export default LikeDisLike