
import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import LikeDisLike from './LikeDisLike'



function CommentBoard(props) {
    const DateTime = moment('2012-10-15T21:26:17Z')
    // const Comment = props.comment

    return (
        <div style={{margin:'0.5rem'}}>
            <Comment
                author={<a>Han Solo</a>}
                avatar={<Avatar src="https://picsum.photos/200/200" alt="Han Solo" />}
                content={
                    <div>
                        <p>
                            {props.comment}
                        </p>
                        <LikeDisLike />
                    </div>

                }
                datetime={
                    <Tooltip title={moment(DateTime).format('YYYY-MM-DD HH:mm')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />

        </div>
    )
}

export default CommentBoard
