const apiKey = process.env.SPOONACULAR_API_KEY;

export default async function handler(request, response) {
	const {query} = request.query;
	const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&addRecipeNutrition=true&number=6`;
	const response_ = await fetch(url);
	const json = await response_.json();
	response.status(200).json(json);
}
