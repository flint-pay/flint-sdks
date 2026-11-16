[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookOrderEdit

The resource snapshot, without expansions. Webhooks omit these fields: `note`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [OrderEditLineAddition](../models/OrderEditLineAddition.md#ordereditlineaddition) | Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. |
| `added_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `added_total_money`: [field definitions](../models/OrderEdit.md#ordereditadded_total_money). |
| `amount_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the added lines cost beyond the removed value and released charges, tax included, frozen when the edit was created. Zero when the edit had no balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_due_money`: [field definitions](../models/OrderEdit.md#ordereditamount_due_money). |
| `canceled_at` | Required | string or null | When the edit was canceled. `null` when the edit is not canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `cancellation_reason` | Required | string or null | Why the edit was canceled. `null` when the edit is not canceled. Values: `"merchant_request"`, `"expired"`, `"payment_disputed"`, `"payment_returned"`, `null`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | Charges released by this edit, frozen at creation. Empty when no charges were released. |
| `completed_at` | Required | string or null | When the item changes were applied to the order. `null` when the edit is pending or canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the edit was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Required | string or null | When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order_edit_id` | Required | string | Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Required | string | The order this edit belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Required | string or null | The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `reason` | Optional | string | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `refund_ids` | Required | Array of string | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_money`: [field definitions](../models/OrderEdit.md#ordereditrefund_money). |
| `remove_line_items` | Required | Array of [OrderEditLineRemoval](../models/OrderEditLineRemoval.md#ordereditlineremoval) | Removed units and their refund amounts frozen at creation. |
| `removed_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `removed_total_money`: [field definitions](../models/OrderEdit.md#ordereditremoved_total_money). |
| `status` | Required | string | Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Values: `"pending"`, `"completed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"cancel"`, `"retry"`. |
| `unrefunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unrefunded_money`: [field definitions](../models/OrderEdit.md#ordereditunrefunded_money). |
| `version` | Required | integer | The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: `uint64`. minimum: `1`. |

### WebhookOrderEdit.added_total_money

Field definitions: [OrderEdit.added_total_money](../models/OrderEdit.md#ordereditadded_total_money).

### WebhookOrderEdit.amount_due_money

Field definitions: [OrderEdit.amount_due_money](../models/OrderEdit.md#ordereditamount_due_money).

### WebhookOrderEdit.refund_money

Field definitions: [OrderEdit.refund_money](../models/OrderEdit.md#ordereditrefund_money).

### WebhookOrderEdit.removed_total_money

Field definitions: [OrderEdit.removed_total_money](../models/OrderEdit.md#ordereditremoved_total_money).

### WebhookOrderEdit.unrefunded_money

Field definitions: [OrderEdit.unrefunded_money](../models/OrderEdit.md#ordereditunrefunded_money).

