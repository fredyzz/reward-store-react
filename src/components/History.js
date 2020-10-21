import React from 'react'

const History = ({ history }) => {
	console.log(history)
	return (
		<div className="history">
			<h3>Last swaps</h3>
			{history.map((item, key) => (
				<div className="historyItem" key={key}>
					<img
						className="historyProductImg"
						src={item.img.url}
						alt={item.name}
					/>
					<div>
						<p>{item.name}</p>
						<p>
							{item.cost}{' '}
							<img
								className="historyCoin"
								src={require('../assets/images/coin.svg')}
								alt="coin"
							/>{' '}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default History
