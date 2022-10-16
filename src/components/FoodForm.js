import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import {StyledDoneLabel} from './styled/StyledDoneLabel';
import {StyledForm} from './styled/StyledForm';
import {StyledInput} from './styled/StyledInput';
import {StlyedList} from './styled/StyledList';
import {StyledListItems} from './styled/StyledListItems';
import {StyledCalories} from './styled/StyledNew';
import {StyledFetch} from './styled/StyledNew';

const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	margin: 16px;
	padding: 16px;
	border-radius: 16px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
`;

const FoodForm = () => {
	const [data, setData] = useState(null);
	{
		console.log(data);
	}
	const [calories, setCalories] = useState(0);
	const [value, setValue] = useState('');
	const [foods, setFoods] = useState([]);

	function FoodSearch(myQuery) {
		fetch(`/api/food/recipes?query=${myQuery}&number=5&max_fat=40`)
			.then(response => response.json())
			.then(json => setData(json.results));
	}

	return (
		<>
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
					FoodSearch(value);
				}}
			>
				<StyledSearch>
					Search for recipes
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
				</StyledSearch>
			</StyledForm>
			{data?.map(recipe => {
				return (
					<div key={recipe.id}>
						<StyledFetch>
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
							<img src={recipe.image} alt="recipeImage"></img>
							<p>{recipe.nutrition.nutrients[0].amount} calories / 100g</p>
						</StyledFetch>
					</div>
				);
			})}
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
			<StyledCalories>
				<div>total calories consumed today: {calories}</div>
			</StyledCalories>
		</>
	);
};

export default FoodForm;
