import React from 'react'

const Modal = ({ show, setShow, children, type }) => {
	const className = show ? 'modal-content ' + type : 'modal-hidden'
	const background = show ? 'modal-background' : ''
	return (
		<>
			<div className={background}>
				<div className="centered">
					<div className={className}>
						<div className="modalClose" onClick={() => setShow(!show)}>
							<button> </button>
						</div>
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
