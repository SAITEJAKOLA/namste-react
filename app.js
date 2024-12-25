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
*///

//JSX - HTML like syntax  (It is not HTML) - JavaScript XML
//Parcel takes help from bebel to transpile the code from JSX to brower understandable language
//JSX => Babel transpiles to React.createElement => in trun convetred to into JS Object and to DOM Object/ 
// const jsxHeading = (<h1 className='heading1' tabIndex='1'> Namste JS from Teja!! </h1>)


/** 
 * React Components
 * Types of Components
 * 1) Class Based Component - old way
 * 2) Functional Component - new way
 * */

//React functional component
// A JS function that returns a React element
const Title = () => {
    return (
        <h2 className='head' tabIndex = '5'>Namste JS from Title</h2>
    );
}
const Title2 = (
    <h2 className='head'>Namste JS from Title 2</h2>
)

const HeadingComponent = () => (
    <div id='container'>
        <Title /> {/*component composition - rendering component inside another component*/}
        {Title2} {/*rendering react element*/}
        {Title} {/*rendering component using js functions*/}
        <h1 className='heading'>Namste JS from Teja</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(HeadingComponent());
root.render(<HeadingComponent />);