[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationCreatedMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Required | string | When the credit was applied to the invoice balance. Format: `date-time`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_note_allocation_id` | Required | string | Unique identifier of the allocation. |
| `credit_note_id` | Required | string | The credit note whose credit was applied. |
| `idempotency_key` | Required | string | The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list. |
| `invoice_id` | Required | string | The invoice whose balance the credit reduced. |
| `reversed_at` | Optional | string | When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. |

