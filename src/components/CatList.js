import React from 'react';

import Cat from './Cat';

class CatList extends React.Component {

    render() {
        
        var catComponents = this.props.cats.map(cat =>{
            return (<Cat key={cat.url} cat={cat} />);
        });

        return (<div>{catComponents}</div>);
    }
}

export default CatList;