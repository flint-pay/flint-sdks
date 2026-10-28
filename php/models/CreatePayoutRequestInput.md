[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePayoutRequestInput

The request body for: Create a payout.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Amount to send, above zero. It can't exceed what one balance source has in available_by_source_type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_source_type` | Optional | string | Balance source this payout draws from. Flint chooses the source when omitted. Values: `"card"`, `"bank_account"`. |
| `description` | Optional | string | Your description of the payout, returned on the payout. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `method` | Optional | string | Payout method. Only standard is accepted; omitted defaults to standard. Values: `"standard"`. |
| `payout_destination_id` | Optional | string | Destination to pay. It must be active and in the payout's currency. Omit it to pay the currency's default destination. minLength: `1`. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: `1`. |

