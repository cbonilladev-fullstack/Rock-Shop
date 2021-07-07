import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormField from './CustomTextField';

const AddressForm = () => {
	const methods = useForm();

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
					</Grid>
				</form>
			</FormProvider>
		</div>
	)
}

export default AddressForm
