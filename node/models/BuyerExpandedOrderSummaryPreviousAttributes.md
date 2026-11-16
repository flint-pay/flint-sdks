[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedOrderSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. `closed_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesclosed_reason). |
| `created_at` | Optional | string or null | When the order was created, in RFC3339 format. `created_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributescreated_at). |
| `customer_id` | Optional | string or null | Customer associated with the order, when one is set. `customer_id`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesdeferred_promotions). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesfulfillment_status). |
| `governing_delivery_selection_id` | Optional | string or null or null | ID of the delivery selection that governs this order. Null when no selection governs the order. `governing_delivery_selection_id`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesgoverning_delivery_selection_id). |
| `order_id` | Optional | string or null | Stable identifier of the expanded order. `order_id`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesorder_number). |
| `paid_at` | Optional | string or null or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributespaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | Payment intents associated with the order. `payment_intent_ids`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributespayment_intent_ids). |
| `payment_status` | Optional | string or null | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributespayment_status). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | Order totals before accounting for collected payments and refunds. |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesrefund_status). |
| `settlement_amounts` | Optional | [OrderSettlementAmountsPreviousAttributes](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributes) or null | Payments, refunds, credits, and amounts still owed for the order. |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesstatus). |
| `updated_at` | Optional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesupdated_at). |

### BuyerExpandedOrderSummaryPreviousAttributes.closed_at

### BuyerExpandedOrderSummaryPreviousAttributes.closed_at variant 1

anyOf variant 1: When the order closed. Present exactly when status is closed. Set once at the transition and never changed..

- Value shape: string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. 

### BuyerExpandedOrderSummaryPreviousAttributes.closed_reason

### BuyerExpandedOrderSummaryPreviousAttributes.closed_reason variant 1

anyOf variant 1: Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added..

- Value shape: string. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`.

### BuyerExpandedOrderSummaryPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. 

### BuyerExpandedOrderSummaryPreviousAttributes.created_at

### BuyerExpandedOrderSummaryPreviousAttributes.created_at variant 1

anyOf variant 1: When the order was created, in RFC3339 format..

- Value shape: string. When the order was created, in RFC3339 format. When the order was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the order was created, in RFC3339 format. 

### BuyerExpandedOrderSummaryPreviousAttributes.customer_id

### BuyerExpandedOrderSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer associated with the order, when one is set..

- Value shape: string. Customer associated with the order, when one is set. Customer associated with the order, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer associated with the order, when one is set. 

### BuyerExpandedOrderSummaryPreviousAttributes.deferred_promotions

### BuyerExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1

anyOf variant 1: Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred..

- Value shape: Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes). Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. 

### BuyerExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 2

anyOf variant 2.

- Value shape: null. Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. 

### BuyerExpandedOrderSummaryPreviousAttributes.fulfillment_status

### BuyerExpandedOrderSummaryPreviousAttributes.fulfillment_status variant 1

anyOf variant 1: Aggregate progress across the order's fulfillment quantities..

- Value shape: string. Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`.

### BuyerExpandedOrderSummaryPreviousAttributes.fulfillment_status variant 2

anyOf variant 2.

- Value shape: null. Aggregate progress across the order's fulfillment quantities. 

### BuyerExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id

### BuyerExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order. Null when no selection governs the order..

- Value shape: (string or null). ID of the delivery selection that governs this order. Null when no selection governs the order. ID of the delivery selection that governs this order. Null when no selection governs the order. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that governs this order. Null when no selection governs the order. 

### BuyerExpandedOrderSummaryPreviousAttributes.order_id

### BuyerExpandedOrderSummaryPreviousAttributes.order_id variant 1

anyOf variant 1: Stable identifier of the expanded order..

- Value shape: string. Stable identifier of the expanded order. Stable identifier of the expanded order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded order. 

### BuyerExpandedOrderSummaryPreviousAttributes.order_number

### BuyerExpandedOrderSummaryPreviousAttributes.order_number variant 1

anyOf variant 1: Human-readable order number for receipts and merchant reference..

- Value shape: string. Human-readable order number for receipts and merchant reference. 

### BuyerExpandedOrderSummaryPreviousAttributes.order_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable order number for receipts and merchant reference. 

### BuyerExpandedOrderSummaryPreviousAttributes.paid_at

### BuyerExpandedOrderSummaryPreviousAttributes.paid_at variant 1

anyOf variant 1: When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid..

- Value shape: (string or null). When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. 

### BuyerExpandedOrderSummaryPreviousAttributes.payment_intent_ids

### BuyerExpandedOrderSummaryPreviousAttributes.payment_intent_ids variant 1

anyOf variant 1: Payment intents associated with the order..

- Value shape: Array of string. Payment intents associated with the order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. Payment intents associated with the order. 

### BuyerExpandedOrderSummaryPreviousAttributes.payment_status

### BuyerExpandedOrderSummaryPreviousAttributes.payment_status variant 1

anyOf variant 1: Collection progress. An invoice write-off also completes collection without receiving the written-off amount..

- Value shape: string. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`.

### BuyerExpandedOrderSummaryPreviousAttributes.payment_status variant 2

anyOf variant 2.

- Value shape: null. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. 

### BuyerExpandedOrderSummaryPreviousAttributes.refund_status

### BuyerExpandedOrderSummaryPreviousAttributes.refund_status variant 1

anyOf variant 1: Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count..

- Value shape: string. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### BuyerExpandedOrderSummaryPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. 

### BuyerExpandedOrderSummaryPreviousAttributes.status

### BuyerExpandedOrderSummaryPreviousAttributes.status variant 1

anyOf variant 1: Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order..

- Value shape: string. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`.

### BuyerExpandedOrderSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. 

### BuyerExpandedOrderSummaryPreviousAttributes.updated_at

### BuyerExpandedOrderSummaryPreviousAttributes.updated_at variant 1

anyOf variant 1: When the order was last updated, in RFC3339 format..

- Value shape: string. When the order was last updated, in RFC3339 format. When the order was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the order was last updated, in RFC3339 format. 

