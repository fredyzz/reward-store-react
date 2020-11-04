import React from 'react'

const Modal = ({ show, setShow, children, type, loading }) => {
	const className = show ? 'modal-content ' + type : 'modal-hidden'
	const background = show ? 'modal-background' : ''

	const handleClick = () => {
		if (!loading) setShow(!show)
	}

	return (
		<>
			<div className={background}>
				<div className="centered">
					<div className={className}>
						<div className="modalClose" onClick={handleClick}>
							<button className={loading ? 'disabled' : ''}> </button>
						</div>

						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
