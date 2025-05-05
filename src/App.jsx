import React from "react"
import ReactLogo from "./assets/react.svg"


const date = new Date().getFullYear()

export const App = () => { // во втором случае императивный  код
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: ReactLogo }),
			React.createElement('p', null, 'Edit src/App.js and save to reload 1. '),
			React.createElement('a', { href: 'https://reactjs.org' }, 'Learn React'),
			React.createElement('p', null, date),
		),
	);
};



// Весь код в App.jsx - декларативный
