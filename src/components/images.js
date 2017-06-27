import React from 'react';

const catPhotos = [
    { url: 'img/cat1.jpg' },
    { url: 'img/cat2.jpg' },
    { url: 'img/cat3.jpg' },
    { url: 'img/cat4.jpg' },
    { url: 'img/cat5.jpg' }
]

class CatImage extends React.Component {
    render () {
        return (
            <img src={catPhotos.map(function (cat) {
                return cat.url;
            })}/>
        )
    }
}

export default CatImage;