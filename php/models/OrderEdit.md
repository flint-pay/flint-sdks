[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEdit

Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | Explicit charge refunds frozen at commit. Empty when no charges were refunded. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `created_at` | Required | string | When the edit committed. Format: `date-time`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: `500`. |
| `order_edit_id` | Required | string | Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `order_id` | Required | string | The order this edit belongs to. |
| `reason` | Optional | string | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `refund_ids` | Required | Array of string | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total money to refund for removed units and charges. May be zero; a zero-value edit creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditLineRemoval](../models/OrderEditLineRemoval.md#ordereditlineremoval) | Removed units and their refund amounts frozen at commit. `remove_line_items[]`: [field definitions](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items). |
| `status` | Required | string | Whether this edit has committed. Refund processing has its own status on each refund. Values: `"completed"`. |
| `supported_actions` | Required | Array of string | Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"retry"`. |
| `unrefunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEdit.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEdit.remove_line_items[]

Field definitions: [OrderEditResponse.data.remove_line_items[]](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items).

