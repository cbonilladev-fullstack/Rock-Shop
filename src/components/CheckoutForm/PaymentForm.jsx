import React from 'react';
import Review from './Review';


const PaymentForm = ({ checkoutToken }) => {
	return (
		<div>
			<Review checkoutToken={checkoutToken}/>
		</div>
	)
}

export default PaymentForm
