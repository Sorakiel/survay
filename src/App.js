import { useState } from 'react'
import styles from './App.module.css'
import { Content } from './Content'
export function App() {
	const [isVisible, setIsVisible] = useState(false)
	const toggleVisible = () => {
		setIsVisible(!isVisible)
	}
	return (
		<>
			<div className={styles.header}>
				<img src='/images/ITC_LOGO.png' className={styles.logo} width={40} />
				<div className={styles.auth}>
					<button className={styles.authButton}>Войти</button>
					<button onClick={toggleVisible} className={styles.editButton}>
						✎
					</button>
				</div>
			</div>
			<Content isVisible={isVisible} setIsVisible={setIsVisible} />
		</>
	)
}
