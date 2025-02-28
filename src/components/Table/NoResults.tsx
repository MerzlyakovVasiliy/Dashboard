import React from 'react'
import styles from './Table.module.scss'

interface NoResultsProps {
	onReset: () => void
	isLoading: boolean
}

const NoResults: React.FC<NoResultsProps> = ({ onReset, isLoading }) => {
	return (
		<div className={styles.noResults}>
			<h1 className={styles.noResultText}>
				Your search did not match any results.
			</h1>
			{!isLoading && (
				<button onClick={onReset} className={styles.resetButton}>
					Reset
				</button>
			)}
		</div>
	)
}

export default NoResults
