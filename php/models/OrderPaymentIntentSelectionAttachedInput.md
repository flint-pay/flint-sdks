[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionAttachedInput

Confirm using the payment source already attached.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"attached"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |

