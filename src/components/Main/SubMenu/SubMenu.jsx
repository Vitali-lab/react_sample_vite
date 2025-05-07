


function Submenu() {

	return(
		<div className="subMenu">
			<p>{`Ваше имя: ${localStorage.getItem('UserName')}`}</p>
			<p>{`Осталось попыток: ${localStorage.getItem('Count')}`}</p>
		</div>
	)
}

export default Submenu
