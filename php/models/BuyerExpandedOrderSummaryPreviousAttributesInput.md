[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedOrderSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
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
| `updated_at` | Optional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputupdated_at). |

### BuyerExpandedOrderSummaryPreviousAttributesInput.closed_at

### BuyerExpandedOrderSummaryPreviousAttributesInput.closed_at variant 1

anyOf variant 1: When the order last closed. Present exactly when status is closed..

- Value shape: string. When the order last closed. Present exactly when status is closed. When the order last closed. Present exactly when status is closed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the order last closed. Present exactly when status is closed. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.closed_reason

### BuyerExpandedOrderSummaryPreviousAttributesInput.closed_reason variant 1

anyOf variant 1: Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values..

- Value shape: string. Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`.

### BuyerExpandedOrderSummaryPreviousAttributesInput.closed_reason variant 2

anyOf variant 2.

- Value shape: null. Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.created_at

### BuyerExpandedOrderSummaryPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the order was created, in RFC3339 format..

- Value shape: string. When the order was created, in RFC3339 format. When the order was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the order was created, in RFC3339 format. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.customer_id

### BuyerExpandedOrderSummaryPreviousAttributesInput.customer_id variant 1

anyOf variant 1: Customer associated with the order, when one is set..

- Value shape: string. Customer associated with the order, when one is set. Customer associated with the order, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer associated with the order, when one is set. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.deferred_promotions

### BuyerExpandedOrderSummaryPreviousAttributesInput.deferred_promotions variant 1

anyOf variant 1: Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred..

- Value shape: Array of [DeferredPromotionPreviousAttributesInput](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinput). Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.deferred_promotions variant 2

anyOf variant 2.

- Value shape: null. Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.fulfillment_status

### BuyerExpandedOrderSummaryPreviousAttributesInput.fulfillment_status variant 1

anyOf variant 1: Aggregate progress across the order's fulfillment quantities..

- Value shape: string. Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`.

### BuyerExpandedOrderSummaryPreviousAttributesInput.fulfillment_status variant 2

anyOf variant 2.

- Value shape: null. Aggregate progress across the order's fulfillment quantities. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.governing_delivery_selection_id

### BuyerExpandedOrderSummaryPreviousAttributesInput.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order. Null when no selection governs the order..

- Value shape: string. ID of the delivery selection that governs this order. Null when no selection governs the order. ID of the delivery selection that governs this order. Null when no selection governs the order. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.governing_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that governs this order. Null when no selection governs the order. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.order_id

### BuyerExpandedOrderSummaryPreviousAttributesInput.order_id variant 1

anyOf variant 1: Stable identifier of the expanded order..

- Value shape: string. Stable identifier of the expanded order. Stable identifier of the expanded order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded order. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.order_number

### BuyerExpandedOrderSummaryPreviousAttributesInput.order_number variant 1

anyOf variant 1: Human-readable order number for receipts and merchant reference..

- Value shape: string. Human-readable order number for receipts and merchant reference. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.order_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable order number for receipts and merchant reference. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.paid_at

### BuyerExpandedOrderSummaryPreviousAttributesInput.paid_at variant 1

anyOf variant 1: When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid..

- Value shape: string. When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.paid_at variant 2

anyOf variant 2.

- Value shape: null. When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.payment_intent_ids

### BuyerExpandedOrderSummaryPreviousAttributesInput.payment_intent_ids variant 1

anyOf variant 1: Payment intents associated with the order..

- Value shape: Array of string. Payment intents associated with the order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. Payment intents associated with the order. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.payment_status

### BuyerExpandedOrderSummaryPreviousAttributesInput.payment_status variant 1

anyOf variant 1: Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount..

- Value shape: string. Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`.

### BuyerExpandedOrderSummaryPreviousAttributesInput.payment_status variant 2

anyOf variant 2.

- Value shape: null. Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.refund_status

### BuyerExpandedOrderSummaryPreviousAttributesInput.refund_status variant 1

anyOf variant 1: Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count..

- Value shape: string. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### BuyerExpandedOrderSummaryPreviousAttributesInput.refund_status variant 2

anyOf variant 2.

- Value shape: null. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.status

### BuyerExpandedOrderSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order..

- Value shape: string. Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`.

### BuyerExpandedOrderSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.updated_at

### BuyerExpandedOrderSummaryPreviousAttributesInput.updated_at variant 1

anyOf variant 1: When the order was last updated, in RFC3339 format..

- Value shape: string. When the order was last updated, in RFC3339 format. When the order was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BuyerExpandedOrderSummaryPreviousAttributesInput.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the order was last updated, in RFC3339 format. 

