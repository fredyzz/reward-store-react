import React from 'react'

const ConfirmSwap = ({ selectedProduct }) => {
	return (
		<div className="confirmSwap">
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
			<button className="success">Confirm</button>
			<button className="cancel">Cancel</button>
		</div>
	)
}

export default ConfirmSwap
