[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeTerminalPaymentIntentClientActionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Optional | string or null | Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. `client_secret`: [declared alternatives](../models/StripeTerminalPaymentIntentClientActionPreviousAttributes.md#stripeterminalpaymentintentclientactionpreviousattributesclient_secret). |
| `stripe_terminal_sdk_call` | Optional | string or null | Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`. `stripe_terminal_sdk_call`: [declared alternatives](../models/StripeTerminalPaymentIntentClientActionPreviousAttributes.md#stripeterminalpaymentintentclientactionpreviousattributesstripe_terminal_sdk_call). |

### StripeTerminalPaymentIntentClientActionPreviousAttributes.client_secret

### StripeTerminalPaymentIntentClientActionPreviousAttributes.client_secret variant 1

anyOf variant 1: Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader..

- Value shape: string. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. 

### StripeTerminalPaymentIntentClientActionPreviousAttributes.client_secret variant 2

anyOf variant 2.

- Value shape: null. Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. 

### StripeTerminalPaymentIntentClientActionPreviousAttributes.stripe_terminal_sdk_call

### StripeTerminalPaymentIntentClientActionPreviousAttributes.stripe_terminal_sdk_call variant 1

anyOf variant 1: Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment..

- Value shape: string. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`.

### StripeTerminalPaymentIntentClientActionPreviousAttributes.stripe_terminal_sdk_call variant 2

anyOf variant 2.

- Value shape: null. Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. 

