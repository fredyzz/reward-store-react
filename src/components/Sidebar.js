import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Avatar from '../assets/utils/Avatar'
import History from './History'

const Sidebar = () => {
	const { user, history } = useContext(AppContext)
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
					<button>Buy More</button>
				</>
			)}
			{history && (
				<>
				<History history={history}/>
				</>
				
			)}

			<div></div>
		</div>
	)
}

export default Sidebar
