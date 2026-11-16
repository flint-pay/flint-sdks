[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedOrderSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Optional | [CheckoutBuyerContactPreviousAttributes](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributes) or null | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. `buyer_contact`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact). |
| `closed_at` | Optional | string or null | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. `closed_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason). |
| `created_at` | Optional | string or null | When the order was created, in RFC3339 format. `created_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributescreated_at). |
| `customer_id` | Optional | string or null | Customer associated with the order, when one is set. `customer_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status). |
| `governing_delivery_selection_id` | Optional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. `governing_delivery_selection_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesgoverning_delivery_selection_id). |
| `order_id` | Optional | string or null | Stable identifier of the expanded order. `order_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number). |
| `paid_at` | Optional | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | Payment intents associated with the order. `payment_intent_ids`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_intent_ids). |
| `payment_status` | Optional | string or null | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | Order totals before accounting for collected payments and refunds. |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status). |
| `settlement_amounts` | Optional | [OrderSettlementAmountsPreviousAttributes](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributes) or null | Payments, refunds, credits, and amounts still owed for the order. |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesupdated_at). |

### ExpandedOrderSummaryPreviousAttributes.buyer_contact

Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. `email`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact-variant-1email). |
| `is_email_cleared` | Conditional | boolean or null | True when the buyer explicitly cleared the email, including before entering one. Saving an email resets it to false. Do not restore a prefilled email while true. `is_email_cleared`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_email_cleared). |
| `is_phone_cleared` | Conditional | boolean or null | True when the buyer explicitly cleared the phone, including before entering one. Saving a phone resets it to false. Do not restore a prefilled phone while true. `is_phone_cleared`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_phone_cleared). |
| `phone` | Conditional | string or null | Phone supplied for the buyer, in E.164 format. Null when no phone is saved; is_phone_cleared distinguishes an explicit clear. `phone`: [declared alternatives](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesphone). |
| `updated_at` | Conditional | string or null | When the buyer last changed the saved checkout contact. Omitted on order buyer contact. `updated_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact-variant-1updated_at). |

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1

anyOf CheckoutBuyerContactPreviousAttributes.

- Optional: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 2

anyOf variant 2.

- Undeclared: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.
- Value shape: null. Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. 

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.email

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.email variant 1

anyOf variant 1: Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear..

- Value shape: string. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. Format: `email`. maxLength: `255`. Example: `"buyer@example.com"`. 

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.email variant 2

anyOf variant 2.

- Value shape: null. Email supplied for the buyer, exactly as sent. Null when no email is saved; is_email_cleared distinguishes an explicit clear. 

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.is_email_cleared

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.is_email_cleared](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_email_cleared).

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.is_phone_cleared

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.is_phone_cleared](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_phone_cleared).

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.phone

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.phone](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesphone).

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.updated_at

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.updated_at variant 1

anyOf variant 1: When the buyer last changed the saved checkout contact. Omitted on order buyer contact..

- Value shape: string. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the buyer last changed the saved checkout contact. Omitted on order buyer contact. 

### ExpandedOrderSummaryPreviousAttributes.closed_at

### ExpandedOrderSummaryPreviousAttributes.closed_at variant 1

anyOf variant 1: When the order closed. Present exactly when status is closed. Set once at the transition and never changed..

- Value shape: string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. 

### ExpandedOrderSummaryPreviousAttributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. 

### ExpandedOrderSummaryPreviousAttributes.closed_reason

### ExpandedOrderSummaryPreviousAttributes.closed_reason variant 1

anyOf variant 1: Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added..

- Value shape: string. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`.

### ExpandedOrderSummaryPreviousAttributes.closed_reason variant 2

anyOf variant 2.

- Value shape: null. Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. 

### ExpandedOrderSummaryPreviousAttributes.created_at

### ExpandedOrderSummaryPreviousAttributes.created_at variant 1

anyOf variant 1: When the order was created, in RFC3339 format..

- Value shape: string. When the order was created, in RFC3339 format. When the order was created, in RFC3339 format. Format: `date-time`. 

### ExpandedOrderSummaryPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the order was created, in RFC3339 format. 

### ExpandedOrderSummaryPreviousAttributes.customer_id

### ExpandedOrderSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer associated with the order, when one is set..

- Value shape: string. Customer associated with the order, when one is set. 

### ExpandedOrderSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer associated with the order, when one is set. 

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1

anyOf variant 1: Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred..

- Value shape: Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes). Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. 

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 2

anyOf variant 2.

- Value shape: null. Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. 

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the promotion, fixed when it was accepted at signup. `customer_facing_name`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributescustomer_facing_name). |
| `deferred_promotion_id` | Optional | string or null | ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. `deferred_promotion_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions-variant-1-fields-1deferred_promotion_id). |
| `promotion_code` | Optional | string or null | Promotion code accepted at signup. Null when the promotion was applied by ID. `promotion_code`: [declared alternatives](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | ID of the promotion accepted for the subscription. `promotion_id`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions-variant-1-fields-1promotion_id). |

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.customer_facing_name

