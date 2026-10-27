[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePayoutRequestInput

The request body for: Create a payout.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_source_type` | Optional | string | Balance source this payout draws from. Flint chooses the source when omitted. Values: `"card"`, `"bank_account"`. |
| `description` | Optional | string | minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `method` | Optional | string | Payout method. Only standard is accepted; omitted defaults to standard. Values: `"standard"`. |
| `payout_destination_id` | Optional | string | minLength: `1`. |
| `statement_descriptor` | Optional | string | minLength: `1`. |

