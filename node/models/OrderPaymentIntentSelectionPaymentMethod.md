[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionPaymentMethod

The `payment_method` variant of `OrderPaymentIntentSelection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"payment_method"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `payment_method_id` | Required | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |

