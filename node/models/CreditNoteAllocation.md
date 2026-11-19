[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocation

One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Required | string | When the credit was applied to the invoice balance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreditNoteAllocation.md#creditnoteallocationamount_money). |
| `credit_note_allocation_id` | Required | string | Unique identifier of the allocation. Example: `"cna_01KEZF7C00EH6DMS9BD8F72CMA"`. |
| `credit_note_id` | Required | string | The credit note whose credit was applied. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `idempotency_key` | Required | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `invoice_id` | Required | string | The invoice whose balance the credit reduced. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `reversed_at` | Optional | string | When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. |

### CreditNoteAllocation.amount_money

Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

