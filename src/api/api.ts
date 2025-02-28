import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3100/',
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