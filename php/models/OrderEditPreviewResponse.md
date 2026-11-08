[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreviewResponse

The result of an order edit preview.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [OrderEditPreview](../models/OrderEditPreview.md#ordereditpreview) | The calculated removal and its refund. A calculation against an order version. Previewing does not create an order edit. `data`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OrderEditPreviewResponse.data

The calculated removal and its refund. A calculation against an order version. Previewing does not create an order edit.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | The charges that would be refunded, with the amount for each. Empty when the request lists no charges. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `order_id` | Required | string | The order whose unassigned units were evaluated. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The total quantity-based item refund plus the explicit charge refunds. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditRemoval](../models/OrderEditRemoval.md#ordereditremoval) | The requested removals, in request order, each with its refund. `remove_line_items[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataremove_line_items). |

### OrderEditPreviewResponse.data.charge_refunds[]

The refund the preview would make for one order charge.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount that would be refunded for this charge. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | The order charge that would be refunded. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

### OrderEditPreviewResponse.data.remove_line_items[]

The units of one order line that the preview would remove, with their refund.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The order line the units come off. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units requested for removal, including all components of a bundle unit. Format: `int64`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The refund for these units at the price the buyer paid, including their share of discounts and tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `removable_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units currently unassigned across every fulfillment component, before this requested removal. Format: `int64`. |

### OrderEditPreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

