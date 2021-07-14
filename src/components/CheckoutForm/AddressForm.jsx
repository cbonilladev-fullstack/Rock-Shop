import { Grid, InputLabel, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { commerce } from '../../lib/commerce';
import FormField from './CustomTextField';


const AddressForm = ({ checkoutToken }) => {
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState('')
	const [shippingSubdivisions, setShippingSubdivisions] = useState([])
	const [shippingSubdivision, setShippingSubdivision] = useState('')
	const [shippingOptions, setShippingOptions] = useState([])
	const [shippingOption, setShippingOption] = useState('');

	const methods = useForm();

	const fetchShippingCountries = async (checkoutTokenId) => {
		const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

		setShippingCountries(countries);
		setShippingCountry(Object.keys(countries)[0])
	}

	useEffect(() => {
		fetchShippingCountries(checkoutToken.id)
	}, [])

	return (
		<div>
			<Typography variant="h6" gutterBottom>Shipping Address</Typography>
			<FormProvider {...methods}>
				<form onSubmit=''>
					<Grid container spacing={3}>
						<FormField required name='firstName' label='First Name'/>
						<FormField required name='lastName' label='Last Name'/>
						<FormField required name='address1' label='Address'/>
						<FormField required name='email' label='Email'/>
						<FormField required name='city' label='City'/>
						<FormField required name='zip' label='ZIP | Postal Code'/>
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
								{console.log(Object.entries(shippingCountries))}
								{/* <MenuItem key={} value={}>
									Select Me
								</MenuItem> */}
							</Select>
						</Grid>
						{/* <Grid item xs={12} sm={6}>
							<InputLabel>Shipping Subdivision</InputLabel>
							<Select value={} fullWidth onChange={}>
								<MenuItem key={} value={}>
									Select Me
								</MenuItem>
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Options</InputLabel>
							<Select value={} fullWidth onChange={}>
								<MenuItem key={} value={}>
									Select Me
								</MenuItem>
							</Select>
						</Grid> */}
					</Grid>
				</form>
			</FormProvider>
		</div>
	)
}

export default AddressForm
