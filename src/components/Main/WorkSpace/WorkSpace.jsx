import React, {useState} from "react"

export function WorkSpace(props) {



const [num, setNum] = useState(props.number)



const handleClear = () => {
    setNum(' ');
  };

	return(
		<div className="workSpace">
			<div>
			<input value={num} type="text"onChange={(event) => setNum(event.target.value)
			}/>
			<button onClick={handleClear}>C</button>
			</div>
		</div>
	)
}
