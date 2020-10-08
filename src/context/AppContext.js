import React, { useState } from 'react'
// Import data functions

export const AppContext = React.createContext()

export default function AppProvider({ children }) {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [user, setUser] = useState({
		username: 'Fredy'
	})
	const [section, setSection] = useState('Electronics')
	const [products, setProducts] = useState([])

	return (
		<AppContext.Provider
			value={{
				loading,
				setLoading,
				error,
				setError,
				user,
				setUser,
				section,
				setSection,
				products,
				setProducts
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
