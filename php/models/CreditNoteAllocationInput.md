[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationInput

One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_note_allocation_id` | Required | string | Unique identifier of the allocation. |
| `credit_note_id` | Required | string | The credit note whose credit was applied. |
| `idempotency_key` | Required | string | The key the caller sent when allocating, or issue: followed by the issue request's Idempotency-Key for an allocation made on issue. It is this allocation's identity and is filterable on the allocations list. |
| `invoice_id` | Required | string | The invoice whose balance the credit reduced. |
| `reversed_at` | Optional | string | When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. |

