// search input
const searchUser = document.getElementById('searchUser')
// listen for values
searchUser.addEventListener('keyup', funk)
//grab input value
function funk(e) {
	const userText = e.target.value
	if (userText !== '') console.log(userText)
}
