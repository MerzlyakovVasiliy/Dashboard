import { Header } from '../../components/UI/Header/Header'
import styles from './Results.module.scss'
import ReactLogo from '../../assets/Arrow.svg?react'
import { useNavigate } from 'react-router-dom'

const Results = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.Results}>
			<Header header='Results' subHeader='Order basket redesing' />
			<div className={styles.body}></div>
			<div className={styles.footer}>
				<button className={styles.btn} onClick={() => navigate(-1)}>
					<ReactLogo className={styles.backIcon} stroke='10' /> Back
				</button>
			</div>
		</div>
	)
}

export default Results
