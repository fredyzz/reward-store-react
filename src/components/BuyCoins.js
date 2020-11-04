import React, { useContext, useState } from 'react'
import Loader from '../assets/utils/Loader'
import { AppContext } from '../context/AppContext'
import { addPoints } from '../data/user'
import { STEP, MIN_COINS, MAX_COINS } from '../data/config'

const BuyCoins = () => {
	const { setShowBuyModal, user, setUser, setWaitingRequest } = useContext(
		AppContext
	)

	const [loading, setLoading] = useState(false)
	const [badRequest, setBadRequest] = useState(false)
	const [message, setMessage] = useState(null)
	const [coinsToBuy, setCoinsToBuy] = useState(MIN_COINS)

	const addCoins = () => {
		if (coinsToBuy + STEP <= MAX_COINS) {
			setCoinsToBuy(coinsToBuy + STEP)
		}
	}

	const deleteCoins = () => {
		if (coinsToBuy - STEP >= MIN_COINS) {
			setCoinsToBuy(coinsToBuy - STEP)
		}
	}

	const handleCancel = () => {
		setBadRequest(false)
		setMessage(null)
		setShowBuyModal(false)
	}

	const handleConfirm = async () => {
		if (coinsToBuy >= MIN_COINS) {
			setLoading(true)
			setWaitingRequest(true)
			let res = await addPoints(coinsToBuy)
			setMessage(res.message)
			setUser({ ...user, points: res['New Points'] })
			setWaitingRequest(false)
			setLoading(false)
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
					<h3>Buy coins</h3>
					<img
						src={require('../assets/images/coin.svg')}
						alt=""
						className="coin_big"
					/>

					<span>
						<img
							src={require('../assets/images/coin.svg')}
							alt=""
							className="coin"
						/>
						1000 x 1 U$D
					</span>
					{loading ? (
						<Loader />
					) : (
						<>
							<div className="coinsSelector">
								<button
									className={coinsToBuy > MIN_COINS ? 'left' : 'left disabled'}
									onClick={deleteCoins}
								>
									-
								</button>
								<div className="number">
									<span>{coinsToBuy}</span>

									<img
										src={require('../assets/images/coin.svg')}
										alt=""
										className="coin"
									/>
								</div>
								<button
									className={
										coinsToBuy < MAX_COINS ? 'right' : 'right disabled'
									}
									onClick={addCoins}
								>
									+
								</button>
							</div>
							<button className="success" onClick={handleConfirm}>
								Confirm
							</button>
							<button className="cancel" onClick={handleCancel}>
								Cancel
							</button>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default BuyCoins
