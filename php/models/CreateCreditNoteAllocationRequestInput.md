[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateCreditNoteAllocationRequestInput

The request body for: Allocate credit note.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit to apply, no more than the credit note's available_money or the invoice's outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format: `int64`. minimum: `1`. |

