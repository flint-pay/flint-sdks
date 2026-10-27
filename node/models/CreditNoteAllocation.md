[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocation

One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreditNoteAllocation.md#creditnoteallocationamount_money). |
| `credit_note_allocation_id` | Required | string | Unique identifier of the allocation. |
| `credit_note_id` | Required | string | The credit note whose credit was applied. |
| `idempotency_key` | Required | string | The key the caller sent when allocating, or issue: followed by the issue request's Idempotency-Key for an allocation made on issue. It is this allocation's identity and is filterable on the allocations list. |
| `invoice_id` | Required | string | The invoice whose balance the credit reduced. |
| `reversed_at` | Optional | string | When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. |

### CreditNoteAllocation.amount_money

Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

