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
| `add_line_items` | Required | Array of [OrderEditPreviewAddition](../models/OrderEditPreviewAddition.md#ordereditpreviewaddition) | The requested additions, in request order, priced and taxed. Empty when the request adds nothing. `add_line_items[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataadd_line_items). |
| `added_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The cost of the added lines: the sum of add_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `amount_due_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the added lines cost beyond the removed value and released charges. At most one of refund_money and amount_due_money is above zero, and refund_money minus amount_due_money equals removed_total_money plus the charges' amount_money minus added_total_money. An edit with an amount due can't be committed yet. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `based_on_order_version` | Required | integer | The order version this calculation read. Eligibility and the refundable amount can change afterward, so calculate again before relying on it. Format: `int64`. |
| `calculated_at` | Required | string | When this preview was calculated. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `charge_refunds` | Required | Array of [OrderEditChargeRefund](../models/OrderEditChargeRefund.md#ordereditchargerefund) | The charges that would be released, with the value and refund for each. Empty when the request lists no charges. `charge_refunds[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedatacharge_refunds). |
| `order_id` | Required | string | The order whose unassigned units were evaluated. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money that would go back to the buyer. The removed value and released charges pay for added lines first, removals in request order and then charges, and the rest is refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remove_line_items` | Required | Array of [OrderEditRemoval](../models/OrderEditRemoval.md#ordereditremoval) | The requested removals, in request order, each with its value and refund. `remove_line_items[]`: [field definitions](../models/OrderEditPreviewResponse.md#ordereditpreviewresponsedataremove_line_items). |
| `removed_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of the removed units: the sum of remove_line_items[].total_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditPreviewResponse.data.add_line_items[]

A line the preview would add, priced and taxed as it would be added to the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | The catalog bundle, for a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | The line's name. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Absent on bundle and custom lines. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Units to add. Format: `int64`. minimum: `1`. |
| `sku` | Optional | string | The line's SKU, when it has one. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price times quantity, including modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on the line, calculated through the order's tax settings. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unit price from the catalog, price list, customer pricing or request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | The catalog variant, for a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### OrderEditPreviewResponse.data.charge_refunds[]

The value an edit releases from one order charge, and the part refunded to the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The charge value released. The order no longer owes it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_charge_id` | Required | string | The order charge whose value is released. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of amount_money refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditPreviewResponse.data.remove_line_items[]

The units of one order line that the preview would remove, with their refund.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | The order line the units come off. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units requested for removal, including all components of a bundle unit. Format: `int64`. |
| `refund_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of total_money that would be refunded to the buyer. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `removable_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units currently unassigned across every fulfillment component, before this requested removal. Format: `int64`. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value of these units at the price the buyer paid, including their share of discounts and tax. Original quantity and pricing remain unchanged. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderEditPreviewResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

