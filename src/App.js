import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const blogObject = {
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet.'
  };

  return (

    React.createElement("div", {
      className: "App"
    },
      React.createElement("div", null,
        React.createElement("h3", null, blogObject.title),
        React.createElement("p", null, blogObject.content)),
      React.createElement("hr", null),
      React.createElement("div", null,
        React.createElement("h3", null, blogObject.title),
        React.createElement("p", null, blogObject.content)),
      React.createElement("hr", null),
      React.createElement("div", null,
        React.createElement("h3", null, blogObject.title),
        React.createElement("p", null, blogObject.content)))
  );
}

export default App;
