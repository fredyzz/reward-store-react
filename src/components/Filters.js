import React from 'react'
import Pagination from './Pagination'

const Filters = () => {
	return (
		<div className="filters">
			<Pagination />
			<span>Sort by:</span>
			<button className="active">Most recent</button>
			<button>Lowest price</button>
			<button>Highest price</button>
		</div>
	)
}

export default Filters
