[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCustomerSessionRequest

The request body for: Create a customer session.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of string | Operation capabilities granted to this session. Omit for full access; an empty list grants no operations except self-revocation. Refresh preserves this list. uniqueItems: `true`. Items values: [17 declared values](#createcustomersessionrequest-capabilities--values). |
| `customer_id` | Required | string | ID of the customer the session acts as. Calls made with the session's secret see only this customer's data. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_in_seconds` | Optional | integer | How long the secret authenticates account calls, in seconds. Defaults to 3600 (one hour). Refreshing issues a new secret with a new window. Format: `int64`. minimum: `300`. maximum: `86400`. |
| `refresh_expires_in_seconds` | Optional | integer | How long the refresh token can be exchanged for a new secret, in seconds. Defaults to 604800 (seven days). Format: `int64`. minimum: `3600`. maximum: `2592000`. |

#### CreateCustomerSessionRequest capabilities [] values

- `"account.read"`
- `"account.manage"`
- `"account.delete"`
- `"orders.read"`
- `"returns.read"`
- `"returns.create"`
- `"subscriptions.read"`
- `"subscriptions.manage"`
- `"payments.create"`
- `"payment_methods.read"`
- `"payment_methods.manage"`
- `"addresses.read"`
- `"addresses.manage"`
- `"gift_cards.read"`
- `"gift_cards.manage"`
- `"license_keys.read"`
- `"license_keys.manage"`

