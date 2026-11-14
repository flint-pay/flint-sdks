[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionResult

Result of a checkout delivery selection request, returning the checkout session, order, delivery selection, and any inventory reservation summary.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_session` | Required | [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | The checkout session after the selection. A session in which a buyer completes an order's payment. `checkout_session`: [field definitions](../models/DeliverySelectionResult.md#deliveryselectionresultcheckout_session). |
| `delivery_selection` | Required | [DeliverySelection](../models/DeliverySelection.md#deliveryselection) | The selection now on the checkout. The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status. `delivery_selection`: [field definitions](../models/DeliverySelectionResult.md#deliveryselectionresultdelivery_selection). |
| `inventory_reservation` | Optional | [DeliveryInventoryReservationSummary](../models/DeliveryInventoryReservationSummary.md#deliveryinventoryreservationsummary) | The stock held for this selection. Omitted when the order holds no stock reservation, and for checkout credentials. The inventory reservation held for a delivery selection: its owner, status, and expiry. `inventory_reservation`: [field definitions](../models/DeliverySelectionResult.md#deliveryselectionresultinventory_reservation). |
| `order` | Required | [DeliverySelectionOrder](../models/DeliverySelectionOrder.md#deliveryselectionorder) | The order after the selection, with delivery charges applied and tax recalculated. Render totals from it instead of reading the order again. When tax still needs input, order.tax.status says so. The complete order returned with a delivery selection. Credential-specific fields are omitted as annotated. `order`: [field definitions](../models/DeliverySelectionResult.md#deliveryselectionresultorder). |

### DeliverySelectionResult.checkout_session

The checkout session after the selection. A session in which a buyer completes an order's payment.

Field definitions: [shared fields](CheckoutSessionResponse.md#checkoutsessionresponsedata).

### DeliverySelectionResult.checkout_session.active_payment_attempt

Field definitions: [CheckoutSessionResponse.data.active_payment_attempt](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataactive_payment_attempt).

### DeliverySelectionResult.checkout_session.buyer_contact

Field definitions: [CheckoutSessionResponse.data.buyer_contact](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact).

### DeliverySelectionResult.checkout_session.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### DeliverySelectionResult.checkout_session.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### DeliverySelectionResult.checkout_session.delivery

Field definitions: [CheckoutSessionResponse.data.delivery](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadelivery).

### DeliverySelectionResult.checkout_session.gift_card_challenge

Field definitions: [CheckoutSessionResponse.data.gift_card_challenge](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatagift_card_challenge).

### DeliverySelectionResult.checkout_session.invoice

Declared alternatives: [CheckoutSessionResponse.data.invoice](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatainvoice).

### DeliverySelectionResult.checkout_session.merchant_support

Field definitions: [CheckoutSessionResponse.data.merchant_support](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatamerchant_support).

### DeliverySelectionResult.checkout_session.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### DeliverySelectionResult.checkout_session.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### DeliverySelectionResult.checkout_session.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### DeliverySelectionResult.checkout_session.payment_link

Declared alternatives: [CheckoutSessionResponse.data.payment_link](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_link).

### DeliverySelectionResult.checkout_session.payment_method_save

Field definitions: [CheckoutSessionResponse.data.payment_method_save](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_method_save).

### DeliverySelectionResult.checkout_session.platform_fee

Field definitions: [CheckoutSessionResponse.data.platform_fee](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataplatform_fee).

### DeliverySelectionResult.checkout_session.redirects

Field definitions: [CheckoutSessionResponse.data.redirects](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects).

### DeliverySelectionResult.checkout_session.refunds[]

Field definitions: [CheckoutSessionResponse.data.refunds[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatarefunds).

### DeliverySelectionResult.checkout_session.subscription_terms

Field definitions: [CheckoutSessionResponse.data.subscription_terms](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms).

### DeliverySelectionResult.delivery_selection

The selection now on the checkout. The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status.

Field definitions: [shared fields](DeliverySelectionResponse.md#deliveryselectionresponsedata).

### DeliverySelectionResult.delivery_selection.buyer_location

Declared alternatives: [DeliverySelectionResponse.data.buyer_location](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatabuyer_location).

### DeliverySelectionResult.delivery_selection.choices[]

Field definitions: [DeliverySelectionResponse.data.choices[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoices).

### DeliverySelectionResult.delivery_selection.destination_address

Field definitions: [DeliverySelectionResponse.data.destination_address](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatadestination_address).

### DeliverySelectionResult.delivery_selection.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliverySelectionResult.delivery_selection.lifecycle_events[]

Field definitions: [DeliverySelectionResponse.data.lifecycle_events[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatalifecycle_events).

### DeliverySelectionResult.inventory_reservation

The stock held for this selection. Omitted when the order holds no stock reservation, and for checkout credentials. The inventory reservation held for a delivery selection: its owner, status, and expiry.

Field definitions: [shared fields](DeliveryInventoryReservationSummaryInput.md#deliveryinventoryreservationsummaryinput).

### DeliverySelectionResult.order

The order after the selection, with delivery charges applied and tax recalculated. Render totals from it instead of reading the order again. When tax still needs input, order.tax.status says so. The complete order returned with a delivery selection. Credential-specific fields are omitted as annotated.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt` | Optional | [OrderPaymentAttempt](../models/OrderPaymentAttempt.md#orderpaymentattempt) | The payment attempt currently collecting this order. Omitted when no attempt is active or its collection surface belongs to another caller. An attempt to pay an order. `active_payment_attempt`: [field definitions](../models/OrderResponse.md#orderresponsedataactive_payment_attempt). |
| `active_payment_review_id` | Optional | string or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `authorization_amounts` | Optional | [OrderAuthorizationAmounts](../models/OrderAuthorizationAmounts.md#orderauthorizationamounts) | The amounts authorized and still capturable on the order's payments. The amounts authorized and still capturable on an order's payments, with the authorization expiry. `authorization_amounts`: [field definitions](../models/OrderResponse.md#orderresponsedataauthorization_amounts). |
| `buyer_actions` | Optional | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the order, in this order: start_return, then resend_receipt. A buyer's read through a customer session on /v1/me, or in Flint's buyer account, lists both every time. Merchant order responses omit this field. A list of orders leaves start_return out, since only a read of one order checks return eligibility. start_return is due when the last open return window ends. Example: `[]`. `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout. `buyer_contact`: [field definitions](../models/OrderResponse.md#orderresponsedatabuyer_contact). |
| `buyer_note` | Optional | string | A note to the buyer. |
| `charges` | Required | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges[]`: [field definitions](../models/OrderResponse.md#orderresponsedatacharges). |
| `checkout_session_ids` | Required | Array of string | IDs of the checkout sessions opened for this order. Items: Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `client_reference` | Optional | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: `1`. maxLength: `255`. |
| `closed_at` | Optional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Optional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `closed_reason_message` | Optional | string | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. maxItems: `20`. `custom_field_answers[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatacustom_field_answers). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. `customer`: [declared alternatives](../models/DeliverySelectionResult.md#deliveryselectionresultordercustomer). |
| `customer_id` | Optional | string | ID of the customer this order belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Required | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions[]`: [field definitions](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions). |
| `delivery` | Optional | [OrderDeliverySummary](../models/OrderDeliverySummary.md#orderdeliverysummary) | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the resolved address. These values describe the same selection. `delivery`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery). |
| `delivery_destination` | Optional | [OrderDeliveryDestination](../models/OrderDeliveryDestination.md#orderdeliverydestination) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from. `delivery_destination`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destination). |
| `discounts` | Required | Array of [OrderDiscount](../models/OrderDiscount.md#orderdiscount) | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts[]`: [field definitions](../models/OrderResponse.md#orderresponsedatadiscounts). |
| `dispute_status` | Optional | string | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Values: [10 declared values](#deliveryselectionresultorder-dispute_status-values). |
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
| `subscription` | Optional | [ExpandedSubscriptionSummary](../models/ExpandedSubscriptionSummary.md#expandedsubscriptionsummary) or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. `subscription`: [declared alternatives](../models/DeliverySelectionResult.md#deliveryselectionresultordersubscription). |
| `subscription_cycle` | Optional | integer | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_changed_at` | Optional | string | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_delivery_number` | Required | integer or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: `uint32`. minimum: `2`. maximum: `24`. |
| `subscription_id` | Optional | string | ID of the subscription this order bills. Absent on an order that isn't from a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. `subscription_plan`: [declared alternatives](../models/DeliverySelectionResult.md#deliveryselectionresultordersubscription_plan). |
| `subscription_plan_id` | Optional | string | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `supported_actions` | Optional | Array of string | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. |
| `tax` | Required | [OrderTax](../models/OrderTax.md#ordertax) | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns. `tax`: [field definitions](../models/OrderResponse.md#orderresponsedatatax). |
| `ticketed_event` | Optional | [TicketedEvent](../models/TicketedEvent.md#ticketedevent) | Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued. `ticketed_event`: [field definitions](../models/OrderResponse.md#orderresponsedataticketed_event). |
| `tips` | Required | Array of [Tip](../models/Tip.md#tip) | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. `tips[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatips). |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: `int64`. |

#### DeliverySelectionResult.order dispute_status values

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

### DeliverySelectionResult.order.active_payment_attempt

Field definitions: [OrderResponse.data.active_payment_attempt](../models/OrderResponse.md#orderresponsedataactive_payment_attempt).

### DeliverySelectionResult.order.authorization_amounts

Field definitions: [OrderResponse.data.authorization_amounts](../models/OrderResponse.md#orderresponsedataauthorization_amounts).

### DeliverySelectionResult.order.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### DeliverySelectionResult.order.buyer_contact

Field definitions: [OrderResponse.data.buyer_contact](../models/OrderResponse.md#orderresponsedatabuyer_contact).

### DeliverySelectionResult.order.charges[]

Field definitions: [OrderResponse.data.charges[]](../models/OrderResponse.md#orderresponsedatacharges).

### DeliverySelectionResult.order.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### DeliverySelectionResult.order.customer

Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedatacustomer).

### DeliverySelectionResult.order.customer variant 1

anyOf ExpandedCustomerSummary: A customer's summary fields, returned in place of a customer ID when the customer is expanded..

- Required: `customer_id`, `email`, `name`, `phone`, `status`.
- Optional: `created_at`, `updated_at`.

### DeliverySelectionResult.order.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. 

### DeliverySelectionResult.order.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### DeliverySelectionResult.order.delivery

Field definitions: [OrderResponse.data.delivery](../models/OrderResponse.md#orderresponsedatadelivery).

### DeliverySelectionResult.order.delivery_destination

Field definitions: [OrderResponse.data.delivery_destination](../models/OrderResponse.md#orderresponsedatadelivery_destination).

### DeliverySelectionResult.order.discounts[]

Field definitions: [OrderResponse.data.discounts[]](../models/OrderResponse.md#orderresponsedatadiscounts).

### DeliverySelectionResult.order.fulfillments[]

Field definitions: [OrderResponse.data.fulfillments[]](../models/OrderResponse.md#orderresponsedatafulfillments).

### DeliverySelectionResult.order.gift_card_settlements[]

Field definitions: [OrderResponse.data.gift_card_settlements[]](../models/OrderResponse.md#orderresponsedatagift_card_settlements).

### DeliverySelectionResult.order.gift_cards[]

Field definitions: [OrderResponse.data.gift_cards[]](../models/OrderResponse.md#orderresponsedatagift_cards).

### DeliverySelectionResult.order.handover

Field definitions: [OrderResponse.data.handover](../models/OrderResponse.md#orderresponsedatahandover).

### DeliverySelectionResult.order.inventory_routing_source

Field definitions: [OrderResponse.data.inventory_routing_source](../models/OrderResponse.md#orderresponsedatainventory_routing_source).

### DeliverySelectionResult.order.line_items[]

Field definitions: [OrderResponse.data.line_items[]](../models/OrderResponse.md#orderresponsedataline_items).

### DeliverySelectionResult.order.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### DeliverySelectionResult.order.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### DeliverySelectionResult.order.return_credit_settlements[]

Field definitions: [OrderResponse.data.return_credit_settlements[]](../models/OrderResponse.md#orderresponsedatareturn_credit_settlements).

### DeliverySelectionResult.order.subscription

Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription.

Field definitions: [shared fields](OrderResponse.md#orderresponsedatasubscription).

### DeliverySelectionResult.order.subscription variant 1

anyOf ExpandedSubscriptionSummary: A subscription's summary fields, including status, billing period, and next billing time, returned when the subscription is expanded..

- Required: `billing_anchor_day`, `cancel_at_period_end`, `customer_id`, `status`, `subscription_id`, `subscription_plan_id`, `terms_type`.
- Optional: `created_at`, `current_period_end_at`, `current_period_start_at`, `next_billing_at`, `updated_at`.

### DeliverySelectionResult.order.subscription variant 2

anyOf variant 2.

- Undeclared: `billing_anchor_day`, `cancel_at_period_end`, `created_at`, `current_period_end_at`, `current_period_start_at`, `customer_id`, `next_billing_at`, `status`, `subscription_id`, `subscription_plan_id`, `terms_type`, `updated_at`.
- Value shape: null. Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. 

### DeliverySelectionResult.order.subscription_plan

Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan.

Field definitions: [shared fields](OrderResponse.md#orderresponsedatasubscription_plan).

### DeliverySelectionResult.order.subscription_plan variant 1

anyOf ExpandedSubscriptionPlanSummary: A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded..

- Required: `billing_interval`, `billing_interval_count`, `currency`, `name`, `status`, `subscription_plan_id`.
- Optional: `billing_interval_options`, `created_at`, `description`, `line_items`, `quantity_options`, `setup_fee_money`, `trial_period_days`, `updated_at`.

### DeliverySelectionResult.order.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `quantity_options`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null. Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. 

### DeliverySelectionResult.order.subscription_plan variant 1.line_items[]

Declared alternatives: [OrderResponse.data.subscription_plan variant 1.line_items[]](../models/OrderResponse.md#orderresponsedatasubscription_plan-variant-1line_items).

### DeliverySelectionResult.order.tax

Field definitions: [OrderResponse.data.tax](../models/OrderResponse.md#orderresponsedatatax).

### DeliverySelectionResult.order.ticketed_event

Field definitions: [OrderResponse.data.ticketed_event](../models/OrderResponse.md#orderresponsedataticketed_event).

### DeliverySelectionResult.order.tips[]

Field definitions: [OrderResponse.data.tips[]](../models/OrderResponse.md#orderresponsedatatips).

