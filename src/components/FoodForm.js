import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import {StyledBlackButton, StyledWhiteButton} from './styled/StyledButtons';
import {StyledResults} from './styled/StyledContainer';
import {StyledDoneLabel} from './styled/StyledDoneLabel';
import {StyledForm} from './styled/StyledForm';
import {StyledImageCenter} from './styled/StyledImage';
import {StyledInput} from './styled/StyledInput';
import {StyledAtag} from './styled/StyledLink';
import {StlyedList} from './styled/StyledList';
import {StyledListItems, StyledFetchItems} from './styled/StyledListItems';
import {StyledCalories} from './styled/StyledNew';

const StyledFetchButtons = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 6px;
`;

const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	margin: 16px;
	padding: 16px;
	border-radius: 16px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
`;

const StyledNutrientList = styled.ul`
	list-style: none;
`;

const StyledText = styled.p`
	color: white;
	font-family: sans-serif;
	font-weight: bold;
`;

const StyledCenterDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const FoodForm = () => {
	const [data, setData] = useState(null);
	{
		console.log(data);
	}
	const [calories, setCalories] = useState(0);
	const [value, setValue] = useState('');
	const [foods, setFoods] = useState([]);

	function FoodSearch(props) {
		fetch(`/api/food/recipes?query=${props}`)
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
						<StyledResults>
							<h2>{recipe.title}</h2>
						</StyledResults>
						<StyledImageCenter>
							<img src={recipe.image} alt="recipeImage" />
						</StyledImageCenter>
						<StyledCenterDiv>
							<StyledNutrientList>
								<StyledFetchItems>
									<StyledText>
										{recipe.nutrition.nutrients[8].amount}g Protein
									</StyledText>
								</StyledFetchItems>
								<StyledFetchItems>
									<StyledText>
										{recipe.nutrition.nutrients[3].amount}g Carbs
									</StyledText>
								</StyledFetchItems>
								<StyledFetchItems>
									<StyledText>
										{recipe.nutrition.nutrients[1].amount}g Fat
									</StyledText>
								</StyledFetchItems>
								<StyledFetchItems>
									<StyledText>
										{recipe.nutrition.nutrients[0].amount}g cal
									</StyledText>
								</StyledFetchItems>
								<StyledFetchButtons>
									<StyledWhiteButton>
										<StyledAtag href={recipe.sourceUrl}>
											Cooking Guide
										</StyledAtag>
									</StyledWhiteButton>
									<StyledBlackButton
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
										add Meal
									</StyledBlackButton>
								</StyledFetchButtons>
							</StyledNutrientList>
						</StyledCenterDiv>
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
				<p>total calories consumed today: {calories}</p>
			</StyledCalories>
		</>
	);
};

export default FoodForm;
