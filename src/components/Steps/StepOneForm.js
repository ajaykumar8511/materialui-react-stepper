import React from 'react';
import {
	TextField,
	MenuItem,
} from '@material-ui/core';
import {
	Controller,
	useFormContext,
	// useForm,
	// FormProvider,
} from "react-hook-form";

const StepOneForm = (props) => {
	const { control } = useFormContext();
	const { selectedMeal, selectedPeople, setSelectedPeople, setSelectedMeal } = props;

	const mealHandleChange = (event) => {
		console.log('mealHandleChange function');
		// setSelectedMeal(event.target.value);
	}

	const peopleHandleChange = (event) => {
		setSelectedPeople(event.target.value);
	}

	const meals = [
		{
			value: 'breakfast',
			label: 'Breakfast',
		},
		{
			value: 'lunch',
			label: 'Lunch',
		},
		{
			value: 'dinner',
			label: 'Dinner',
		},

	];

	// const handleChange = (event) => {
	// 	setCurrency(event.target.value);
	// };

	return (
		<>
			<Controller
				control={control}
				name="meal"
				render={({ field }) => (
					<TextField
						select
						id="outlined-select-meal"
						label="Please select your meal"
						value={selectedMeal}
						onSelect={()=> mealHandleChange()}
						variant="outlined"
						style={{ minWidth: 330, marginBottom: 20, marginTop: 20 }}
						{...field}
					>
						{meals.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>

				)}
			/>
			<br />

			<Controller
				control={control}
				name="people"
				render={({ field }) => (
					<TextField
						id="outlined-select-people"
						select
						label="How many Guests?"
						value={selectedPeople}
						onChange={peopleHandleChange}
						variant="outlined"
						style={{ minWidth: 330 }}
						{...field}
					>
						<MenuItem value={"1"}>1</MenuItem>
						<MenuItem value={"2"}>2</MenuItem>
						<MenuItem value={"3"}>3</MenuItem>
						<MenuItem value={"4"}>4</MenuItem>
						<MenuItem value={"5"}>5</MenuItem>
						<MenuItem value={"6"}>6</MenuItem>
						<MenuItem value={"7"}>7</MenuItem>
						<MenuItem value={"8"}>8</MenuItem>
						<MenuItem value={"9"}>9</MenuItem>
						<MenuItem value={"10"}>10</MenuItem>
					</TextField>
				)}
			/>
			<br />
			<br />
		</>
	);
}

export default StepOneForm;