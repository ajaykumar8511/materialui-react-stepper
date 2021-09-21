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
	// const { control } = useFormContext();
	// const [dish, setDish] = React.useState('');
	// const [qty, setQty] = React.useState(0);
	const { selectedMeal, selectedPeople, selectedRestaurant, dish, qty } = props;

	return (
		<div>
			<div>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Card sx={{ width: '100%' }}>
							<CardContent>
								<Typography variant="h5" component="h2">
									{selectedRestaurant}
								</Typography>
								<Typography color="textSecondary" gutterBottom>
									Get your meal plan...
								</Typography>
								<TableContainer>
									<Table >
										<TableHead>
											<TableRow>
												<TableCell>Meal</TableCell>
												<TableCell align="right">{selectedMeal}</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell component="th" scope="row">
													No of People
												</TableCell>
												<TableCell align="right">{selectedPeople}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell component="th" scope="row">
													Restaurant
												</TableCell>
												<TableCell align="right">{selectedRestaurant}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</TableContainer>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6}>
						<Card>
							<CardContent>
								<Typography variant="h5" component="h2">
									Dishes
								</Typography>
								<Typography color="textSecondary" gutterBottom>
									Selections
								</Typography>
								<TableContainer>
									<Table >
										<TableHead>
											<TableRow>
												<TableCell>Dish Name</TableCell>
												<TableCell align="right">Quantity</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											<TableRow>
												<TableCell component="th" scope="row">
													{dish}
												</TableCell>
												<TableCell align="right">{qty}</TableCell>
											</TableRow>
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