class GitHub {
	constructor() {
		this.client_id = '74c6d30c6a3c436b80d2'
		this.client_secret = 'd027b6dc18646148547567d9b3f035904bd30351'
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		)

		const profile = await profileResponse.json()

		return { profile }
	}
}