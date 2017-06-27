import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class Cat extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cat :this.props.cat };

        this.commentAdded = this.commentAdded.bind(this);
    }

    commentAdded(comment) {
        let newCat = this.state.cat;
        newCat.comments.push(comment);
        this.setState( { cat: newCat} );
    }

    render() {
        const catStyle= {
            borderWidth:'1px',
            borderColor:'Red',
            borderStyle:'solid',
            marginBottom: '10px',
            padding: '10px'
        };
        const imgStyle = {
            width: '300px',
            height: '200px'
        };
        return (
            <div style={catStyle}>
                <h1>{this.state.cat.name}</h1>
                <img src={this.state.cat.url} alt="cat" style={imgStyle} />
                <CommentList comments={this.state.cat.comments} />
                <CommentForm onCommentAdded={this.commentAdded}/>
            </div>
        )
    }
}

export default Cat;