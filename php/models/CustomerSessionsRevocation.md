[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionsRevocation

The result of revoking a customer's sessions: the customer ID and how many sessions were revoked.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | ID of the customer whose sessions were revoked. |
| `revoked_count` | Required | integer | Number of sessions this call revoked. Sessions that were already revoked are not counted. Format: `int64`. |

