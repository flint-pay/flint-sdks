[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditResponse

A response containing `OrderEdit` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OrderEdit](../models/OrderEdit.md#orderedit) | Resource, collection, or operation result returned by this request. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds. `data`: [field definitions](../models/OrderEditResponse.md#ordereditresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OrderEditResponse.data

Resource, collection, or operation result returned by this request. Nested child of an order: immutable, completed item changes with frozen values and refund amounts. Refund completion is tracked on the refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Required | Array of [OrderEditLineAddition](../models/OrderEditLineAddition.md#ordereditlineaddition) | Added order lines, in request order, with their quantities and values frozen at commit. Empty when the edit added nothing. `add_line_items[]`: [field definitions](../models/OrderEditResponse.md#ordereditresponsedataadd_line_items). |
| `added_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | Charges released by this edit, frozen at commit. Empty when no charges were released. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `created_at` | Required | string | When the edit committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `note` | Optional | string | Internal merchant note. Omitted from buyer and webhook payloads and refund messages. maxLength: `500`. |
| `order_edit_id` | Required | string | Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Required | string | The order this edit belongs to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `reason` | Optional | string | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). |
| `refund_ids` | Required | Array of string | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditLineRemoval](../models/OrderEditLineRemoval.md#ordereditlineremoval) | Removed units and their refund amounts frozen at commit. `remove_line_items[]`: [field definitions](../models/OrderEditResponse.md#ordereditresponsedataremove_line_items). |
| `removed_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Whether this edit has committed. Refund processing has its own status on each refund. Values: `"completed"`. |
| `supported_actions` | Required | Array of string | Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"retry"`. |
| `unrefunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditResponse.data.add_line_items[]

An order line added by the enclosing edit, with its value frozen at commit.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The order line created by this edit. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity added; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of these added units, including additive tax, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditResponse.data.charge_refunds[]

Field definitions: [OrderEditPreviewResponse.data.charge_refunds[]](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds).

### OrderEditResponse.data.remove_line_items[]

Removed whole units of an order line and their refund amount frozen at commit. The enclosing edit identifies the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. Format: `int64`. minimum: `1`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of total_money refunded to the buyer, frozen when the edit committed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of these units, including their original discount and tax shares, frozen when the edit committed. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

