import AddTask from './AddTask.jsx'
import TaskList from './TaskList.jsx'
import { TasksProvider } from './TasksContext.jsx'

export default function TaskApp() {
	return (
		<>
			<TasksProvider>
				<div className='App'>
					<h1>Day off in Kyoto</h1>
					<AddTask />
					<TaskList />
				</div>
			</TasksProvider>
		</>
	)
}
