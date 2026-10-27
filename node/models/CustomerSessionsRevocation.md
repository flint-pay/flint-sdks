[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionsRevocation

The result of revoking a customer's sessions: the customer ID and how many sessions were revoked.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string |  |
| `revoked_count` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

