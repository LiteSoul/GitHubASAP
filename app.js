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
	const userInput = e.target.value
	if (userInput !== '') {
		//make http call for user
		github.getUser(userInput)
			.then(profile => {
				if (profile.message === 'Not Found') {
					//show alert for not found
					ui.clearUI()
					ui.showAlert('User not found', 'alert alert-danger')
				}
				else {
					//clear 'not found' red alerts
					ui.clearAlert()
					//send profile
					ui.sendProfile(profile)
				}
			})
		//make http call for user repos
		github.getUserRepos(userInput)
			.then(repos => {
				//send repos if username found
				if (repos.message !== 'Not Found') {
					ui.sendRepos(repos)
				}
			})
	}
	else {
		//clear profile and repos
		ui.clearUI()
	}
}
