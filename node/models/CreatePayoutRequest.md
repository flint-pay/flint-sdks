[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePayoutRequest

The request body for: Create a payout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount to send, above zero. It can't exceed what one balance source has in available_by_source_type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreatePayoutRequest.md#createpayoutrequestamount_money). |
| `balance_source_type` | Optional | string | Balance source this payout draws from. Flint chooses the source when omitted. Values: `"card"`, `"bank_account"`. |
| `description` | Optional | string | Your description of the payout, returned on the payout. minLength: `1`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `method` | Optional | string | Payout method. Only standard is accepted; omitted defaults to standard. Values: `"standard"`. |
| `payout_destination_id` | Optional | string | Destination to pay. It must be active and in the payout's currency. Omit it to pay the currency's default destination. minLength: `1`. |
| `statement_descriptor` | Optional | string | Text shown on your bank statement for this deposit, 22 characters or fewer. minLength: `1`. |

### CreatePayoutRequest.amount_money

Amount to send, above zero. It can't exceed what one balance source has in available_by_source_type. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