Declared alternatives: [DeferredPromotionPreviousAttributes.customer_facing_name](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributescustomer_facing_name).

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.deferred_promotion_id

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.deferred_promotion_id variant 1

anyOf variant 1: ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment..

- Value shape: string. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. Example: `"dp_01KEZF7C00AZMP1PY1ER7CQ4SA"`. 

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.deferred_promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of this order's deferred promotion. Starts with dp_. Send it in deferred_promotion_ids to POST /v1/orders/{order_id}/discounts/remove to remove the promotion before payment. 

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.promotion_code

Declared alternatives: [DeferredPromotionPreviousAttributes.promotion_code](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributespromotion_code).

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.promotion_id

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.promotion_id variant 1

anyOf variant 1: ID of the promotion accepted for the subscription..

- Value shape: string. ID of the promotion accepted for the subscription. ID of the promotion accepted for the subscription. Example: `"promo_01KEZF7C00E1JAV4M413D9DE1P"`. 

### ExpandedOrderSummaryPreviousAttributes.deferred_promotions variant 1.[] fields 1.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion accepted for the subscription. 

### ExpandedOrderSummaryPreviousAttributes.fulfillment_status

### ExpandedOrderSummaryPreviousAttributes.fulfillment_status variant 1

anyOf variant 1: Aggregate progress across the order's fulfillment quantities..

- Value shape: string. Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`.

### ExpandedOrderSummaryPreviousAttributes.fulfillment_status variant 2

anyOf variant 2.

- Value shape: null. Aggregate progress across the order's fulfillment quantities. 

### ExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id

### ExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order. Null when no selection governs the order..

- Value shape: string. ID of the delivery selection that governs this order. Null when no selection governs the order. 

### ExpandedOrderSummaryPreviousAttributes.governing_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that governs this order. Null when no selection governs the order. 

### ExpandedOrderSummaryPreviousAttributes.order_id

### ExpandedOrderSummaryPreviousAttributes.order_id variant 1

anyOf variant 1: Stable identifier of the expanded order..

- Value shape: string. Stable identifier of the expanded order. 

### ExpandedOrderSummaryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded order. 

### ExpandedOrderSummaryPreviousAttributes.order_number

### ExpandedOrderSummaryPreviousAttributes.order_number variant 1

anyOf variant 1: Human-readable order number for receipts and merchant reference..

- Value shape: string. Human-readable order number for receipts and merchant reference. 

### ExpandedOrderSummaryPreviousAttributes.order_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable order number for receipts and merchant reference. 

### ExpandedOrderSummaryPreviousAttributes.paid_at

### ExpandedOrderSummaryPreviousAttributes.paid_at variant 1

anyOf variant 1: When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid..

- Value shape: string. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. 

### ExpandedOrderSummaryPreviousAttributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. 

### ExpandedOrderSummaryPreviousAttributes.payment_intent_ids

### ExpandedOrderSummaryPreviousAttributes.payment_intent_ids variant 1

anyOf variant 1: Payment intents associated with the order..

- Value shape: Array of string. Payment intents associated with the order. 

### ExpandedOrderSummaryPreviousAttributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. Payment intents associated with the order. 

### ExpandedOrderSummaryPreviousAttributes.payment_status

### ExpandedOrderSummaryPreviousAttributes.payment_status variant 1

anyOf variant 1: Collection progress. An invoice write-off also completes collection without receiving the written-off amount..

- Value shape: string. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`.

### ExpandedOrderSummaryPreviousAttributes.payment_status variant 2

anyOf variant 2.

- Value shape: null. Collection progress. An invoice write-off also completes collection without receiving the written-off amount. 

### ExpandedOrderSummaryPreviousAttributes.refund_status

### ExpandedOrderSummaryPreviousAttributes.refund_status variant 1

anyOf variant 1: Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count..

- Value shape: string. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### ExpandedOrderSummaryPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. 

### ExpandedOrderSummaryPreviousAttributes.status

### ExpandedOrderSummaryPreviousAttributes.status variant 1

anyOf variant 1: Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order..

- Value shape: string. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`.

### ExpandedOrderSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. 

### ExpandedOrderSummaryPreviousAttributes.supported_actions

### ExpandedOrderSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`.

### ExpandedOrderSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. 

### ExpandedOrderSummaryPreviousAttributes.updated_at

### ExpandedOrderSummaryPreviousAttributes.updated_at variant 1

anyOf variant 1: When the order was last updated, in RFC3339 format..

- Value shape: string. When the order was last updated, in RFC3339 format. When the order was last updated, in RFC3339 format. Format: `date-time`. 

### ExpandedOrderSummaryPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the order was last updated, in RFC3339 format. 

