[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSessionsRevocationInput

The result of revoking a customer's sessions: the customer ID and how many sessions were revoked.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | ID of the customer whose sessions were revoked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `revoked_count` | Required | integer | Number of sessions this call revoked. Sessions that were already revoked are not counted. Format: `int64`. |

