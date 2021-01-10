// ==================== React Imports

import React from "react";
import { useReducer } from "react";

// ==================== Bootstrap Imports

// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// ==================== Local Imports

import CalcConfig from "../CalcConfig/CalcConfig";
import RecipeTable from "../RecipeTable/RecipeTable";
import {
	updateIngredientWeight,
	updateIngredientPercent,
	addNewIngredient,
	updateIngredientName,
} from "../../helpers/updates";
import Multiplier from "../Multiplier/Multiplier";

// ==================== Helper Functions

const defaultRows = [
	{ name: "Flour", weight: 500, percent: 100 },
	{ name: "Water", weight: 350, percent: 70 },
	{ name: "Salt", weight: 15, percent: 3 },
	{ name: "Yeast", weight: 5, percent: 1 },
];

// ==================== Component Function

function BakersCalculator() {
	// Set up our state.
	const [state, setState] = useReducer(
		(state, newState) => {
			if (typeof newState === "function") {
				newState = newState(state);
			}

			return { ...state, ...newState };
		},
		{
			calcType: "baker",
			inputType: "weight",
			ingredients: defaultRows,
		}
	);

	return (
		<>
			<Row className="mt-3">
				<Col>
					<CalcConfig state={state} setState={setState} />
				</Col>
			</Row>
			<Row className="mt-3">
				<Col>
					<RecipeTable
						state={state}
						setState={setState}
						updateWeight={updateIngredientWeight}
						updatePercent={updateIngredientPercent}
						addNew={addNewIngredient}
						updateName={updateIngredientName}
					/>
				</Col>
			</Row>
			<Row>
				<Col>
					<Multiplier setState={setState} />
				</Col>
			</Row>
		</>
	);
}

export default BakersCalculator;
