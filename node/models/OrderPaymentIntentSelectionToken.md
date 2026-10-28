[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionToken

The `token` variant of `OrderPaymentIntentSelection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"token"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `token` | Required | string | Opaque processor or browser payment source token. minLength: `1`. |

