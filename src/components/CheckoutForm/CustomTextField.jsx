import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const FormField = ({ name, label }) => {
	const { control } = useFormContext();

	return (
		<Grid item xs={12} sm={6}>
         <Controller
            control={control}
            name={name}
            render = {({ field })=> (
                <TextField
                    fullWidth
                    label={label}
                    required
                />
            )}
         />
		</Grid>
	)
}

export default FormField
