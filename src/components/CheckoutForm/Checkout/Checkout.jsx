import { Button, CircularProgress, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles'

const steps = ['Shipping Address', 'Payment Details']

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
	const [activeStep, setActiveStep] = useState(0)
	const [checkoutToken, setCheckoutToken] = useState(null)
	const [shippingData, setShippingData] = useState({});
	const [isFinished, setIsFinished] = useState(false);
	const classes = useStyles();
	const history = useHistory();

	useEffect(() => {
		const generateToken = async () => {
			try {
				const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

				setCheckoutToken(token);
			} catch (error) {
				history.push('/')
			}
		}

		generateToken();
	}, [cart]);

	const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
	const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

	const next = (data) => {
		setShippingData(data);
		console.log(data);

		nextStep();
	}

	const timeout = () => {
		setTimeout(() => {
			setIsFinished(true);
		}, 6000);
	}

	let Confirmation = () => order.customer ? (
		<div>
			<div>
				<Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}! Enjoy your rocks.</Typography>
				<Divider className={classes.divider} />
				<Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
			</div>
			<br/>
			<Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
		</div>
	) 
	// : isFinished ? (
	// 	<div>
	// 		<div>
	// 			<Typography variant="h5">Thank you for your purchase, fam. Enjoy your rocks.</Typography>
	// 			<Divider className={classes.divider} />
	// 		</div>
	// 		<br/>
	// 		<Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
	// 	</div>
	// ) 
	: (
		<div className={classes.spinner}>
			<CircularProgress />
		</div>
	)

	// if(error) {
	// 	<div>
	// 		<Typography variant="h5">Error: {error}</Typography>
	// 		<br/>
	// 		<Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
	// 	</div>
	// }

	const Form = () => activeStep === 0
		? <AddressForm checkoutToken={checkoutToken} next={next} />
		: <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />

	return (
		<div>
			<CssBaseline />
			<div className={classes.toolbar} />
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography variant="h4" align="center">Checkout</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>

					{activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
				</Paper>
			</main>
		</div>
	)
}

export default Checkout
