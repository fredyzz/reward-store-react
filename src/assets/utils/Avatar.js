import React from 'react'

const Avatar = ({ name, width, backgroud, border, imageURL }) => {
	const avatarStyle = {}
	const avatarCircleStyle = {
		width: width ? width : '80px',
		height: width ? width : '80px',
		margin: '15px 0',
		boxSizing: 'border-box',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: '50%',
		fontSize: width / 2.8,
		border: border ? `5px solid ${border}` : '5px solid black',
		background: backgroud ? backgroud : 'white',
		backgroundImage: imageURL ? `url(${imageURL})` : null,
		backgroundPosition: 'center center',
		backgroundSize: 'cover'
	}

	const getInitials = (name) => {
		let initials = ''
		let nameArr = name.toLowerCase().trim().split(' ')
		nameArr.forEach((word) => {
			let initial = word.slice(0, 1)
			if (initials.length <= 2) {
				initials += initial
			}
		})
		return initials.toUpperCase()
	}
	return (
		<div style={avatarStyle}>
			<div style={avatarCircleStyle}>
				{imageURL ? <div></div> : name ? <p>{getInitials(name)}</p> : <p>NN</p>}
			</div>
		</div>
	)
}

export default Avatar
