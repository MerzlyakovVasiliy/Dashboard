import Table from '../../components/Table/Table';
import { Header } from '../../components/UI/Header/Header';
import styles from './DashboardPage.module.scss'

const DashboardPage = () => {

    return (
			<div className={styles.Dashboard}>
				<Header header='Dashboard' />
				<Table />
			</div>
		)
};

export default DashboardPage
