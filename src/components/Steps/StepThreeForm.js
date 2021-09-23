/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

const useStyles = makeStyles((theme) => ({
	hoverButtonStyle: {
		"&:hover": {
			backgroundImage: 'linear-gradient(90deg, rgba(0,168,138,1) 0%, rgba(0,176,144,1) 49%, rgba(0,224,182,1) 100%)',
			color: 'white',
		}
	},
	icon: {
		"&:hover": {
			// background: 'linear-gradient(to right, #ff1c3b 0%, #f44949 50%, #ff7a7c 100%)',
			// color: '#ff1c3c',
			color: '#000',

		},
	},
}))

const StepThreeForm = (props) => {
	const classes = useStyles();
	const { control } = useFormContext();
	const { selectedDishItems, dish, setDish, qty, setQty, orderItems, setOrderItems } = props;

	const handleChange = (event) => {
		setDish(event.target.value);
		console.log('dish ::>', dish);
	};


	const addOrderItem = () => {
		setQty(1);
		const selectedItem = selectedDishItems.filter((item) => {
			return item.id === dish;
		});
		const Index = orderItems.findIndex((item) => {
			return item.id === selectedItem[0].id;
		});

		if (Index !== -1) {
			let tempArray = [...orderItems];
			console.log('Index ::>', Index)

			if (tempArray.length) {
				console.log('tempArray ::>', tempArray)
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
									<TableCell><b>Dish</b></TableCell>
									<TableCell align="right"><b>Quantity</b></TableCell>
									<TableCell align="center"><b>Action</b></TableCell>
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
												<IconButton
													// color="primary"
													onClick={() => deleteOrderItem(item.id)}
													aria-label="remove dish"
													component="span"
												>
													<ClearOutlinedIcon style={{fontSize:'16px'}} className={classes.icon} />
												</IconButton>
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
						style={{ marginTop: '10px' }}
					>
						<Button
							id="DecreaseQtyBtn"
							className={classes.hoverButtonStyle}
							onClick={() => (qty !== 1) ? setQty(qty - 1) : null}
							style={{ padding: '2px' }}
						>
							<RemoveRoundedIcon style={{ fontSize: '17px' }} />
						</Button>
						<Button id="DisplayQtyBtn"><b>{qty}</b></Button>
						<Button
							id="IncreaseQtyBtn"
							className={classes.hoverButtonStyle}
							onClick={() => setQty(qty + 1)}
						>
							<AddIcon style={{ fontSize: '17px' }} />
						</Button>
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
						className={classes.hoverButtonStyle}
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
