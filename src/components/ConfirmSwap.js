import React, { useContext, useState } from 'react'
import Loader from '../assets/utils/Loader'
import { AppContext } from '../context/AppContext'
import { redeemProduct } from '../data/products'
import { getUser, getUserHistory } from '../data/user'

const ConfirmSwap = () => {
	const {
		setShowModal,
		selectedProduct,
		setSelectedProduct,
		user,
		setUser,
		setHistory
	} = useContext(AppContext)

	const [loading, setLoading] = useState(false)
	const [badRequest, setBadRequest] = useState(false)
	const [message, setMessage] = useState(null)

	const handleCancel = () => {
		setBadRequest(false)
		setMessage(null)
		setSelectedProduct(null)
		setShowModal(false)
	}

	const handleConfirm = async () => {
		if (user.points >= selectedProduct.cost) {
			setLoading(true)
			const response = await redeemProduct(selectedProduct._id)
			setMessage(response.message)
			setSelectedProduct(null)
			setLoading(false)
			const updatedUser = await getUser()
			setUser(updatedUser)
			const historyData = await getUserHistory()
			setHistory(
				historyData.slice(historyData.length - 8, historyData.length).reverse()
			)
		} else {
			setBadRequest(true)
			setMessage("You don't have enough coins to redeem this product")
		}
	}

	return (
		<div className="confirmSwap">
			{message ? (
				<>
					<h3 className="message">{message}</h3>
					{badRequest ? (
						<img
							src={require('../assets/images/cheems.jpeg')}
							alt="happy dog"
							className="messageImg"
						/>
					) : (
						<img
							src={require('../assets/images/success.gif')}
							alt="cheems dog"
							className="messageImg"
						/>
					)}

					<button className="close" onClick={handleCancel}>
						Cerrar
					</button>
				</>
			) : (
				<>
					<h3>Redemption confirmation</h3>
					<img src={selectedProduct.img.url} alt="" />
					<h4>{selectedProduct.name}</h4>
					<span>
						<img
							src={require('../assets/images/coin.svg')}
							alt=""
							className="coin"
						/>
						{selectedProduct.cost}
					</span>
					{loading ? (
						<Loader />
					) : (
						<div className={'flex-column'}>
							<button className="success" onClick={handleConfirm}>
								Confirm
							</button>
							<button className="cancel" onClick={handleCancel}>
								Cancel
							</button>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default ConfirmSwap
