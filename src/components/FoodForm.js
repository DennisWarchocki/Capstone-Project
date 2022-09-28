import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

const WidthBox = styled.div`
	max-width: 500;
	margin: 'auto';
`;

const FlexboxForm = styled.form`
	display: flex;
	align-items: flex-end;
`;

const FlexboxLabel = styled.label`
	flex: 1;
`;

const FlexInput = styled.input`
	width: 100%;
`;

const StlyedList = styled.ul`
	padding: 0;
`;

const StyledListItems = styled.li`
	display: flex;
`;

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
		<WidthBox>
			<FlexboxForm
				onSubmit={event_ => {
					event_.preventDefault();
					setFoods([...foods, {id: nanoid(), value, done: false}]);
					setValue('');
				}}
			>
				<FlexboxLabel>
					What did you eat today?
					<br />
					<FlexInput
						placeholder="e.g. Eggs and bacon"
						autoFocus
						required
						type="text"
						value={value}
						onChange={event_ => {
							setValue(event_.target.value);
						}}
					/>
				</FlexboxLabel>
				<button type="submit">Add</button>
			</FlexboxForm>
			<StlyedList>
				{foods.map(food => {
					return (
						<StyledListItems key={food.id}>
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
						</StyledListItems>
					);
				})}
			</StlyedList>
		</WidthBox>
	);
};

export default App;
