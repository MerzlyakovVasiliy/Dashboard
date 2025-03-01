import axios from 'axios';

export const api = axios.create({
	baseURL: __API__,
})

export const fetchData = async (url: string) => {
	try {
		const response = await api.get(url)
		return response.data
	} catch (error) {
		console.error('Error fetching data:', error)
		return null
	}
}