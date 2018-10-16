class UI {
	constructor() {
		this.profile = document.getElementById('profile')
		this.repos = document.getElementById('repos')
		this.profileData = {}
		this.reposData = []
	}

	showProfile(user) {
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">
					<div class="col-md-3">
						<img src="${user.avatar_url}" alt="" class="img-fluid mb-2">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">
							View ${user.login} Profile
						</a>
					</div>
					<div class="col-md-9">
						<span class="badge badge-primary">
							Public Repos: ${user.public_repos}
						</span>
						<span class="badge badge-secondary">
							Public Gists: ${user.public_gists}
						</span>
						<span class="badge badge-success">
							Followers: ${user.followers}
						</span>
						<span class="badge badge-info">
							Following: ${user.following}
						</span>
						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company:${user.company}</li>
							<li class="list-group-item">Website/Blog:${user.blog}</li>
							<li class="list-group-item">Location:${user.location}</li>
							<li class="list-group-item">Member Since:${user.created_at}</li>
						</ul>
						</div>
					</div>
				</div>
			</div>
		`
	}

	//show alert messages
	showAlert(message, className) {
		//clear any previous alerts
		this.clearAlert()
		//create div
		const div = document.createElement('div')
		//add classes to div
		div.className = className
		//add text to div
		div.appendChild(document.createTextNode(message))
		//get parent element
		const container = document.querySelector('.searchContainer')
		//get profile element
		const profile = document.querySelector('#profile')
		//insert alert
		container.insertBefore(div, profile)
	}

	//clear alert messages
	clearAlert() {
		const currentAlert = document.querySelector('.alert')
		if (currentAlert) currentAlert.remove()
	}

	sendProfile(profile) {
		this.profileData = profile
		this.showProfile(profile)
		this.showRepos(this.reposData)
	}
	sendRepos(repos) {
		this.reposData = repos
		this.showRepos(repos)
	}

	//show repos
	showRepos(repos) {
		if (repos.length === 0) {
			this.repos.innerHTML = `
				<div class="card card-body mb-3">
					<h3 class="page-heading mb-3">No repositories</h3>
				</div>
			`
		}
		else if (this.profileData.login === repos[0].owner.login) {
			this.repos.innerHTML = `
				<div class="card card-body mb-3">
					<h3 class="page-heading mb-3">Latest Repos</h3>
					<div>${repos[0].name}</div>
				</div>
			`
		}
	}

	//when input is clear, clear any profile shown
	clearUI() {
		this.profile.innerHTML = ''
		this.repos.innerHTML = ''
		this.clearAlert()
	}
}


