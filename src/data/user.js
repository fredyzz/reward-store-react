import {
	TOKEN,
	API_USER_URL,
	API_USER_HISTORY_URL,
	API_USER_ADD_POINTS
} from './endpoints'

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

export const addPoints = async (points) => {
	const STEPS = 1000
	let error = null
	let response = ''

	const body = {
		amount: STEPS
	}

	for (let i = points / STEPS; i > 0; i--) {
		if (error) return

		try {
			const options = {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: `Bearer ${TOKEN}`
				}
			}
			const url = API_USER_ADD_POINTS
			const res = await fetch(url, options)
			response = res.json()
		} catch (err) {
			console.log(err)
			error = err
		}
	}

	return response
}
