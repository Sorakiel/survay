import { useState } from 'react'
import styles from './App.module.css'
import TextList from './TextList'
export function Content({ isVisible, setIsVisible }) {
	const [texts, setTexts] = useState([
		{ content: 'Тут будет ваш тайтл' },
		{ content: 'Информация о проекте 1' },
		{ content: 'Информация о проекте 2' },
		{ content: 'Информация о проекте 3' },
	])
	const [textContent, setTextContent] = (useState = '')
	const addText = event => {
		setTexts([
			...texts,
			{
				content: textContent,
			},
		])
		setTextContent('')
	}
	return (
		<>
			{/*Заголовок */}
			<hr></hr>
			<div className={styles.s} id='header'>
				<div className='input-field'>
					<input
						type='text'
						value={textContent}
						onChange={event => setTextContent(event.target.value)}
					/>
				</div>
				<div className='input-confirm'>
					<button onClick={addText()}></button>
				</div>
			</div>
			<TextList texts={texts} />
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
			<div className={styles.text}></div>
			<button className={isVisible ? 'subEditButton' : 'vanish editButton'}>
				⎙
			</button>
			<hr></hr>
			<div className={styles.text}></div>
			<button className={isVisible ? 'subEditButton' : 'vanish subEditButton'}>
				⎙
			</button>
			<hr></hr>
			<div className={styles.text}></div>
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
