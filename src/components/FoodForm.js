import {nanoid} from 'nanoid';
import {useState} from 'react';

import {FlexForm} from './styled/FlexForm';
import {FlexInput} from './styled/FlexInput';
import {LabelAsDone} from './styled/LabelAsDone';
import {StlyedList} from './styled/StyledList';
import {StyledListItems} from './styled/StyledListItems';
import {WidthBox} from './styled/WidthBox';

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
		<WidthBox>
			<FlexForm
				onSubmit={event_ => {
					event_.preventDefault();
					setFoods([...foods, {id: nanoid(), value, done: false}]);
					setValue('');
				}}
			>
				<LabelAsDone>
					What did you eat today?
					<br />
					<FlexInput
						placeholder="e.g. Eggs and bacon"
						autoFocus
						type="text"
						value={value}
						onChange={event_ => {
							setValue(event_.target.value);
						}}
					/>
				</LabelAsDone>
				<button type="submit">Add</button>
			</FlexForm>
			<StlyedList>
				{foods.map(food => {
					return (
						<StyledListItems key={food.id}>
							<LabelAsDone done={food.done}>
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
							</LabelAsDone>
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
