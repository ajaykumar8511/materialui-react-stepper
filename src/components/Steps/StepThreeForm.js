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

const currencies = [
	{
		value: 'USD',
		label: '$',
	},
	{
		value: 'EUR',
		label: '€',
	},
	{
		value: 'BTC',
		label: '฿',
	},
	{
		value: 'JPY',
		label: '¥',
	},
];

const StepThreeForm = () => {
	const { control } = useFormContext();
	const [dish, setDish] = React.useState('');
	const [qty, setQty] = React.useState(0);


	const handleChange = (event) => {
		// setCurrency(event.target.value);
	};

	const getValue = () => {
		console.log('getValue function of Dish QTy is called');
	};
	const addDishBtnFn = () => {
		console.log('addDishBtnFn function of Add Dish is called');
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
								{/* {rows.map((row) => ( */}
								<TableRow
								// key={row.name}
								>
									<TableCell component="th" scope="row">
										{/* {row.name} */}
										Dish 1
									</TableCell>
									<TableCell align="right">
										{/* {row.calories} */}
										2
									</TableCell>
								</TableRow>
								{/* ))} */}
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
						id="outlined-select-dish"
						select
						label="Select Dish"
						value={dish}
						onChange={handleChange}
						variant="outlined"
						style={{ minWidth: 330 }}
						{...field}
					>
						{currencies.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
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
						size="small"
						aria-label="Dish Quantity"
						onClick={getValue()}
						{...field}
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
						id="addDishBtn"
						variant="outlined"
						style={{ marginLeft: 90 }}
						startIcon={<AddIcon />}
						{...field}
						onClick={()=> addDishBtnFn()}
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
