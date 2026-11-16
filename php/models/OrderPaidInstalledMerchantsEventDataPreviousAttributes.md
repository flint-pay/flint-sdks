[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaidInstalledMerchantsEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_review_id` | Optional | string or null or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. `active_payment_review_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesactive_payment_review_id). |
| `authorization_amounts` | Optional | [OrderAuthorizationAmounts](../models/OrderAuthorizationAmounts.md#orderauthorizationamounts) or null | The amounts authorized and still capturable on the order's payments. |
| `buyer_contact` | Optional | [CheckoutBuyerContact](../models/CheckoutBuyerContact.md#checkoutbuyercontact) or null | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. |
| `buyer_note` | Optional | string or null | A note to the buyer. `buyer_note`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesbuyer_note). |
| `charges` | Optional | Array of [OrderCharge](../models/OrderCharge.md#ordercharge) or null | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescharges). |
| `checkout_session_ids` | Optional | Array of string or null | IDs of the checkout sessions opened for this order. `checkout_session_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescheckout_session_ids). |
| `client_reference` | Optional | string or null or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference). |
| `closed_at` | Optional | string or null | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. `closed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_reason). |
| `closed_reason_message` | Optional | string or null | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. `closed_reason_message`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustom_field_answers). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer this order belongs to. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotion](../models/DeferredPromotion.md#deferredpromotion) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdeferred_promotions). |
| `delivery` | Optional | [OrderDeliverySummary](../models/OrderDeliverySummary.md#orderdeliverysummary) or null | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. |
| `delivery_destination` | Optional | [OrderDeliveryDestination](../models/OrderDeliveryDestination.md#orderdeliverydestination) or null | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `discounts` | Optional | Array of [OrderDiscount](../models/OrderDiscount.md#orderdiscount) or null | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts). |
| `dispute_status` | Optional | string or null | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: [10 declared values](#orderpaidinstalledmerchantseventdatapreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdispute_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillment_status). |
| `fulfillments` | Optional | Array of [Fulfillment](../models/Fulfillment.md#fulfillment) or null | Fulfillments created for the order, each covering a set of its line items. `fulfillments`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments). |
| `gift_card_estimate` | Optional | [OrderGiftCardEstimate](../models/OrderGiftCardEstimate.md#ordergiftcardestimate) or null | An estimate of how the order balance splits between gift cards and the payment processor. |
| `gift_card_settlements` | Optional | Array of [OrderGiftCardSettlement](../models/OrderGiftCardSettlement.md#ordergiftcardsettlement) or null | The gift card redemptions applied to the order's payments. `gift_card_settlements`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_settlements). |
| `gift_card_tender_enabled` | Optional | boolean or null | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Recomputed on each read; a spent but open card still counts. `gift_card_tender_enabled`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_tender_enabled). |
| `gift_cards` | Optional | Array of [OrderGiftCardSelection](../models/OrderGiftCardSelection.md#ordergiftcardselection) or null | Gift cards available to pay the order, with each card's available balance. `gift_cards`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_cards). |
| `governing_delivery_selection_id` | Optional | string or null or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. `governing_delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgoverning_delivery_selection_id). |
| `handover` | Optional | [OrderPaidInstalledMerchantsEventDataPreviousAttributesHandover](../models/OrderPaidInstalledMerchantsEventDataPreviousAttributesHandover.md#orderpaidinstalledmerchantseventdatapreviousattributeshandover) or null | Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. |
| `internal_note` | Optional | string or null | A note for your team. Buyer reads leave it out. `internal_note`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinternal_note). |
| `inventory_exception_reason` | Optional | string or null | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. `inventory_exception_reason`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_reason). |
| `inventory_exception_resolution_message` | Optional | string or null | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. `inventory_exception_resolution_message`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_resolution_message). |
| `inventory_exception_status` | Optional | string or null | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. `inventory_exception_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_status). |
| `inventory_reservation_id` | Optional | string or null | The reservation holding stock for this order, when one exists. `inventory_reservation_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | [OrderPaidInstalledMerchantsEventDataPreviousAttributesInventoryRoutingSource](../models/OrderPaidInstalledMerchantsEventDataPreviousAttributesInventoryRoutingSource.md#orderpaidinstalledmerchantseventdatapreviousattributesinventoryroutingsource) or null | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. |
| `invoice_id` | Optional | string or null or null | The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. `invoice_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinvoice_id). |
| `line_items` | Optional | Array of [OrderLineItem](../models/OrderLineItem.md#orderlineitem) or null | Items the order sells, each with its pricing, tax, and fulfillment quantities. `line_items`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order_id` | Optional | string or null | Unique identifier for this order, prefixed `ord_`. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorder_number). |
| `origin` | Optional | string or null | How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. `origin`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorigin). |
| `paid_at` | Optional | string or null or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents created to collect this order. `payment_intent_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null | Payment intents included when `expand` names `payment_intents`. `payment_intents`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intents). |
| `payment_link_id` | Optional | string or null | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. `payment_link_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_status` | Optional | string or null | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_status). |
| `pending_order_edit_id` | Optional | string or null or null | The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. `pending_order_edit_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespending_order_edit_id). |
| `prepayment_order_id` | Optional | string or null or null | Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. `prepayment_order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesprepayment_order_id). |
| `pricing_amounts` | Optional | [PricingAmounts](../models/PricingAmounts.md#pricingamounts) or null | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Optional | Array of string or null | IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. `refund_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesrefund_ids). |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesrefund_status). |
| `return_credit_settlements` | Optional | Array of [OrderReturnCreditSettlement](../models/OrderReturnCreditSettlement.md#orderreturncreditsettlement) or null | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. `return_credit_settlements`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_credit_settlements). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. `return_resolution_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_resolution_id). |
| `settlement_amounts` | Optional | [OrderSettlementAmounts](../models/OrderSettlementAmounts.md#ordersettlementamounts) or null | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesstatus). |
| `subscription` | Optional | [ExpandedSubscriptionSummary](../models/ExpandedSubscriptionSummary.md#expandedsubscriptionsummary) or null or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. |
| `subscription_cycle` | Optional | integer or null | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. `subscription_cycle`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_cycle). |
| `subscription_delivery_changed_at` | Optional | string or null | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. `subscription_delivery_changed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_changed_at). |
| `subscription_delivery_number` | Optional | integer or null or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. `subscription_delivery_number`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_number). |
| `subscription_id` | Optional | string or null | ID of the subscription this order bills. Absent on an order that isn't from a subscription. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessupported_actions). |
| `tax` | Optional | [OrderTax](../models/OrderTax.md#ordertax) or null | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. |
| `ticketed_event` | Optional | [TicketedEvent](../models/TicketedEvent.md#ticketedevent) or null | Event and tickets this order sold through an event payment link. Absent on other orders. |
| `tips` | Optional | Array of [Tip](../models/Tip.md#tip) or null | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. `tips`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestips). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. `version`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesversion). |

#### OrderPaidInstalledMerchantsEventDataPreviousAttributes dispute_status values

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

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.active_payment_review_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.active_payment_review_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesactive_payment_review_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.buyer_note

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.buyer_note](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesbuyer_note).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.charges

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.charges](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescharges).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.checkout_session_ids

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.checkout_session_ids](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescheckout_session_ids).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.client_reference

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.closed_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.closed_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_at).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.closed_reason

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.closed_reason](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_reason).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.closed_reason_message

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.closed_reason_message](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_reason_message).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.custom_field_answers

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.custom_field_answers](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustom_field_answers).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.customer_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.customer_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustomer_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.deferred_promotions

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.deferred_promotions](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdeferred_promotions).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.discounts

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.discounts](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.dispute_status

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.dispute_status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdispute_status).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.fulfillment_status

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillment_status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillment_status).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.fulfillments

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.gift_card_settlements

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_settlements).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.gift_card_tender_enabled

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.gift_card_tender_enabled](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_tender_enabled).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.gift_cards

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.gift_cards](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_cards).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.governing_delivery_selection_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.governing_delivery_selection_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgoverning_delivery_selection_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.internal_note

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.internal_note](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinternal_note).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.inventory_exception_reason

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_reason](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_reason).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.inventory_exception_resolution_message

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_resolution_message](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_resolution_message).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.inventory_exception_status

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_status).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.inventory_reservation_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.inventory_reservation_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_reservation_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.invoice_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.invoice_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinvoice_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.line_items

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.line_items](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.order_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.order_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorder_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.order_number

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.order_number](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorder_number).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.origin

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.origin](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorigin).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.paid_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.paid_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespaid_at).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.payment_intent_ids

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.payment_intent_ids](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intent_ids).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.payment_intents

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.payment_intents](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intents).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.payment_link_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.payment_link_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_link_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.payment_status

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.payment_status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_status).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.pending_order_edit_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespending_order_edit_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.prepayment_order_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesprepayment_order_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.refund_ids

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.refund_ids](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesrefund_ids).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.refund_status

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.refund_status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesrefund_status).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.return_credit_settlements

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_credit_settlements).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.return_resolution_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.return_resolution_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_resolution_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.status

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.status](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesstatus).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.subscription_cycle

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription_cycle](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_cycle).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.subscription_delivery_changed_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_changed_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_changed_at).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.subscription_delivery_number

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_number](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_number).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.subscription_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.subscription_plan_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.subscription_plan_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan_id).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.supported_actions

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.supported_actions](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessupported_actions).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.tips

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.tips](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestips).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderPaidInstalledMerchantsEventDataPreviousAttributes.version

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.version](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesversion).

