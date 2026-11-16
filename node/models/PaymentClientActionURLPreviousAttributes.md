[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentClientActionURLPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | string or null | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. Values: `"url"`. `type`: [declared alternatives](../models/PaymentClientActionPreviousAttributes.md#paymentclientactionpreviousattributes-variant-1type). |
| `url` | Optional | string or null | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. `url`: [declared alternatives](../models/PaymentClientActionPreviousAttributes.md#paymentclientactionpreviousattributes-variant-1url). |

### PaymentClientActionURLPreviousAttributes.type

Declared alternatives: [PaymentClientActionPreviousAttributes variant 1.type](../models/PaymentClientActionPreviousAttributes.md#paymentclientactionpreviousattributes-variant-1type).

### PaymentClientActionURLPreviousAttributes.url

Declared alternatives: [PaymentClientActionPreviousAttributes variant 1.url](../models/PaymentClientActionPreviousAttributes.md#paymentclientactionpreviousattributes-variant-1url).

