import React from 'react'
import styles from './Table.module.scss'
import { capitalizeFirstLetter, getStatusClass, removeProtocol } from './utils'
import { EnrichedTest } from './types'
import { useNavigate } from 'react-router-dom'

interface TableRowProps {
	data: EnrichedTest
}

const colorArr = ['red', 'lightLavender', 'softBlue']

const TableRow: React.FC<TableRowProps> = ({ data }) => {
	const colorBtn = data.status === 'DRAFT' ? 'finalizeButton' : 'resultsButton'
	const navigate = useNavigate()

	const isFinalize = data.status === 'DRAFT'

	const handleGoToResults = () => {
		navigate(`/${isFinalize ? 'finalize' : 'results'}/${data.siteId}`)
	}

	 const getRandomColor = () =>
			colorArr[Math.floor(Math.random() * colorArr.length)]

	return (
		<tr className={styles.TableRow}>
			<td className={`${styles.statusCheck} ${styles[getRandomColor()]}`}></td>

			<td className={styles.tableRowName}>{data.name}</td>

			<td className={styles.tableRowType}>
				{capitalizeFirstLetter(data.type)}
			</td>

			<td
				className={`${styles.tableRowStatus} ${
					styles[getStatusClass(data.status)]
				}`}
			>
				{capitalizeFirstLetter(data.status)}
			</td>

			<td className={styles.tableRowUrl}>{removeProtocol(data.url)}</td>

			<td className={styles.tableRowActions}>
				<button
					onClick={handleGoToResults}
					className={`${styles.btn} ${styles[colorBtn]}`}
				>
					{isFinalize ? 'Finalize' : 'Results'}
				</button>
			</td>
		</tr>
	)
}

export default TableRow