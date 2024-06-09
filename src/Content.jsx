import styles from './App.module.css'
export function Content({ isVisible, setIsVisible }) {
	return (
		<>
			{/*Заголовок */}
			<hr></hr>
			<div className={styles.text} id='header'>
				lorem
			</div>
			<button className={isVisible ? 'subEditButton' : 'vanish editButton'}>
				⎙
			</button>
			<hr></hr>
			{/*Поля для фотографий*/}
			<div className={styles.photoPlace}>
				<img className={styles.photo} src='/images/photo1.jpg' />
			</div>
			<button className={isVisible ? 'subEditButton' : 'vanish editButton'}>
				⎙
			</button>
			<hr></hr>
			<div className={styles.photoPlace}>
				<img className={styles.photo} src='/images/photo2.jpg' />
			</div>
			<button className={isVisible ? 'subEditButton' : 'vanish editButton'}>
				⎙
			</button>
			<hr></hr>
			<div className={styles.photoPlace}>
				<img className={styles.photo} src='/images/photo3.jpg' />
			</div>
			<button className={isVisible ? 'subEditButton' : 'vanish editButton'}>
				⎙
			</button>
			<hr></hr>
			{/*Поля с текстами*/}
			<div className={styles.text}>Информация о проекте 1</div>
			<button className={isVisible ? 'subEditButton' : 'vanish editButton'}>
				⎙
			</button>
			<hr></hr>
			<div className={styles.text}>Информация о проекте 2</div>
			<button className={isVisible ? 'subEditButton' : 'vanish subEditButton'}>
				⎙
			</button>
			<hr></hr>
			<div className={styles.text}>Информация о проекте 3</div>
			<button className={isVisible ? 'subEditButton' : 'vanish subEditButton'}>
				⎙
			</button>
			<hr></hr>
			<button
				className={isVisible ? 'AddContentButton' : 'vanish AddContentButton'}
			>
				<select className={styles.addSelector}>
					<option selected value={'+'}>
						+
					</option>
					<option value={'text'}>Текст</option>
					<option value={'image'}>Фото</option>
				</select>
			</button>
		</>
	)
}
