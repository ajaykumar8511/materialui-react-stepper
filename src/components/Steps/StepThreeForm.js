/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

import {
	Button,
	Card,
	CardContent,
	TextField,
	MenuItem,
	ButtonGroup,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,

} from '@material-ui/core';

import {
	Controller,
	useFormContext,
	// useForm,
	// FormProvider,
} from "react-hook-form";

import AddIcon from '@mui/icons-material/Add';

const StepThreeForm = (props) => {
	const { control } = useFormContext();
	// const [dish, setDish] = React.useState('');
	// const [qty, setQty] = React.useState(0);
	const { selectedDishItems, dish, setDish, qty, setQty } = props;

	const handleChange = (event) => {
		setDish(event.target.value);
		console.log('dish ::>', dish);
	};

	const getValue = (event) => {
		// setQty(event.target.value);
		console.log('qty ::>', qty);
	};
	const addDishBtnFn = () => {
		console.log('addDishBtnFn function of Add Dish is called',);
	};


	return (
		<>
			<Card>
				<CardContent>
					<TableContainer >
						<Table >
							<TableHead>
								<TableRow>
									<TableCell>Dish</TableCell>
									<TableCell align="right">Quantity</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell component="th" scope="row">
										{dish}
									</TableCell>
									<TableCell align="right">
										{qty}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</Card>
			<br />
			<Controller
				control={control}
				name="dish"
				render={({ field }) => (
					<TextField
						{...field}
						id="outlined-select-dish"
						select
						label="Select Dish"
						value={dish}
						onChange={handleChange}
						variant="outlined"
						required='required'
						style={{ minWidth: 330 }}
					>
						{selectedDishItems.map((option) => (
							<MenuItem key={option.id} value={option.name}>
								{option.name}
							</MenuItem>
						))}
					</TextField>
				)}
			/>
			<br />
			<br />

			<Controller
				control={control}
				name="dishqty"
				render={({ field }) => (
					<ButtonGroup
						{...field}
						size="small"
						aria-label="Dish Quantity"
						onClick={getValue()}
					>
						<Button id="IncreaseQtyBtn" onClick={() => (qty !== 0) ? setQty(qty - 1) : null}>-</Button>
						<Button id="DisplayQtyBtn">{qty}</Button>
						<Button id="DecreaseQtyBtn" onClick={() => setQty(qty + 1)}>+</Button>
					</ButtonGroup>
				)}
			/>

			<Controller
				control={control}
				name="adddish"
				render={({ field }) => (
					<Button
						{...field}
						id="addDishBtn"
						variant="outlined"
						style={{ marginLeft: 90 }}
						startIcon={<AddIcon />}
						onClick={() => addDishBtnFn()}
					>
						Add Dish
					</Button>
				)}
			/>
			<br />
			<br />
			<br />
		</>
	);
}

export default StepThreeForm;
