// ==================== React Imports

import React from "react";
import { useState } from "react";

// ==================== Bootstrap Imports

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

// ==================== Local Imports

// ==================== Helper Functions

const scaleRecipe = (mult, setState) => {
	setState(currentState => {
		let ret = currentState.ingredients.map(x => {
			return { ...x };
		});

		for (let i = 0; i < ret.length; i++) {
			ret[i].weight *= mult;
		}

		return { ingredients: ret };
	});
};

// ==================== Component Function
function Multiplier(props) {
	const [mult, updateMult] = useState(1);

	return (
		<>
			<Row>
				<Col></Col>
				<Col>
					<Form.Control
						type="number"
						value={mult}
						onChange={e => {
							updateMult(e.currentTarget.value);
						}}
					/>
				</Col>
				<Col>
					<Button
						variant="primary"
						onClick={e => {
							scaleRecipe(mult, props.setState);
							updateMult(1);
						}}
					>
						Scale
					</Button>
				</Col>
			</Row>
		</>
	);
}

export default Multiplier;
