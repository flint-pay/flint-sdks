[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationInput

The account that receives merchant payouts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_payout_methods` | Required | Array of string | Payout methods available through Flint for this destination. Only standard is currently available. Items values: `"standard"`. |
| `bank_name` | Optional | string |  |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `default_for_currency` | Required | boolean |  |
| `disabled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `disabled_reason` | Optional | string | Flint-normalized reason the payout destination cannot currently be used. Unknown provider/backend values are returned as destination_unavailable. Values: [9 declared values](IncomingWebhook44e6923a1369PayloadInput.md#incomingwebhook44e6923a1369payloadinputdataobject-disabled_reason-values). |
| `last4` | Optional | string |  |
| `merchant_id` | Required | string |  |
| `metadata` | Optional | Map of string |  |
| `payout_destination_id` | Required | string |  |
| `status` | Required | string | Current status. Archived: deleted, and still readable by ID. Values: `"pending"`, `"active"`, `"verification_required"`, `"disabled"`, `"archived"`, `"failed"`. |
| `status_updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `type` | Required | string | Destination type. Unmapped destination types are returned as other. Values: `"bank_account"`, `"debit_card"`, `"other"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

