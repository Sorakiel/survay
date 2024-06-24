import TextItem from './TextItem'
export default function TextList({ texts }) {
	return (
		<ul>
			{texts.map(item => (
				<TextItem key={item.content} />
			))}
		</ul>
	)
}
