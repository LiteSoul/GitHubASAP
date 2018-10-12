// init GitHub
const github = new GitHub
//init UI
const ui = new UI
// search input
const searchUser = document.getElementById('searchUser')
// listen for values
searchUser.addEventListener('keyup', funk)
//grab input value
function funk(e) {
	const userText = e.target.value
	if (userText !== '') {
		//make http call
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					//show alert for not found
				}
				else {
					//show profile
					ui.showProfile(data.profile)
				}
			})
	}
	else {
		//clear profile
	}
}
