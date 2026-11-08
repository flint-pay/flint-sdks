[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolveCustomerDeletionRequest

The request body for: Resolve a customer deletion request.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `decision` | Required | string | Whether to erase the customer's personal data or keep the customer as is. Values: `"approve"`, `"reject"`. |
| `decision_reason` | Optional | string | Optional plain-text explanation visible to the buyer. Only allowed when decision is reject. Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not allowed. Reasons are erased if the customer is later deleted. minLength: `1`. |

