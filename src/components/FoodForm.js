import {nanoid} from 'nanoid';
import {useState} from 'react';

import {StyledDoneLabel} from './styled/StyledDoneLabel';
import {StyledForm} from './styled/StyledForm';
import {StyledInput} from './styled/StyledInput';
import {StlyedList} from './styled/StyledList';
import {StyledListItems} from './styled/StyledListItems';
import {StyledWidthBox} from './styled/StyledWidthBox';

const App = () => {
	const [value, setValue] = useState('');
	const [foods, setFoods] = useState([
		{
			id: nanoid(),
			value: 'Bio-Müsli',
			done: false,
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
		<StyledWidthBox>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					setFoods([...foods, {id: nanoid(), value, done: false}]);
					setValue('');
				}}
			>
				<StyledDoneLabel>
					What did you eat today?
					<StyledInput
						placeholder="e.g. Eggs and bacon"
						type="text"
						maxLength="40"
						value={value}
						onChange={event => {
							setValue(event.target.value);
						}}
					/>
				</StyledDoneLabel>
				<button type="submit">Add</button>
			</StyledForm>
			<StlyedList>
				{foods.map(food => {
					return (
						<StyledListItems key={food.id}>
							<StyledDoneLabel done={food.done}>
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
							</StyledDoneLabel>
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
		</StyledWidthBox>
	);
};

export default App;
