import React from 'react'
import styles from './Table.module.scss'
import { EnrichedTest, SortConfig } from './types'
import ReactLogo from '../../assets/Arrow.svg?react'

interface TableHeaderProps {
	onSort: (key: keyof EnrichedTest) => void
	sortConfig: SortConfig | null
}

const TableHeader: React.FC<TableHeaderProps> = ({ onSort, sortConfig }) => {
	const renderSortIcon = (key: keyof EnrichedTest) => {
		if (!sortConfig || sortConfig.key !== key) return null

		return (
			<ReactLogo
				style={{
					transform:
						sortConfig.direction === 'ASC' ? 'rotate(180deg)' : 'rotate(0deg)',
				}}
				className={styles.sortIcon}
			/>
		)
	}

	return (
		<thead className={styles.TableHeader}>
			<tr>
				<th className={styles.statusCheck}>&nbsp;</th>

				<th className={styles.tableHeaderName} onClick={() => onSort('name')}>
					NAME {renderSortIcon('name')}
				</th>

				<th className={styles.tableHeaderType} onClick={() => onSort('type')}>
					TYPE {renderSortIcon('type')}
				</th>

				<th
					className={styles.tableHeaderStatus}
					onClick={() => onSort('status')}
				>
					STATUS {renderSortIcon('status')}
				</th>

				<th className={styles.tableHeaderUrl} onClick={() => onSort('url')}>
					SITE {renderSortIcon('url')}
				</th>

				<th className={styles.tableHeaderActions}></th>
			</tr>
		</thead>
	)
}

export default TableHeader