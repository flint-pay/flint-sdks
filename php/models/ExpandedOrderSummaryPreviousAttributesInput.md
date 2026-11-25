[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedOrderSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContactPreviousAttributesInput](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinput) or null | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. |
| `closed_at` | Optional | string or null | When the order last closed. Present exactly when status is closed. `closed_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_reason). |
| `created_at` | Optional | string or null | When the order was created, in RFC3339 format. `created_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputcreated_at). |
| `customer_id` | Optional | string or null | Customer associated with the order, when one is set. `customer_id`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputcustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributesInput](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinput) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputdeferred_promotions). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputfulfillment_status). |
| `governing_delivery_selection_id` | Optional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. `governing_delivery_selection_id`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputgoverning_delivery_selection_id). |
| `order_id` | Optional | string or null | Stable identifier of the expanded order. `order_id`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputorder_number). |
| `paid_at` | Optional | string or null | When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | Payment intents associated with the order. `payment_intent_ids`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpayment_intent_ids). |
| `payment_status` | Optional | string or null | Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpayment_status). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributesInput](../models/PricingAmountsPreviousAttributesInput.md#pricingamountspreviousattributesinput) or null | Order totals before accounting for collected payments and refunds. |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputrefund_status). |
| `settlement_amounts` | Optional | [OrderSettlementAmountsPreviousAttributesInput](../models/OrderSettlementAmountsPreviousAttributesInput.md#ordersettlementamountspreviousattributesinput) or null | Payments, refunds, credits, and amounts still owed for the order. |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputupdated_at). |

### ExpandedOrderSummaryPreviousAttributesInput.closed_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.closed_at](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_at).

### ExpandedOrderSummaryPreviousAttributesInput.closed_reason

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.closed_reason](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_reason).

### ExpandedOrderSummaryPreviousAttributesInput.created_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.created_at](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputcreated_at).

### ExpandedOrderSummaryPreviousAttributesInput.customer_id

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.customer_id](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputcustomer_id).

### ExpandedOrderSummaryPreviousAttributesInput.deferred_promotions

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.deferred_promotions](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputdeferred_promotions).

### ExpandedOrderSummaryPreviousAttributesInput.fulfillment_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.fulfillment_status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputfulfillment_status).

### ExpandedOrderSummaryPreviousAttributesInput.governing_delivery_selection_id

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.governing_delivery_selection_id](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputgoverning_delivery_selection_id).

### ExpandedOrderSummaryPreviousAttributesInput.order_id

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.order_id](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputorder_id).

### ExpandedOrderSummaryPreviousAttributesInput.order_number

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.order_number](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputorder_number).

### ExpandedOrderSummaryPreviousAttributesInput.paid_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.paid_at](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpaid_at).

### ExpandedOrderSummaryPreviousAttributesInput.payment_intent_ids

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.payment_intent_ids](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpayment_intent_ids).

### ExpandedOrderSummaryPreviousAttributesInput.payment_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.payment_status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpayment_status).

### ExpandedOrderSummaryPreviousAttributesInput.refund_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.refund_status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputrefund_status).

### ExpandedOrderSummaryPreviousAttributesInput.status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputstatus).

### ExpandedOrderSummaryPreviousAttributesInput.supported_actions

### ExpandedOrderSummaryPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`.

### ExpandedOrderSummaryPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. 

### ExpandedOrderSummaryPreviousAttributesInput.updated_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.updated_at](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputupdated_at).

