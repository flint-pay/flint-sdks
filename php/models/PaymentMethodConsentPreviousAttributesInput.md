[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodConsentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_at` | Optional | string or null | When the buyer accepted the wording, recorded when the payment attempt or card setup started. `accepted_at`: [declared alternatives](../models/PaymentMethodConsentPreviousAttributesInput.md#paymentmethodconsentpreviousattributesinputaccepted_at). |
| `text` | Optional | string or null | The wording the buyer agreed to when saving the card. `text`: [declared alternatives](../models/PaymentMethodConsentPreviousAttributesInput.md#paymentmethodconsentpreviousattributesinputtext). |

### PaymentMethodConsentPreviousAttributesInput.accepted_at

### PaymentMethodConsentPreviousAttributesInput.accepted_at variant 1

anyOf variant 1: When the buyer accepted the wording, recorded when the payment attempt or card setup started..

- Value shape: string. When the buyer accepted the wording, recorded when the payment attempt or card setup started. When the buyer accepted the wording, recorded when the payment attempt or card setup started. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentMethodConsentPreviousAttributesInput.accepted_at variant 2

anyOf variant 2.

- Value shape: null. When the buyer accepted the wording, recorded when the payment attempt or card setup started. 

### PaymentMethodConsentPreviousAttributesInput.text

### PaymentMethodConsentPreviousAttributesInput.text variant 1

anyOf variant 1: The wording the buyer agreed to when saving the card..

- Value shape: string. The wording the buyer agreed to when saving the card. 

### PaymentMethodConsentPreviousAttributesInput.text variant 2

anyOf variant 2.

- Value shape: null. The wording the buyer agreed to when saving the card. 

