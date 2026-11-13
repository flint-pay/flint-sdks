[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderResponse

A response containing `Order` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Order](../models/Order.md#order) | Resource, collection, or operation result returned by this request. A customer's purchase and its payment and fulfillment progress. `data`: [field definitions](../models/OrderResponse.md#orderresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### OrderResponse.data

Resource, collection, or operation result returned by this request. A customer's purchase and its payment and fulfillment progress.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | The payment attempt currently collecting this order. Omitted when no attempt is active or its collection surface belongs to another caller. An attempt to pay an order. `active_payment_attempt`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attempt). |
| `active_payment_review_id` | Required | string or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `authorization_amounts` | Optional | [OrderAuthorizationAmounts](../models/OrderAuthorizationAmounts.md#orderauthorizationamounts) | The amounts authorized and still capturable on the order's payments. The amounts authorized and still capturable on an order's payments, with the authorization expiry. `authorization_amounts`: [field definitions](../models/OrderResponse.md#orderresponsedataauthorization_amounts). |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/OrderResponse.md#orderresponsedatabuyer_contact). |
| `buyer_note` | Optional | string | A note to the buyer. |
| `charges` | Required | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges[]`: [field definitions](../models/OrderResponse.md#orderresponsedatacharges). |
| `checkout_session_ids` | Required | Array of string | IDs of the checkout sessions opened for this order. Items: Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `client_reference` | Required | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: `1`. maxLength: `255`. |
| `closed_at` | Optional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Optional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `closed_reason_message` | Optional | string | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_field_answers` | Required | Array of (object and Alternative shapes (see declared variants)) | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. maxItems: `20`. `custom_field_answers[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatacustom_field_answers). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/OrderResponse.md#orderresponsedatacustomer). |
| `customer_id` | Optional | string | ID of the customer this order belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Required | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions). |
| `delivery` | Optional | [OrderDeliverySummary](../models/OrderDeliverySummary.md#orderdeliverysummary) | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the resolved address. These values describe the same selection. `delivery`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery). |
| `delivery_destination` | Optional | [OrderDeliveryDestination](../models/OrderDeliveryDestination.md#orderdeliverydestination) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from. `delivery_destination`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destination). |
| `discounts` | Required | Array of [OrderDiscount](../models/OrderDiscount.md#orderdiscount) | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts[]`: [field definitions](../models/OrderResponse.md#orderresponsedatadiscounts). |
| `dispute_status` | Optional | string | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Values: [10 declared values](#orderresponsedata-dispute_status-values). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_status` | Optional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `fulfillments` | Required | Array of [Fulfillment](../models/Fulfillment.md#fulfillment) | Fulfillments created for the order, each covering a set of its line items. `fulfillments[]`: [field definitions](../models/OrderResponse.md#orderresponsedatafulfillments). |
| `gift_card_estimate` | Optional | [OrderGiftCardEstimate](../models/OrderGiftCardEstimate.md#ordergiftcardestimate) | An estimate of how the order balance splits between gift cards and the payment processor. An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it. |
| `gift_card_settlements` | Required | Array of [OrderGiftCardSettlement](../models/OrderGiftCardSettlement.md#ordergiftcardsettlement) | The gift card redemptions applied to the order's payments. `gift_card_settlements[]`: [field definitions](../models/OrderResponse.md#orderresponsedatagift_card_settlements). |
| `gift_card_tender_enabled` | Required | boolean | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Recomputed on each read; a spent but open card still counts. |
| `gift_cards` | Required | Array of [OrderGiftCardSelection](../models/OrderGiftCardSelection.md#ordergiftcardselection) | Gift cards available to pay the order, with each card's available balance. `gift_cards[]`: [field definitions](../models/OrderResponse.md#orderresponsedatagift_cards). |
| `governing_delivery_selection_id` | Required | string or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `handover` | Optional | [OrderHandover](../models/OrderHandover.md#orderhandover) | Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection. `handover`: [field definitions](../models/OrderResponse.md#orderresponsedatahandover). |
| `internal_note` | Optional | string | A note for your team. Buyer reads leave it out. |
| `inventory_exception_reason` | Optional | string | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. |
| `inventory_exception_resolution_message` | Optional | string | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. |
| `inventory_exception_status` | Optional | string | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. |
| `inventory_reservation_id` | Optional | string | The reservation holding stock for this order, when one exists. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. `inventory_routing_source`: [field definitions](../models/OrderResponse.md#orderresponsedatainventory_routing_source). |
| `invoice_id` | Required | string or null | The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `line_items` | Required | Array of [OrderLineItem](../models/OrderLineItem.md#orderlineitem) | Items the order sells, each with its pricing, tax, and fulfillment quantities. `line_items[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_items). |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `order_id` | Required | string | Unique identifier for this order, prefixed `ord_`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable order number for receipts and merchant reference. |
| `origin` | Optional | string | How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. |
| `paid_at` | Required | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_collection` | Optional | [PaymentCollection](../models/PaymentCollection.md#paymentcollection) | Payment options and collection instructions for the order's outstanding balance. Omitted when collection is unavailable to this caller. Client-side details for collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js. |
| `payment_intent_ids` | Required | Array of string | IDs of the payment intents created to collect this order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) | Payment intents included when `expand` names `payment_intents`. `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedatapayment_intents). |
| `payment_link_id` | Optional | string | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_status` | Required | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `prepayment_order_id` | Required | string or null | Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `pricing_amounts` | Required | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Required | Array of string | IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_status` | Required | string | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `return_credit_settlements` | Required | Array of [OrderReturnCreditSettlement](../models/OrderReturnCreditSettlement.md#orderreturncreditsettlement) | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. `return_credit_settlements[]`: [field definitions](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements). |
| `return_resolution_id` | Optional | string | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `settlement_amounts` | Required | [OrderSettlementAmounts](../models/OrderSettlementAmounts.md#ordersettlementamounts) | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. The bill settlement amounts plus order overpayments, settled tips, debt discharged by final capture, and value order edits removed. Money collected, returned, waived, and still owed on a bill. Money collected, returned, waived, and still owed on a bill. |
| `setup_collection` | Optional | [SetupCollection](../models/SetupCollection.md#setupcollection) | Instructions for saving a payment method for a subscription order. Omitted when setup is unavailable. Client guidance for saving a payment method on the merchant's connected account. |
| `status` | Required | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `subscription` | Optional | [ExpandedSubscriptionSummary](../models/ExpandedSubscriptionSummary.md#expandedsubscriptionsummary) or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. `subscription`: [declared alternatives](../models/OrderResponse.md#orderresponsedatasubscription). |
| `subscription_cycle` | Optional | integer | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_changed_at` | Optional | string | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_delivery_number` | Required | integer or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: `uint32`. minimum: `2`. maximum: `24`. |
| `subscription_id` | Optional | string | ID of the subscription this order bills. Absent on an order that isn't from a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/OrderResponse.md#orderresponsedatasubscription_plan). |
| `subscription_plan_id` | Optional | string | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. |
| `tax` | Required | [OrderTax](../models/OrderTax.md#ordertax) | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns. `tax`: [field definitions](../models/OrderResponse.md#orderresponsedatatax). |
| `ticketed_event` | Optional | [TicketedEvent](../models/TicketedEvent.md#ticketedevent) | Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued. `ticketed_event`: [field definitions](../models/OrderResponse.md#orderresponsedataticketed_event). |
| `tips` | Required | Array of [Tip](../models/Tip.md#tip) | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. `tips[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatips). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: `int64`. |

#### OrderResponse.data dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### OrderResponse.data.active_payment_attempt

The payment attempt currently collecting this order. Omitted when no attempt is active or its collection surface belongs to another caller. An attempt to pay an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_outstanding_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_redemptions` | Required | Array of [PaymentAttemptGiftCardRedemption](../models/PaymentAttemptGiftCardRedemption.md#paymentattemptgiftcardredemption) | `gift_card_redemptions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptgift_card_redemptions). |
| `is_resumable` | Required | boolean | Whether the attempt can continue through PayOrder with action: resume and this order_payment_attempt_id after any pending client action is complete. If false, check status before starting another payment; the attempt may still be in progress. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptlast_payment_error). |
| `mode` | Required | string | Values: `"payment"`, `"setup"`, `"settlement"`. |
| `order_payment_attempt_id` | Required | string | Unique identifier for this order payment attempt, prefixed `opat_`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. |
| `payment_intents` | Required | Array of [PaymentAttemptPaymentIntent](../models/PaymentAttemptPaymentIntent.md#paymentattemptpaymentintent) | `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intents). |
| `payment_method_save` | Optional | [OrderPaymentAttemptPaymentMethodSave](../models/OrderPaymentAttemptPaymentMethodSave.md#orderpaymentattemptpaymentmethodsave) | Set when the pay request sent save_payment_method: true and the attempt paid without saving the payment method. A card typed into checkout and saved has no entry here; read payment_method_save on the checkout session for a card waiting for confirmation. What became of the buyer's save_payment_method. The payment does not depend on it. |
| `pending_actions` | Required | Array of [PendingPaymentAction](../models/PendingPaymentAction.md#pendingpaymentaction) | `pending_actions[]`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actions). |
| `started_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Values: [10 declared values](#orderresponsedataactive_payment_attempt-status-values). |
| `status_reason` | Optional | string | Non-payment reason an attempt failed, was canceled, or expired. Failed attempts with an unmapped non-payment reason report other. Canceled and expired attempts include a reason only when it adds information beyond status. New values may be added. Values: [30 declared values](BuyerOrderPaymentAttemptInput.md#buyerorderpaymentattemptinput-status_reason-values). |

#### OrderResponse.data.active_payment_attempt status values

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

### OrderResponse.data.active_payment_attempt.gift_card_redemptions[]

A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Required | string | Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `last4` | Required | string | Last four characters of the card's current code. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderResponse.data.active_payment_attempt.last_payment_error

The concluded failure of a payment leg that failed this attempt. Absent for non-payment failures. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Values: [27 declared values](ErrorDetailInput.md#errordetailinput-failure_code-values). |
| `failed_at` | Required | string | Time the payment attempt concluded in failure. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `message` | Required | string | Flint-authored merchant-facing payment failure message. This is stable explanatory text, not raw provider copy. |
| `remediation` | Required | [ErrorRemediation](../models/ErrorRemediation.md#errorremediation) or null | Guidance for resolving the payment failure before trying to collect again. |

### OrderResponse.data.active_payment_attempt.payment_intents[]

A payment intent used as one leg of an order payment attempt, with its amount, status, tip, and latest error.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `authorization_expires_at` | Optional | string | Effective Flint capture deadline, equal to the earlier of the provider capture deadline and this attempt's sealed resource guarantee. Capture is refused at or after this time, even while status is requires_capture. Omitted until a hold is placed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `capturable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Payment intent's stored capturable amount. A positive amount does not override authorization_expires_at or the payment status. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Money collected through this payment, once nothing more can be collected. Positive when money was collected, including a payment Flint couldn't accept and is refunding (the payment intent's cancellation_reason is payment_returned). Zero when nothing was collected, for example after a decline or a released authorization. Absent while the outcome can still change, such as an ACH debit that hasn't settled or an open hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) | A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation. `last_payment_error`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpayment_intentslast_payment_error). |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `reader_id` | Optional | string | The reader the payment is or was last presented on. Set when Flint presents it and kept afterward. While processing or requires_action with a reader_id, the payment is on that reader now. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `selected_payment_option` | Optional | string | Payment option used by this leg, using the same values as PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when no payment option has been selected. Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `"card_present"`. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderResponse.data.active_payment_attempt.payment_intents[].last_payment_error

A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.

Field definitions: [shared fields](#orderresponsedataactive_payment_attemptlast_payment_error).

### OrderResponse.data.active_payment_attempt.pending_actions[]

Client-side action required before continuing a payment. Resume an order through PayOrder with order_payment_attempt_id, or continue a standalone PaymentIntent through its confirm endpoint without a replacement credential.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_type` | Required | string | Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Values: `"payment_authentication"`, `"payment_method_authentication"`, `"card_presentment"`. |
| `client_action` | Required | Alternative shapes (see declared variants) | How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. `client_action`: [declared alternatives](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actionsclient_action). |
| `expires_at` | Required | string | When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pending_action_id` | Required | string | Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Example: `"pendact_01KEZF7C00SVMRXWKVZX6R9822"`. |
| `subject` | Required | [PendingPaymentActionSubject](../models/PendingPaymentActionSubject.md#pendingpaymentactionsubject) | The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. Typed subject for a pending order payment action. Exactly one subject is present. |

### OrderResponse.data.active_payment_attempt.pending_actions[].client_action

How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | string | Selects how to complete the step. The url type opens the authentication page; the stripe type returns a Stripe client secret for Stripe.js handleNextAction. |
| `url` | Conditional | string | Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. minLength: `1`. |
| `stripe` | Conditional | [StripePaymentClientAction](../models/StripePaymentClientAction.md#stripepaymentclientaction) | Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. Stripe initialization context plus one flow-specific authority object. Exactly one of payment_intent, setup_intent, or terminal_payment_intent is present. `stripe`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attemptpending_actionsclient_action-variant-2stripe). |

### OrderResponse.data.active_payment_attempt.pending_actions[].client_action variant 1: `type` = `"url"`

oneOf with type: "url": The `url` variant of `PaymentClientAction`..

- Required: `url`.
- Undeclared: `stripe`.
- Constraints for `type`: Values: `"url"`.

### OrderResponse.data.active_payment_attempt.pending_actions[].client_action variant 2: `type` = `"stripe"`

oneOf with type: "stripe": The `stripe` variant of `PaymentClientAction`..

- Required: `stripe`.
- Undeclared: `url`.
- Constraints for `type`: Values: `"stripe"`.

### OrderResponse.data.active_payment_attempt.pending_actions[].client_action variant 2.stripe

Stripe.js initialization and a Stripe client secret returned by Flint's API for client_action_type stripe. Use the client secret only with handleNextAction; it can also confirm the underlying payment with another card. Stripe initialization context plus one flow-specific authority object. Exactly one of payment_intent, setup_intent, or terminal_payment_intent is present.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Required | string or null | Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount. The Terminal SDK ignores this field. Example: `"acct_1234567890"`. |
| `payment_intent` | Optional | [StripePaymentIntentClientAction](../models/StripePaymentIntentClientAction.md#stripepaymentintentclientaction) | PaymentIntent authority for an order payment authentication action. The client action for a Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`. |
| `publishable_key` | Required | string | Stripe publishable key for the active Flint payment mode; use this with account_id when loading Stripe.js. The Terminal SDK ignores this field. |
| `setup_intent` | Optional | [StripeSetupIntentClientAction](../models/StripeSetupIntentClientAction.md#stripesetupintentclientaction) | SetupIntent authority for a saved-payment-method authentication action. The client action for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`. |
| `terminal_payment_intent` | Optional | [StripeTerminalPaymentIntentClientAction](../models/StripeTerminalPaymentIntentClientAction.md#stripeterminalpaymentintentclientaction) | Card-present PaymentIntent authority for the Stripe Terminal SDK on a connected Tap to Pay reader. Authority to collect and confirm a card-present payment with the Stripe Terminal SDK on the connected Tap to Pay reader. |

### OrderResponse.data.authorization_amounts

The amounts authorized and still capturable on the order's payments. The amounts authorized and still capturable on an order's payments, with the authorization expiry.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount authorized on the order's payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capturable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the authorized amount that can still be captured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expires_at` | Optional | string | Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### OrderResponse.data.buyer_contact

Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout.

Field definitions: [shared fields](CheckoutBuyerContactInput.md#checkoutbuyercontactinput).

### OrderResponse.data.charges[]

An additional charge applied to an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Resolved charge amount after charge discounts and before additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_basis` | Optional | string | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description of the charge. |
| `fulfillment_id` | Optional | string | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | What the buyer sees for this charge at checkout and on receipts. |
| `order_charge_id` | Required | string | Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `percent` | Optional | number | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge amount already refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax` | Optional | [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax) | How tax applies to this charge. Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax calculated for the charge, including any tax already included in its price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Applied charge amount plus tax that is not already included in the price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### OrderResponse.data.charges[].metadata

Value shape: Map of string. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### OrderResponse.data.custom_field_answers[]

One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`. |
| `key` | Required | string | The field's `key` when checkout started. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. |
| `payment_link_custom_field_id` | Required | string | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. |
| `value` | Required | Varies by condition | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `value`: [declared alternatives](../models/OrderResponse.md#orderresponsedatacustom_field_answers-variant-1value), [declared alternatives](../models/OrderResponse.md#orderresponsedatacustom_field_answers-variant-3value), [declared alternatives](../models/OrderResponse.md#orderresponsedatacustom_field_answers-variant-4value). |

### OrderResponse.data.custom_field_answers[] variant 1: `custom_field_type` = `"text"`

oneOf with custom_field_type: "text": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"text"`.
- Constraints for `value`: (string or boolean) and string. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`.

### OrderResponse.data.custom_field_answers[] variant 2: `custom_field_type` = `"textarea"`

oneOf with custom_field_type: "textarea": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"textarea"`.
- Constraints for `value`: (string or boolean) and string. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`.

### OrderResponse.data.custom_field_answers[] variant 3: `custom_field_type` = `"dropdown"`

oneOf with custom_field_type: "dropdown": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"dropdown"`.
- Constraints for `value`: (string or boolean) and string. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`.

### OrderResponse.data.custom_field_answers[] variant 4: `custom_field_type` = `"checkbox"`

oneOf with custom_field_type: "checkbox": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"checkbox"`.
- Constraints for `value`: (string or boolean) and boolean. `true` when the buyer checked the box, `false` when they left an optional box unchecked.

### OrderResponse.data.custom_field_answers[] variant 1.value

### OrderResponse.data.custom_field_answers[] variant 1.value variant 1

anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. minLength: `1`. maxLength: `4096`. 

### OrderResponse.data.custom_field_answers[] variant 1.value variant 2

anyOf variant 2.

- Value shape: string and boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### OrderResponse.data.custom_field_answers[] variant 2.value

Declared alternatives: [OrderResponse.data.custom_field_answers[] variant 1.value](../models/OrderResponse.md#orderresponsedatacustom_field_answers-variant-1value).

### OrderResponse.data.custom_field_answers[] variant 3.value

### OrderResponse.data.custom_field_answers[] variant 3.value variant 1

anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. minLength: `1`. maxLength: `4096`. 

### OrderResponse.data.custom_field_answers[] variant 3.value variant 2

anyOf variant 2.

- Value shape: string and boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

### OrderResponse.data.custom_field_answers[] variant 4.value

### OrderResponse.data.custom_field_answers[] variant 4.value variant 1

anyOf variant 1.

- Value shape: boolean and string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. minLength: `1`. maxLength: `4096`. 

### OrderResponse.data.custom_field_answers[] variant 4.value variant 2

anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

### OrderResponse.data.customer

Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedatacustomer).

### OrderResponse.data.customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### OrderResponse.data.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### OrderResponse.data.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### OrderResponse.data.delivery

Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the resolved address. These values describe the same selection.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | Method used by governing_delivery_selection_id. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | Name, email and phone of the recipient recorded by the governing selection. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `type` | Required | string | How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`. |

### OrderResponse.data.delivery_destination

The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [Address](../models/Address.md#address) | Address the order's items are delivered to. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress). |
| `delivery_selection_id` | Optional | string | Delivery selection that controls this destination, when checkout collected it. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `frozen_at` | Optional | string | Time payment froze this destination. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `recipient` | Optional | [OrderDeliveryDestinationRecipient](../models/OrderDeliveryDestinationRecipient.md#orderdeliverydestinationrecipient) | Who receives the order. Omitted when no recipient was saved. The name and phone number of the person receiving an order delivery. |
| `source` | Required | string | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. |

### OrderResponse.data.delivery_destination.address

Address the order's items are delivered to. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### OrderResponse.data.discounts[]

A discount applied to an order, with its amount, status, and the line items and charges it covers. It comes from a manual discount or a promotion.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount amount before limits apply, such as 20% of $100 resolving to $20. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `applied_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `customer_facing_name` | Optional | string | Name the buyer sees for the discount. |
| `discount_class` | Optional | string | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `order_charge_ids` | Required | Array of string | IDs of the charges this discount reduces. Items: Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_discount_id` | Required | string | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. |
| `order_id` | Required | string | ID of the order the discount applies to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_ids` | Required | Array of string | IDs of the order line items this discount applies to. Items: Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `promotion_code` | Optional | string | Promotion code used to create this discount. Present only when source is promotion and a code was used. |
| `promotion_id` | Optional | string | Promotion that created this discount. Present only when source is promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `source` | Optional | string | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. |
| `status` | Required | string | Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`. |

### OrderResponse.data.fulfillments[]

Work required to deliver an order's items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHold](../models/FulfillmentHold.md#fulfillmenthold) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. `active_hold`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. `charges[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges). |
| `completed_at` | Optional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_choice_group_id` | Required | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_execution_leg_id` | Required | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `delivery_method_id` | Required | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_selection_id` | Required | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `device_id` | Optional | string | Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Optional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. `digital_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details). |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `line_items` | Required | Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. `line_items[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetails](../models/DeliveryFulfillmentDetails.md#deliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. `local_delivery_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details). |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | Map of string | Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentResponse.md#fulfillmentresponsedataorder). |
| `order_id` | Required | string | Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [FulfillmentOutcome](../models/FulfillmentOutcome.md#fulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. `outcome`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome). |
| `packages` | Optional | Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary) | Packages associated with this fulfillment. `packages[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages). |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_details` | Optional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. `pickup_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details). |
| `recipient` | Optional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_details` | Optional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. `service_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details). |
| `shipment_details` | Optional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. `shipment_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details). |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Shipments associated with this fulfillment. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `status` | Required | string | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#orderresponsedatafulfillments-status-values). |
| `supported_actions` | Required | Array of string | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Items values: [14 declared values](#orderresponsedatafulfillments-supported_actions--values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. |
| `updated_at` | Required | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### OrderResponse.data.fulfillments[] status values

- `"pending"`
- `"accepted"`
- `"on_hold"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### OrderResponse.data.fulfillments[] supported_actions [] values

- `"accept"`
- `"cancel"`
- `"complete"`
- `"dispatch"`
- `"fail"`
- `"hold"`
- `"mark_no_show"`
- `"mark_packed"`
- `"mark_picked"`
- `"mark_preparing"`
- `"mark_ready"`
- `"release_hold"`
- `"schedule"`
- `"start"`

### OrderResponse.data.fulfillments[].active_hold

Field definitions: [FulfillmentResponse.data.active_hold](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold).

### OrderResponse.data.fulfillments[].charges[]

Field definitions: [FulfillmentResponse.data.charges[]](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges).

### OrderResponse.data.fulfillments[].digital_details

Field definitions: [FulfillmentResponse.data.digital_details](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details).

### OrderResponse.data.fulfillments[].line_items[]

Field definitions: [FulfillmentResponse.data.line_items[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items).

### OrderResponse.data.fulfillments[].local_delivery_details

Field definitions: [FulfillmentResponse.data.local_delivery_details](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details).

### OrderResponse.data.fulfillments[].metadata

Field definitions: [FulfillmentResponse.data.metadata](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata).

### OrderResponse.data.fulfillments[].order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### OrderResponse.data.fulfillments[].outcome

Field definitions: [FulfillmentResponse.data.outcome](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome).

### OrderResponse.data.fulfillments[].packages[]

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

### OrderResponse.data.fulfillments[].pickup_details

Field definitions: [FulfillmentResponse.data.pickup_details](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details).

### OrderResponse.data.fulfillments[].service_details

Field definitions: [FulfillmentResponse.data.service_details](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details).

### OrderResponse.data.fulfillments[].shipment_details

Field definitions: [FulfillmentResponse.data.shipment_details](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details).

### OrderResponse.data.fulfillments[].shipments[]

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

### OrderResponse.data.gift_card_settlements[]

A gift card redemption applied to an order payment, with the amount, tip, and gift card.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the redemption paid toward the order, not counting the tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_id` | Required | string | ID of the gift card the redemption spent. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Required | string | ID of the redemption that posted the spend. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `last4` | Required | string | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the redemption that paid a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderResponse.data.gift_cards[]

A gift card available to pay an order, with its available balance and the last four characters of its code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's available balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card selected for the order. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `last4` | Required | string | Last four characters of the card's current code. |
| `requires_authorization` | Required | boolean | Whether the card's current code must be applied again before the order can use it. |

### OrderResponse.data.handover

Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection.

Field definitions: [shared fields](OrderHandoverInput.md#orderhandoverinput).

### OrderResponse.data.inventory_routing_source

Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.

Field definitions: [shared fields](InventoryRoutingSourceInput.md#inventoryroutingsourceinput).

### OrderResponse.data.line_items[]

An item purchased in an order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Required | integer | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `0`. |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price multiplied by quantity, before modifiers, discounts, and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `catalog_pricing` | Optional | [CatalogPricing](../models/CatalogPricing.md#catalogpricing) | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. The source of a catalog variant line's selected net unit price. `catalog_pricing`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscatalog_pricing). |
| `categories` | Required | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | Catalog categories of the item. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string | Description of the item as sold. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount value allocated to this line item. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_ship_date` | Required | string or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantities](../models/OrderLineItemFulfillmentQuantities.md#orderlineitemfulfillmentquantities) | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsfulfillment_quantities). |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirements](../models/OrderLineItemFulfillmentRequirements.md#orderlineitemfulfillmentrequirements) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. Fulfillment requirements for an order line item, given for a single item or for each component of a bundle. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshot](../models/GiftCardPurchaseSnapshot.md#giftcardpurchasesnapshot) | Gift card details for a gift card purchase line. The gift card purchase details saved on an order line item: configuration, face value, price paid, and recipient. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `inventory_snapshot` | Required | [LineItemInventorySnapshot](../models/LineItemInventorySnapshot.md#lineiteminventorysnapshot) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Sum of the line item's modifier totals. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Required | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | Modifiers selected on the line, with their prices. `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_edit_id` | Required | string or null | The edit that added this line. Null when the line was not added by an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `order_id` | Required | string | Order that owns this record or its referenced line item and charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | Unique identifier for this order line item, prefixed `li_`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `payment_link_line_item_key` | Required | string or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. minLength: `1`. maxLength: `100`. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
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

### OrderResponse.data.line_items[].bundle_components[]

An item included in a bundle.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string | Stable identifier of this component within its bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `delivery_configuration_reason` | Optional | string | Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Delivery profile used for this component, including any component override. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `position` | Required | integer | Display order among the bundle's components, starting at zero. Format: `int32`. |
| `product_id` | Optional | string | Identifier of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [BundleComponentVariantSummary](../models/BundleComponentVariantSummary.md#bundlecomponentvariantsummary) | Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale. `variant`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariant). |
| `variant_id` | Required | string | Identifier of the product variant included in the bundle. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### OrderResponse.data.line_items[].bundle_components[].variant

Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean | Whether the component's variant and its product are both active. |
| `name` | Optional | string | Name of the component's variant, when set. |
| `product_id` | Required | string | Identifier of the product this component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_name` | Optional | string | Name of the product the variant belongs to. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Option names and values selected by the component's variant. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | Stock keeping unit assigned to the component's variant, when set. |
| `variant_id` | Required | string | Identifier of the product variant included in the component. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]

An option and value chosen for a product variant, such as size Large.

Field definitions: [shared fields](SelectedProductOptionInput.md#selectedproductoptioninput).

### OrderResponse.data.line_items[].catalog_pricing

Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. The source of a catalog variant line's selected net unit price.

Field definitions: [shared fields](CatalogPricingInput.md#catalogpricinginput).

### OrderResponse.data.line_items[].categories[]

A reference to a product category by ID, handle, and name.

Field definitions: [shared fields](CategoryReferenceInput.md#categoryreferenceinput).

### OrderResponse.data.line_items[].fulfillment_quantities[]

Counts of how much of an order line item is assigned, fulfilled, failed, canceled, removed, or still unassigned for fulfillment.

Field definitions: [shared fields](OrderLineItemFulfillmentQuantitiesInput.md#orderlineitemfulfillmentquantitiesinput).

### OrderResponse.data.line_items[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### OrderResponse.data.line_items[].modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### OrderResponse.data.line_items[].purchased_gift_cards[]

A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.

Field definitions: [shared fields](PurchasedGiftCardInput.md#purchasedgiftcardinput).

### OrderResponse.data.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### OrderResponse.data.line_items[].subscription

Recurring offer and cadence frozen for this line at signup. The subscription offer and billing interval an order line was bought under, with the recurring amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Format: `int32`. |
| `recurring_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_offer_id` | Required | string | Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |

### OrderResponse.data.line_items[].subscription_offer

Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. A subscription offer attached to an order line item, with its name, discount, and billing interval options.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) |  |
| `discount` | Optional | [OrderLineSubscriptionOfferDiscount](../models/OrderLineSubscriptionOfferDiscount.md#orderlinesubscriptionofferdiscount) | The discount a subscription offer gives, as a fixed amount or a percentage. |
| `name` | Required | string |  |
| `subscription_offer_id` | Required | string | Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |

### OrderResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### OrderResponse.data.payment_intents[]

A payment intent's summary fields, including amount, status, and capture method, returned when the payment intent is expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `capture_method` | Optional | string | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `dispute_status` | Required | string | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#orderresponsedatapayment_intents-dispute_status-values). |
| `order_id` | Optional | string | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Required | string | Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_source` | Optional | [PaymentSourceSummary](../models/PaymentSourceSummary.md#paymentsourcesummary) | Summary of the card or bank account used for the payment. Absent until a payment source is attached. A summary of the payment source used for a payment, by funding-method family, with card or bank account display details. |
| `refund_status` | Optional | string | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `status` | Required | string | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. |

#### OrderResponse.data.payment_intents[] dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### OrderResponse.data.return_credit_settlements[]

A return credit applied to an order payment, with the amount and the return and resolution it came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `return_id` | Required | string | Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Required | string | Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |

### OrderResponse.data.subscription

Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Conditional | integer | Format: `int32`. |
| `cancel_at_period_end` | Conditional | boolean |  |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_period_end_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_period_start_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `next_billing_at` | Conditional | string | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Conditional | string | Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. |
| `subscription_id` | Conditional | string | Unique identifier for this subscription, prefixed `sub_`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan_id` | Conditional | string | Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `terms_type` | Conditional | string | Values: `"subscription_plan"`, `"subscription_offer"`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### OrderResponse.data.subscription variant 1

anyOf ExpandedSubscriptionSummary: A subscription's summary fields, including status, billing period, and next billing time, returned when the subscription is expanded..

- Required: `billing_anchor_day`, `cancel_at_period_end`, `customer_id`, `status`, `subscription_id`, `subscription_plan_id`, `terms_type`.
- Optional: `created_at`, `current_period_end_at`, `current_period_start_at`, `next_billing_at`, `updated_at`.

### OrderResponse.data.subscription variant 2

anyOf variant 2.

- Undeclared: `billing_anchor_day`, `cancel_at_period_end`, `created_at`, `current_period_end_at`, `current_period_start_at`, `customer_id`, `next_billing_at`, `status`, `subscription_id`, `subscription_plan_id`, `terms_type`, `updated_at`.
- Value shape: null. Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. 

### OrderResponse.data.subscription_plan

Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | Offered billing interval and count pairs, including the plan's default pair. Line prices are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Conditional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `description` | Conditional | string |  |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) | `line_items[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_items). |
| `name` | Conditional | string |  |
| `quantity_options` | Conditional | Array of integer | maxItems: `10`. uniqueItems: `true`. Items: minimum: `1`. maximum: `100`. |
| `setup_fee_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Conditional | string | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_plan_id` | Conditional | string | Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Conditional | integer | Format: `int32`. |
| `updated_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### OrderResponse.data.subscription_plan variant 1

anyOf ExpandedSubscriptionPlanSummary: A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded..

- Required: `billing_interval`, `billing_interval_count`, `currency`, `name`, `status`, `subscription_plan_id`.
- Optional: `billing_interval_options`, `created_at`, `description`, `line_items`, `quantity_options`, `setup_fee_money`, `trial_period_days`, `updated_at`.

### OrderResponse.data.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `quantity_options`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null. Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. 

### OrderResponse.data.subscription_plan variant 1.line_items[]

A line item on a subscription plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Conditional | string | Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Conditional | string |  |
| `product_id` | Optional | string | Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string |  |
| `subscription_plan_line_item_id` | Required | string | Unique identifier for this subscription plan line item, prefixed `spli_`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `swap_variant_ids` | Required | Array of string | maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |
| `swap_variants` | Optional | Array of object | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. `swap_variants[]`: [field definitions](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_itemsswap_variants). |
| `tax` | Optional | object | A line item's tax category and whether it is taxable. `tax`: [field definitions](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_itemstax). |
| `type` | Required | string | Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### OrderResponse.data.subscription_plan variant 1.line_items[] variant 1: `type` = `"variant"`

oneOf with type: "variant": A line item on a subscription plan..

- Condition: not (at least one(present(`bundle_id`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`, `unit_price_money`.
- Constraints for `type`: Values: `"variant"`.

### OrderResponse.data.subscription_plan variant 1.line_items[] variant 2: `type` = `"bundle"`

oneOf with type: "bundle": A line item on a subscription plan..

- Condition: not (at least one(present(`variant_id`))).
- Required: `bundle_id`.
- Optional: `name`, `unit_price_money`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### OrderResponse.data.subscription_plan variant 1.line_items[] variant 3: `type` = `"custom"`

oneOf with type: "custom": A line item on a subscription plan..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.

### OrderResponse.data.subscription_plan variant 1.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### OrderResponse.data.subscription_plan variant 1.line_items[].categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### OrderResponse.data.subscription_plan variant 1.line_items[].modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### OrderResponse.data.subscription_plan variant 1.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### OrderResponse.data.subscription_plan variant 1.line_items[].swap_variants[]

A variant a subscriber can swap to on a plan line, with its name, options, and price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `name` | Required | string |  |
| `product_id` | Required | string | Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string |  |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null |  |
| `variant_id` | Required | string | pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### OrderResponse.data.subscription_plan variant 1.line_items[].swap_variants[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### OrderResponse.data.subscription_plan variant 1.line_items[].tax

A line item's tax category and whether it is taxable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#orderresponsedatasubscription_plan-variant-1line_itemstax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. |

#### OrderResponse.data.subscription_plan variant 1.line_items[].tax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### OrderResponse.data.tax

The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. |
| `available_location_inputs` | Optional | Array of string | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. |
| `callback_evaluation` | Optional | [OrderTaxCallbackEvaluation](../models/OrderTaxCallbackEvaluation.md#ordertaxcallbackevaluation) | The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. The tax calculation callback evaluation an order's tax uses. `callback_evaluation`: [field definitions](../models/OrderResponse.md#orderresponsedatataxcallback_evaluation). |
| `components_source` | Optional | string | Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`. |
| `delivery_charge_calculation` | Optional | [DeliveryChargeTaxCalculationRequest](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest) | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax. |
| `enabled` | Required | boolean | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. |
| `exemption` | Optional | [OrderTaxExemption](../models/OrderTaxExemption.md#ordertaxexemption) | The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted. `exemption`: [field definitions](../models/OrderResponse.md#orderresponsedatataxexemption). |
| `location` | Optional | [OrderTaxLocation](../models/OrderTaxLocation.md#ordertaxlocation) | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from. `location`: [field definitions](../models/OrderResponse.md#orderresponsedatataxlocation). |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. |
| `price_mode` | Optional | string | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. |
| `reverse_charge` | Optional | [TaxReverseCharge](../models/TaxReverseCharge.md#taxreversecharge) or null | Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. `reverse_charge`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxreverse_charge). |
| `status` | Required | string | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. |
| `supported_countries` | Optional | Array of string | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. |
| `tax_breakdowns` | Optional | Array of (object and Alternative shapes (see declared variants)) | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. `tax_breakdowns[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns). |

### OrderResponse.data.tax.callback_evaluation

The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. The tax calculation callback evaluation an order's tax uses.

Field definitions: [shared fields](OrderTaxCallbackEvaluationInput.md#ordertaxcallbackevaluationinput).

### OrderResponse.data.tax.exemption

The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `certificate_number` | Optional | string | Certificate number recorded at assessment. Omitted when none was recorded. |
| `coverage` | Optional | object and ([CustomerTaxExemptionCoverageAllStates](../models/CustomerTaxExemptionCoverageAllStates.md#customertaxexemptioncoverageallstates) or [CustomerTaxExemptionCoverageStates](../models/CustomerTaxExemptionCoverageStates.md#customertaxexemptioncoveragestates)) | Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC. `coverage`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxexemptioncoverage). |
| `customer_id` | Optional | string | ID of the customer the exemption was assessed from, when one was linked. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_tax_exemption_id` | Optional | string | Customer exemption record used for this assessment. Omitted for blanket flags, order declarations, and older snapshots. Example: `"ctex_01KEZF7C009N0YTK0NMWP1XZPW"`. |
| `end_date` | Optional | string | Last day of the selected record's exemption, inclusive. Omitted when no end date was recorded. Format: `date`. Example: `"2026-08-02"`. |
| `evidence_reference` | Optional | string | Merchant-only reference to supporting evidence recorded at assessment. Buyer views omit it. Never printed on buyer documents. |
| `reason` | Optional | string | Exemption reason recorded at assessment. Omitted when no reason was recorded. Values: [13 declared values](BuyerOrderTaxExemptionInput.md#buyerordertaxexemptioninput-reason-values). |
| `source` | Optional | string | The source of the tax exemption assessment. Omitted when the source has not been established. Values: `"none"`, `"customer"`, `"order"`. |
| `start_date` | Optional | string | First day of the selected record's exemption, inclusive. Omitted when no date was recorded. Format: `date`. Example: `"2026-08-02"`. |
| `tax_exempt` | Required | boolean | Whether an exemption applied to this sale. An exempt sale has zero tax and taxability_reason customer_exempt. |

### OrderResponse.data.tax.exemption.coverage

Jurisdictions covered by the exemption at assessment. Omitted when no coverage was recorded. Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | Country covered by this exemption. Only US is accepted. Uses ISO 3166-1 alpha-2 country codes. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `states` | Conditional | Array of string | US postal state codes or DC. Required for states and forbidden for all_states. minItems: `1`. maxItems: `60`. uniqueItems: `true`. Items values: [51 declared values](CustomerTaxExemptionCoverageInput.md#customertaxexemptioncoverageinput-states--values). |
| `type` | Required | string | Choose all_states or states explicitly. Values: `"all_states"`, `"states"`. |

### OrderResponse.data.tax.exemption.coverage variant 1: `country` = `"US"`, `type` = `"all_states"`

oneOf with type: "all_states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Condition: not (present(`states`)).
- Optional: `states`.
- Constraints for `type`: Values: `"all_states"`.

### OrderResponse.data.tax.exemption.coverage variant 2: `country` = `"US"`, `type` = `"states"`

oneOf with type: "states": Replaced as a whole: send every field you want to keep. Covers all US states or an explicit list of US states and DC..

- Required: `states`.
- Constraints for `type`: Values: `"states"`.

### OrderResponse.data.tax.location

The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/OrderResponse.md#orderresponsedatataxlocationaddress). |
| `address_source` | Required | string | Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`. |
| `address_type` | Required | string | The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. |
| `customer_id` | Optional | string | ID of the customer whose saved address Flint used, when `address_source` is `customer`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `fulfillment_id` | Optional | string | ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `location_id` | Optional | string | ID of the pickup store whose address Flint used, when `address_source` is `location`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

### OrderResponse.data.tax.location.address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### OrderResponse.data.tax.reverse_charge

Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_tax_id` | Conditional | [CustomerTaxID](../models/CustomerTaxID.md#customertaxid) or null | The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. `customer_tax_id`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxreverse_charge-variant-1customer_tax_id). |

### OrderResponse.data.tax.reverse_charge variant 1

anyOf TaxReverseCharge: The buyer accounts for the tax under the reverse charge. Rows that carry it have `taxability_reason` `reverse_charge` and no tax..

- Required: `customer_tax_id`.

### OrderResponse.data.tax.reverse_charge variant 2

anyOf variant 2.

- Undeclared: `customer_tax_id`.
- Value shape: null. Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. 

### OrderResponse.data.tax.reverse_charge variant 1.customer_tax_id

The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Conditional | string | Country of the tax ID, as entered on the customer. Greek VAT IDs may use EL. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `identifier_type` | Conditional | string | Type of the tax ID, as entered on the customer. |
| `region` | Conditional | string or null | Region of the tax ID. `null` when the tax ID has no region. |
| `value` | Conditional | string | The tax ID. |

### OrderResponse.data.tax.reverse_charge variant 1.customer_tax_id variant 1

anyOf CustomerTaxID: A copy of one of the customer's `tax_identity.tax_ids`. Frozen once the order is paid; recalculating tax before payment reads the customer again..

- Required: `country`, `identifier_type`, `region`, `value`.

### OrderResponse.data.tax.reverse_charge variant 1.customer_tax_id variant 2

anyOf variant 2.

- Undeclared: `country`, `identifier_type`, `region`, `value`.
- Value shape: null. The customer's tax ID the reverse charge relied on. Frozen once the order is paid; recalculating tax before payment reads the customer's current tax IDs again. `null` when external tax sent a reverse charge and the customer has no tax ID for that country. 

### OrderResponse.data.tax.tax_breakdowns[]

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`. |
| `flat_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_choice_group_id` | Optional | string | Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `location_id` | Optional | string | Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `order_charge_id` | Optional | string | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Optional | string | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `percent` | Conditional | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_type` | Required | string | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Required | string | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. |
| `taxable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderResponse.data.tax.tax_breakdowns[] variant 1: `calculation_type` = `"percentage"`

oneOf with calculation_type: "percentage": The `percentage` variant of `TaxBreakdown`..

- Condition: not (present(`flat_money`)).
- Required: `percent`.
- Optional: `flat_money`.
- Constraints for `calculation_type`: Values: `"percentage"`.

### OrderResponse.data.tax.tax_breakdowns[] variant 2: `calculation_type` = `"flat_amount"`

oneOf with calculation_type: "flat_amount": The `flat_amount` variant of `TaxBreakdown`..

- Condition: not (present(`percent`)).
- Required: `flat_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"flat_amount"`.

### OrderResponse.data.ticketed_event

Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued.

Field definitions: [shared fields](TicketedEventInput.md#ticketedeventinput).

### OrderResponse.data.tips[]

A tip on an order, with its requested, settled, and refunded amounts, status, and how it was paid.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description that stays on the tip for your reporting. |
| `effective_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Optional | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Optional | string | Optional name that stays on the tip for your reporting. |
| `order_tip_id` | Required | string | Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. |
| `payment_intent_allocations` | Required | Array of [TipPaymentIntentAllocation](../models/TipPaymentIntentAllocation.md#tippaymentintentallocation) | `payment_intent_allocations[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatipspayment_intent_allocations). |
| `percent` | Optional | number | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_settlement_allocations` | Required | Array of [TipValueSettlementAllocation](../models/TipValueSettlementAllocation.md#tipvaluesettlementallocation) | `value_settlement_allocations[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatipsvalue_settlement_allocations). |

### OrderResponse.data.tips[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### OrderResponse.data.tips[].payment_intent_allocations[]

The part of a tip paid through one payment intent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_intent_id` | Required | string | Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |

### OrderResponse.data.tips[].value_settlement_allocations[]

The part of a tip paid through one value settlement.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `value_settlement_id` | Required | string | Example: `"ovst_01KEZF7C00EMVZ016PM34KKFGY"`. |

### OrderResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

