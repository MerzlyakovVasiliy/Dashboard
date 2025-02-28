import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import Results from './pages/Results/Results'
import Finalize from './pages/Finalize/Finalize'

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<DashboardPage />} />
				<Route path='results/:siteId' element={<Results />} />
				<Route path='finalize/:siteId' element={<Finalize />} />
			</Routes>
		</div>
	)
}

export default App
