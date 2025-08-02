import React from 'react';
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";

const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options={{"client-id": "AfsgUWwR25N2RI-et0uPdFKw-IVcqi-f7cmfm6XuVOhrg8FQFtBOydHWKBhu80vQAVINtNjFI6uoJOHI"}}>
        <PayPalButtons style={{layout: "vertical"}} createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [{amount: {value: amount}}]
            })
        }}

        onApprove={(data, actions) => {
            return actions.order.capture().then(onSuccess)
        }}

        onError={onError}
        />
    </PayPalScriptProvider>
  )
}

export default PayPalButton
