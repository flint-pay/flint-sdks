[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `add_line_items` | Optional | Array of [OrderEditLineAdditionPreviousAttributes](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributes) or null | Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. `add_line_items`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesadd_line_items). |
| `added_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The cost of the added lines: the sum of add_line_items[].total_money. Zero when the edit added nothing. |
| `amount_due_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the added lines cost beyond the removed value and released charges, tax included, frozen when the edit was created. Zero when the edit had no balance. |
| `canceled_at` | Optional | string or null | When the edit was canceled. `null` when the edit is not canceled. `canceled_at`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescanceled_at). |
| `cancellation_reason` | Optional | string or null | Why the edit was canceled. `null` when the edit is not canceled. Values: `"merchant_request"`, `"expired"`, `"payment_disputed"`, `"payment_returned"`, `null`. `cancellation_reason`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescancellation_reason). |
| `charge_refunds` | Optional | Array of [OrderEditChargeRefundPreviousAttributes](../models/OrderEditChargeRefundPreviousAttributes.md#ordereditchargerefundpreviousattributes) or null | Charges released by this edit, frozen at creation. Empty when no charges were released. `charge_refunds`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescharge_refunds). |
| `completed_at` | Optional | string or null | When the item changes were applied to the order. `null` when the edit is pending or canceled. `completed_at`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescompleted_at). |
| `created_at` | Optional | string or null | When the edit was created. `created_at`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescreated_at). |
| `expires_at` | Optional | string or null | When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. `expires_at`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesexpires_at). |
| `order_edit_id` | Optional | string or null | Stable ID of this order edit. `order_edit_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesorder_edit_id). |
| `order_id` | Optional | string or null | The order this edit belongs to. `order_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesorder_id). |
| `payment_intent_id` | Optional | string or null | The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. `payment_intent_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributespayment_intent_id). |
| `reason` | Optional | string or null | Reason for the edit and its refund. Values: [13 declared values](CreateOrderEditRequestInput.md#createordereditrequestinput-reason-values). `reason`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesreason). |
| `refund_ids` | Optional | Array of string or null | Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. `refund_ids`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesrefund_ids). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Money to refund after the removed value and released charges pay for added lines. May be zero; an edit with no refund money creates no refund. |
| `remove_line_items` | Optional | Array of [OrderEditLineRemovalPreviousAttributes](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributes) or null | Removed units and their refund amounts frozen at creation. `remove_line_items`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesremove_line_items). |
| `removed_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value of the removed units: the sum of remove_line_items[].total_money. |
| `small_balance_adjustment_money` | Optional | [SignedMoneyPreviousAttributes](../models/SignedMoneyPreviousAttributes.md#signedmoneypreviousattributes) or null | Signed noncash adjustment: positive for an edit balance below the payment minimum, negative when removing previously absorbed value. Included in settlement_amounts.written_off_money, never paid or refundable. |
| `status` | Optional | string or null | Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Values: `"pending"`, `"completed"`, `"canceled"`. `status`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"cancel"`, `"retry"`. `supported_actions`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributessupported_actions). |
| `unrefunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Frozen refund money not covered by pending or succeeded allocations from refunds linked to this edit. Failed allocations do not reduce it. |
| `version` | Optional | integer or null | The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. `version`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesversion). |

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1

anyOf variant 1: Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing..

- Value shape: Array of [OrderEditLineAdditionPreviousAttributes](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributes). Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 2

anyOf variant 2.

- Value shape: null. Added order lines, in request order, with their quantities and values frozen at creation. Empty when the edit added nothing. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string or null | The catalog bundle, for a bundle line. `bundle_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesadd_line_items-variant-1-fields-1bundle_id). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always zero: promotions aren't re-evaluated for added lines. |
| `name` | Optional | string or null | The line's name. `name`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesname). |
| `order_line_item_id` | Optional | string or null | The order line reserved by this edit. While pending, the line isn't on the order yet. `order_line_item_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesadd_line_items-variant-1-fields-1order_line_item_id). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Absent on bundle and custom lines. `product_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesadd_line_items-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Units to add. `quantity`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesquantity). |
| `sku` | Optional | string or null | The line's SKU, when it has one. `sku`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributessku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price times quantity, including modifiers. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax on the line, calculated through the order's tax settings. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | What the line costs: subtotal_money minus discount_money plus additive tax. |
| `type` | Optional | string or null | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributestype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The unit price from the catalog, price list, customer pricing or request. |
| `variant_id` | Optional | string or null | The catalog variant, for a variant line. `variant_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesadd_line_items-variant-1-fields-1variant_id). |

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.bundle_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: The catalog bundle, for a bundle line..

