[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedOrderSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `closed_at` | Optional | string or null | When the order last closed. Present exactly when status is closed. `closed_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason). |
| `created_at` | Optional | string or null | When the order was created, in RFC3339 format. `created_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributescreated_at). |
| `customer_id` | Optional | string or null | Customer associated with the order, when one is set. `customer_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status). |
| `governing_delivery_selection_id` | Optional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. `governing_delivery_selection_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesgoverning_delivery_selection_id). |
| `order_id` | Optional | string or null | Stable identifier of the expanded order. `order_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number). |
| `paid_at` | Optional | string or null | When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | Payment intents associated with the order. `payment_intent_ids`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_intent_ids). |
| `payment_status` | Optional | string or null | Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | Order totals before accounting for collected payments and refunds. |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status). |
| `settlement_amounts` | Optional | [OrderSettlementAmountsPreviousAttributes](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributes) or null | Payments, refunds, credits, and amounts still owed for the order. |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus). |
| `updated_at` | Optional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesupdated_at). |

### BuyerExpandedOrderSummaryPreviousAttributes.closed_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_at).

### BuyerExpandedOrderSummaryPreviousAttributes.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### BuyerExpandedOrderSummaryPreviousAttributes.created_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.created_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributescreated_at).

### BuyerExpandedOrderSummaryPreviousAttributes.customer_id

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.customer_id](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributescustomer_id).

### BuyerExpandedOrderSummaryPreviousAttributes.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### BuyerExpandedOrderSummaryPreviousAttributes.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### BuyerExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesgoverning_delivery_selection_id).

### BuyerExpandedOrderSummaryPreviousAttributes.order_id

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_id](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_id).

### BuyerExpandedOrderSummaryPreviousAttributes.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### BuyerExpandedOrderSummaryPreviousAttributes.paid_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.paid_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespaid_at).

### BuyerExpandedOrderSummaryPreviousAttributes.payment_intent_ids

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_intent_ids](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_intent_ids).

### BuyerExpandedOrderSummaryPreviousAttributes.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### BuyerExpandedOrderSummaryPreviousAttributes.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### BuyerExpandedOrderSummaryPreviousAttributes.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### BuyerExpandedOrderSummaryPreviousAttributes.updated_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.updated_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesupdated_at).

