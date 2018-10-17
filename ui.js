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
						<h5>${user.login}</h5>
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">
							View Profile
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
		// empty array means no repositories from that user
		if (repos.length === 0) {
			this.repos.innerHTML = `
				<div class="card card-body mb-3">
					<h3 class="page-heading mb-3">No repositories</h3>
				</div>
			`
		}
		// this checks if there is a user, aka user found
		else if (repos) {
			//checks if the user is the same as the repos owner, since it's async data
			if (this.profileData.login === repos[0].owner.login) {
				this.repos.innerHTML = `
					<div class="card card-body mb-3">
						<h3 class="page-heading mb-3">Latest Repositories</h3>
						<div id="repos-list"></div>
					</div>
				`
				let output = ''
				repos.forEach(repo => {
					output += `
						<div class="row">
							<div class="col-md-4">
								<a href="${repo.html_url}" target="_blank">
									${repo.name}
								</a>
							</div>
							<div class="col-md-8">
								<span class="badge badge-primary">
									Stars: ${repo.stargazers_count}
								</span>
								<span class="badge badge-secondary">
									Watchers: ${repo.watchers_count}
								</span>
								<span class="badge badge-success">
									Forks: ${repo.forks_count}
								</span>
							</div>
						</div>
					`
				})
				//output repos
				document.getElementById('repos-list').innerHTML = output
			}
		}
	}

	//when input is clear, clear any profile shown
	clearUI() {
		this.profile.innerHTML = ''
		this.repos.innerHTML = ''
		this.clearAlert()
	}
}