- Value shape: string. The catalog bundle, for a bundle line. The catalog bundle, for a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle, for a bundle line. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.name

Declared alternatives: [OrderEditLineAdditionPreviousAttributes.name](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesname).

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.order_line_item_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: The order line reserved by this edit. While pending, the line isn't on the order yet..

- Value shape: string. The order line reserved by this edit. While pending, the line isn't on the order yet. The order line reserved by this edit. While pending, the line isn't on the order yet. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The order line reserved by this edit. While pending, the line isn't on the order yet. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.product_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Absent on bundle and custom lines..

- Value shape: string. ID of the catalog product the item was sold from. Absent on bundle and custom lines. ID of the catalog product the item was sold from. Absent on bundle and custom lines. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. Absent on bundle and custom lines. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.quantity

Declared alternatives: [OrderEditLineAdditionPreviousAttributes.quantity](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributesquantity).

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.sku

Declared alternatives: [OrderEditLineAdditionPreviousAttributes.sku](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributessku).

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.type

Declared alternatives: [OrderEditLineAdditionPreviousAttributes.type](../models/OrderEditLineAdditionPreviousAttributes.md#ordereditlineadditionpreviousattributestype).

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.variant_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: The catalog variant, for a variant line..

- Value shape: string. The catalog variant, for a variant line. The catalog variant, for a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.add_line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant, for a variant line. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.canceled_at

### OrderEditCanceledMerchantEventDataPreviousAttributes.canceled_at variant 1

anyOf variant 1: When the edit was canceled. `null` when the edit is not canceled..

- Value shape: string. When the edit was canceled. `null` when the edit is not canceled. When the edit was canceled. `null` when the edit is not canceled. Format: `date-time`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.canceled_at variant 2

anyOf variant 2.

- Value shape: null. When the edit was canceled. `null` when the edit is not canceled. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.cancellation_reason

### OrderEditCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the edit was canceled. `null` when the edit is not canceled..

- Value shape: string. Why the edit was canceled. `null` when the edit is not canceled. Values: `"merchant_request"`, `"expired"`, `"payment_disputed"`, `"payment_returned"`, `null`.

### OrderEditCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the edit was canceled. `null` when the edit is not canceled. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds variant 1

anyOf variant 1: Charges released by this edit, frozen at creation. Empty when no charges were released..

- Value shape: Array of [OrderEditChargeRefundPreviousAttributes](../models/OrderEditChargeRefundPreviousAttributes.md#ordereditchargerefundpreviousattributes). Charges released by this edit, frozen at creation. Empty when no charges were released. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds variant 2

anyOf variant 2.

- Value shape: null. Charges released by this edit, frozen at creation. Empty when no charges were released. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The charge value released. The order no longer owes it. |
| `order_charge_id` | Optional | string or null | The order charge whose value is released. `order_charge_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributescharge_refunds-variant-1-fields-1order_charge_id). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of amount_money refunded to the buyer. |

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds variant 1.[] fields 1.order_charge_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: The order charge whose value is released..

- Value shape: string. The order charge whose value is released. The order charge whose value is released. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.charge_refunds variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. The order charge whose value is released. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.completed_at

### OrderEditCanceledMerchantEventDataPreviousAttributes.completed_at variant 1

anyOf variant 1: When the item changes were applied to the order. `null` when the edit is pending or canceled..

- Value shape: string. When the item changes were applied to the order. `null` when the edit is pending or canceled. When the item changes were applied to the order. `null` when the edit is pending or canceled. Format: `date-time`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the item changes were applied to the order. `null` when the edit is pending or canceled. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.created_at

### OrderEditCanceledMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the edit was created..

- Value shape: string. When the edit was created. When the edit was created. Format: `date-time`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the edit was created. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.expires_at

### OrderEditCanceledMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance..

- Value shape: string. When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. Format: `date-time`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When Flint cancels the edit if the balance isn't paid. `null` when the edit never had a balance. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.order_edit_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.order_edit_id variant 1

anyOf variant 1: Stable ID of this order edit..

- Value shape: string. Stable ID of this order edit. Stable ID of this order edit. pattern: `^oed_[0-9A-HJKMNP-TV-Z]{26}$`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. Stable ID of this order edit. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.order_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: The order this edit belongs to..

- Value shape: string. The order this edit belongs to. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The order this edit belongs to. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.payment_intent_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it..

- Value shape: string. The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment intent that collects amount_due_money. Confirm it to pay the balance. `null` when the edit has no balance, and for a moment while Flint is still creating it. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.reason

### OrderEditCanceledMerchantEventDataPreviousAttributes.reason variant 1

anyOf variant 1: Reason for the edit and its refund..

- Value shape: string. Reason for the edit and its refund. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`.

### OrderEditCanceledMerchantEventDataPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Reason for the edit and its refund. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.refund_ids

### OrderEditCanceledMerchantEventDataPreviousAttributes.refund_ids variant 1

anyOf variant 1: Refunds created for this edit. Empty when no refund is needed or processing has not created it yet..

- Value shape: Array of string. Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. Refunds created for this edit. Empty when no refund is needed or processing has not created it yet. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 1

anyOf variant 1: Removed units and their refund amounts frozen at creation..

- Value shape: Array of [OrderEditLineRemovalPreviousAttributes](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributes). Removed units and their refund amounts frozen at creation. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 2

anyOf variant 2.

- Value shape: null. Removed units and their refund amounts frozen at creation. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Optional | string or null | The original order line whose units were removed. `order_line_item_id`: [declared alternatives](../models/OrderEditCanceledMerchantEventDataPreviousAttributes.md#ordereditcanceledmerchanteventdatapreviousattributesremove_line_items-variant-1-fields-1order_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed, without changing the original line quantity. `quantity`: [declared alternatives](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesquantity). |
| `refund_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of total_money refunded to the buyer, frozen when the edit was created. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value of these units, including their original discount and tax shares, frozen when the edit was created. The order no longer owes it. |

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 1.[] fields 1.order_line_item_id

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: The original order line whose units were removed..

- Value shape: string. The original order line whose units were removed. The original order line whose units were removed. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The original order line whose units were removed. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.remove_line_items variant 1.[] fields 1.quantity

Declared alternatives: [OrderEditLineRemovalPreviousAttributes.quantity](../models/OrderEditLineRemovalPreviousAttributes.md#ordereditlineremovalpreviousattributesquantity).

### OrderEditCanceledMerchantEventDataPreviousAttributes.status

### OrderEditCanceledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund..

- Value shape: string. Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. Values: `"pending"`, `"completed"`, `"canceled"`.

### OrderEditCanceledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Pending while waiting for a balance payment, completed once the item changes are applied, or canceled when it ends without changing the order. Refund processing has its own status on each refund. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.supported_actions

### OrderEditCanceledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions..

- Value shape: Array of string. Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. Items values: `"cancel"`, `"retry"`.

### OrderEditCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Contains cancel while pending and the payment is neither processing nor succeeded. Contains retry when unrefunded_money is positive and no linked refund is pending. Empty while Flint is still processing the original refund before any linked refund exists; retry becomes available if that processing ends without a refund. Independent of caller permissions. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.version

### OrderEditCanceledMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change..

- Value shape: integer. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. Format: `uint64`. minimum: `1`. 

### OrderEditCanceledMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. The counter advances when status, payment_intent_id, completed_at, canceled_at or cancellation_reason change. 

