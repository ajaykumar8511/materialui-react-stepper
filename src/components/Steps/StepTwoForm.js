/* eslint-disable react/prop-types */
import React from 'react';
import {
	TextField,
	MenuItem,
} from '@material-ui/core';

import {
	Controller,
	useFormContext,
} from "react-hook-form";

const StepTwoForm = (props) => {
	const { control } = useFormContext();
	const { selectedRestaurant, setSelectedRestaurant } = props;


	const handleChange = (event) => {
		setSelectedRestaurant(event.target.value);
		console.log('selectedRestaurant ::>', selectedRestaurant);
	};

	return (
		<>
			<Controller
				control={control}
				name="restaurant"
				render={({ field }) => (
					<TextField
						{...field}
						id="outlined-select-restaurant"
						select
						label="Select Restaurant"
						value={selectedRestaurant}
						onChange={handleChange}
						required='required'
						variant="outlined"
						style={{ minWidth: 330, marginBottom: 20, marginTop: 30 }}
					>
						{props.availableRestaurant.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
			<br />
			<br />
			<br />
			<br />
		</>
	);
}

export default StepTwoForm;