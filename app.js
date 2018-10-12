// search input
const searchUser = document.getElementById('searchUser')
// listen for values
searchUser.addEventListener('keyup', funk)
//grab input value
function funk(e) {
	console.log(e.target.value)
}
