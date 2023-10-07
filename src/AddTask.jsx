/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function AddTask({ onAddTask }) {
	const [text, setText] = useState('')
	return (
		<div className='addTask'>
			<input
				className='taskInput'
				placeholder='Add task'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={() => {
					setText('')
					onAddTask(text)
				}}
			>
				Add
			</button>
		</div>
	)
}
