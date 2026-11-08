[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerSessionRequestInput

The request body for: Create a customer session.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | ID of the customer the session acts as. Calls made with the session's secret see only this customer's data. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_in_seconds` | Optional | integer | How long the secret authenticates account calls, in seconds. Defaults to 3600 (one hour). Refreshing issues a new secret with a new window. Format: `int64`. minimum: `300`. maximum: `86400`. |
| `refresh_expires_in_seconds` | Optional | integer | How long the refresh token can be exchanged for a new secret, in seconds. Defaults to 604800 (seven days). Format: `int64`. minimum: `3600`. maximum: `2592000`. |

