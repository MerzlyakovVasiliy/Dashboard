import { fetchData } from '../../api/api'
import { EnrichedTest, Test } from './types'

export const getStatusClass = (status: string) => {
	switch (status) {
		case 'PAUSED':
			return 'pausedStatus'
		case 'STOPPED':
			return 'stoppedStatus'
		case 'DRAFT':
			return 'draftStatus'
		default:
			return 'defaultStatus'
	}
}

export const capitalizeFirstLetter = (str: string) => {
	if(str === 'MVT') {
		return str
	}
	const formattedStr = str.replace(/_/g, '-').toLowerCase()
	return formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1)
}

export const removeProtocol = (url: string) => {
	return url.replace(/^https?:\/\/(www\.)?/, '')
}



export const fetchTestsWithSites = async (): Promise<EnrichedTest[] | null> => {
	try {
		const result = await fetchData('tests')

		if (!result) return null

		const enrichedData = await Promise.all(
			result.map(async (test: Test) => {
				const siteDetails = await fetchData(`sites/${test.siteId}`)
				return { ...test, ...siteDetails }
			})
		)

		return enrichedData
	} catch (error) {
		console.error('Error fetching tests with site details:', error)
		return null
	}
}


const statusOrderASC = ['ONLINE', 'PAUSED', 'STOPPED', 'DRAFT']
const statusOrderDESC = ['DRAFT', 'STOPPED', 'PAUSED', 'ONLINE']

export const sortAndFilterData = (
	data: EnrichedTest[],
	searchQuery: string,
	sortConfig?: { key: keyof EnrichedTest; direction: 'ASC' | 'DESC' }
): EnrichedTest[] => {
	const sortedData = [...data]

	if (sortConfig) {
		sortedData.sort((a, b) => {
			if (sortConfig.key === 'status') {
				const order =
					sortConfig.direction === 'ASC' ? statusOrderASC : statusOrderDESC
				return order.indexOf(a.status) - order.indexOf(b.status)
			}

			if (a[sortConfig.key] < b[sortConfig.key])
				return sortConfig.direction === 'ASC' ? -1 : 1
			if (a[sortConfig.key] > b[sortConfig.key])
				return sortConfig.direction === 'ASC' ? 1 : -1
			return 0
		})
	}

	return sortedData.filter(test =>
		test.name.toLowerCase().includes(searchQuery.toLowerCase())
	)
}