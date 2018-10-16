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
				console.log(profile)
				if (profile.message === 'Not Found') {
					//show alert for not found
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
				console.log(repos)
				//send repos
				ui.sendRepos(repos)
			})
	}
	else {
		//clear profile and repos
		ui.clearUI()
	}
}
