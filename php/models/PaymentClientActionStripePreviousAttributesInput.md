[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionStripePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [StripePaymentClientActionPreviousAttributesInput](../models/StripePaymentClientActionPreviousAttributesInput.md#stripepaymentclientactionpreviousattributesinput) or null | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. |
| `type` | Optional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"stripe"`. `type`: [declared alternatives](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-2type). |

### PaymentClientActionStripePreviousAttributesInput.type

Declared alternatives: [PaymentClientActionPreviousAttributesInput variant 2.type](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-2type).

