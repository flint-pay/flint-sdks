[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PendingPaymentActionClientActionUrl

How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned.

The `url` variant of `PaymentClientAction`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | string | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"url"`. |
| `url` | Required | string | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. minLength: `1`. |

