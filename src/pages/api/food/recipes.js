const apiKey = process.env.SPOONACULAR_API_KEY;

export default async function handler(request, response) {
	const {number, query, max_fat} = request.query;
	const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&maxFat=${max_fat}&number=${number}`;

	const response_ = await fetch(url);
	const json = await response_.json();
	console.log('hallo');
	response.status(200).json(json);
}

//http://localhost:3000/api/food/recipes?query=pasta&number=1&max_fat=40
