/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

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
} from "react-hook-form";

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const StepThreeForm = (props) => {
	const { control } = useFormContext();
	const [dishIds, setDishIds] = useState([]);
	const { selectedDishItems, dish, setDish, qty, setQty, orderItems, setOrderItems } = props;

	const handleChange = (event) => {
		setDish(event.target.value);
		console.log('dish ::>', dish);
	};

	// const addDishBtnFn = () => {
	// 	console.log('addDishBtnFn function of Add Dish is called',);
	// };

	const addOrderItem = () => {
		const selectedItem = selectedDishItems.filter((item) => {
			return item.id === dish;
		});
		const Index = orderItems.findIndex((item) => {
			return item.id === selectedItem[0].id;
		});

		if (Index !== -1) {
			let tempArray = [...orderItems];
			console.log('Index ::>',Index)

			if(tempArray.length){
				console.log('tempArray ::>',tempArray)
				tempArray[Index].dishQty = tempArray[Index].dishQty + qty;
				setOrderItems([...tempArray])
			}

		}
		else {
			setOrderItems([...orderItems, { id: selectedItem[0].id, dishName: selectedItem[0].name, dishQty: qty }])
		}
		
	};
	const deleteOrderItem = (id) => {
		// console.log('addDishBtnFn function of Add Dish is called',);
		const availableOrderItems = orderItems.filter((item) => {
			return item.id !== id;
		});

		setOrderItems([...availableOrderItems]);


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
									<TableCell align="center">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{orderItems.map((item) => {

									return (
										<TableRow key={item.id}>
											<TableCell component="th" scope="row">
												{item.dishName}
											</TableCell>
											<TableCell align="right">
												{item.dishQty}
											</TableCell>
											<TableCell align="right">
												<Button
													variant="outlined"
													startIcon={<DeleteIcon />}
													onClick={() => deleteOrderItem(item.id)}
												>
													Delete
												</Button>
											</TableCell>
										</TableRow>
									);
								})}
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
						{selectedDishItems.map((option) => {

							return (
								<MenuItem key={option.id} value={option.id}>
									{option.name}
								</MenuItem>
							)

						})}
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
					>
						<Button id="IncreaseQtyBtn" onClick={() => (qty !== 1) ? setQty(qty - 1) : null}>-</Button>
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
						onClick={() => addOrderItem()}
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
