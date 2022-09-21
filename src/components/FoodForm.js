export default function FoodForm() {
	return (
		<div>
			<h3>Food Tracker </h3>

			<form onSubmit={() => {}}>
				<label htmlFor="meal">What did you eat today? </label>
				<input id="meal" type="text" placeholder="e.g.3 Eggs" />
				<button type="submit">Add</button>
			</form>
		</div>
	);
}
