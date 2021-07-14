import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles'

const steps = ['Shipping Address', 'Payment Details']

const Checkout = ({ cart }) => {
	const [activeStep, setActiveStep] = useState(0)
	const [checkoutToken, setCheckoutToken] = useState(null)
	const classes = useStyles();

	useEffect(() => {
		const generateToken = async () => {
			try {
				 const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

				 setCheckoutToken(token);
			} catch (error) {

			}
		}

		generateToken();
	}, [cart]);

	const Confirmation = () => (
		<div>
			Confirmation
		</div>
	)

	const Form = () => activeStep === 0
		? <AddressForm checkoutToken={checkoutToken}/>
		: <PaymentForm />

	return (
		<div>
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
