/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import StepOneForm from './Steps/StepOneForm.js';
import StepTwoForm from './Steps/StepTwoForm.js';
import StepThreeForm from './Steps/StepThreeForm.js';
import ReviewForm from './Steps/ReviewForm.js';

import {
	Stepper,
	Step,
	StepLabel,
	StepConnector,
	Button,
	Typography,
	Grid,
	Card,
	CardContent,
} from '@material-ui/core';

import {
	useForm,
	FormProvider,
	// Controller,
	// useFormContext,
} from "react-hook-form";

import RoomServiceIcon from '@material-ui/icons/RoomService';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ReceiptIcon from '@material-ui/icons/Receipt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';



const dishesJson = require('../dishes.json');

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage:
				'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
		},
	},
	completed: {
		'& $line': {
			backgroundImage:
				'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundImage:
			'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundImage:
			'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
	},
});

function ColorlibStepIcon(props) {
	const classes = useColorlibStepIconStyles();
	const { active, completed } = props;

	const icons = {
		1: <GroupAddIcon />,
		2: <RestaurantIcon />,
		3: <RoomServiceIcon />,
		4: <ReceiptIcon />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(props.icon)]}
		</div>
	);
}

ColorlibStepIcon.propTypes = {
	/**
	 * Whether this step is active.
	 */
	active: PropTypes.bool,
	/**
	 * Mark the step as completed. Is passed to child components.
	 */
	completed: PropTypes.bool,
	/**
	 * The label displayed in the step icon.
	 */
	icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	formContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	button: {
		marginRight: theme.spacing(1),
	},
	nxtButton: {
		backgroundImage: 'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
	},
	backButton: {
		backgroundImage: 'linear-gradient(90deg, #A8C0FF 0%, #3F2B96 100%)',
		color: '#FFFFFF'
	},

	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},


}));


function getSteps() {
	return ['Select Meal & Peoples', 'Restro', 'Select Servings', 'Review'];
}

export default function MainSteppers() {
	const classes = useStyles();

	const [selectedMeal, setSelectedMeal] = React.useState('');
	const [selectedPeople, setSelectedPeople] = React.useState('');
	const [availableRestaurant, setAvailableRestaurant] = React.useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = React.useState('');
	const [activeStep, setActiveStep] = React.useState(0);
	const [selectedDishItems, setSelectedDishItems] = React.useState(dishesJson.dishes);
	const [dish, setDish] = React.useState('');
	const [qty, setQty] = React.useState(0);
	// const [dishes, setDishes] = React.useState(dishesJson.dishes);

	const methods = useForm({
		defaultValues: {
			restaurant: "",
			meal: "",
			people: "",
			dish: "",
		},
	});


	const steps = getSteps();

	const handleNext = (data) => {
		console.log('DATA ::>', data);

		switch (activeStep) {
			case 0:
				console.log('selectedMeal ::>', selectedMeal)
				const updatedMealDishes = selectedDishItems.filter((item) => {
					return item.availableMeals.includes(selectedMeal)
				});

				console.log('updatedMealDishes ::>', updatedMealDishes)
				setSelectedDishItems(updatedMealDishes);

				let availableRestaurantTmp = []

				for (let item2 in updatedMealDishes) {
					// console.log('item::>', updatedMealDishes[item2]);
					if (!availableRestaurantTmp.includes(updatedMealDishes[item2].restaurant)) {
						availableRestaurantTmp.push(updatedMealDishes[item2].restaurant);
					}
				}

				console.log('availableRestaurantTmp ::>', availableRestaurantTmp);
				setAvailableRestaurant(availableRestaurantTmp);

				break;
			case 1:
				const updatedRestaurantDishes = selectedDishItems.filter((item) => {
					return item.restaurant === selectedRestaurant;
				});
				setSelectedDishItems(updatedRestaurantDishes);
				break;
			case 2:
			case 3:
			default:
		}

		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		// setActiveStep(activeStep - 1);
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	// const handleReset = () => {
	// 	setActiveStep(0);
	// };

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <StepOneForm
					selectedMeal={selectedMeal}
					setSelectedMeal={setSelectedMeal}
					setSelectedPeople={setSelectedPeople}
					selectedPeople={selectedPeople}
				/>;
			case 1:
				return <StepTwoForm
					availableRestaurant={availableRestaurant}
					selectedRestaurant={selectedRestaurant}
					setSelectedRestaurant={setSelectedRestaurant}
				/>;
			case 2:
				return <StepThreeForm
					selectedDishItems={selectedDishItems || []}
					dish={dish}
					setDish={setDish}
					qty={qty}
					setQty={setQty}
				/>;
			case 3:
				return <ReviewForm
					selectedMeal={selectedMeal}
					selectedPeople={selectedPeople}
					selectedRestaurant={selectedRestaurant}
					dish={dish}
					qty={qty}
				/>;
			default:
				return 'Unknown step';
		}
	}

	return (
		<div className={classes.root}>

			<Grid container spacing={3}>
				<Grid item xs>
				</Grid>
				<Grid item xs={10}>

					<Card className={classes.root}>
						<CardContent>
							<Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
								{steps.map((step, index) => {
									const labelProps = {};
									const stepProps = {};

									return (
										<Step {...stepProps} key={index}>
											<StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>{step}</StepLabel>
										</Step>
									);
								})}
							</Stepper>

							<Grid container spacing={3}>
								<Grid item xs>
								</Grid>
								<Grid item xs={10}>
									<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										{activeStep === steps.length ? (
											<div>
												<Typography className={classes.instructions} variant="h5" component="h2">
													Thanks - you&apos;re Registered
												</Typography>
												{/* <Button onClick={handleReset} className={classes.button}>
													Book More
												</Button> */}
											</div>
										) : (

											<>
												<FormProvider {...methods} className={classes.formContainer}>
													<form onSubmit={methods.handleSubmit(handleNext)}>
														{getStepContent(activeStep)}
														<div className={classes.buttonContainer}>
															<Button
																className={classes.backButton}
																disabled={activeStep === 0}
																onClick={handleBack}
															>
																back
															</Button>

															<Button
																className={classes.nxtButton}
																variant="contained"
																color="primary"
																type="submit"
															>
																{activeStep === steps.length - 1 ? "Finish" : "Next"}
															</Button>
														</div>
													</form>
												</FormProvider>
											</>
										)}
									</div>
								</Grid>
								<Grid item xs>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs>
				</Grid>
			</Grid>
		</div>
	);
}