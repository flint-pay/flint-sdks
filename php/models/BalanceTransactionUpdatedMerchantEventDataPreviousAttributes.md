[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [SignedMoneyPreviousAttributes](../models/SignedMoneyPreviousAttributes.md#signedmoneypreviousattributes) or null | Signed gross amount of this balance movement, before any fee. |
| `available_at` | Optional | string or null | When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. `available_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesavailable_at). |
| `balance_transaction_id` | Optional | string or null | Stable identifier of this balance transaction. `balance_transaction_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesbalance_transaction_id). |
| `currency` | Optional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency). |
| `description` | Optional | string or null | Short text describing the movement, from Flint or your processor. Use it for display, not for matching. `description`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesdescription). |
| `fee_money` | Optional | [SignedMoneyPreviousAttributes](../models/SignedMoneyPreviousAttributes.md#signedmoneypreviousattributes) or null | Fee deducted from this balance movement. On payments, this is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a platform fee; the payment intent carries the breakdown. On disputes and dispute reversals, this includes the processor's dispute fee charged to your balance or actually returned to it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by itself return the fee. |
| `merchant_id` | Optional | string or null | Merchant whose balance this transaction moved. `merchant_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesmerchant_id). |
| `net_money` | Optional | [SignedMoneyPreviousAttributes](../models/SignedMoneyPreviousAttributes.md#signedmoneypreviousattributes) or null | Signed net effect on your Flint balance: amount_money minus fee_money in the same currency. |
| `occurred_at` | Optional | string or null | When the balance movement happened. `occurred_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesoccurred_at). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. `order_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder_id). |
| `payout_id` | Optional | string or null | The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. `payout_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributespayout_id). |
| `related_balance_transaction_ids` | Optional | Array of string or null | Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. `related_balance_transaction_ids`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesrelated_balance_transaction_ids). |
| `related_resource` | Optional | [ResourceReferencePreviousAttributes](../models/ResourceReferencePreviousAttributes.md#resourcereferencepreviousattributes) or null | The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. `related_resource`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesrelated_resource). |
| `status` | Optional | string or null | Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`. `status`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesstatus). |
| `type` | Optional | string or null | Kind of balance movement. Unmapped movement types are returned as other. Values: [27 declared values](BalanceTransactionInput.md#balancetransactioninput-type-values). `type`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributestype). |

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at variant 1

anyOf variant 1: When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now..

- Value shape: string. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. Format: `date-time`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.available_at variant 2

anyOf variant 2.

- Value shape: null. When the funds become, or became, available to pay out. Present on pending transactions as the expected time; status says whether they are available now. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id variant 1

anyOf variant 1: Stable identifier of this balance transaction..

- Value shape: string. Stable identifier of this balance transaction. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.balance_transaction_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this balance transaction. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Short text describing the movement, from Flint or your processor. Use it for display, not for matching..

- Value shape: string. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Short text describing the movement, from Flint or your processor. Use it for display, not for matching. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Merchant whose balance this transaction moved..

- Value shape: string. Merchant whose balance this transaction moved. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Merchant whose balance this transaction moved. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at variant 1

anyOf variant 1: When the balance movement happened..

- Value shape: string. When the balance movement happened. When the balance movement happened. Format: `date-time`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.occurred_at variant 2

anyOf variant 2.

- Value shape: null. When the balance movement happened. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order

The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_contact` | Conditional | [CheckoutBuyerContactPreviousAttributes](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributes) or null | Buyer contact recorded on the order, including guest contact when retained. Omitted when the order has no recorded contact. `buyer_contact`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact). |
| `closed_at` | Conditional | string or null | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. `closed_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at). |
| `closed_reason` | Conditional | string or null | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason). |
| `created_at` | Conditional | string or null | When the order was created, in RFC3339 format. `created_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at). |
| `customer_id` | Conditional | string or null | Customer associated with the order, when one is set. `customer_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id). |
| `deferred_promotions` | Conditional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions). |
| `fulfillment_status` | Conditional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status). |
| `governing_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that governs this order. Null when no selection governs the order. `governing_delivery_selection_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id). |
| `order_id` | Conditional | string or null | Stable identifier of the expanded order. `order_id`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id). |
| `order_number` | Conditional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number). |
| `paid_at` | Conditional | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at). |
| `payment_intent_ids` | Conditional | Array of string or null | Payment intents associated with the order. `payment_intent_ids`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids). |
| `payment_status` | Conditional | string or null | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status). |
| `pricing_amounts` | Conditional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | Order totals before accounting for collected payments and refunds. |
| `refund_status` | Conditional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status). |
| `settlement_amounts` | Conditional | [OrderSettlementAmountsPreviousAttributes](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributes) or null | Payments, refunds, credits, and amounts still owed for the order. |
| `status` | Conditional | string or null | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus). |
| `supported_actions` | Conditional | Array of string or null | Lifecycle actions Flint accepts on the order now, independent of permissions. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions). |
| `updated_at` | Conditional | string or null | When the order was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at). |

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. The order, inlined when you request expand=order. null when expanded and the transaction has no order_id. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at variant 1

anyOf variant 1: When the order closed. Present exactly when status is closed. Set once at the transition and never changed..

- Value shape: string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at variant 1

anyOf variant 1: When the order was created, in RFC3339 format..

- Value shape: string. When the order was created, in RFC3339 format. When the order was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the order was created, in RFC3339 format. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id variant 1

anyOf variant 1: Customer associated with the order, when one is set..

- Value shape: string. Customer associated with the order, when one is set. Customer associated with the order, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer associated with the order, when one is set. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order. Null when no selection governs the order..

- Value shape: string. ID of the delivery selection that governs this order. Null when no selection governs the order. ID of the delivery selection that governs this order. Null when no selection governs the order. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that governs this order. Null when no selection governs the order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id variant 1

anyOf variant 1: Stable identifier of the expanded order..

- Value shape: string. Stable identifier of the expanded order. Stable identifier of the expanded order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at variant 1

anyOf variant 1: When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid..

- Value shape: string. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at variant 2

anyOf variant 2.

- Value shape: null. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids variant 1

anyOf variant 1: Payment intents associated with the order..

- Value shape: Array of string. Payment intents associated with the order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. Payment intents associated with the order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at variant 1

anyOf variant 1: When the order was last updated, in RFC3339 format..

- Value shape: string. When the order was last updated, in RFC3339 format. When the order was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the order was last updated, in RFC3339 format. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order..

- Value shape: string. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. The Flint order this movement relates to, such as the order a payment was for. Absent when the movement isn't tied to an order. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id variant 1

anyOf variant 1: The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries..

- Value shape: string. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.payout_id variant 2

anyOf variant 2.

- Value shape: null. The payout that carried this balance transaction to your bank. Set once, when that payout's contents are prepared, and never changed afterward, including if the payout later fails or is reversed. Absent until then, and on transactions no payout carries. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids variant 1

anyOf variant 1: Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none..

- Value shape: Array of string. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_balance_transaction_ids variant 2

anyOf variant 2.

- Value shape: null. Earlier balance transactions this one is linked to, including the exact payment principal a refund returns, the payout transaction that a payout_failure, payout_cancellation, or payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there are none. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_resource

The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none.

Field definitions: [shared fields](ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_resource variant 1

anyOf ResourceReferencePreviousAttributes.

- Optional: `resource_id`, `resource_type`.

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_resource variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when the movement has none. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_resource variant 1.resource_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_id).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.related_resource variant 1.resource_type

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_by variant 1.resource_type](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_by-variant-1resource_type).

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated..

- Value shape: string. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. Values: `"pending"`, `"available"`.

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the funds can be paid out yet: pending until they become available, then available. Only these two values appear, and the change to available sends balance_transaction.updated. 

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: Kind of balance movement. Unmapped movement types are returned as other..

- Value shape: string. Kind of balance movement. Unmapped movement types are returned as other. Values: `"payment"`, `"refund"`, `"dispute"`, `"dispute_reversal"`, `"return"`, `"recovery"`, `"payout"`, `"payout_failure"`, `"payout_cancellation"`, `"payout_reversal"`, `"payout_advance"`, `"payout_advance_funding"`, `"reserve_hold"`, `"reserve_release"`, `"adjustment"`, `"merchant_billing_collection"`, `"merchant_billing_collection_reversal"`, `"platform_fee_refund"`, `"platform_fee_payout"`, `"platform_fee_payout_reversal"`, `"payment_split"`, `"payment_split_reversal"`, `"payment_split_reinstatement"`, `"payment_split_failure"`, `"seller_shortfall_coverage"`, `"seller_shortfall_coverage_reversal"`, `"other"`.

### BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of balance movement. Unmapped movement types are returned as other. 

