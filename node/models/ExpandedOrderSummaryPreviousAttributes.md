[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedOrderSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContactPreviousAttributes](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributes) or null | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. |
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
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesupdated_at). |

### ExpandedOrderSummaryPreviousAttributes.closed_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.closed_at](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesclosed_at).

### ExpandedOrderSummaryPreviousAttributes.closed_reason

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.closed_reason](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesclosed_reason).

### ExpandedOrderSummaryPreviousAttributes.created_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.created_at](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributescreated_at).

### ExpandedOrderSummaryPreviousAttributes.customer_id

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.customer_id](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributescustomer_id).

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesdeferred_promotions).

### ExpandedOrderSummaryPreviousAttributes.fulfillment_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesfulfillment_status).

### ExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesgoverning_delivery_selection_id).

### ExpandedOrderSummaryPreviousAttributes.order_id

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.order_id](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesorder_id).

### ExpandedOrderSummaryPreviousAttributes.order_number

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.order_number](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesorder_number).

### ExpandedOrderSummaryPreviousAttributes.paid_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.paid_at](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributespaid_at).

### ExpandedOrderSummaryPreviousAttributes.payment_intent_ids

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.payment_intent_ids](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributespayment_intent_ids).

### ExpandedOrderSummaryPreviousAttributes.payment_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.payment_status](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributespayment_status).

### ExpandedOrderSummaryPreviousAttributes.refund_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.refund_status](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesrefund_status).

### ExpandedOrderSummaryPreviousAttributes.status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.status](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesstatus).

### ExpandedOrderSummaryPreviousAttributes.supported_actions

### ExpandedOrderSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`.

### ExpandedOrderSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. 

### ExpandedOrderSummaryPreviousAttributes.updated_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributes.updated_at](../models/BuyerExpandedOrderSummaryPreviousAttributes.md#buyerexpandedordersummarypreviousattributesupdated_at).

