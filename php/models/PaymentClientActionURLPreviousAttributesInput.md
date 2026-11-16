[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionURLPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"url"`. `type`: [declared alternatives](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-1type). |
| `url` | Optional | string or null | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. `url`: [declared alternatives](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-1url). |

### PaymentClientActionURLPreviousAttributesInput.type

Declared alternatives: [PaymentClientActionPreviousAttributesInput variant 1.type](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-1type).

### PaymentClientActionURLPreviousAttributesInput.url

Declared alternatives: [PaymentClientActionPreviousAttributesInput variant 1.url](../models/PaymentClientActionPreviousAttributesInput.md#paymentclientactionpreviousattributesinput-variant-1url).

