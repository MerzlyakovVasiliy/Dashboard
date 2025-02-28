import styles from './Table.module.scss'
import searchIcon from '../../assets/Search.svg'

interface SearchBarProps {
	searchQuery: string
	onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	resultCount: number
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchQuery,
	onSearchChange,
	resultCount,
}) => {
	return (
		<div className={styles.input}>
			<input
				type='text'
				placeholder='What test are you looking for?'
				className={styles.search}
				value={searchQuery}
				onChange={onSearchChange}
			/>
			<img src={searchIcon} alt='Поиск' className={styles.searchIcon} />
			<div className={styles.searchCount}>{resultCount} tests</div>
		</div>
	)
}

export default SearchBar
