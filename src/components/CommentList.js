import React from 'react';

import Comment from './Comment';

const listStyle= {
    paddingLeft:'0px'
}

class CommentList extends React.Component {
    render () {
        const commentListMap = this.props.comments.map(comment =>{
            return (<Comment key={comment.author} comment={comment}/>)
        });
        return (
            <ul style={listStyle}>
                {commentListMap}
            </ul>
        );
    }
}

export default CommentList;