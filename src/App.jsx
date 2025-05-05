import ReactLogo from "./assets/react.svg"


const date = new Date().getFullYear()

export const App = () => {
	return <div className="App">
	<header className="App-header">
		<img src={ReactLogo} className="App-logo" alt="logo" />
		<p>
			Edit <code>src/App.js</code> and save to reload 1 .
		</p>
		<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
		<p>{date}</p>
	</header>
</div>
}


// Весь код в App.jsx - декларативный
