const fixBakersPercent = ingredients => {
	ingredients[0].percent = 100;
	for (let i = 1; i < ingredients.length; i++) {
		ingredients[i].percent =
			(ingredients[i].weight / ingredients[0].weight) * 100;
	}

	return ingredients;
};

const fixScalingPercent = ingredients => {
	let totalWeight = 0;

	for (let i = 0; i < ingredients.length; i++) {
		totalWeight += parseFloat(ingredients[i].weight);
	}

	for (let i = 0; i < ingredients.length; i++) {
		ingredients[i].percent = (ingredients[i].weight / totalWeight) * 100;
	}
	return ingredients;
};

const fixBakersWeight = ingredients => {
	for (let i = 1; i < ingredients.length; i++) {
		ingredients[i].weight =
			(ingredients[i].percent / 100) * ingredients[0].weight;
	}

	return ingredients;
};

export const updateIngredientWeight = (ingredient, newWeight, setState) => {
	setState(currentState => {
		let ret = currentState.ingredients.map(x => {
			return { ...x };
		});

		ret[ingredient].weight = newWeight;

		if (currentState.calcType === "baker") {
			ret = fixBakersPercent(ret);
		} else {
			ret = fixScalingPercent(ret);
		}

		return { ingredients: ret };
	});
};

export const updateIngredientPercent = (ingredient, newPercent, setState) => {
	setState(currentState => {
		let ret = currentState.ingredients.map(x => {
			return { ...x };
		});
		ret[ingredient].percent = newPercent;

		if (currentState.calcType === "baker") {
			ret = fixBakersWeight(ret);
		}
		return { ingredients: ret };
	});
};

export const addNewIngredient = setState => {
	setState(currentState => {
		let ret = currentState.ingredients.map(x => {
			return { ...x };
		});
		ret.push({
			name: "",
			weight: 0,
			percent: 0,
		});

		return { ingredients: ret };
	});
};

export const updateIngredientName = (ingredient, newName, setState) => {
	setState(currentState => {
		let ret = currentState.ingredients.map(x => {
			return { ...x };
		});
		ret[ingredient].name = newName;
		return { ingredients: ret };
	});
};
