// ==================== React Imports

import React from "react";

// ==================== Bootstrap Imports

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// ==================== Local Imports

import { updateIngredientWeight } from "../../helpers/updates";

// ==================== Helper Functions

// ==================== Component Function

function CalcConfig(props) {
	const calcTypeOptions = [
		{ name: "Baker's Percentages", value: "baker" },
		{ name: "Recipe Scaling", value: "recipe" },
	];

	const inputTypeOptions = [
		{ name: "Weight", value: "weight" },
		{ name: "Percentage", value: "percentage" },
	];

	return (
		<Row>
			<Col>
				Calculate by:
				<ButtonGroup toggle className="pl-3">
					{calcTypeOptions.map((calcTypeOption, idx) => (
						<ToggleButton
							key={idx}
							type="radio"
							variant="primary"
							name="calcTypeOption"
							size="lg"
							value={calcTypeOption.value}
							checked={
								props.state.calcType === calcTypeOption.value
							}
							onChange={e => {
								let newState = {
									calcType: e.currentTarget.value,
								};

								if (e.currentTarget.value === "recipe") {
									newState.inputType = "weight";
								}

								props.setState(newState);

								updateIngredientWeight(
									0,
									props.state.ingredients[0].weight,
									props.setState
								);
							}}
						>
							{calcTypeOption.name}
						</ToggleButton>
					))}
				</ButtonGroup>
			</Col>
			<Col className="text-right">
				Enter by:
				<ButtonGroup toggle className="pl-3">
					{inputTypeOptions.map((inputTypeOption, idx) => (
						<ToggleButton
							key={idx}
							type="radio"
							variant="primary"
							name="inputTypeOption"
							size="lg"
							value={inputTypeOption.value}
							checked={
								props.state.inputType === inputTypeOption.value
							}
							onChange={e =>
								props.setState({
									inputType: e.currentTarget.value,
								})
							}
							disabled={props.state.calcType === "recipe"}
						>
							{inputTypeOption.name}
						</ToggleButton>
					))}
				</ButtonGroup>
			</Col>
		</Row>
	);
}

export default CalcConfig;
