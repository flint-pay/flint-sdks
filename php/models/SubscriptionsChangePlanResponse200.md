[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionsChangePlanResponse200

A response containing `SubscriptionPlanChangeResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPlanChangeResult](../models/SubscriptionPlanChangeResult.md#subscriptionplanchangeresult) | The result of changing a subscription plan, including the subscription and any order and payment attempt created for immediate billing. `data`: [field definitions](../models/SubscriptionsChangePlanResponse200.md#subscriptionschangeplanresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SubscriptionsChangePlanResponse200.data

The result of changing a subscription plan, including the subscription and any order and payment attempt created for immediate billing.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order` | Required | [Order](../models/Order.md#order) or null | The new period's order when billing_starts is now, including a canceled order when payment fails. Null for next_renewal. `order`: [declared alternatives](../models/SubscriptionsChangePlanResponse200.md#subscriptionschangeplanresponse200dataorder). |
| `order_payment_attempt` | Required | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) or null | The recorded payment attempt when billing_starts is now, including declines. Null for next_renewal. |
| `subscription` | Required | [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `subscription`: [field definitions](../models/SubscriptionsCancelResponse200.md#subscriptionscancelresponse200data). |

### SubscriptionsChangePlanResponse200.data.order

The new period's order when billing_starts is now, including a canceled order when payment fails. Null for next_renewal.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Conditional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | An attempt to pay an order. |
| `authorization_amounts` | Conditional | [OrderAuthorizationAmounts](../models/OrderAuthorizationAmounts.md#orderauthorizationamounts) | The amounts authorized and still capturable on an order's payments, with the authorization expiry. |
| `buyer_actions` | Conditional | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time; a merchant read gets an empty list. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. Example: `[]`. |
| `buyer_contact` | Conditional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout. |
| `buyer_note` | Conditional | string |  |
| `charges` | Conditional | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) |  |
| `checkout_session_ids` | Conditional | Array of string |  |
| `closed_at` | Conditional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. |
| `closed_reason` | Conditional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `closed_reason_message` | Conditional | string | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Conditional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null |  |
| `customer_id` | Conditional | string |  |
| `delivery_destination` | Conditional | [OrderDeliveryDestination](../models/OrderDeliveryDestination.md#orderdeliverydestination) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from. |
| `discounts` | Conditional | Array of [OrderDiscount](../models/OrderDiscount.md#orderdiscount) |  |
| `external_reference_id` | Conditional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `fulfillment_status` | Conditional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `fulfillments` | Conditional | Array of [Fulfillment](../models/Fulfillment.md#fulfillment) |  |
| `gift_card_estimate` | Conditional | [OrderGiftCardEstimate](../models/OrderGiftCardEstimate.md#ordergiftcardestimate) | An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it. |
| `gift_card_settlements` | Conditional | Array of [OrderGiftCardSettlement](../models/OrderGiftCardSettlement.md#ordergiftcardsettlement) |  |
| `gift_card_tender_enabled` | Conditional | boolean |  |
| `gift_cards` | Conditional | Array of [OrderGiftCardSelection](../models/OrderGiftCardSelection.md#ordergiftcardselection) |  |
| `governing_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination. Null when no selection governs the order. While set, change the destination through the delivery selection. |
| `internal_note` | Conditional | string |  |
| `inventory_exception_reason` | Conditional | string | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. |
| `inventory_exception_resolution_message` | Conditional | string | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. |
| `inventory_exception_status` | Conditional | string | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. |
| `inventory_reservation_id` | Conditional | string | The reservation holding stock for this order, when one exists. |
| `inventory_routing_source` | Conditional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `line_items` | Conditional | Array of [OrderLineItem](../models/OrderLineItem.md#orderlineitem) |  |
| `merchant_id` | Conditional | string |  |
| `metadata` | Conditional | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datametadata). |
| `order_id` | Conditional | string |  |
| `order_number` | Conditional | string |  |
| `origin` | Conditional | string | Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `payment_collection` | Conditional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `payment_intent_ids` | Conditional | Array of string |  |
| `payment_intents` | Conditional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) |  |
| `payment_link_id` | Conditional | string | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. |
| `payment_status` | Conditional | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Conditional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Conditional | Array of string |  |
| `refund_status` | Conditional | string | Refund progress for collected money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `return_credit_settlements` | Conditional | Array of [OrderReturnCreditSettlement](../models/OrderReturnCreditSettlement.md#orderreturncreditsettlement) | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. |
| `return_resolution_id` | Conditional | string | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. |
| `settlement_amounts` | Conditional | [SettlementAmounts](../models/SettlementAmounts.md#settlementamounts) | How much of an order has been paid, refunded, credited, written off, and settled as tips, and what balance and outstanding amount remain. |
| `setup_collection` | Conditional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `status` | Conditional | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `subscription` | Conditional | [ExpandedSubscriptionSummary](../models/ExpandedSubscriptionSummary.md#expandedsubscriptionsummary) or null |  |
| `subscription_cycle` | Conditional | integer string | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_changed_at` | Conditional | string | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. |
| `subscription_id` | Conditional | string |  |
| `subscription_plan` | Conditional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | `subscription_plan`: [declared alternatives](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan). |
| `subscription_plan_id` | Conditional | string |  |
| `tax` | Conditional | [OrderTax](../models/OrderTax.md#ordertax) | An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns. |
| `ticketed_event` | Conditional | [TicketedEvent](../models/TicketedEvent.md#ticketedevent) | Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued. |
| `tips` | Conditional | Array of [Tip](../models/Tip.md#tip) |  |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Conditional | integer string | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### SubscriptionsChangePlanResponse200.data.order variant 1

anyOf variant 1: A customer's purchase and its payment and fulfillment progress..

- Required: `buyer_actions`, `charges`, `checkout_session_ids`, `discounts`, `fulfillments`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `line_items`, `order_id`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `settlement_amounts`, `status`, `tax`, `tips`, `version`.
- Optional: `active_payment_attempt`, `authorization_amounts`, `buyer_contact`, `buyer_note`, `closed_at`, `closed_reason`, `closed_reason_message`, `created_at`, `customer`, `customer_id`, `delivery_destination`, `external_reference_id`, `fulfillment_status`, `gift_card_estimate`, `internal_note`, `inventory_exception_reason`, `inventory_exception_resolution_message`, `inventory_exception_status`, `inventory_reservation_id`, `inventory_routing_source`, `merchant_id`, `metadata`, `order_number`, `origin`, `payment_collection`, `payment_intents`, `payment_link_id`, `return_resolution_id`, `setup_collection`, `subscription`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan`, `subscription_plan_id`, `ticketed_event`, `updated_at`.

### SubscriptionsChangePlanResponse200.data.order variant 2

anyOf variant 2.

- Undeclared: `active_payment_attempt`, `authorization_amounts`, `buyer_actions`, `buyer_contact`, `buyer_note`, `charges`, `checkout_session_ids`, `closed_at`, `closed_reason`, `closed_reason_message`, `created_at`, `customer`, `customer_id`, `delivery_destination`, `discounts`, `external_reference_id`, `fulfillment_status`, `fulfillments`, `gift_card_estimate`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `internal_note`, `inventory_exception_reason`, `inventory_exception_resolution_message`, `inventory_exception_status`, `inventory_reservation_id`, `inventory_routing_source`, `line_items`, `merchant_id`, `metadata`, `order_id`, `order_number`, `origin`, `payment_collection`, `payment_intent_ids`, `payment_intents`, `payment_link_id`, `payment_status`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `return_resolution_id`, `settlement_amounts`, `setup_collection`, `status`, `subscription`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan`, `subscription_plan_id`, `tax`, `ticketed_event`, `tips`, `updated_at`, `version`.
- Value shape: null. The new period's order when billing_starts is now, including a canceled order when payment fails. Null for next_renewal. 

### SubscriptionsChangePlanResponse200.data.order variant 1.metadata

Field definitions: [OrdersApplyDiscountResponse200.data.metadata](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datametadata).

### SubscriptionsChangePlanResponse200.data.order variant 1.subscription_plan

Declared alternatives: [OrdersApplyDiscountResponse200.data.subscription_plan](../models/OrdersApplyDiscountResponse200.md#ordersapplydiscountresponse200datasubscription_plan).

### SubscriptionsChangePlanResponse200.data.subscription

Field definitions: [SubscriptionsCancelResponse200.data](../models/SubscriptionsCancelResponse200.md#subscriptionscancelresponse200data).

