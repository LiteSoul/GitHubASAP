// init GitHub
const github = new GitHub
//init UI
const ui = new UI
// search input
const searchUser = document.getElementById('searchUser')
// focus on input on page load
window.onload = function () {
	setTimeout(() => {
		searchUser.focus()
		searchUser.click()
	}, 1000)
}
// listen for values
searchUser.addEventListener('keyup', inputRecorder)
//grab input value
function inputRecorder(e) {
	if (e.keyCode === 13) {
		searchUser.blur()
	}
	const userInput = e.target.value
	if (userInput !== '') {
		//make http call for user
		github.getUser(userInput)
			.then(profile => {
				//clear 'not found' red alerts
				ui.clearAlert()
				//send profile
				ui.sendProfile(profile)
			})
			.catch(error => {
				if (error.message === '404') {
					//show alert for not found
					ui.clearUI()
					ui.showAlert('User not found', 'alert alert-danger')
				}
			});
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
