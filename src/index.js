import React from 'react';
import ReactDOM from 'react-dom';

import CatList from './components/CatList';

var cats = [
    {url: 'img/cat1.jpg', name:'Toby', comments: [
        {body: 'wow what an amazing cat', author: 'catlover444'},
        {body: 'i love this cat', author: 'Chris'},
        {body: 'is this actually a cat???', author: 'James'}
    ]},
    {url: 'img/cat2.jpg', name:'Mr Fluffykins', comments: [
        {body: 'mmmmmmm i love cat burrito', author: 'Mauro'},
        {body: 'where can i buy this?', author: 'Chris'}
    ]},
    {url: 'img/cat3.jpg', name:'Roberto', comments: [
        {body: 'i would like this for my garden', author: 'harri_etty'},
        {body: 'what is this?', author: 'Chris'},
        {body: 'why', author: 'James'}
    ]},
    {url: 'img/cat4.jpg', name:'Sparky', comments: [
        {body: 'chillin\' with the gang', author: 'Steven'},
        {body: 'this angle makes me look fat', author: 'Rufus'},
        {body: 'are these actually all cats?', author: 'Chris'}
    ]},
    {url: 'img/cat5.jpg', name:'Splodge', comments: [
        {body: 'remind me to never go out for food in December again', author: 'MrWhiskers666'},
        {body: 'is that snow in your fur? Should I be worried?', author: 'Mum'}
    ]},
];

ReactDOM.render(<CatList cats={cats} />, document.getElementById('root'));

