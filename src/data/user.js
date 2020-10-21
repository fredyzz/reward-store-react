import { TOKEN, API_USER_URL, API_USER_HISTORY_URL } from './endpoints'

export const getUser = async () => {
	try {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${TOKEN}`
			}
		}

		const url = API_USER_URL
		const response = await fetch(url, options)

		return response.json()
	} catch (error) {
		console.log(error)
	}
}

export const getUserHistory = async () => {
	try {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${TOKEN}`
			}
		}

		const url = API_USER_HISTORY_URL
		const response = await fetch(url, options)

		return response.json()
	} catch (error) {
		console.log(error)
	}
}
