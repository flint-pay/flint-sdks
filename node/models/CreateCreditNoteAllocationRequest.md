[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCreditNoteAllocationRequest

The request body for: Allocate credit note.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit to apply, no more than the credit note's available_money or the invoice's outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateCreditNoteAllocationRequest.md#createcreditnoteallocationrequestamount_money). |
| `expected_version` | Optional | integer string | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

### CreateCreditNoteAllocationRequest.amount_money

Credit to apply, no more than the credit note's available_money or the invoice's outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

