import {nanoid} from 'nanoid';
import {useState} from 'react';

import {StyledDoneLabel} from './styled/StyledDoneLabel';
import {StyledForm} from './styled/StyledForm';
import {StyledInput} from './styled/StyledInput';
import {StlyedList} from './styled/StyledList';
import {StyledListItems} from './styled/StyledListItems';

const FoodForm = () => {
	const [data, setData] = useState(null);
	{
		console.log(data);
	}
	const [calories, setCalories] = useState(0);
	const [value, setValue] = useState('');
	const [foods, setFoods] = useState([
		{
			id: nanoid(),
			value: 'Bio-Müsli',
			done: false,
			calories: 660,
		},
		{
			id: nanoid(),
			value: 'Spiegelei',
			done: false,
			calories: 420,
		},
		{
			id: nanoid(),
			value: '1 Banane',
			done: false,
			calories: 90,
		},
		{
			id: nanoid(),
			value: 'Walnüsse',
			done: false,
			calories: 140,
		},
		{
			id: nanoid(),
			value: 'Franzbrötchen',
			done: false,
			calories: 375,
		},
	]);

	function FoodSearch(myQuery) {
		fetch(`/api/food/recipes?query=${myQuery}&number=5&max_fat=40`)
			.then(response => response.json())
			.then(json => setData(json.results));
	}

	return (
		<>
			{data?.map(recipe => {
				return (
					<div key={recipe.id}>
						<img src={recipe.image}></img>
						<h2>{recipe.title}</h2>
						<button
							onClick={event => {
								event.preventDefault();
								setFoods([
									...foods,
									{
										id: nanoid(),
										value: recipe.title,
										calories: recipe.nutrition.nutrients[0].amount,
										done: false,
									},
								]);
								setValue('');
							}}
						>
							add
						</button>
						<p>{recipe.nutrition.nutrients[0].amount}</p>
					</div>
				);
			})}
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					FoodSearch(value);
				}}
			>
				What did you eat today?
				<StyledInput
					value={value}
					onChange={event => {
						event.preventDefault();
						setValue(event.target.value);
					}}
					placeholder="e.g. Pasta"
					type="search"
					maxLength="40"
				/>
				<button type="submit">search</button>
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
										if (food.done) {
											setCalories(calories - food.calories);
										} else {
											setCalories(calories + food.calories);
										}
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
									if (food.done) {
										setCalories(calories - food.calories);
									}
									setFoods(foods.filter(food_ => food_.id !== food.id));
								}}
							>
								Delete
							</button>
						</StyledListItems>
					);
				})}
			</StlyedList>
			<div>total calories consumed today:{calories}</div>
		</>
	);
};

export default FoodForm;
