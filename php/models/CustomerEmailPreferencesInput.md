[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerEmailPreferencesInput

The optional email categories an address receives from a merchant, with its current customer and preference version when available.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_reminders` | Required | boolean | A reminder after leaving checkout without paying. `true` unless the buyer turned it off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. |
| `customer_id` | Required | string or null | ID of the customer whose current email address these preferences belong to. `null` when the address has no current customer. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email` | Required | string | The customer's current email address. The preferences belong to this address, so they also apply to guest checkouts and other customers with the same address, and they change when the customer's email changes. On address lookup, the address as sent, trimmed. |
| `shipping_updates` | Required | boolean | Emails about shipments and deliveries. `true` unless the buyer turned them off. Flint stops sending this email when it is `false`; if you send this kind of email yourself, do not send it either. |
| `version` | Required | integer or null | The customer's preference version. Advances when either category changes for this address or the customer's email address changes. `null` when the address has no current customer. Format: `uint64`. minimum: `1`. |

