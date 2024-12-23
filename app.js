import React from 'react';
import ReactDOM from 'react-dom/client'
// const heading = React.createElement('h1', { id: 'heading' }, 'Hello world form React!!');
// console.log(heading); //js object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); //converts the js objects to HTML tags and put it on DOM. // ReactElement(Object) => HTML(Browser Understand)

/**
 * <div id='parent'>
 *      <div id ='child 1'>
 *        <h1>I am H1 tag</h1>
 *        <h2>I am H2 tag</h2>
 *      </div>
 *      <div id = 'child 2'>
 *      <h1>I am H1 tag</h1>
 *      <h2>I am H2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement(
        'div',
        { id: 'child1' },
        [React.createElement('h1', {}, 'This is Namste React'), React.createElement('h2', {}, 'I am H2 tag')]), React.createElement(
            'div',
            { id: 'child2' },
            [React.createElement('h1', {}, 'I am H1 tag'), React.createElement('h2', {}, 'I am H2 tag')])]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//JSX

