import React from 'react';

class CommentForm extends React.Component{

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
        this.authorChanged = this.authorChanged.bind(this);
        this.bodyChanged = this.bodyChanged.bind(this);
        this.state = {};
    }

    clickHandler (ev) {
        ev.preventDefault(); // stops the whole page automatically refreshing when you dont need it to
        
        this.props.onCommentAdded({author:this.state.author, body:this.state.body});
        this.setState({author:'', body:''});
    }

    authorChanged(evt) {
        this.setState({author : evt.target.value});
    }

    bodyChanged(evt) {
        this.setState({body: evt.target.value});
    }

    render() {
        return(
            <div>
            <form>
                Name:<br/>
                <input type='text' name='Author' value={this.state.author} onChange={this.authorChanged} /><br/>
                Comment:<br/>
                <input type='text' name='Comment' value={this.state.body} onChange={this.bodyChanged} /><br />
                <button onClick={this.clickHandler}>Add comment</button>
            </form>
            </div>
        );
    }
}

export default CommentForm;