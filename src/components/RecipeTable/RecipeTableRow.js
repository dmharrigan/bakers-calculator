// ==================== React Imports

import React from "react";

// ==================== Bootstrap Imports

import Form from "react-bootstrap/Form";

// ==================== Local Imports

// ==================== Helper Functions

// ==================== Component Function

function RecipeTableRow(props) {
	return (
		<tr>
			<td>
				<Form.Control
					type="text"
					value={props.name}
					readOnly={props.name === "Flour"}
					onChange={e => props.updateName(e.currentTarget.value)}
				/>
			</td>
			<td>
				<Form.Control
					type="number"
					value={props.weight}
					onChange={e => props.updateWeight(e.currentTarget.value)}
					readOnly={
						props.inputType === "percentage" &&
						props.name !== "Flour"
					}
				/>
			</td>
			<td>
				<Form.Control
					type="number"
					value={props.percent}
					onChange={e => props.updatePercent(e.currentTarget.value)}
					readOnly={
						props.inputType === "weight" || props.name === "Flour"
					}
				/>
			</td>
		</tr>
	);
}

export default RecipeTableRow;
