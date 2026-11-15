[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolveCustomerDeletionRequest

The request body for: Resolve a customer deletion request.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel_subscriptions` | Optional | boolean | When decision is approve, cancel every non-canceled subscription immediately before erasure. Defaults to false. Saved on first approval; omit on retries or send the original value. |
| `decision` | Required | string | Whether to erase the customer's personal data or keep the customer as is. Values: `"approve"`, `"reject"`. |
| `decision_reason` | Optional | string | Optional plain-text explanation visible to the buyer. Only allowed when decision is reject. Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not allowed. Reasons are erased if the customer is later deleted. minLength: `1`. |
| `remove_payment_methods` | Optional | boolean | When decision is approve, archive active and pending saved payment methods before erasure. Defaults to false. Subscriptions are canceled first when both options are selected. Saved on first approval; omit on retries or send the original value. |

