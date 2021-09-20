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

const ReviewForm = () => {
	// const { control } = useFormContext();
	// const [dish, setDish] = React.useState('');
	// const [qty, setQty] = React.useState(0);


	function createData(name, calories) {
		return { name, calories };
	}

	const rows = [
		// createData('Meal', 'Lunch'),
		createData('No. of People', 3),
		createData('Restaurant', 'Restaurant A'),
		createData('Dishes', `Dish A \n Dish B`),
	];


	return (
		<>
			<br />
			<Card >
				<CardContent>
					<Typography variant="h5" component="h2">
						Review
					</Typography>
					<Typography color="textSecondary" gutterBottom>
						Your Selections !
					</Typography>
					<TableContainer>
						<Table >
							<TableHead>
								<TableRow>
									<TableCell>Meal</TableCell>
									<TableCell align="right">Lunch</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">{row.calories}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</Card>
			<br />
			<br />
		</>
	);
}


export default ReviewForm;