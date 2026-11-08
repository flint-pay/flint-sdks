[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPlanChangeResultResponse

A response containing `BuyerSubscriptionPlanChangeResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionPlanChangeResult](../models/BuyerSubscriptionPlanChangeResult.md#buyersubscriptionplanchangeresult) | Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads. The order and order_payment_attempt are null when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero. `data`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerSubscriptionPlanChangeResultResponse.data

Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads. The order and order_payment_attempt are null when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_starts` | Required | string | The resolved billing timing for this plan change. Values: `"now"`, `"next_renewal"`, `"period_end"`, `"prorated_now"`. |
| `order` | Required | [BuyerOrder](../models/BuyerOrder.md#buyerorder) or null | The new period or proration order when billing_starts is now or prorated_now, including a closed unpaid order when payment fails. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero. `order`: [declared alternatives](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder). |
| `order_payment_attempt` | Required | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) or null | The recorded payment attempt when billing_starts is now or prorated_now, including declines. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero. `order_payment_attempt`: [declared alternatives](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder_payment_attempt). |
| `subscription` | Required | [BuyerSubscription](../models/BuyerSubscription.md#buyersubscription) | The subscription after this request, including any scheduled plan change, or the unchanged subscription when payment fails. A customer's recurring purchase. `subscription`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedatasubscription). |

### BuyerSubscriptionPlanChangeResultResponse.data.order

The new period or proration order when billing_starts is now or prorated_now, including a closed unpaid order when payment fails. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Conditional | [BuyerOrderPaymentAttempt](../models/BuyerOrderPaymentAttempt.md#buyerorderpaymentattempt) | The payment attempt currently collecting this order. Omitted when no attempt is active or its collection surface belongs to another caller. An attempt to pay an order. `active_payment_attempt`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attempt). |
| `authorization_amounts` | Conditional | [OrderAuthorizationAmounts](../models/OrderAuthorizationAmounts.md#orderauthorizationamounts) | The amounts authorized and still capturable on the order's payments. The amounts authorized and still capturable on an order's payments, with the authorization expiry. `authorization_amounts`: [field definitions](../models/OrderResponse.md#orderresponsedataauthorization_amounts). |
| `buyer_actions` | Conditional | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time. Merchant order responses omit this field. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. Example: `[]`. `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
| `buyer_contact` | Conditional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/OrderResponse.md#orderresponsedatabuyer_contact). |
| `buyer_note` | Conditional | string | A note to the buyer. |
| `charges` | Conditional | Array of [BuyerOrderCharge](../models/BuyerOrderCharge.md#buyerordercharge) | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1charges). |
| `checkout_session_ids` | Conditional | Array of string | IDs of the checkout sessions opened for this order. Items: Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `closed_at` | Conditional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Conditional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | ID of the customer this order belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Conditional | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions). |
| `delivery_destination` | Conditional | [OrderDeliveryDestination](../models/OrderDeliveryDestination.md#orderdeliverydestination) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from. `delivery_destination`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destination). |
| `discounts` | Conditional | Array of [OrderDiscount](../models/OrderDiscount.md#orderdiscount) | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts[]`: [field definitions](../models/OrderResponse.md#orderresponsedatadiscounts). |
| `fulfillment_status` | Conditional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `fulfillments` | Conditional | Array of [BuyerFulfillment](../models/BuyerFulfillment.md#buyerfulfillment) | Fulfillments created for the order, each covering a set of its line items. `fulfillments[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillments). |
| `gift_card_estimate` | Conditional | [OrderGiftCardEstimate](../models/OrderGiftCardEstimate.md#ordergiftcardestimate) | An estimate of how the order balance splits between gift cards and the payment processor. An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it. |
| `gift_card_settlements` | Conditional | Array of [OrderGiftCardSettlement](../models/OrderGiftCardSettlement.md#ordergiftcardsettlement) | The gift card redemptions applied to the order's payments. `gift_card_settlements[]`: [field definitions](../models/OrderResponse.md#orderresponsedatagift_card_settlements). |
| `gift_card_tender_enabled` | Conditional | boolean | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes. |
| `gift_cards` | Conditional | Array of [OrderGiftCardSelection](../models/OrderGiftCardSelection.md#ordergiftcardselection) | Gift cards available to pay the order, with each card's available balance. `gift_cards[]`: [field definitions](../models/OrderResponse.md#orderresponsedatagift_cards). |
| `governing_delivery_selection_id` | Conditional | string or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination. Null when no selection governs the order. While set, change the destination through the delivery selection. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `line_items` | Conditional | Array of [BuyerOrderLineItem](../models/BuyerOrderLineItem.md#buyerorderlineitem) | Items the order sells, each with its pricing, tax, and fulfillment quantities. `line_items[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1line_items). |
| `merchant_id` | Conditional | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `order_id` | Conditional | string | Unique identifier for this order, prefixed `ord_`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Conditional | string | Human-readable order number for receipts and merchant reference. |
| `origin` | Conditional | string | How the order was created. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`. |
| `paid_at` | Conditional | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_collection` | Conditional | [BuyerPaymentCollection](../models/BuyerPaymentCollection.md#buyerpaymentcollection) | Payment options and collection instructions for the order's outstanding balance. Omitted when collection is unavailable to this caller. What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values. |
| `payment_intent_ids` | Conditional | Array of string | IDs of the payment intents created to collect this order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_link_id` | Conditional | string | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_status` | Conditional | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pricing_amounts` | Conditional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Conditional | Array of string | IDs of the refunds issued against this order. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_status` | Conditional | string | Refund progress for collected money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `return_credit_settlements` | Conditional | Array of [OrderReturnCreditSettlement](../models/OrderReturnCreditSettlement.md#orderreturncreditsettlement) | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. `return_credit_settlements[]`: [field definitions](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements). |
| `return_resolution_id` | Conditional | string | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `settlement_amounts` | Conditional | [OrderSettlementAmounts](../models/OrderSettlementAmounts.md#ordersettlementamounts) | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. The bill settlement amounts plus order overpayments, settled tips, and debt discharged by final capture. Money collected, returned, waived, and still owed on a bill. Money collected, returned, waived, and still owed on a bill. |
| `setup_collection` | Conditional | [BuyerPaymentCollection](../models/BuyerPaymentCollection.md#buyerpaymentcollection) | Instructions for saving a payment method for a subscription order. Omitted when setup is unavailable. What a client needs to collect payment for a buyer's order. The `stripe` field holds the Stripe values. |
| `status` | Conditional | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `subscription_cycle` | Conditional | integer | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_changed_at` | Conditional | string | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_id` | Conditional | string | ID of the subscription this order bills. Absent on an order that isn't from a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan_id` | Conditional | string | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `tax` | Conditional | [BuyerOrderTax](../models/BuyerOrderTax.md#buyerordertax) | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. Tax details on a buyer's order: whether tax is enabled, its mode and status, location, exemption, and tax breakdowns. |
| `ticketed_event` | Conditional | [TicketedEvent](../models/TicketedEvent.md#ticketedevent) | Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued. `ticketed_event`: [field definitions](../models/OrderResponse.md#orderresponsedataticketed_event). |
| `tips` | Conditional | Array of [BuyerTip](../models/BuyerTip.md#buyertip) | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. `tips[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1tips). |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: `int64`. |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1

anyOf BuyerOrder: A customer's purchase and its payment and fulfillment progress..

- Required: `buyer_actions`, `charges`, `checkout_session_ids`, `created_at`, `deferred_promotions`, `discounts`, `fulfillments`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `line_items`, `merchant_id`, `order_id`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `settlement_amounts`, `status`, `tax`, `tips`, `updated_at`, `version`.
- Optional: `active_payment_attempt`, `authorization_amounts`, `buyer_contact`, `buyer_note`, `closed_at`, `closed_reason`, `customer_id`, `delivery_destination`, `fulfillment_status`, `gift_card_estimate`, `order_number`, `origin`, `payment_collection`, `payment_link_id`, `return_resolution_id`, `setup_collection`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan_id`, `ticketed_event`.

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `active_payment_attempt`, `authorization_amounts`, `buyer_actions`, `buyer_contact`, `buyer_note`, `charges`, `checkout_session_ids`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `delivery_destination`, `discounts`, `fulfillment_status`, `fulfillments`, `gift_card_estimate`, `gift_card_settlements`, `gift_card_tender_enabled`, `gift_cards`, `governing_delivery_selection_id`, `line_items`, `merchant_id`, `order_id`, `order_number`, `origin`, `paid_at`, `payment_collection`, `payment_intent_ids`, `payment_link_id`, `payment_status`, `pricing_amounts`, `refund_ids`, `refund_status`, `return_credit_settlements`, `return_resolution_id`, `settlement_amounts`, `setup_collection`, `status`, `subscription_cycle`, `subscription_delivery_changed_at`, `subscription_id`, `subscription_plan_id`, `tax`, `ticketed_event`, `tips`, `updated_at`, `version`.
- Value shape: null. The new period or proration order when billing_starts is now or prorated_now, including a closed unpaid order when payment fails. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero. 

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt

The payment attempt currently collecting this order. Omitted when no attempt is active or its collection surface belongs to another caller. An attempt to pay an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Required | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Required | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Optional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. `last_payment_error`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error). |
| `mode` | Required | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Required | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Required | Array of [BuyerPaymentAttemptPaymentIntent](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents). |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Values: [10 declared values](#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attempt-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [27 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt status values

- `"processing"`
- `"requires_action"`
- `"requires_capture"`
- `"partially_succeeded"`
- `"requires_retry"`
- `"finalizing"`
- `"succeeded"`
- `"failed"`
- `"expired"`
- `"canceled"`

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.last_payment_error

The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [18 declared values](BuyerPaymentErrorSummaryInput.md#buyerpaymenterrorsummaryinput-code-values). |
| `failed_at` | Required | string | Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `message` | Required | string | Flint-authored payment failure message written for the buyer. This is stable explanatory text, not raw provider copy. |
| `remediation` | Required | [BuyerErrorRemediation](../models/BuyerErrorRemediation.md#buyererrorremediation) or null | Guidance for resolving the payment failure before trying to collect again. |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.payment_intents[]

The payment intent behind an order payment attempt, with its status, amounts, authorization expiry, and last payment error.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. `last_payment_error`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intentslast_payment_error). |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `selected_payment_option` | Optional | string | Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.payment_intents[].last_payment_error

Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance.

Field definitions: [shared fields](#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.charges[]

An additional charge applied to an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description of the charge. |
| `fulfillment_id` | Optional | string | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `name` | Required | string | What the buyer sees for this charge at checkout and on receipts. |
| `order_charge_id` | Required | string | Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[]

Work required to deliver an order's items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charges` | Optional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. `charges[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges). |
| `completed_at` | Optional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `digital_details` | Optional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. `digital_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details). |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `line_items` | Required | Array of [BuyerFulfillmentLineItem](../models/BuyerFulfillmentLineItem.md#buyerfulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. `line_items[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillmentsline_items). |
| `local_delivery_details` | Optional | [BuyerDeliveryFulfillmentDetails](../models/BuyerDeliveryFulfillmentDetails.md#buyerdeliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Buyer-facing details of a local delivery fulfillment: courier, timing, and tracking. Some fields are omitted for credentials that don't act for the verified customer. `local_delivery_details`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillmentslocal_delivery_details). |
| `order_id` | Required | string | Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [BuyerFulfillmentOutcome](../models/BuyerFulfillmentOutcome.md#buyerfulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. A terminal outcome recorded on a fulfillment, such as a no-show, with its `reason` and when it occurred. `outcome`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillmentsoutcome). |
| `packages` | Optional | Array of [BuyerExpandedPackageSummary](../models/BuyerExpandedPackageSummary.md#buyerexpandedpackagesummary) | Packages associated with this fulfillment. `packages[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillmentspackages). |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_details` | Optional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. `pickup_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details). |
| `recipient` | Optional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_details` | Optional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. `service_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details). |
| `shipment_details` | Optional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. `shipment_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details). |
| `shipments` | Optional | Array of [BuyerExpandedShipmentSummary](../models/BuyerExpandedShipmentSummary.md#buyerexpandedshipmentsummary) | Shipments associated with this fulfillment. `shipments[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillmentsshipments). |
| `status` | Required | string | Buyer-visible fulfillment status. Held fulfillments show their pre-hold status. Values: [13 declared values](#buyersubscriptionplanchangeresultresponsedataorder-variant-1fulfillments-status-values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `updated_at` | Required | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[] status values

- `"pending"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].charges[]

Field definitions: [FulfillmentResponse.data.charges[]](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].digital_details

Field definitions: [FulfillmentResponse.data.digital_details](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].line_items[]

An order line item and quantity included in a buyer's fulfillment, with the line's modifiers.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifiers` | Optional | Array of [BuyerOrderLineItemModifier](../models/BuyerOrderLineItemModifier.md#buyerorderlineitemmodifier) | Modifier selections snapshotted from the order line for fulfillment. `modifiers[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers). |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated to the fulfillment. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].line_items[].modifiers[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[].modifiers[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].local_delivery_details

Courier, delivery window, and handoff details for a local delivery fulfillment. Buyer-facing details of a local delivery fulfillment: courier, timing, and tracking. Some fields are omitted for credentials that don't act for the verified customer.

Field definitions: [shared fields](BuyerDeliveryFulfillmentDetailsInput.md#buyerdeliveryfulfillmentdetailsinput).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].outcome

Terminal outcome details. Present exactly when status is no_show. A terminal outcome recorded on a fulfillment, such as a no-show, with its `reason` and when it occurred.

Field definitions: [shared fields](BuyerFulfillmentOutcomeInput.md#buyerfulfillmentoutcomeinput).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].packages[]

A package on a buyer's fulfillment, with its carrier, status, tracking details, and timestamps. Buyer credentials get no supported actions.

Field definitions: [shared fields](BuyerExpandedPackageSummaryInput.md#buyerexpandedpackagesummaryinput).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].pickup_details

Field definitions: [FulfillmentResponse.data.pickup_details](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].service_details

Field definitions: [FulfillmentResponse.data.service_details](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].shipment_details

Field definitions: [FulfillmentResponse.data.shipment_details](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.fulfillments[].shipments[]

A buyer-visible shipment summary, with its direction, status, and package count.

Field definitions: [shared fields](BuyerExpandedShipmentSummaryInput.md#buyerexpandedshipmentsummaryinput).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[]

An item purchased in an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Required | integer | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Catalog categories of the item. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string | Description of the item as sold. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_ship_date` | Required | string or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantities](../models/OrderLineItemFulfillmentQuantities.md#orderlineitemfulfillmentquantities) | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsfulfillment_quantities). |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirements](../models/OrderLineItemFulfillmentRequirements.md#orderlineitemfulfillmentrequirements) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshot](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshot) | Gift card details for a gift card purchase line. The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `inventory_snapshot` | Required | [LineItemInventorySnapshot](../models/LineItemInventorySnapshot.md#lineiteminventorysnapshot) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Required | Array of [BuyerOrderLineItemModifier](../models/BuyerOrderLineItemModifier.md#buyerorderlineitemmodifier) | Modifiers selected on the line, with their prices. `modifiers[]`: [field definitions](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_line_item_id` | Required | string | Unique identifier for this order line item, prefixed `li_`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `payment_link_line_item_key` | Required | string or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: `1`. maxLength: `100`. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `purchased_gift_cards` | Required | Array of [PurchasedGiftCard](../models/PurchasedGiftCard.md#purchasedgiftcard) | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemspurchased_gift_cards). |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount of this line already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `refunded_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `release_date` | Required | string or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. |
| `removed_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `subscription` | Optional | [SubscribedLine](../models/SubscribedLine.md#subscribedline) | Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount. `subscription`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemssubscription). |
| `subscription_id` | Optional | string | Subscription created for this line after the order is paid. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummary](../models/OrderLineSubscriptionOfferSummary.md#orderlinesubscriptionoffersummary) | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options. `subscription_offer`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemssubscription_offer). |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base subtotal plus modifier total, before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | How tax was calculated for this line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for this line item, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Subtotal minus discounts, plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_weight` | Optional | [Weight](../models/Weight.md#weight) | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].fulfillment_quantities[]

Field definitions: [OrderResponse.data.line_items[].fulfillment_quantities[]](../models/OrderResponse.md#orderresponsedataline_itemsfulfillment_quantities).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].modifiers[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[].modifiers[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_itemsmodifiers).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].purchased_gift_cards[]

Field definitions: [OrderResponse.data.line_items[].purchased_gift_cards[]](../models/OrderResponse.md#orderresponsedataline_itemspurchased_gift_cards).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].subscription

Field definitions: [OrderResponse.data.line_items[].subscription](../models/OrderResponse.md#orderresponsedataline_itemssubscription).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.line_items[].subscription_offer

Field definitions: [OrderResponse.data.line_items[].subscription_offer](../models/OrderResponse.md#orderresponsedataline_itemssubscription_offer).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tips[]

A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how it was allocated to payments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description that stays on the tip for your reporting. |
| `effective_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Optional | string | Optional name that stays on the tip for your reporting. |
| `order_tip_id` | Required | string | Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. |
| `payment_intent_allocations` | Required | Array of [TipPaymentIntentAllocation](../models/TipPaymentIntentAllocation.md#tippaymentintentallocation) | `payment_intent_allocations[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatipspayment_intent_allocations). |
| `percent` | Optional | number | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_settlement_allocations` | Required | Array of [TipValueSettlementAllocation](../models/TipValueSettlementAllocation.md#tipvaluesettlementallocation) | `value_settlement_allocations[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatipsvalue_settlement_allocations). |

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tips[].payment_intent_allocations[]

Field definitions: [OrderResponse.data.tips[].payment_intent_allocations[]](../models/OrderResponse.md#orderresponsedatatipspayment_intent_allocations).

### BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.tips[].value_settlement_allocations[]

Field definitions: [OrderResponse.data.tips[].value_settlement_allocations[]](../models/OrderResponse.md#orderresponsedatatipsvalue_settlement_allocations).

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt

The recorded payment attempt when billing_starts is now or prorated_now, including declines. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Conditional | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Conditional | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Conditional | [BuyerPaymentErrorSummary](../models/BuyerPaymentErrorSummary.md#buyerpaymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. Why a payment attempt failed: a normalized `code`, a message, when it failed, and recovery guidance. `last_payment_error`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error). |
| `mode` | Conditional | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Conditional | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Conditional | Array of [BuyerPaymentAttemptPaymentIntent](../models/BuyerPaymentAttemptPaymentIntent.md#buyerpaymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents). |
| `payment_method_save` | Conditional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card saved with a mobile phone number. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Conditional | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Values: [10 declared values](#buyersubscriptionplanchangeresultresponsedataorder_payment_attempt-status-values). |
| `status_reason` | Conditional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [27 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt status values

- `"processing"`
- `"requires_action"`
- `"requires_capture"`
- `"partially_succeeded"`
- `"requires_retry"`
- `"finalizing"`
- `"succeeded"`
- `"failed"`
- `"expired"`
- `"canceled"`

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt variant 1

anyOf BuyerOrderPaymentAttempt: An attempt to pay an order..

- Required: `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `mode`, `order_payment_attempt_id`, `payment_intents`, `pending_actions`, `status`.
- Optional: `completed_at`, `last_payment_error`, `payment_method_save`, `started_at`, `status_reason`.

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `expected_outstanding_money`, `gift_card_redemptions`, `is_resumable`, `last_payment_error`, `mode`, `order_payment_attempt_id`, `payment_intents`, `payment_method_save`, `pending_actions`, `started_at`, `status`, `status_reason`.
- Value shape: null. The recorded payment attempt when billing_starts is now or prorated_now, including declines. Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is zero. 

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt variant 1.gift_card_redemptions[]

Field definitions: [OrderResponse.data.active_payment_attempt.gift_card_redemptions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions).

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt variant 1.last_payment_error

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.last_payment_error](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptlast_payment_error).

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt variant 1.payment_intents[]

Field definitions: [BuyerSubscriptionPlanChangeResultResponse.data.order variant 1.active_payment_attempt.payment_intents[]](../models/BuyerSubscriptionPlanChangeResultResponse.md#buyersubscriptionplanchangeresultresponsedataorder-variant-1active_payment_attemptpayment_intents).

### BuyerSubscriptionPlanChangeResultResponse.data.order_payment_attempt variant 1.pending_actions[]

Field definitions: [OrderResponse.data.active_payment_attempt.pending_actions[]](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription

The subscription after this request, including any scheduled plan change, or the unchanged subscription when payment fails. A customer's recurring purchase.

Field definitions: [shared fields](BuyerSubscriptionResponse.md#buyersubscriptionresponsedata).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.cancellation_details

Field definitions: [BuyerSubscriptionResponse.data.cancellation_details](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatacancellation_details).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.delivery

Field definitions: [SubscriptionResponse.data.delivery](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.delivery_hold

Field definitions: [SubscriptionResponse.data.delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedatadelivery_hold).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.end_after

Declared alternatives: [SubscriptionResponse.data.end_after](../models/SubscriptionResponse.md#subscriptionresponsedataend_after).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.last_payment_error

Field definitions: [BuyerSubscriptionResponse.data.last_payment_error](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatalast_payment_error).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.line_items[]

Field definitions: [BuyerSubscriptionResponse.data.line_items[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataline_items).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.plan_change_options[]

Field definitions: [BuyerSubscriptionResponse.data.plan_change_options[]](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedataplan_change_options).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.scheduled_plan_change

Declared alternatives: [BuyerSubscriptionResponse.data.scheduled_plan_change](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatascheduled_plan_change).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.scheduled_promotions[]

Field definitions: [SubscriptionResponse.data.promotions[]](../models/SubscriptionResponse.md#subscriptionresponsedatapromotions).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.subscription_plan

Declared alternatives: [BuyerSubscriptionResponse.data.subscription_plan](../models/BuyerSubscriptionResponse.md#buyersubscriptionresponsedatasubscription_plan).

### BuyerSubscriptionPlanChangeResultResponse.data.subscription.upcoming_delivery_hold

Field definitions: [SubscriptionResponse.data.upcoming_delivery_hold](../models/SubscriptionResponse.md#subscriptionresponsedataupcoming_delivery_hold).

### BuyerSubscriptionPlanChangeResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

