import React from 'react';
import './StartButton.css'
import Inputs from "../InputsForStartButton/Inputs"

 function StartButton(props) {

 const LetsStart = () => {


 }

	return(
		<div className={`start_button-div ${props.open?'start_button-hidden': ''}`}>
            <Inputs />
			<button onClick={()=>{
              props.setOpen(true)
			}} className="start_button">Start</button>
		</div>
	)
}

export default StartButton
