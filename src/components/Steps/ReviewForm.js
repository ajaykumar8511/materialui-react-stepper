/* eslint-disable react/prop-types */
import React from 'react';
import {
	Typography,
	Card,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';
// import Grid from '@mui/material/Grid';

const ReviewForm = (props) => {

	const { selectedMeal, selectedPeople, selectedRestaurant, orderItems } = props;

	return (
		<>
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" >
						Review
					</Typography>
					<Typography color="textSecondary" gutterBottom>
						of your meal plan
					</Typography>
					<TableContainer>
						<Table style={{minWidth:'290px'}}>
							<TableBody>
								<TableRow>
									<TableCell><b>Meal :</b></TableCell>
									<TableCell align="right" >{selectedMeal}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										<b>No. of People :</b>
									</TableCell>
									<TableCell align="right" >{selectedPeople}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										component="th"
										scope="row"
									>
										<b>Restaurant :</b>
									</TableCell>
									<TableCell align="right">{selectedRestaurant}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<br />
						<Table >
							<TableHead>
								<TableRow  >
									<TableCell><b>Dish</b></TableCell>
									<TableCell align="right"><b>Quantity</b></TableCell>
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
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</Card>

			<br />
		</>
	);
}


export default ReviewForm;