import React from 'react';

    const commentStyle = {
        borderWidth:'2px',
        borderColor:'Grey',
        borderStyle:'solid',
        marginBottom: '5px',
        padding:'5px'
    }

class Comment extends React.Component {

    render () {
        return (
            <div style={commentStyle}>
                <h2>{this.props.comment.author}</h2>
                <p>{this.props.comment.body}</p>
            </div>
        )
    }
}

export default Comment;