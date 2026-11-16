[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionStripePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [StripePaymentClientActionPreviousAttributes](../models/StripePaymentClientActionPreviousAttributes.md#stripepaymentclientactionpreviousattributes) or null | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. |
| `type` | Optional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`. `type`: [declared alternatives](../models/PaymentClientActionPreviousAttributes.md#paymentclientactionpreviousattributes-variant-2type). |

### PaymentClientActionStripePreviousAttributes.type

Declared alternatives: [PaymentClientActionPreviousAttributes variant 2.type](../models/PaymentClientActionPreviousAttributes.md#paymentclientactionpreviousattributes-variant-2type).

