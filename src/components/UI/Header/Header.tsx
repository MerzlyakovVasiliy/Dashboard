import cls from './Header.module.scss'

type TProps = {
	header?: string ,
	subHeader?: string
}

export const Header = ({header, subHeader}: TProps) => {
	return (
		<div className={cls.Header}>
			{header && <h1 className={cls.headerName}>{header}</h1>}
			{subHeader && <h2 className={cls.subHeaderName}>{subHeader}</h2>}
		</div>
	)
}
