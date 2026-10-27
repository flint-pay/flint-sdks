[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerCreditNoteInput

The buyer-visible view of a credit note. Drafts are never returned, and how much credit is left to allocate is omitted.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_tax_identity` | Required | [TaxIdentityInput](../models/TaxIdentityInput.md#taxidentityinput) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. |
| `credit_note_id` | Required | string | Unique identifier of the credit note. |
| `credit_note_number` | Required | string | Assigned at issue and stable from then on. Absent while the credit note is a draft. |
| `invoice_id` | Required | string | The invoice this credit note corrects. |
| `issued_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `latest_refund_status` | Optional | string | Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. |
| `line_items` | Required | Array of [CreditNoteLineItemInput](../models/CreditNoteLineItemInput.md#creditnotelineiteminput) | Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued, non-void credit notes. Drafts reserve no credit. |
| `memo` | Required | string or null | Free text shown on the credit note. Null when none was set. |
| `pending_refund_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit reserved by linked refunds that have not resolved yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the invoice is being corrected. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit consumed by linked refunds that succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `seller_tax_identity` | Required | [TaxIdentityInput](../models/TaxIdentityInput.md#taxidentityinput) or null | Identity frozen on the source invoice at issue. Later profile edits do not change this document. |
| `status` | Required | string | draft while the credit note is editable, issued once it is numbered and frozen, void once retired. Values: `"issued"`, `"void"`. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The face value of the credit note, the sum of its lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `voided_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

