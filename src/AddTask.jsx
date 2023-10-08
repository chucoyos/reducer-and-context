/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { TasksDispatchContext } from './TasksContext.jsx'

export default function AddTask() {
	const [text, setText] = useState('')
	const dispatch = useContext(TasksDispatchContext)
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
					dispatch({
						type: 'added',
						id: nextId++,
						text: text,
					})
				}}
			>
				Add
			</button>
		</div>
	)
}
let nextId = 3
