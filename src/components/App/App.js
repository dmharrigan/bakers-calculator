// ==================== React Imports

import React from "react";

// ==================== Bootstrap Imports

import Container from "react-bootstrap/Container";

// ==================== Local Imports

import BakersCalculator from "../BakersCalculator/BakersCalculator";

// ==================== Helper Functions

// ==================== Component Function

function App() {
	return (
		<Container>
			<h1 className="my-4">Dana's Baker's Calculator</h1>
			<BakersCalculator />
		</Container>
	);
}

export default App;
