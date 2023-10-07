/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task
						task={task}
						onChange={onChangeTask}
						onDelete={onDeleteTask}
					/>
				</li>
			))}
		</ul>
	)
}

function Task({ task, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false)
	let taskContent
	if (isEditing) {
		taskContent = (
			<div className='taskContent'>
				<input
					value={task.text}
					onChange={(e) => {
						onChange({
							...task,
							text: e.target.value,
						})
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</div>
		)
	} else {
		taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		)
	}
	return (
		<div>
			<label className='taskContent'>
				<input
					type='checkbox'
					checked={task.done}
					onChange={(e) => {
						onChange({
							...task,
							done: e.target.checked,
						})
					}}
				/>
				{taskContent}
				<button onClick={() => onDelete(task.id)}>Delete</button>
			</label>
		</div>
	)
}
