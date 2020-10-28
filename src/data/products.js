import { TOKEN, API_PRODUCTS_URL, API_REDEEM_URL } from './endpoints'

export const getProducts = async () => {
	try {
		const options = {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${TOKEN}`
			}
		}

		const url = API_PRODUCTS_URL
		const response = await fetch(url, options)

		return response.json()
	} catch (error) {
		console.log(error)
	}
}

export const redeemProduct = async (id) => {
	const body = {
		productId: id
	}

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
		const url = API_REDEEM_URL
		const response = await fetch(url, options)

		return response.json()
	} catch (error) {
		console.log(error)
	}
}
