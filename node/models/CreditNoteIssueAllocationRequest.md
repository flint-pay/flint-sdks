[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteIssueAllocationRequest

Credit to apply to the invoice when issuing a credit note.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit to apply. Omit to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. Either way, the allocation must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreditNoteIssueAllocationRequest.md#creditnoteissueallocationrequestamount_money). |

### CreditNoteIssueAllocationRequest.amount_money

Credit to apply. Omit to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. Either way, the allocation must leave the order's unpaid tip outstanding. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

