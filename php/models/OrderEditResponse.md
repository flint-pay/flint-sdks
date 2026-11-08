[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditResponse

A response containing `OrderEdit` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | Resource, collection, or operation result returned by this request. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds. `data`: [field definitions](../models/OrderEditResponse.md#ordereditresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OrderEditResponse.data

Resource, collection, or operation result returned by this request. Nested child of an order: an immutable, completed removal with frozen refund amounts. Refund completion is tracked on the refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | Explicit charge refunds frozen at commit. Empty when no charges were refunded. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `created_at` | Required | string | When the edit committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: `500`. |
| `order_edit_id` | Required | string | Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Required | string | The order this edit belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reason` | Optional | string | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `refund_ids` | Required | Array of string | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total money to refund for removed units and charges. May be zero; a zero-value edit creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditLineRemoval](../models/OrderEditLineRemoval.md#ordereditlineremoval) | Removed units and their refund amounts frozen at commit. `remove_line_items[]`: [field definitions](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items). |
| `status` | Required | string | Whether this edit has committed. Refund processing has its own status on each refund. Values: `"completed"`. |
| `supported_actions` | Required | Array of string | Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"retry"`. |
| `unrefunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditResponse.data.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditResponse.data.remove_line_items[]

Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refund for these units, including their original discount and tax shares, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

