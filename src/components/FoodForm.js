import {nanoid} from 'nanoid';
import {useState} from 'react';

const App = () => {
	const [value, setValue] = useState('');
	const [foods, setFoods] = useState([
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
					setFoods([...foods, {id: nanoid(), value, done: false}]);
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
				{foods.map(food => {
					return (
						<li
							key={food.id}
							style={{
								display: 'flex',
							}}
						>
							<label
								style={{
									flex: 1,
									textDecoration: food.done && 'line-through',
								}}
							>
								<input
									type="checkbox"
									checked={food.done}
									onChange={event_ => {
										setFoods(
											foods.map(food_ =>
												food_.id === food.id
													? {
															...food_,
															done: event_.target.checked,
													  }
													: food_
											)
										);
									}}
								/>
								{food.value}
							</label>
							<button
								type="button"
								onClick={() => {
									setFoods(foods.filter(food_ => food_.id !== food.id));
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
