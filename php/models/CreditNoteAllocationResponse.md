[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNoteAllocationResponse

A response containing `CreditNoteAllocation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation) | Resource, collection, or operation result returned by this request. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row. `data`: [field definitions](../models/CreditNoteAllocationResponse.md#creditnoteallocationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreditNoteAllocationResponse.data

Resource, collection, or operation result returned by this request. One application of credit to the invoice. Allocations are append-only: a reversal sets reversed_at rather than removing the row.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_at` | Required | string | When the credit was applied to the invoice balance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `credit_note_allocation_id` | Required | string | Unique identifier of the allocation. Example: `"cna_01KEZF7C00EH6DMS9BD8F72CMA"`. |
| `credit_note_id` | Required | string | The credit note whose credit was applied. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. |
| `idempotency_key` | Required | string | The Idempotency-Key the caller sent when allocating, or the issue request's Idempotency-Key for an allocation made on issue. Filterable on the allocations list. |
| `invoice_id` | Required | string | The invoice whose balance the credit reduced. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `reversed_at` | Optional | string | When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. Items values: `"reverse"`. |

### CreditNoteAllocationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

