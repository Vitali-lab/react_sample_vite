import React from "react"
import './Inputs.css'
import { LuSave } from "react-icons/lu";


function Inputs() {

	const [name , setName] = React.useState('')
	const [count, setCount] = React.useState(0)

	function getCount() {
		setCount(event.target.value)
	}
   function getValueForInput(event) {
	setName(event.target.value)
   }


	return (
		<div className="input_menu">
			<h1 >{`Привет ${name} !`}</h1>
			<div className="input_name">
				<input className="input_name" type="text" placeholder="Введите имя" onChange={getValueForInput}/>
				<button onClick={()=>{
                      localStorage.setItem('UserName',name)
				 }} className="button_save"><LuSave/></button>
			</div>
			<div className="input_count">
			<p>Введите количество попыток</p>
				 <input type="number" placeholder="Введите количество попыток" onChange={getCount} value={count} />
				 <button onClick={()=>{
                      localStorage.setItem('Count',count)
				 }} className="button_save"><LuSave/></button>
			<div className="buttons_count">
				 <button onClick={()=>{
					setCount(count + 5)
				 }}>+</button>
				 <button onClick={()=>{
					setCount(count - 5)
				 }}>-</button>
               </div>
			</div>
		</div>
	)
}
export default Inputs
