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
import Grid from '@mui/material/Grid';

const ReviewForm = (props) => {

	const { selectedMeal, selectedPeople, selectedRestaurant, orderItems } = props;

	return (
		<div>
			<div>
				<Grid container spacing={2}>
					<Grid item lg={6} xs={12}>
						<Card sx={{ width: '100%' }}>
							<CardContent>
								<Typography color="textSecondary" >
									Meal plan sent to
								</Typography>
								<Typography variant="h5" component="h2" gutterBottom>
									The {selectedRestaurant}
								</Typography>
								<TableContainer>
									<Table >
										<TableHead>
											<TableRow>
												<TableCell>Meal</TableCell>
												<TableCell align="right" >{selectedMeal}</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell component="th" scope="row">
													No of People
												</TableCell>
												<TableCell align="right" >{selectedPeople}</TableCell>
											</TableRow>
											{/* <TableRow>
												<TableCell component="th" scope="row">
													Restaurant
												</TableCell>
												<TableCell align="right">{selectedRestaurant}</TableCell>
											</TableRow> */}
										</TableBody>
									</Table>
								</TableContainer>
							</CardContent>
						</Card>
					</Grid>

					<Grid item lg={6} xs={12}>
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
					</Grid>
				</Grid>
				<br />
				<br />
			</div>
		</div>
	);
}


export default ReviewForm;