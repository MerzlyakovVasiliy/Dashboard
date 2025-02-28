import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'
import styles from './Table.module.scss' // SCSS-модуль
import { fetchTestsWithSites, sortAndFilterData } from './utils'
import { EnrichedTest, SortConfig } from './types'
import { Loader } from '../UI/Loader/Loader'
import TableHeader from './TableHeader'
import NoResults from './NoResults'
import SearchBar from './SearchBar'

const Table: React.FC = () => {
	const [data, setData] = useState<EnrichedTest[] | null>(null)
	const [filteredData, setFilteredData] = useState<EnrichedTest[] | null>(null)
	const [loading, setLoading] = useState(true)
	const [searchQuery, setSearchQuery] = useState('')
	const [sortConfig, setSortConfig] = useState<SortConfig | null>(null)

	useEffect(() => {
		const loadData = async () => {
			const tests = await fetchTestsWithSites()
			setData(tests)
			setLoading(false)
		}

		loadData()
	}, [])

	useEffect(() => {
		if (data) {
			const filtered = sortAndFilterData(
				data,
				searchQuery,
				sortConfig || undefined
			)
			setFilteredData(filtered)
		}
	}, [searchQuery, data, sortConfig])

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const handleReset = () => {
		setSearchQuery('')
		setFilteredData(data)
	}

	const handleSort = (key: keyof EnrichedTest) => {
		let direction: 'ASC' | 'DESC' = 'ASC'
		if (sortConfig?.key === key && sortConfig.direction === 'ASC') {
			direction = 'DESC'
		}
		setSortConfig({ key, direction })
	}

	return (
		<div className={styles.TableWrapper}>
			{loading && <Loader />}

			<SearchBar
				searchQuery={searchQuery}
				onSearchChange={handleSearchChange}
				resultCount={filteredData?.length || 0}
			/>

			{filteredData?.length ? (
				<table className={styles.tableBody}>
					<TableHeader onSort={handleSort} sortConfig={sortConfig} />
					<tbody className={styles.Table}>
						{filteredData.map((test, index) => (
							<TableRow key={index} data={test} />
						))}
					</tbody>
				</table>
			) : (
				<NoResults isLoading={loading} onReset={handleReset} />
			)}
		</div>
	)
}

export default Table