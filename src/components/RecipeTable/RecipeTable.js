// ==================== React Imports

import React from "react";

// ==================== Bootstrap Imports

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// ==================== Local Imports

import RecipeTableRows from "./RecipeTableRows";

// ==================== Helper Functions

// ==================== Component Function

function RecipeTable(props) {
	return (
		<Table striped bordered hover variant="dark">
			<thead>
				<tr>
					<th>Ingredients</th>
					<th>Weight</th>
					<th>Percentage</th>
				</tr>
			</thead>
			<tbody>
				<RecipeTableRows
					inputType={props.state.inputType}
					rows={props.state.ingredients}
					updateName={(ingredient, newName) => {
						props.updateName(ingredient, newName, props.setState);
					}}
					updateWeight={(ingredient, newWeight) => {
						props.updateWeight(
							ingredient,
							newWeight,
							props.setState
						);
					}}
					updatePercent={(ingredient, newPercent) => {
						props.updatePercent(
							ingredient,
							newPercent,
							props.setState
						);
					}}
				/>
			</tbody>
			<tfoot>
				<tr>
					<td colSpan="3">
						<Button
							variant="secondary"
							onClick={e => props.addNew(props.setState)}
						>
							Add new ingredient
						</Button>
					</td>
				</tr>
			</tfoot>
		</Table>
	);
}

export default RecipeTable;
