import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'


const ProductListItem = ({ product }) => {

	const {user, setShowModal, setSelectedProduct} = useContext(AppContext)
	const hasRequiredCoins = user.points >= product.cost ? true : false
	const coinsLeft = product.cost - user.points


	const handleClick = (product) => {
		setSelectedProduct(product)
		setShowModal(true)
		console.log(product)
	}

	return (
		<div key={product.id} className="productListItem">
			<div className="cover">
				<div>
					<span>{product.cost}</span>
					<img src={require('../assets/images/coin.svg')} alt="" />
				</div>
				{hasRequiredCoins && <button onClick={() => handleClick(product)}>Redeem now</button>}
				
			</div>
			<div className="back">
				<img src={product.img.url} alt={product.name} />
				
				<hr />
				<p>{product.category}</p>
				<h4>{product.name}</h4>
			</div>
			<div >
			{hasRequiredCoins 
				? <img className='badge round' src={require('../assets/images/cart2.svg')} alt="cart"/>
				: <div className='badge rectangle'>
					<span>{`Coins left: ${coinsLeft}`}</span>
					<img src={require('../assets/images/coin.svg')} alt="coin"/>
				</div>
				}
			</div>
			
			
		</div>
	)
}

export default ProductListItem
