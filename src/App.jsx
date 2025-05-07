import React from "react"
import './App.css'
import StartButton from './components/StartButton/StartButton'
import Main from './components/Main/Main'



export const App = () => {

	const [open , setOpen] = React.useState(false)

	return (
		<div className="main-menu ">

			<StartButton  open = {open} setOpen = {setOpen}/>
			{open && <Main /> }



		</div>

	)
};




