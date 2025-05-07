import React from 'react'
import './Main.css'
import Submenu from "./SubMenu/SubMenu"
import { WorkSpace } from './WorkSpace/WorkSpace'
import { Children } from 'react'

function Main() {

	const getKeybord = ()=> {
		let arrNums = []
		for (let i = 0; i <= 9; i++) {
			arrNums.push(i)
		}
		arrNums = arrNums.map((el)=> {
			return <button className="keyBoard_nums" datatype={el}>{el}</button>
		})
		return arrNums
	}

	const [number, setNumber] = React.useState('')
console.log(number);


	return(
		<div className="main">
			<div className='infoAbout'>
			<Submenu />
			</div>
			<WorkSpace number = {number} />
			<div className='keyboard' onClick={(event)=>{
				let num = event.target.getAttribute('datatype')
				setNumber(prevNum => prevNum + num)
			}}>
				{getKeybord()}
			</div>

		</div>
	)
}

export default Main
