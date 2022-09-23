import {nanoid} from 'nanoid';
import {useState} from 'react';

const App = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState([
		{
			id: nanoid(),
			value: 'Schokomüsli',
			done: true,
		},
		{
			id: nanoid(),
			value: 'Spiegelei',
			done: false,
		},
		{
			id: nanoid(),
			value: '1 Banane',
			done: false,
		},
		{
			id: nanoid(),
			value: 'Walnüsse',
			done: false,
		},
		{
			id: nanoid(),
			value: 'Franzbrötchen',
			done: false,
		},
	]);
	return (
		<div style={{maxWidth: 300, margin: 'auto'}}>
			<form
				style={{display: 'flex', alignItems: 'flex-end'}}
				onSubmit={event_ => {
					event_.preventDefault();
					setTodos([...todos, {id: nanoid(), value, done: false}]);
					setValue('');
				}}
			>
				<label style={{flex: 1}}>
					Add your food here
					<br />
					<input
						placeholder="e.g. Eggs and bacon"
						autoFocus
						required
						type="text"
						value={value}
						style={{width: '100%'}}
						onChange={event_ => {
							setValue(event_.target.value);
						}}
					/>
				</label>
				<button type="submit">Add</button>
			</form>
			<ul style={{padding: 0}}>
				{todos.map(todo => {
					return (
						<li
							key={todo.id}
							style={{
								display: 'flex',
							}}
						>
							<label
								style={{
									flex: 1,
									textDecoration: todo.done && 'line-through',
								}}
							>
								<input
									type="checkbox"
									checked={todo.done}
									onChange={event_ => {
										setTodos(
											todos.map(todo_ =>
												todo_.id === todo.id
													? {
															...todo_,
															done: event_.target.checked,
													  }
													: todo_
											)
										);
									}}
								/>
								{todo.value}
							</label>
							<button
								type="button"
								onClick={() => {
									setTodos(todos.filter(todo_ => todo_.id !== todo.id));
								}}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default App;
