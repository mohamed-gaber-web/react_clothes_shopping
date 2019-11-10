import React from 'react'; // react library

import StripeCheckout from 'react-stripe-checkout'; // this is library react-stripe-checkout


const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_ATmniVFe32cS0aoRD3clHeKN00sGgRp44X"; 
    // publishable key from stripe site after sign up and activate

    // onFinish === onToke
    const onToken = (token) => {
        console.log(token); // object all data from payment form
        alert("payment succesfuly"); // message after accept data
    }
    
    return (
        // this is StripeCHeckout component contain more property
        <StripeCheckout 
            name="Hello Payment" // the pop-in header title
            description={`Total Price $${price}`} // the pop-in header subtitle
            image="https://svgshare.com/i/CUz.svg" // the pop-in header image (default none)
            panelLabel="Give Money" // prepended to the amount in the bottom pay button
            amount={priceForStripe} // cents
            currency="USD"
            stripeKey={publishableKey}
            locale="en" // this is language for text
            shippingAddress
            billingAddress // true or false
            token={onToken} // submit callback
        />
    );
}

export default StripeButton;