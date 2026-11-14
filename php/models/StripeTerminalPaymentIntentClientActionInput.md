[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## StripeTerminalPaymentIntentClientActionInput

Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the connected Tap to Pay reader.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | Card-present PaymentIntent client secret to pass to the Terminal SDK's retrievePaymentIntent, then collect and confirm on the connected Tap to Pay reader. |
| `stripe_terminal_sdk_call` | Required | string | Stripe Terminal SDK operation to perform. collect_and_confirm_payment_intent retrieves, collects, and confirms the payment. Values: `"collect_and_confirm_payment_intent"`. |

