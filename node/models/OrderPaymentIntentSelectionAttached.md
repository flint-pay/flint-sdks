[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionAttached

Confirm using the payment source already attached.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"attached"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |

