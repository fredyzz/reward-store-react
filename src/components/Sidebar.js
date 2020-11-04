import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Avatar from '../assets/utils/Avatar'
import History from './History'
import Modal from '../assets/utils/Modal'
import BuyCoins from './BuyCoins'

const Sidebar = () => {
	const {
		user,
		history,
		showBuyModal,
		setShowBuyModal,
		waitingRequest
	} = useContext(AppContext)

	const handleClick = () => {
		setShowBuyModal(true)
	}

	return (
		<div className="sidebar">
			<Avatar
				name={user.name}
				width={90}
				border={'#18DBFF'}
				backgroud={'white'}
				// imageURL={'https://semantic-ui.com/images/avatar/small/steve.jpg'}
			/>
			<span className="name">{user.name}</span>
			{user.points && (
				<>
					<div className="points">
						<img src={require('../assets/images/coin.svg')} alt="" />
						<p>{user.points}</p>
					</div>
					<button onClick={handleClick}>Buy More</button>
				</>
			)}
			{history && (
				<>
					<History history={history} />
				</>
			)}

			{showBuyModal && (
				<Modal
					show={showBuyModal}
					setShow={setShowBuyModal}
					loading={waitingRequest}
				>
					<BuyCoins />
				</Modal>
			)}

			<div></div>
		</div>
	)
}

export default Sidebar
