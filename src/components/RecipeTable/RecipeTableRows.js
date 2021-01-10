// ==================== React Imports

import React from "react";

// ==================== Bootstrap Imports

// ==================== Local Imports

import RecipeTableRow from "./RecipeTableRow";

// ==================== Helper Functions

// ==================== Component Function

function RecipeTableRows(props) {
	return (
		<>
			{props.rows.map((row, index) => (
				<RecipeTableRow
					key={index}
					inputType={props.inputType}
					name={row.name}
					weight={row.weight}
					percent={row.percent}
					updateName={newName => {
						props.updateName(index, newName);
					}}
					updateWeight={newWeight => {
						props.updateWeight(index, newWeight);
					}}
					updatePercent={newPercent => {
						props.updatePercent(index, newPercent);
					}}
				/>
			))}
		</>
	);
}

export default RecipeTableRows;
