[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreditNote

A correction against an issued invoice. Credit notes reduce what is owed; refunds return what was already collected.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocated_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit applied to the invoice, net of reversed allocations. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit available to allocate or refund. Zero on draft and void notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. |
| `created_at` | Required | string | When the credit note was created. Format: `date-time`. |
| `credit_note_id` | Required | string | Unique identifier of the credit note. |
| `credit_note_number` | Optional | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. null when unset. minLength: `1`. maxLength: `255`. |
| `invoice` | Optional | [ExpandedInvoiceSummary](../models/ExpandedInvoiceSummary.md#expandedinvoicesummary) | Summary of the source invoice. Returned only with expand=invoice. An invoice's summary fields, including status, due date, and paid, outstanding, and refunded amounts, returned when the invoice is expanded. |
| `invoice_id` | Required | string | The invoice this credit note corrects. |
| `issued_at` | Optional | string | When the credit note was issued. Absent on a draft. Format: `date-time`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItem](../models/CreditNoteLineItem.md#creditnotelineitem) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. |
| `memo` | Required | string or null | Free text shown on the credit note, up to 4096 characters. null when unset. |
| `merchant_id` | Required | string | The merchant that owns the credit note. |
| `pending_refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentity](../models/TaxIdentity.md#taxidentity) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. |
| `status` | Required | string | draft while the credit note is editable, issued once it is numbered and frozen, void once retired. Values: `"draft"`, `"issued"`, `"void"`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `updated_at` | Required | string | When the credit note last changed. Format: `date-time`. |
| `version` | Required | integer | Current credit note version. Send this as expected_version when updating the draft. Format: `int64`. minimum: `1`. |
| `voided_at` | Optional | string | When the credit note was voided. Absent unless it is void. Format: `date-time`. |

