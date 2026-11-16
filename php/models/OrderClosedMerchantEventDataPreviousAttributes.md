[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_review_id` | Optional | string or null or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. `active_payment_review_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesactive_payment_review_id). |
| `authorization_amounts` | Optional | Alternative shapes (see declared variants) | The amounts authorized and still capturable on the order's payments. `authorization_amounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesauthorization_amounts). |
| `buyer_contact` | Optional | Alternative shapes (see declared variants) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. `buyer_contact`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesbuyer_contact). |
| `buyer_note` | Optional | string or null | A note to the buyer. `buyer_note`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesbuyer_note). |
| `charges` | Optional | Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes) or null | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescharges). |
| `checkout_session_ids` | Optional | Array of string or null | IDs of the checkout sessions opened for this order. `checkout_session_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescheckout_session_ids). |
| `client_reference` | Optional | string or null or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference). |
| `closed_at` | Optional | string or null | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. `closed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_reason). |
| `closed_reason_message` | Optional | string or null | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. `closed_reason_message`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustom_field_answers). |
| `customer` | Optional | Alternative shapes (see declared variants) or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer this order belongs to. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions). |
| `delivery` | Optional | Alternative shapes (see declared variants) | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. `delivery`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery). |
| `delivery_destination` | Optional | Alternative shapes (see declared variants) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `delivery_destination`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination). |
| `discounts` | Optional | Array of [OrderDiscountPreviousAttributes](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributes) or null | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts). |
| `dispute_status` | Optional | string or null | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: [10 declared values](#orderclosedmerchanteventdatapreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdispute_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1fulfillment_status). |
| `fulfillments` | Optional | Array of [FulfillmentPreviousAttributes](../models/FulfillmentPreviousAttributes.md#fulfillmentpreviousattributes) or null | Fulfillments created for the order, each covering a set of its line items. `fulfillments`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments). |
| `gift_card_estimate` | Optional | Alternative shapes (see declared variants) | An estimate of how the order balance splits between gift cards and the payment processor. `gift_card_estimate`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_estimate). |
| `gift_card_settlements` | Optional | Array of [OrderGiftCardSettlementPreviousAttributes](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributes) or null | The gift card redemptions applied to the order's payments. `gift_card_settlements`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_settlements). |
| `gift_card_tender_enabled` | Optional | boolean or null | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. `gift_card_tender_enabled`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_tender_enabled). |
| `gift_cards` | Optional | Array of [OrderGiftCardSelectionPreviousAttributes](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributes) or null | Gift cards available to pay the order, with each card's available balance. `gift_cards`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_cards). |
| `governing_delivery_selection_id` | Optional | string or null or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. `governing_delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgoverning_delivery_selection_id). |
| `handover` | Optional | Alternative shapes (see declared variants) | Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. `handover`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributeshandover). |
| `internal_note` | Optional | string or null | A note for your team. Buyer reads leave it out. `internal_note`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinternal_note). |
| `inventory_exception_reason` | Optional | string or null | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. `inventory_exception_reason`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_reason). |
| `inventory_exception_resolution_message` | Optional | string or null | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. `inventory_exception_resolution_message`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_resolution_message). |
| `inventory_exception_status` | Optional | string or null | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. `inventory_exception_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_status). |
| `inventory_reservation_id` | Optional | string or null | The reservation holding stock for this order, when one exists. `inventory_reservation_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | Alternative shapes (see declared variants) | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. `inventory_routing_source`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_routing_source). |
| `invoice_id` | Optional | string or null or null | The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. `invoice_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinvoice_id). |
| `line_items` | Optional | Array of [OrderLineItemPreviousAttributes](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributes) or null | Items the order sells, each with its pricing, tax, and fulfillment quantities. `line_items`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order_id` | Optional | string or null | Unique identifier for this order, prefixed `ord_`. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_number). |
| `origin` | Optional | string or null | How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. `origin`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorigin). |
| `paid_at` | Optional | string or null or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents created to collect this order. `payment_intent_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Payment intents included when `expand` names `payment_intents`. `payment_intents`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intents). |
| `payment_link_id` | Optional | string or null | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. `payment_link_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_status` | Optional | string or null | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_status). |
| `pending_order_edit_id` | Optional | string or null or null | The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. `pending_order_edit_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespending_order_edit_id). |
| `prepayment_order_id` | Optional | string or null or null | Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. `prepayment_order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesprepayment_order_id). |
| `pricing_amounts` | Optional | Alternative shapes (see declared variants) | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. `pricing_amounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespricing_amounts). |
| `refund_ids` | Optional | Array of string or null | IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. `refund_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesrefund_ids). |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1refund_status). |
| `return_credit_settlements` | Optional | Array of [OrderReturnCreditSettlementPreviousAttributes](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributes) or null | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. `return_credit_settlements`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_credit_settlements). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. `return_resolution_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_resolution_id). |
| `settlement_amounts` | Optional | Alternative shapes (see declared variants) | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. `settlement_amounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessettlement_amounts). |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1status). |
| `subscription` | Optional | Alternative shapes (see declared variants) or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. `subscription`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription). |
| `subscription_cycle` | Optional | integer or null | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. `subscription_cycle`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_cycle). |
| `subscription_delivery_changed_at` | Optional | string or null | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. `subscription_delivery_changed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_changed_at). |
| `subscription_delivery_number` | Optional | integer or null or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. `subscription_delivery_number`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_number). |
| `subscription_id` | Optional | string or null | ID of the subscription this order bills. Absent on an order that isn't from a subscription. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_plan` | Optional | Alternative shapes (see declared variants) or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessupported_actions). |
| `tax` | Optional | Alternative shapes (see declared variants) | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. `tax`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax). |
| `ticketed_event` | Optional | Alternative shapes (see declared variants) | Event and tickets this order sold through an event payment link. Absent on other orders. `ticketed_event`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event). |
| `tips` | Optional | Array of [TipPreviousAttributes](../models/TipPreviousAttributes.md#tippreviousattributes) or null | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. `tips`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestips). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. `version`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesversion). |

#### OrderClosedMerchantEventDataPreviousAttributes dispute_status values

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

### OrderClosedMerchantEventDataPreviousAttributes.active_payment_review_id

### OrderClosedMerchantEventDataPreviousAttributes.active_payment_review_id variant 1

anyOf variant 1: The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials..

- Value shape: (string or null). The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.active_payment_review_id variant 2

anyOf variant 2.

- Value shape: null. The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.authorization_amounts

The amounts authorized and still capturable on the order's payments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount authorized on the order's payments. |
| `capturable_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the authorized amount that can still be captured. |
| `expires_at` | Conditional | string or null | Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. `expires_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesauthorization_amounts-variant-1expires_at). |

### OrderClosedMerchantEventDataPreviousAttributes.authorization_amounts variant 1

anyOf OrderAuthorizationAmountsPreviousAttributes.

- Optional: `authorized_money`, `capturable_money`, `expires_at`.

### OrderClosedMerchantEventDataPreviousAttributes.authorization_amounts variant 2

anyOf variant 2.

- Undeclared: `authorized_money`, `capturable_money`, `expires_at`.
- Value shape: null. The amounts authorized and still capturable on the order's payments. 

### OrderClosedMerchantEventDataPreviousAttributes.authorization_amounts variant 1.expires_at

### OrderClosedMerchantEventDataPreviousAttributes.authorization_amounts variant 1.expires_at variant 1

anyOf variant 1: Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline..

- Value shape: string. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.authorization_amounts variant 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. 

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact

Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1

anyOf CheckoutBuyerContactPreviousAttributes.

- Optional: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 2

anyOf variant 2.

- Undeclared: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.
- Value shape: null. Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. 

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.email

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.email](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1email).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_email_cleared

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.is_email_cleared](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1is_email_cleared).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_phone_cleared

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.is_phone_cleared](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1is_phone_cleared).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.phone

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.phone](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1phone).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.buyer_contact variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1buyer_contact-variant-1updated_at).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_note

### OrderClosedMerchantEventDataPreviousAttributes.buyer_note variant 1

anyOf variant 1: A note to the buyer..

- Value shape: string. A note to the buyer. 

### OrderClosedMerchantEventDataPreviousAttributes.buyer_note variant 2

anyOf variant 2.

- Value shape: null. A note to the buyer. 

### OrderClosedMerchantEventDataPreviousAttributes.charges

### OrderClosedMerchantEventDataPreviousAttributes.charges variant 1

anyOf variant 1: Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount..

- Value shape: Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes). Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. 

### OrderClosedMerchantEventDataPreviousAttributes.charges variant 2

anyOf variant 2.

- Value shape: null. Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. 

### OrderClosedMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1

Field definitions: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.checkout_session_ids

### OrderClosedMerchantEventDataPreviousAttributes.checkout_session_ids variant 1

anyOf variant 1: IDs of the checkout sessions opened for this order..

- Value shape: Array of string. IDs of the checkout sessions opened for this order. 

### OrderClosedMerchantEventDataPreviousAttributes.checkout_session_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the checkout sessions opened for this order. 

### OrderClosedMerchantEventDataPreviousAttributes.client_reference

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.client_reference](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference).

### OrderClosedMerchantEventDataPreviousAttributes.closed_at

### OrderClosedMerchantEventDataPreviousAttributes.closed_at variant 1

anyOf variant 1: When the order closed. Present exactly when status is closed. Set once at the transition and never changed..

- Value shape: string. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. 

### OrderClosedMerchantEventDataPreviousAttributes.closed_at variant 2

anyOf variant 2.

- Value shape: null. When the order closed. Present exactly when status is closed. Set once at the transition and never changed. 

### OrderClosedMerchantEventDataPreviousAttributes.closed_reason

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_reason](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_reason).

### OrderClosedMerchantEventDataPreviousAttributes.closed_reason_message

### OrderClosedMerchantEventDataPreviousAttributes.closed_reason_message variant 1

anyOf variant 1: The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer..

- Value shape: string. The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. 

### OrderClosedMerchantEventDataPreviousAttributes.closed_reason_message variant 2

anyOf variant 2.

- Value shape: null. The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. 

### OrderClosedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderClosedMerchantEventDataPreviousAttributes.custom_field_answers

### OrderClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1

anyOf variant 1: The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: `20`. 

### OrderClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 2

anyOf variant 2.

- Value shape: null. The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.custom_field_answers variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustom_field_answers-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.customer

Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.

Field definitions: [shared fields](BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1

anyOf variant 1: Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.; anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 2, 3

anyOf variant 1: Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer.; anyOf variant 2; anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.email](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1email).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.name](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1name).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.phone](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1phone).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.status](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1status).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.customer_id

### OrderClosedMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: ID of the customer this order belongs to..

- Value shape: string. ID of the customer this order belongs to. 

### OrderClosedMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer this order belongs to. 

### OrderClosedMerchantEventDataPreviousAttributes.deferred_promotions

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1deferred_promotions).

### OrderClosedMerchantEventDataPreviousAttributes.delivery

Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Conditional | string or null | Method used by governing_delivery_selection_id. `delivery_method_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method_id). |
| `recipient` | Conditional | Alternative shapes (see declared variants) | Name, email and phone of the recipient recorded by the governing selection. `recipient`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery-variant-1recipient). |
| `type` | Conditional | string or null | How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery-variant-1type). |

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1

anyOf OrderDeliverySummaryPreviousAttributes.

- Optional: `delivery_method_id`, `recipient`, `type`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 2

anyOf variant 2.

- Undeclared: `delivery_method_id`, `recipient`, `type`.
- Value shape: null. Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id variant 1

anyOf variant 1: Method used by governing_delivery_selection_id..

- Value shape: string. Method used by governing_delivery_selection_id. Method used by governing_delivery_selection_id. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Method used by governing_delivery_selection_id. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.recipient

Name, email and phone of the recipient recorded by the governing selection.

Field definitions: [shared fields](DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient).

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1

anyOf DeliveryRecipientResourcePreviousAttributes.

- Optional: `email`, `name`, `phone`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `name`, `phone`.
- Value shape: null. Name, email and phone of the recipient recorded by the governing selection. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1.email

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.email](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1email).

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1.name

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.name](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1name).

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.recipient variant 1.phone

Declared alternatives: [DeliverySelectionCommittedMerchantEventDataPreviousAttributes.recipient variant 1.phone](../models/DeliverySelectionCommittedMerchantEventDataPreviousAttributes.md#deliveryselectioncommittedmerchanteventdatapreviousattributesrecipient-variant-1phone).

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.type

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.type variant 1

anyOf variant 1: How the governing selection delivers this order..

- Value shape: string. How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.type variant 2

anyOf variant 2.

- Value shape: null. How the governing selection delivers this order. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination

The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) | Address the order's items are delivered to. `address`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1address). |
| `delivery_selection_id` | Conditional | string or null | Delivery selection that controls this destination, when checkout collected it. `delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1delivery_selection_id). |
| `frozen_at` | Conditional | string or null | Time payment froze this destination. `frozen_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1frozen_at). |
| `recipient` | Conditional | Alternative shapes (see declared variants) | Who receives the order. Omitted when no recipient was saved. `recipient`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1recipient). |
| `source` | Conditional | string or null | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. `source`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1source). |

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1

anyOf OrderDeliveryDestinationPreviousAttributes.

- Optional: `address`, `delivery_selection_id`, `frozen_at`, `recipient`, `source`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 2

anyOf variant 2.

- Undeclared: `address`, `delivery_selection_id`, `frozen_at`, `recipient`, `source`.
- Value shape: null. The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address

Address the order's items are delivered to.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Address the order's items are delivered to. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.delivery_selection_id

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that controls this destination, when checkout collected it..

- Value shape: string. Delivery selection that controls this destination, when checkout collected it. Delivery selection that controls this destination, when checkout collected it. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that controls this destination, when checkout collected it. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.frozen_at

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.frozen_at variant 1

anyOf variant 1: Time payment froze this destination..

- Value shape: string. Time payment froze this destination. Time payment froze this destination. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.frozen_at variant 2

anyOf variant 2.

- Value shape: null. Time payment froze this destination. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient

Who receives the order. Omitted when no recipient was saved.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Conditional | string or null | Name of the person receiving the order. `name`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1recipient-variant-1name). |
| `phone` | Conditional | string or null | Phone number for contacting the recipient about the delivery. `phone`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1recipient-variant-1phone). |

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1

anyOf OrderDeliveryDestinationRecipientPreviousAttributes.

- Optional: `name`, `phone`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 2

anyOf variant 2.

- Undeclared: `name`, `phone`.
- Value shape: null. Who receives the order. Omitted when no recipient was saved. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1.name

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1.name variant 1

anyOf variant 1: Name of the person receiving the order..

- Value shape: string. Name of the person receiving the order. Name of the person receiving the order. maxLength: `255`. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the order. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1.phone

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1.phone variant 1

anyOf variant 1: Phone number for contacting the recipient about the delivery..

- Value shape: string. Phone number for contacting the recipient about the delivery. Phone number for contacting the recipient about the delivery. maxLength: `30`. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.recipient variant 1.phone variant 2

anyOf variant 2.

- Value shape: null. Phone number for contacting the recipient about the delivery. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.source

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.source variant 1

anyOf variant 1: Where the destination came from..

- Value shape: string. Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.source variant 2

anyOf variant 2.

- Value shape: null. Where the destination came from. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1

anyOf variant 1: Discounts applied to the order, each with its amount, status, and the line items and charges it covers..

- Value shape: Array of [OrderDiscountPreviousAttributes](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributes). Discounts applied to the order, each with its amount, status, and the line items and charges it covers. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 2

anyOf variant 2.

- Value shape: null. Discounts applied to the order, each with its amount, status, and the line items and charges it covers. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount amount before limits apply, such as 20% of $100 resolving to $20. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the discount took off. It is less than `amount_money` when a limit applies, such as a discount that would take the order below zero. |
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1customer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesdiscount_class). |
| `order_charge_ids` | Optional | Array of string or null | IDs of the charges this discount reduces. `order_charge_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_charge_ids). |
| `order_discount_id` | Optional | string or null | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. `order_discount_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_discount_id). |
| `order_id` | Optional | string or null | ID of the order the discount applies to. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_id). |
| `order_line_item_ids` | Optional | Array of string or null | IDs of the order line items this discount applies to. `order_line_item_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_line_item_ids). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when source is promotion and a code was used. `promotion_code`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | Promotion that created this discount. Present only when source is promotion. `promotion_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1promotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1source). |
| `status` | Optional | string or null | Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`. `status`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesstatus). |

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.customer_facing_name

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.customer_facing_name](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1customer_facing_name).

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.discount_class

Declared alternatives: [OrderDiscountPreviousAttributes.discount_class](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesdiscount_class).

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_charge_ids

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_charge_ids variant 1

anyOf variant 1: IDs of the charges this discount reduces..

- Value shape: Array of string. IDs of the charges this discount reduces. Items: Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_charge_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the charges this discount reduces. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_discount_id

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_discount_id variant 1

anyOf variant 1: Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount..

- Value shape: string. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. Example: `"ad_01KEZF7C00T30DH97GR0A9BF31"`. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_discount_id variant 2

anyOf variant 2.

- Value shape: null. Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_id

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_id variant 1

anyOf variant 1: ID of the order the discount applies to..

- Value shape: string. ID of the order the discount applies to. ID of the order the discount applies to. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the discount applies to. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_line_item_ids

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_line_item_ids variant 1

anyOf variant 1: IDs of the order line items this discount applies to..

- Value shape: Array of string. IDs of the order line items this discount applies to. Items: Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.order_line_item_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the order line items this discount applies to. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.promotion_code

Declared alternatives: [OrderDiscountPreviousAttributes.promotion_code](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributespromotion_code).

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.promotion_id

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.promotion_id variant 1

anyOf variant 1: Promotion that created this discount. Present only when source is promotion..

- Value shape: string. Promotion that created this discount. Present only when source is promotion. Promotion that created this discount. Present only when source is promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Promotion that created this discount. Present only when source is promotion. 

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.source

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.discounts variant 1.[] fields 1.source](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1discounts-variant-1-fields-1source).

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.status

Declared alternatives: [OrderDiscountPreviousAttributes.status](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesstatus).

### OrderClosedMerchantEventDataPreviousAttributes.dispute_status

### OrderClosedMerchantEventDataPreviousAttributes.dispute_status variant 1

anyOf variant 1: Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials..

- Value shape: string. Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: `"none"`, `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### OrderClosedMerchantEventDataPreviousAttributes.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillment_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1fulfillment_status).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1

anyOf variant 1: Fulfillments created for the order, each covering a set of its line items..

- Value shape: Array of [FulfillmentPreviousAttributes](../models/FulfillmentPreviousAttributes.md#fulfillmentpreviousattributes). Fulfillments created for the order, each covering a set of its line items. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 2

anyOf variant 2.

- Value shape: null. Fulfillments created for the order, each covering a set of its line items. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | Alternative shapes (see declared variants) | Current hold details. Present exactly when status is on_hold. `active_hold`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1completed_at). |
| `created_at` | Optional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1created_at). |
| `customer_id` | Optional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1customer_id). |
| `delivery_choice_group_id` | Optional | string or null or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_choice_group_id). |
| `delivery_execution_leg_id` | Optional | string or null or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_execution_leg_id). |
| `delivery_method_id` | Optional | string or null or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_method_id). |
| `delivery_selection_id` | Optional | string or null or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_selection_id). |
| `device_id` | Optional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1device_id). |
| `digital_details` | Optional | Alternative shapes (see declared variants) | Delivery URL and completion time for a digital fulfillment. `digital_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details). |
| `dispatched_at` | Optional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1dispatched_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `fulfillment_id` | Optional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1fulfillment_id). |
| `line_items` | Optional | Array of [FulfillmentLineItemPreviousAttributes](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributes) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items). |
| `local_delivery_details` | Optional | Alternative shapes (see declared variants) | Courier, delivery window, and handoff details for a local delivery fulfillment. `local_delivery_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details). |
| `location_id` | Optional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1location_id). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the fulfillment. `metadata`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | Alternative shapes (see declared variants) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1order_id). |
| `order_number` | Optional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number). |
| `outcome` | Optional | Alternative shapes (see declared variants) | Terminal outcome details. Present exactly when status is no_show. `outcome`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome). |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages). |
| `packed_at` | Optional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1packed_at). |
| `picked_at` | Optional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1picked_at). |
| `pickup_details` | Optional | Alternative shapes (see declared variants) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. `pickup_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details). |
| `recipient` | Optional | Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `recipient`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesrecipient). |
| `scheduled_start_at` | Optional | string or null or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1scheduled_start_at). |
| `service_details` | Optional | Alternative shapes (see declared variants) | Schedule and completion details for a service fulfillment. `service_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details). |
| `shipment_details` | Optional | Alternative shapes (see declared variants) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. `shipment_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details). |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes) or null | Shipments associated with this fulfillment. `shipments`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments). |
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1terminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1updated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion). |

#### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1 status values

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

#### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1 supported_actions [] values

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

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.active_hold

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.charges

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.charges](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.completed_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.completed_at variant 1

anyOf variant 1: When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded..

- Value shape: string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.created_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the fulfillment was created, in RFC3339 format..

- Value shape: string. When the fulfillment was created, in RFC3339 format. When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was created, in RFC3339 format. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.customer_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.customer_id variant 1

anyOf variant 1: Customer receiving this fulfillment, when one is set..

- Value shape: string. Customer receiving this fulfillment, when one is set. Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer receiving this fulfillment, when one is set. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_choice_group_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_choice_group_id variant 1

anyOf variant 1: Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: (string or null). Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id variant 1

anyOf variant 1: Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: (string or null). Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id variant 1

anyOf variant 1: Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials..

- Value shape: (string or null). Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_selection_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: (string or null). Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.device_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.device_id variant 1

anyOf variant 1: Device associated with the fulfillment, when one is recorded..

- Value shape: string. Device associated with the fulfillment, when one is recorded. Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.device_id variant 2

anyOf variant 2.

- Value shape: null. Device associated with the fulfillment, when one is recorded. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.digital_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.dispatched_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.dispatched_at variant 1

anyOf variant 1: First time this fulfillment reached dispatched..

- Value shape: string. First time this fulfillment reached dispatched. First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.dispatched_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached dispatched. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.fulfillment_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.fulfillment_id variant 1

anyOf variant 1: Stable identifier of the fulfillment..

- Value shape: string. Stable identifier of the fulfillment. Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the fulfillment. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.line_items

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.local_delivery_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.location_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.location_id variant 1

anyOf variant 1: Merchant location responsible for this fulfillment..

- Value shape: string. Merchant location responsible for this fulfillment. Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.location_id variant 2

anyOf variant 2.

- Value shape: null. Merchant location responsible for this fulfillment. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.metadata

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.order

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.order_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order whose items this fulfillment delivers..

- Value shape: string. Order whose items this fulfillment delivers. Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items this fulfillment delivers. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.order_number

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.outcome

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.packages

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packages](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.packed_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.packed_at variant 1

anyOf variant 1: First time this fulfillment reached packed..

- Value shape: string. First time this fulfillment reached packed. First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.packed_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached packed. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.picked_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.picked_at variant 1

anyOf variant 1: First time this fulfillment reached picked..

- Value shape: string. First time this fulfillment reached picked. First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.picked_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached picked. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.pickup_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.recipient

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.recipient](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesrecipient).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at variant 1

anyOf variant 1: Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction..

- Value shape: (string or null). Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.service_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.shipment_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.shipments

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.status

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.status](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.supported_actions

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.terminal_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.terminal_at variant 1

anyOf variant 1: When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment..

- Value shape: string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.terminal_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.type

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.type](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.updated_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.updated_at variant 1

anyOf variant 1: When the fulfillment was last updated, in RFC3339 format..

- Value shape: string. When the fulfillment was last updated, in RFC3339 format. When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was last updated, in RFC3339 format. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.version

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.version](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion).

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate

An estimate of how the order balance splits between gift cards and the payment processor.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Conditional | boolean or null | Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. `can_pay`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_estimate-variant-1can_pay). |
| `gift_card_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Order balance allocated to the selected gift cards. |
| `gift_cards` | Conditional | Array of object or null | The gift cards the estimate draws from, each with the amount it covers. `gift_cards`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_estimate-variant-1gift_cards). |
| `is_reserved` | Conditional | boolean or null | Whether this estimate reserves gift-card funds. Estimates currently return false. `is_reserved`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_estimate-variant-1is_reserved). |
| `order_version` | Conditional | integer or null | Order version used to calculate this gift card allocation. Read the order again if its version changed. `order_version`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_estimate-variant-1order_version). |
| `processor_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Order balance remaining for the payment processor. |

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1

anyOf OrderGiftCardEstimatePreviousAttributes.

- Optional: `can_pay`, `gift_card_money`, `gift_cards`, `is_reserved`, `order_version`, `processor_money`.

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 2

anyOf variant 2.

- Undeclared: `can_pay`, `gift_card_money`, `gift_cards`, `is_reserved`, `order_version`, `processor_money`.
- Value shape: null. An estimate of how the order balance splits between gift cards and the payment processor. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.can_pay

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.can_pay variant 1

anyOf variant 1: Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum..

- Value shape: boolean. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.can_pay variant 2

anyOf variant 2.

- Value shape: null. Whether this allocation can be used for payment. False when a selected card needs authorization or the allocation cannot cover the balance while satisfying the processor minimum. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards variant 1

anyOf variant 1: The gift cards the estimate draws from, each with the amount it covers..

- Value shape: Array of object. The gift cards the estimate draws from, each with the amount it covers. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards variant 2

anyOf variant 2.

- Value shape: null. The gift cards the estimate draws from, each with the amount it covers. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this gift card covers. |
| `gift_card_id` | Optional | string or null | ID of the gift card the amount is taken from. `gift_card_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_estimate-variant-1gift_cards-variant-1-fields-1gift_card_id). |

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards variant 1.[] fields 1.gift_card_id

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card the amount is taken from..

- Value shape: string. ID of the gift card the amount is taken from. ID of the gift card the amount is taken from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.gift_cards variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the amount is taken from. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.is_reserved

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.is_reserved variant 1

anyOf variant 1: Whether this estimate reserves gift-card funds. Estimates currently return false..

- Value shape: boolean. Whether this estimate reserves gift-card funds. Estimates currently return false. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.is_reserved variant 2

anyOf variant 2.

- Value shape: null. Whether this estimate reserves gift-card funds. Estimates currently return false. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.order_version

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.order_version variant 1

anyOf variant 1: Order version used to calculate this gift card allocation. Read the order again if its version changed..

- Value shape: integer. Order version used to calculate this gift card allocation. Read the order again if its version changed. Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: `int64`. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_estimate variant 1.order_version variant 2

anyOf variant 2.

- Value shape: null. Order version used to calculate this gift card allocation. Read the order again if its version changed. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1

anyOf variant 1: The gift card redemptions applied to the order's payments..

- Value shape: Array of [OrderGiftCardSettlementPreviousAttributes](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributes). The gift card redemptions applied to the order's payments. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 2

anyOf variant 2.

- Value shape: null. The gift card redemptions applied to the order's payments. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount the redemption paid toward the order, not counting the tip. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the redemption spent. `gift_card_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_settlements-variant-1-fields-1gift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | ID of the redemption that posted the spend. `gift_card_redemption_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_settlements-variant-1-fields-1gift_card_redemption_id). |
| `last4` | Optional | string or null | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. `last4`: [declared alternatives](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributeslast4). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the redemption that paid a tip. |

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.gift_card_id

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card the redemption spent..

- Value shape: string. ID of the gift card the redemption spent. ID of the gift card the redemption spent. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the redemption spent. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.gift_card_redemption_id

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.gift_card_redemption_id variant 1

anyOf variant 1: ID of the redemption that posted the spend..

- Value shape: string. ID of the redemption that posted the spend. ID of the redemption that posted the spend. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. ID of the redemption that posted the spend. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_settlements variant 1.[] fields 1.last4

Declared alternatives: [OrderGiftCardSettlementPreviousAttributes.last4](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributeslast4).

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_tender_enabled

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_tender_enabled variant 1

anyOf variant 1: Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts..

- Value shape: boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_card_tender_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1

anyOf variant 1: Gift cards available to pay the order, with each card's available balance..

- Value shape: Array of [OrderGiftCardSelectionPreviousAttributes](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributes). Gift cards available to pay the order, with each card's available balance. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 2

anyOf variant 2.

- Value shape: null. Gift cards available to pay the order, with each card's available balance. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The card's available balance. |
| `gift_card_id` | Optional | string or null | ID of the gift card selected for the order. `gift_card_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_cards-variant-1-fields-1gift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4). |
| `requires_authorization` | Optional | boolean or null | Whether the card's current code must be applied again before the order can use it. `requires_authorization`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesrequires_authorization). |

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card selected for the order..

- Value shape: string. ID of the gift card selected for the order. ID of the gift card selected for the order. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card selected for the order. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.last4

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.last4](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4).

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.requires_authorization

Declared alternatives: [OrderGiftCardSelectionPreviousAttributes.requires_authorization](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesrequires_authorization).

### OrderClosedMerchantEventDataPreviousAttributes.governing_delivery_selection_id

### OrderClosedMerchantEventDataPreviousAttributes.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection..

- Value shape: (string or null). ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. 

### OrderClosedMerchantEventDataPreviousAttributes.governing_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. 

### OrderClosedMerchantEventDataPreviousAttributes.handover

Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string or null | Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. `location_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributeshandover-variant-1location_id). |

### OrderClosedMerchantEventDataPreviousAttributes.handover variant 1

anyOf OrderHandoverPreviousAttributes.

- Optional: `location_id`.

### OrderClosedMerchantEventDataPreviousAttributes.handover variant 2

anyOf variant 2.

- Undeclared: `location_id`.
- Value shape: null. Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. 

### OrderClosedMerchantEventDataPreviousAttributes.handover variant 1.location_id

### OrderClosedMerchantEventDataPreviousAttributes.handover variant 1.location_id variant 1

anyOf variant 1: Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there..

- Value shape: string. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### OrderClosedMerchantEventDataPreviousAttributes.handover variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. Active location with a complete address where the buyer receives the goods. Tracked items take stock from it, and automatic tax treats the sale as made there. 

### OrderClosedMerchantEventDataPreviousAttributes.internal_note

### OrderClosedMerchantEventDataPreviousAttributes.internal_note variant 1

anyOf variant 1: A note for your team. Buyer reads leave it out..

- Value shape: string. A note for your team. Buyer reads leave it out. 

### OrderClosedMerchantEventDataPreviousAttributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. A note for your team. Buyer reads leave it out. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_reason

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_reason variant 1

anyOf variant 1: Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added..

- Value shape: string. Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`.

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_reason variant 2

anyOf variant 2.

- Value shape: null. Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_resolution_message

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_resolution_message variant 1

anyOf variant 1: The merchant note supplied when resolving the inventory exception. It is not shown to the buyer..

- Value shape: string. The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_resolution_message variant 2

anyOf variant 2.

- Value shape: null. The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_status

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_status variant 1

anyOf variant 1: Whether an inventory problem after payment needs attention..

- Value shape: string. Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`.

### OrderClosedMerchantEventDataPreviousAttributes.inventory_exception_status variant 2

anyOf variant 2.

- Value shape: null. Whether an inventory problem after payment needs attention. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_reservation_id

### OrderClosedMerchantEventDataPreviousAttributes.inventory_reservation_id variant 1

anyOf variant 1: The reservation holding stock for this order, when one exists..

- Value shape: string. The reservation holding stock for this order, when one exists. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. The reservation holding stock for this order, when one exists. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source

Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock.

Field definitions: [shared fields](InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source).

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1

anyOf InventoryRoutingSourcePreviousAttributes.

- Optional: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source variant 2

anyOf variant 2.

- Undeclared: `inventory_allocation_policy_id`, `inventory_allocation_policy_revision_id`, `location_id`, `type`.
- Value shape: null. Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. 

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_id).

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.inventory_allocation_policy_revision_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1inventory_allocation_policy_revision_id).

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.location_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1location_id).

### OrderClosedMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.type

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.inventory_routing_source variant 1.type](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributesinventory_routing_source-variant-1type).

### OrderClosedMerchantEventDataPreviousAttributes.invoice_id

### OrderClosedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it..

- Value shape: (string or null). The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. 

### OrderClosedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: Items the order sells, each with its pricing, tax, and fulfillment quantities..

- Value shape: Array of [OrderLineItemPreviousAttributes](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributes). Items the order sells, each with its pricing, tax, and fulfillment quantities. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Items the order sells, each with its pricing, tax, and fulfillment quantities. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `backordered_quantity` | Optional | integer or null | Tracked line units waiting for stock. Always 0 when none are backordered. Whole-number quantity; fractional quantities are not supported. `backordered_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbackordered_quantity). |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Unit price multiplied by quantity, before modifiers, discounts, and tax. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components fixed when the bundle line was added. The line takes their shared taxability and tax category; all component variants must share both stored values. An unset category equals only another unset category. `bundle_components`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id). |
| `catalog_pricing` | Optional | Alternative shapes (see declared variants) | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. `catalog_pricing`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount value allocated to this line item. |
| `expected_ship_date` | Optional | string or null or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. `expected_ship_date`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1expected_ship_date). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributes](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributes) or null | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities). |
| `fulfillment_requirements` | Optional | Alternative shapes (see declared variants) | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. `fulfillment_requirements`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements). |
| `gift_card_purchase` | Optional | Alternative shapes (see declared variants) | Gift card details for a gift card purchase line. `gift_card_purchase`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase). |
| `image` | Optional | Alternative shapes (see declared variants) | Image of the item as sold. `image`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesimage). |
| `inventory_snapshot` | Optional | Alternative shapes (see declared variants) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. `inventory_snapshot`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line item's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_edit_id` | Optional | string or null or null | The edit that added this line. Null when the line was not added by an order edit. `order_edit_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1order_edit_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | Unique identifier for this order line item, prefixed `li_`. `order_line_item_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `payment_link_line_item_key` | Optional | string or null or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. `payment_link_line_item_key`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespayment_link_line_item_key). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id). |
| `product_type` | Optional | string or null or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1product_type). |
| `purchased_gift_cards` | Optional | Array of [PurchasedGiftCardPreviousAttributes](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributes) or null | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of this line already refunded. |
| `refunded_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `refunded_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `release_date` | Optional | string or null or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. `release_date`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1release_date). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. `removed_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesremoved_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `subscription` | Optional | Alternative shapes (see declared variants) | Recurring offer and cadence frozen for this line at signup. `subscription`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription). |
| `subscription_id` | Optional | string or null | Subscription created for this line after the order is paid. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1subscription_id). |
| `subscription_offer` | Optional | Alternative shapes (see declared variants) | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. `subscription_offer`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `tax` | Optional | Alternative shapes (see declared variants) | How tax was calculated for this line item. `tax`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestax). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for this line item, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discounts, plus tax that is not already included in the price. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type). |
| `unit_dimensions` | Optional | Alternative shapes (see declared variants) | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. `unit_dimensions`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. |
| `unit_weight` | Optional | Alternative shapes (see declared variants) | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. `unit_weight`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id). |

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.backordered_quantity

Declared alternatives: [OrderLineItemPreviousAttributes.backordered_quantity](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbackordered_quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_components

Declared alternatives: [OrderLineItemPreviousAttributes.bundle_components](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_components).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.bundle_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.catalog_pricing

Declared alternatives: [OrderLineItemPreviousAttributes.catalog_pricing](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.categories

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.categories](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.description

Declared alternatives: [OrderLineItemPreviousAttributes.description](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.expected_ship_date

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.expected_ship_date variant 1

anyOf variant 1: Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted..

- Value shape: (string or null). Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_quantities

Declared alternatives: [OrderLineItemPreviousAttributes.fulfillment_quantities](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_requirements

Declared alternatives: [OrderLineItemPreviousAttributes.fulfillment_requirements](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_requirements).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.gift_card_purchase

Declared alternatives: [OrderLineItemPreviousAttributes.gift_card_purchase](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesgift_card_purchase).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.image

Declared alternatives: [OrderLineItemPreviousAttributes.image](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesimage).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.inventory_snapshot

Declared alternatives: [OrderLineItemPreviousAttributes.inventory_snapshot](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesinventory_snapshot).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [OrderLineItemPreviousAttributes.modifiers](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_edit_id

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_edit_id variant 1

anyOf variant 1: The edit that added this line. Null when the line was not added by an order edit..

- Value shape: (string or null). The edit that added this line. Null when the line was not added by an order edit. The edit that added this line. Null when the line was not added by an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The edit that added this line. Null when the line was not added by an order edit. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_id

Declared alternatives: [InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.lines variant 1.[] fields 1.order_id](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1order_id).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: Unique identifier for this order line item, prefixed `li_`..

- Value shape: string. Unique identifier for this order line item, prefixed `li_`. Unique identifier for this order line item, prefixed `li_`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order line item, prefixed `li_`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.payment_link_line_item_key

Declared alternatives: [OrderLineItemPreviousAttributes.payment_link_line_item_key](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespayment_link_line_item_key).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_type

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.product_type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1product_type).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.purchased_gift_cards

Declared alternatives: [OrderLineItemPreviousAttributes.purchased_gift_cards](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.refunded_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.release_date

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.release_date variant 1

anyOf variant 1: Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted..

- Value shape: (string or null). Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.release_date variant 2

anyOf variant 2.

- Value shape: null. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.removed_quantity

Declared alternatives: [OrderLineItemPreviousAttributes.removed_quantity](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesremoved_quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription

Declared alternatives: [OrderLineItemPreviousAttributes.subscription](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_id

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_id variant 1

anyOf variant 1: Subscription created for this line after the order is paid..

- Value shape: string. Subscription created for this line after the order is paid. Subscription created for this line after the order is paid. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Subscription created for this line after the order is paid. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.subscription_offer

Declared alternatives: [OrderLineItemPreviousAttributes.subscription_offer](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.tax

Declared alternatives: [OrderLineItemPreviousAttributes.tax](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributestax).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.type

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.line_items variant 1.[] fields 1.type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1type).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.unit_dimensions

Declared alternatives: [OrderLineItemPreviousAttributes.unit_dimensions](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_dimensions).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.unit_weight

Declared alternatives: [OrderLineItemPreviousAttributes.unit_weight](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesunit_weight).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant the item was sold from..

- Value shape: string. ID of the catalog variant the item was sold from. ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the item was sold from. 

### OrderClosedMerchantEventDataPreviousAttributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id).

### OrderClosedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderClosedMerchantEventDataPreviousAttributes.order_id

### OrderClosedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: Unique identifier for this order, prefixed `ord_`..

- Value shape: string. Unique identifier for this order, prefixed `ord_`. 

### OrderClosedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order, prefixed `ord_`. 

### OrderClosedMerchantEventDataPreviousAttributes.order_number

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_number](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_number).

### OrderClosedMerchantEventDataPreviousAttributes.origin

### OrderClosedMerchantEventDataPreviousAttributes.origin variant 1

anyOf variant 1: How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin..

- Value shape: string. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`.

### OrderClosedMerchantEventDataPreviousAttributes.origin variant 2

anyOf variant 2.

- Value shape: null. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. 

### OrderClosedMerchantEventDataPreviousAttributes.paid_at

### OrderClosedMerchantEventDataPreviousAttributes.paid_at variant 1

anyOf variant 1: When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid..

- Value shape: (string or null). When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. 

### OrderClosedMerchantEventDataPreviousAttributes.paid_at variant 2

anyOf variant 2.

- Value shape: null. When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_intent_ids

### OrderClosedMerchantEventDataPreviousAttributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents created to collect this order..

- Value shape: Array of string. IDs of the payment intents created to collect this order. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents created to collect this order. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_intents

### OrderClosedMerchantEventDataPreviousAttributes.payment_intents variant 1

anyOf variant 1: Payment intents included when `expand` names `payment_intents`..

- Value shape: Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes). Payment intents included when `expand` names `payment_intents`. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Payment intents included when `expand` names `payment_intents`. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.payment_intents variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributespayment_intents-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.payment_link_id

### OrderClosedMerchantEventDataPreviousAttributes.payment_link_id variant 1

anyOf variant 1: Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders..

- Value shape: string. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_status).

### OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id

### OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id variant 1

anyOf variant 1: The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials..

- Value shape: (string or null). The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id

### OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id variant 1

anyOf variant 1: Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order..

- Value shape: (string or null). Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. 

### OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id variant 2

anyOf variant 2.

- Value shape: null. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. 

### OrderClosedMerchantEventDataPreviousAttributes.pricing_amounts

The order's money totals: subtotal, discounts, charges, tax, requested tip, and total.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1pricing_amounts).

### OrderClosedMerchantEventDataPreviousAttributes.pricing_amounts variant 1

anyOf PricingAmountsPreviousAttributes.

- Optional: `additive_tax_money`, `charge_money`, `discount_money`, `inclusive_tax_money`, `requested_tip_money`, `subtotal_money`, `tax_money`, `total_money`.

### OrderClosedMerchantEventDataPreviousAttributes.pricing_amounts variant 2

anyOf variant 2.

- Undeclared: `additive_tax_money`, `charge_money`, `discount_money`, `inclusive_tax_money`, `requested_tip_money`, `subtotal_money`, `tax_money`, `total_money`.
- Value shape: null. The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. 

### OrderClosedMerchantEventDataPreviousAttributes.refund_ids

### OrderClosedMerchantEventDataPreviousAttributes.refund_ids variant 1

anyOf variant 1: IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts..

- Value shape: Array of string. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. 

### OrderClosedMerchantEventDataPreviousAttributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. 

### OrderClosedMerchantEventDataPreviousAttributes.refund_status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.refund_status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1refund_status).

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1

anyOf variant 1: Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money..

- Value shape: Array of [OrderReturnCreditSettlementPreviousAttributes](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributes). Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. 

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 2

anyOf variant 2.

- Value shape: null. Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. 

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount of the credit applied to this order. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `return_id` | Optional | string or null | ID of the return that created this replacement order, the return the credit comes from. `return_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_credit_settlements-variant-1-fields-1return_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued the credit. `return_resolution_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_credit_settlements-variant-1-fields-1return_resolution_id). |

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.return_id

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the return that created this replacement order, the return the credit comes from..

- Value shape: string. ID of the return that created this replacement order, the return the credit comes from. ID of the return that created this replacement order, the return the credit comes from. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return that created this replacement order, the return the credit comes from. 

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.return_resolution_id

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued the credit..

- Value shape: string. ID of the return resolution that issued the credit. ID of the return resolution that issued the credit. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### OrderClosedMerchantEventDataPreviousAttributes.return_credit_settlements variant 1.[] fields 1.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued the credit. 

### OrderClosedMerchantEventDataPreviousAttributes.return_resolution_id

### OrderClosedMerchantEventDataPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create..

- Value shape: string. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. 

### OrderClosedMerchantEventDataPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. 

### OrderClosedMerchantEventDataPreviousAttributes.settlement_amounts

How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1settlement_amounts).

### OrderClosedMerchantEventDataPreviousAttributes.settlement_amounts variant 1

anyOf OrderSettlementAmountsPreviousAttributes.

- Optional: `dispute_lost_money`, `disputed_money`, `overpaid_money`, `released_money`, `removed_money`, `settled_tip_money`, `net_collected_money`, `outstanding_money`, `paid_money`, `refunded_money`, `written_off_money`.

### OrderClosedMerchantEventDataPreviousAttributes.settlement_amounts variant 2

anyOf variant 2.

- Undeclared: `dispute_lost_money`, `disputed_money`, `overpaid_money`, `released_money`, `removed_money`, `settled_tip_money`, `net_collected_money`, `outstanding_money`, `paid_money`, `refunded_money`, `written_off_money`.
- Value shape: null. How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. 

### OrderClosedMerchantEventDataPreviousAttributes.status

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.status](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1status).

### OrderClosedMerchantEventDataPreviousAttributes.subscription

Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Conditional | integer or null | UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. `billing_anchor_day`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1billing_anchor_day). |
| `cancel_at_period_end` | Conditional | boolean or null | True when the subscription is scheduled to cancel instead of renewing. `cancel_at_period_end`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1cancel_at_period_end). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `current_period_end_at` | Conditional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `current_period_start_at` | Conditional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1customer_id). |
| `next_billing_at` | Conditional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1next_billing_at). |
| `status` | Conditional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1status). |
| `subscription_id` | Conditional | string or null | Unique identifier for this subscription, prefixed `sub_`. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1subscription_id). |
| `subscription_plan_id` | Conditional | string or null | ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1subscription_plan_id). |
| `supported_actions` | Conditional | Array of string or null | Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1supported_actions). |
| `terms_type` | Conditional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1terms_type). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1

anyOf variant 1: Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription.; anyOf ExpandedSubscriptionSummaryPreviousAttributes.

- Optional: `billing_anchor_day`, `cancel_at_period_end`, `created_at`, `current_period_end_at`, `current_period_start_at`, `customer_id`, `next_billing_at`, `status`, `subscription_id`, `subscription_plan_id`, `supported_actions`, `terms_type`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 2, 3

anyOf variant 1: Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription.; anyOf variant 2; anyOf variant 2.

- Undeclared: `billing_anchor_day`, `cancel_at_period_end`, `created_at`, `current_period_end_at`, `current_period_start_at`, `customer_id`, `next_billing_at`, `status`, `subscription_id`, `subscription_plan_id`, `supported_actions`, `terms_type`, `updated_at`.
- Value shape: null. Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.billing_anchor_day

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.billing_anchor_day variant 1

anyOf variant 1: UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set..

- Value shape: integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. Format: `int32`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.billing_anchor_day variant 2

anyOf variant 2.

- Value shape: null. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules; 0 when no anchor day is set. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.cancel_at_period_end

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.cancel_at_period_end variant 1

anyOf variant 1: True when the subscription is scheduled to cancel instead of renewing..

- Value shape: boolean. True when the subscription is scheduled to cancel instead of renewing. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.cancel_at_period_end variant 2

anyOf variant 2.

- Value shape: null. True when the subscription is scheduled to cancel instead of renewing. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.current_period_end_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.current_period_start_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.customer_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.customer_id variant 1

anyOf variant 1: The customer this subscription bills..

- Value shape: string. The customer this subscription bills. The customer this subscription bills. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer this subscription bills. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.next_billing_at

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.next_billing_at variant 1

anyOf variant 1: When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule..

- Value shape: string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.next_billing_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.status

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.status variant 1

anyOf variant 1: Where the subscription is in its lifecycle. Each value says what it means..

- Value shape: string. Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Where the subscription is in its lifecycle. Each value says what it means. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.subscription_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.subscription_id variant 1

anyOf variant 1: Unique identifier for this subscription, prefixed `sub_`..

- Value shape: string. Unique identifier for this subscription, prefixed `sub_`. Unique identifier for this subscription, prefixed `sub_`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.subscription_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription, prefixed `sub_`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.subscription_plan_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`..

- Value shape: string. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.supported_actions

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.supported_actions variant 1

anyOf variant 1: Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials..

- Value shape: Array of string. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.terms_type

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.terms_type variant 1

anyOf variant 1: Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id..

- Value shape: string. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.terms_type variant 2

anyOf variant 2.

- Value shape: null. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_cycle

### OrderClosedMerchantEventDataPreviousAttributes.subscription_cycle variant 1

anyOf variant 1: Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle..

- Value shape: integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: `uint64`. minimum: `0`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_cycle variant 2

anyOf variant 2.

- Value shape: null. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_changed_at

### OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_changed_at variant 1

anyOf variant 1: Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it..

- Value shape: string. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_changed_at variant 2

anyOf variant 2.

- Value shape: null. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_number

### OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_number variant 1

anyOf variant 1: Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order..

- Value shape: (integer or null). Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: `uint32`. minimum: `2`. maximum: `24`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_delivery_number variant 2

anyOf variant 2.

- Value shape: null. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_id variant 1

anyOf variant 1: ID of the subscription this order bills. Absent on an order that isn't from a subscription..

- Value shape: string. ID of the subscription this order bills. Absent on an order that isn't from a subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription this order bills. Absent on an order that isn't from a subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan

Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string or null | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1billing_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of `billing_interval` units between charges on the plan's default pair. `billing_interval_count`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1billing_interval_count). |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. `billing_interval_options`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1billing_interval_options). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `currency` | Conditional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables-variant-1balances-variant-1-fields-1currency). |
| `description` | Conditional | string or null | Description of the plan. Omitted when none is set. `description`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1description). |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. `line_items`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items). |
| `name` | Conditional | string or null | Name of the plan. Buyers see it at checkout and on their subscription. `name`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1name). |
| `setup_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. |
| `status` | Conditional | string or null | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1status). |
| `subscription_plan_id` | Conditional | string or null | Unique identifier for this subscription plan, prefixed `plan_`. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1subscription_plan_id). |
| `trial_period_days` | Conditional | integer or null | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. `trial_period_days`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1trial_period_days). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1

anyOf variant 1: Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan.; anyOf ExpandedSubscriptionPlanSummaryPreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 2, 3

anyOf variant 1: Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan.; anyOf variant 2; anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null. Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval variant 1

anyOf variant 1: Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none..

- Value shape: string. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_count

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_count variant 1

anyOf variant 1: Number of `billing_interval` units between charges on the plan's default pair..

- Value shape: integer. Number of `billing_interval` units between charges on the plan's default pair. Number of `billing_interval` units between charges on the plan's default pair. Format: `int32`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of `billing_interval` units between charges on the plan's default pair. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_options

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_options variant 1

anyOf variant 1: Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. maxItems: `12`. uniqueItems: `true`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.currency

Declared alternatives: [CustomerUpdatedMerchantEventDataPreviousAttributes.receivables variant 1.balances variant 1.[] fields 1.currency](../models/CustomerUpdatedMerchantEventDataPreviousAttributes.md#customerupdatedmerchanteventdatapreviousattributesreceivables-variant-1balances-variant-1-fields-1currency).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.description

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.description variant 1

anyOf variant 1: Description of the plan. Omitted when none is set..

- Value shape: string. Description of the plan. Omitted when none is set. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.description variant 2

anyOf variant 2.

- Value shape: null. Description of the plan. Omitted when none is set. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1

anyOf variant 1: The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. `allow_quantity_adjustment`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1allow_quantity_adjustment). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. `bundle_components`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1bundle_components). |
| `bundle_id` | Optional | string or null | ID of the catalog bundle the line sells. Present on a bundle line. `bundle_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1bundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. `categories`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1categories). |
| `description` | Optional | string or null | Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. `description`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1description). |
| `image` | Optional | Alternative shapes (see declared variants) | Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. `image`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1image). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1max_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1min_quantity). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. `modifiers`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1modifiers). |
| `name` | Optional | string or null | Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. `name`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1name). |
| `product_id` | Optional | string or null | ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1product_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. `selected_options`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1selected_options). |
| `sku` | Optional | string or null | SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. `sku`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1sku). |
| `subscription_plan_line_item_id` | Optional | string or null | Unique identifier for this subscription plan line item, prefixed `spli_`. `subscription_plan_line_item_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1subscription_plan_line_item_id). |
| `swap_variant_ids` | Optional | Array of string or null | IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. `swap_variant_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variant_ids). |
| `swap_variants` | Optional | Array of object or null | Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. `swap_variants`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants). |
| `tax` | Optional | Alternative shapes (see declared variants) | How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. `tax`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1tax). |
| `type` | Optional | (string or null) | How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1-variant-1type), [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1-variant-2type), [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1-variant-3type). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or bundle line keeps the catalog price from when the line was added. |
| `variant_id` | Optional | string or null | ID of the catalog variant the line sells. Present on a variant line. `variant_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1variant_id). |

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 1: `type` = `"variant"`

anyOf SubscriptionPlanLineItemVariantPreviousAttributes.

- Constraints for `type`: Values: `"variant"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 2: `type` = `"bundle"`

anyOf SubscriptionPlanLineItemBundlePreviousAttributes.

- Constraints for `type`: Values: `"bundle"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 3: `type` = `"custom"`

anyOf SubscriptionPlanLineItemCustomPreviousAttributes.

- Constraints for `type`: Values: `"custom"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 1

anyOf variant 1: Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment..

- Value shape: boolean. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. Default: `false`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan may allow adjustment. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_components

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_components variant 1

anyOf variant 1: Components of the bundle, fixed when the line was added. Omitted on variant and custom lines..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of the bundle, fixed when the line was added. Omitted on variant and custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_components variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_id variant 1

anyOf variant 1: ID of the catalog bundle the line sells. Present on a bundle line..

- Value shape: string. ID of the catalog bundle the line sells. Present on a bundle line. ID of the catalog bundle the line sells. Present on a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.bundle_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog bundle the line sells. Present on a bundle line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.categories

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.categories variant 1

anyOf variant 1: Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines..

- Value shape: Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes). Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.categories variant 2

anyOf variant 2.

- Value shape: null. Catalog categories of the product or bundle, fixed when the line was added. Omitted on custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.categories variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.categories variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescategories-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.description

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.description variant 1

anyOf variant 1: Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none..

- Value shape: string. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.description variant 2

anyOf variant 2.

- Value shape: null. Description of the line. A variant line uses the product description and a bundle line uses the bundle description; Flint copied it when the line was added. A custom line uses the description you sent. Omitted when there is none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image

Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1image).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image variant 1

anyOf ImagePreviousAttributes.

- Optional: `alt`, `height`, `url`, `width`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `height`, `url`, `width`.
- Value shape: null. Primary image of the variant (or its product) or bundle, fixed when the line was added. Omitted on custom lines and when the item has no image. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.max_quantity

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `9999`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.min_quantity

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. Default: `1`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity. Whole-number quantity; fractional quantities are not supported. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.modifiers

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.modifiers variant 1

anyOf variant 1: Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers chosen for the line, with their prices, fixed when the line was added or last changed. Omitted when the line has none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.modifiers variant 1.[] fields 1

Field definitions: [FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.name

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent..

- Value shape: string. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the line. A variant line uses the product name, followed by the variant name when the variant has options, and a bundle line uses the bundle name; Flint copied it when the line was added. A custom line uses the name you sent. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.product_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.product_id variant 1

anyOf variant 1: ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product..

- Value shape: string. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the product the line's variant belongs to. Present on a variant line; absent on bundle and custom lines, which have no parent product. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.quantity

Declared alternatives: [BundleComponentPreviousAttributes.quantity](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.selected_options

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color, fixed when the line was added. Omitted on bundle and custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentPreviousAttributes.variant variant 1.selected_options variant 1.[] fields 1](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant-variant-1selected_options-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.sku

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.sku variant 1

anyOf variant 1: SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU..

- Value shape: string. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and when the item has no SKU. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: Unique identifier for this subscription plan line item, prefixed `spli_`..

- Value shape: string. Unique identifier for this subscription plan line item, prefixed `spli_`. Unique identifier for this subscription plan line item, prefixed `spli_`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan line item, prefixed `spli_`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variant_ids

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variant_ids variant 1

anyOf variant 1: IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines..

- Value shape: Array of string. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. maxItems: `25`. uniqueItems: `true`. Items: pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variant_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the variants a subscriber can swap this line to, in the order you set. Empty when none are set, and always empty on bundle and custom lines. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1

anyOf variant 1: Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array..

- Value shape: Array of object. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. maxItems: `25`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 2

anyOf variant 2.

- Value shape: null. Current sellable alternatives in swap_variant_ids order, excluding the line's own variant and variants priced in a different currency. Present on variant lines, including an empty array. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `image` | Optional | Alternative shapes (see declared variants) | Primary image of the variant or its product. Omitted when there is none. `image`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants-variant-1-fields-1image). |
| `name` | Optional | string or null | Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. `name`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants-variant-1-fields-1name). |
| `product_id` | Optional | string or null | Identifier of the product the offered swap variant belongs to. `product_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants-variant-1-fields-1product_id). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option values that identify the variant, such as size and color. `selected_options`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants-variant-1-fields-1selected_options). |
| `sku` | Optional | string or null | SKU of the variant. Omitted when it has none. `sku`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants-variant-1-fields-1sku). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Current price of one unit of the variant, in the plan's currency. Flint leaves out a variant that has no price or is priced in another currency. |
| `variant_id` | Optional | string or null | ID of the variant a subscriber can swap to. `variant_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1swap_variants-variant-1-fields-1variant_id). |

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image

Primary image of the variant or its product. Omitted when there is none.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1line_items-variant-1-fields-1image).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image variant 1

anyOf ImagePreviousAttributes.

- Optional: `alt`, `height`, `url`, `width`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image variant 2

anyOf variant 2.

- Undeclared: `alt`, `height`, `url`, `width`.
- Value shape: null. Primary image of the variant or its product. Omitted when there is none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image variant 1.alt

Declared alternatives: [ImageAttachmentPreviousAttributes.alt](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesalt).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image variant 1.height

Declared alternatives: [ImageAttachmentPreviousAttributes.height](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesheight).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image variant 1.url

Declared alternatives: [ImageAttachmentPreviousAttributes.url](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributesurl).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.image variant 1.width

Declared alternatives: [ImageAttachmentPreviousAttributes.width](../models/ImageAttachmentPreviousAttributes.md#imageattachmentpreviousattributeswidth).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.name

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.name variant 1

anyOf variant 1: Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options..

- Value shape: string. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the variant, as the catalog shows it now: the product name, with the variant name when the variant has options. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.product_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.product_id variant 1

anyOf variant 1: Identifier of the product the offered swap variant belongs to..

- Value shape: string. Identifier of the product the offered swap variant belongs to. Identifier of the product the offered swap variant belongs to. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product the offered swap variant belongs to. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options variant 1

anyOf variant 1: Option values that identify the variant, such as size and color..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option values that identify the variant, such as size and color. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option values that identify the variant, such as size and color. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.selected_options variant 1.[] fields 1

Field definitions: [BundleComponentPreviousAttributes.variant variant 1.selected_options variant 1.[] fields 1](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant-variant-1selected_options-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.sku

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.sku variant 1

anyOf variant 1: SKU of the variant. Omitted when it has none..

- Value shape: string. SKU of the variant. Omitted when it has none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.sku variant 2

anyOf variant 2.

- Value shape: null. SKU of the variant. Omitted when it has none. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.variant_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the variant a subscriber can swap to..

- Value shape: string. ID of the variant a subscriber can swap to. ID of the variant a subscriber can swap to. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.swap_variants variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the variant a subscriber can swap to. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax

How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Conditional | string or null | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1tax-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1tax-variant-1line_item_tax_category). |
| `taxable` | Conditional | boolean or null | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. `taxable`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1line_items-variant-1-fields-1tax-variant-1taxable). |

#### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax line_item_tax_category values

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

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1

anyOf OrderLineItemTaxPreviousAttributes.

- Optional: `line_item_tax_category`, `taxable`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 2

anyOf variant 2.

- Undeclared: `line_item_tax_category`, `taxable`.
- Value shape: null. How tax applies to the line. A variant line takes its taxable setting and tax category from the variant, and a bundle line from its components; Flint copied them when the line was added. A taxable variant or bundle line with no tax category gets your default line item tax category, or `general`. A custom line has the tax you sent. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category variant 1

anyOf variant 1: Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category..

- Value shape: string. Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1.taxable

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1.taxable variant 1

anyOf variant 1: Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category..

- Value shape: boolean. Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.tax variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 1.type

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 1.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 1.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 1.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.variant_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.variant_id variant 1

anyOf variant 1: ID of the catalog variant the line sells. Present on a variant line..

- Value shape: string. ID of the catalog variant the line sells. Present on a variant line. ID of the catalog variant the line sells. Present on a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog variant the line sells. Present on a variant line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 2.type

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 2.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 2.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 2.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"bundle"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 3.type

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 3.type variant 1

anyOf group 1 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"variant"`, `"bundle"`, `"custom"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 3.type variant 3

anyOf group 2 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items variant 1.[] fields 1 variant 3.type variant 5

anyOf group 3 variant 1: How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line..

- Value shape: string. How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line. Values: `"custom"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.name

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.name variant 1

anyOf variant 1: Name of the plan. Buyers see it at checkout and on their subscription..

- Value shape: string. Name of the plan. Buyers see it at checkout and on their subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Name of the plan. Buyers see it at checkout and on their subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.status

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.status variant 1

anyOf variant 1: Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}..

- Value shape: string. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id variant 1

anyOf variant 1: Unique identifier for this subscription plan, prefixed `plan_`..

- Value shape: string. Unique identifier for this subscription plan, prefixed `plan_`. Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan, prefixed `plan_`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.trial_period_days

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.trial_period_days variant 1

anyOf variant 1: Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial..

- Value shape: integer. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. Format: `int32`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan this order bills. Absent on an order that isn't from a subscription..

- Value shape: string. ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.supported_actions

### OrderClosedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`.

### OrderClosedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.tax

The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Conditional | string or null | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. `automatic_profile`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1automatic_profile). |
| `available_location_inputs` | Conditional | Array of string or null | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. `available_location_inputs`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1available_location_inputs). |
| `callback_evaluation` | Conditional | Alternative shapes (see declared variants) | The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. `callback_evaluation`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1callback_evaluation). |
| `components_source` | Conditional | string or null | Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`. `components_source`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1components_source). |
| `delivery_charge_calculation` | Conditional | Alternative shapes (see declared variants) | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. `delivery_charge_calculation`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1delivery_charge_calculation). |
| `enabled` | Conditional | boolean or null | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. `enabled`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1enabled). |
| `exemption` | Conditional | Alternative shapes (see declared variants) | The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. `exemption`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1exemption). |
| `location` | Conditional | Alternative shapes (see declared variants) | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. `location`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1location). |
| `mode` | Conditional | string or null | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1mode). |
| `price_mode` | Conditional | string or null | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1price_mode). |
| `reverse_charge` | Conditional | Alternative shapes (see declared variants) or null | Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. `reverse_charge`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1reverse_charge). |
| `status` | Conditional | string or null | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. `status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1status). |
| `supported_countries` | Conditional | Array of string or null | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. `supported_countries`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1supported_countries). |
| `tax_breakdowns` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. `tax_breakdowns`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1tax_breakdowns). |

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1

anyOf OrderTaxPreviousAttributes.

- Optional: `automatic_profile`, `available_location_inputs`, `callback_evaluation`, `components_source`, `delivery_charge_calculation`, `enabled`, `exemption`, `location`, `mode`, `price_mode`, `reverse_charge`, `status`, `supported_countries`, `tax_breakdowns`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 2

anyOf variant 2.

- Undeclared: `automatic_profile`, `available_location_inputs`, `callback_evaluation`, `components_source`, `delivery_charge_calculation`, `enabled`, `exemption`, `location`, `mode`, `price_mode`, `reverse_charge`, `status`, `supported_countries`, `tax_breakdowns`.
- Value shape: null. The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.automatic_profile

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.automatic_profile variant 1

anyOf variant 1: Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection..

- Value shape: string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.automatic_profile variant 2

anyOf variant 2.

- Value shape: null. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.available_location_inputs

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.available_location_inputs variant 1

anyOf variant 1: How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`..

- Value shape: Array of string. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.available_location_inputs variant 2

anyOf variant 2.

- Value shape: null. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation

The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Conditional | string or null | When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. `evaluated_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1callback_evaluation-variant-1evaluated_at). |
| `tax_calculation_evaluation_id` | Conditional | string or null | The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. `tax_calculation_evaluation_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1callback_evaluation-variant-1tax_calculation_evaluation_id). |

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1

anyOf OrderTaxCallbackEvaluationPreviousAttributes.

- Optional: `evaluated_at`, `tax_calculation_evaluation_id`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 2

anyOf variant 2.

- Undeclared: `evaluated_at`, `tax_calculation_evaluation_id`.
- Value shape: null. The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1.evaluated_at

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1.evaluated_at variant 1

anyOf variant 1: When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old..

- Value shape: string. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1.evaluated_at variant 2

anyOf variant 2.

- Value shape: null. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1.tax_calculation_evaluation_id

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1.tax_calculation_evaluation_id variant 1

anyOf variant 1: The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID..

- Value shape: string. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. Example: `"tce_01KEZF7C00Z61NNPEAF0CNSXP4"`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.callback_evaluation variant 1.tax_calculation_evaluation_id variant 2

anyOf variant 2.

- Value shape: null. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.components_source

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.components_source variant 1

anyOf variant 1: Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off..

- Value shape: string. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.components_source variant 2

anyOf variant 2.

- Value shape: null. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation

The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Conditional | Array of object or null | The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. `components`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1delivery_charge_calculation-variant-1components). |
| `mode` | Conditional | string or null | Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`. `mode`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1delivery_charge_calculation-variant-1mode). |
| `price_mode` | Conditional | string or null | Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1delivery_charge_calculation-variant-1price_mode). |

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1: `mode` = `"external"`

anyOf DeliveryChargeTaxCalculationRequestPreviousAttributes.

- Optional: `components`, `mode`, `price_mode`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 2

anyOf variant 2.

- Undeclared: `components`, `mode`, `price_mode`.
- Value shape: null. The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.components

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.components variant 1

anyOf variant 1: The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type..

- Value shape: Array of object. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. minItems: `1`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.components variant 2

anyOf variant 2.

- Value shape: null. The tax copied onto each delivery charge, one percentage component per jurisdiction and tax type. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.components variant 1.[] fields 1

Field definitions: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax variant 1.calculation variant 1.components variant 1.[] fields 1](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax-variant-1calculation-variant-1components-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.mode

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.mode variant 1

anyOf variant 1: Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax..

- Value shape: string. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. Values: `"external"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. Optional. If you send it, it must be `external`, because delivery charge templates apply only to orders that use external tax. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.price_mode

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.price_mode variant 1

anyOf variant 1: Whether the delivery charge already includes the tax..

- Value shape: string. Whether the delivery charge already includes the tax. Values: `"additive"`, `"inclusive"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.delivery_charge_calculation variant 1.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery charge already includes the tax. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.enabled

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.enabled variant 1

anyOf variant 1: Whether Flint calculates tax for the order. When `false`, `status` is `not_required`..

- Value shape: boolean. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption

The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1

anyOf OrderTaxExemptionPreviousAttributes.

- Optional: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 2

anyOf variant 2.

- Undeclared: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.
- Value shape: null. The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.certificate_number

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.certificate_number](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1certificate_number).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.coverage

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.coverage](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1coverage).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.customer_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1customer_id).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.customer_tax_exemption_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.customer_tax_exemption_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1customer_tax_exemption_id).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.end_date

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.end_date](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1end_date).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.evidence_reference

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.evidence_reference](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1evidence_reference).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.reason

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.reason](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1reason).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.source

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.source](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1source).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.start_date

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.start_date](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1start_date).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.exemption variant 1.tax_exempt

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_exemption variant 1.tax_exempt](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_exemption-variant-1tax_exempt).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location

The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | Alternative shapes (see declared variants) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `address`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories-variant-1-fields-1suggested_address). |
| `address_source` | Conditional | string or null | Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`. `address_source`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1location-variant-1address_source). |
| `address_type` | Conditional | string or null | The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. `address_type`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1location-variant-1address_type). |
| `customer_id` | Conditional | string or null | ID of the customer whose saved address Flint used, when `address_source` is `customer`. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1location-variant-1customer_id). |
| `fulfillment_id` | Conditional | string or null | ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. `fulfillment_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1location-variant-1fulfillment_id). |
| `location_id` | Conditional | string or null | ID of the pickup store whose address Flint used, when `address_source` is `location`. `location_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestax-variant-1location-variant-1location_id). |

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1

anyOf OrderTaxLocationPreviousAttributes.

- Optional: `address`, `address_source`, `address_type`, `customer_id`, `fulfillment_id`, `location_id`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 2

anyOf variant 2.

- Undeclared: `address`, `address_source`, `address_type`, `customer_id`, `fulfillment_id`, `location_id`.
- Value shape: null. The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.address_advisories variant 1.[] fields 1.suggested_address](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1address_advisories-variant-1-fields-1suggested_address).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address_source

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address_source variant 1

anyOf variant 1: Where the tax address came from..

- Value shape: string. Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address_source variant 2

anyOf variant 2.

- Value shape: null. Where the tax address came from. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address_type

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address_type variant 1

anyOf variant 1: The kind of address Flint used to calculate tax..

- Value shape: string. The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.address_type variant 2

anyOf variant 2.

- Value shape: null. The kind of address Flint used to calculate tax. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.customer_id

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.customer_id variant 1

anyOf variant 1: ID of the customer whose saved address Flint used, when `address_source` is `customer`..

- Value shape: string. ID of the customer whose saved address Flint used, when `address_source` is `customer`. ID of the customer whose saved address Flint used, when `address_source` is `customer`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer whose saved address Flint used, when `address_source` is `customer`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.fulfillment_id

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`..

- Value shape: string. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.location_id

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.location_id variant 1

anyOf variant 1: ID of the pickup store whose address Flint used, when `address_source` is `location`..

- Value shape: string. ID of the pickup store whose address Flint used, when `address_source` is `location`. ID of the pickup store whose address Flint used, when `address_source` is `location`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.location variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pickup store whose address Flint used, when `address_source` is `location`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.mode

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.mode variant 1

anyOf variant 1: Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`)..

- Value shape: string. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.mode variant 2

anyOf variant 2.

- Value shape: null. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.price_mode

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.price_mode variant 1

anyOf variant 1: Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax..

- Value shape: string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.reverse_charge

Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies.

Field definitions: [shared fields](InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.reverse_charge variant 1

anyOf variant 1: Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies.; anyOf TaxReverseChargePreviousAttributes.

- Optional: `customer_tax_id`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.reverse_charge variant 2, 3

anyOf variant 1: Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies.; anyOf variant 2; anyOf variant 2.

- Undeclared: `customer_tax_id`.
- Value shape: null. Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.reverse_charge variant 1.customer_tax_id

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_reverse_charge variant 1.customer_tax_id](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_reverse_charge-variant-1customer_tax_id).

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.status

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.status variant 1

anyOf variant 1: Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`..

- Value shape: string. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`.

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.status variant 2

anyOf variant 2.

- Value shape: null. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.supported_countries

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.supported_countries variant 1

anyOf variant 1: Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address..

- Value shape: Array of string. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.supported_countries variant 2

anyOf variant 2.

- Value shape: null. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.tax_breakdowns

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.tax_breakdowns variant 1

anyOf variant 1: One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

### OrderClosedMerchantEventDataPreviousAttributes.tax variant 1.tax_breakdowns variant 1.[] fields 1

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.tax_breakdowns variant 1.[] fields 1](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1tax_breakdowns-variant-1-fields-1).

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event

Event and tickets this order sold through an event payment link. Absent on other orders.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Conditional | string or null | Where the event takes place. `location`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1location). |
| `name` | Conditional | string or null | Event name when the order was placed. `name`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1name). |
| `starts_at` | Conditional | string or null | When the event starts. RFC 3339 timestamp. `starts_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1starts_at). |
| `ticket_numbers` | Conditional | Array of string or null | Ticket numbers issued for this order. Empty while ticket_status is pending. `ticket_numbers`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1ticket_numbers). |
| `ticket_status` | Conditional | string or null | Whether the order's tickets are issued. Values: `"pending"`, `"issued"`, `"voided"`. `ticket_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1ticket_status). |
| `timezone` | Conditional | string or null | IANA time zone Flint shows the event in. `timezone`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1timezone). |

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1

anyOf TicketedEventPreviousAttributes.

- Optional: `location`, `name`, `starts_at`, `ticket_numbers`, `ticket_status`, `timezone`.

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 2

anyOf variant 2.

- Undeclared: `location`, `name`, `starts_at`, `ticket_numbers`, `ticket_status`, `timezone`.
- Value shape: null. Event and tickets this order sold through an event payment link. Absent on other orders. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.location

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.location variant 1

anyOf variant 1: Where the event takes place..

- Value shape: string. Where the event takes place. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.location variant 2

anyOf variant 2.

- Value shape: null. Where the event takes place. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.name

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.name variant 1

anyOf variant 1: Event name when the order was placed..

- Value shape: string. Event name when the order was placed. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.name variant 2

anyOf variant 2.

- Value shape: null. Event name when the order was placed. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.starts_at

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.starts_at variant 1

anyOf variant 1: When the event starts. RFC 3339 timestamp..

- Value shape: string. When the event starts. RFC 3339 timestamp. When the event starts. RFC 3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.starts_at variant 2

anyOf variant 2.

- Value shape: null. When the event starts. RFC 3339 timestamp. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_numbers

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_numbers variant 1

anyOf variant 1: Ticket numbers issued for this order. Empty while ticket_status is pending..

- Value shape: Array of string. Ticket numbers issued for this order. Empty while ticket_status is pending. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_numbers variant 2

anyOf variant 2.

- Value shape: null. Ticket numbers issued for this order. Empty while ticket_status is pending. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_status

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_status variant 1

anyOf variant 1: Whether the order's tickets are issued..

- Value shape: string. Whether the order's tickets are issued. Values: `"pending"`, `"issued"`, `"voided"`.

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_status variant 2

anyOf variant 2.

- Value shape: null. Whether the order's tickets are issued. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.timezone

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.timezone variant 1

anyOf variant 1: IANA time zone Flint shows the event in..

- Value shape: string. IANA time zone Flint shows the event in. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA time zone Flint shows the event in. 

### OrderClosedMerchantEventDataPreviousAttributes.tips

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1

anyOf variant 1: Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled..

- Value shape: Array of [TipPreviousAttributes](../models/TipPreviousAttributes.md#tippreviousattributes). Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. 

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 2

anyOf variant 2.

- Value shape: null. Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. 

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed tip amount, when the tip is set as an amount. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1description). |
| `effective_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tip amount the order collects. For a percent tip, the resolved amount. |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1name). |
| `order_tip_id` | Optional | string or null | ID of the tip, prefixed `tip_`. `order_tip_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestips-variant-1-fields-1order_tip_id). |
| `payment_intent_allocations` | Optional | Array of [TipPaymentIntentAllocationPreviousAttributes](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributes) or null | How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. `payment_intent_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributespayment_intent_allocations). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1percent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been refunded. |
| `settled_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been paid. |
| `status` | Optional | string or null | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. `status`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `value_settlement_allocations` | Optional | Array of [TipValueSettlementAllocationPreviousAttributes](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributes) or null | How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. `value_settlement_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesvalue_settlement_allocations). |

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.description

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.description](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1description).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.name

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.name](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1name).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.order_tip_id

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.order_tip_id variant 1

anyOf variant 1: ID of the tip, prefixed `tip_`..

- Value shape: string. ID of the tip, prefixed `tip_`. ID of the tip, prefixed `tip_`. Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. 

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.order_tip_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tip, prefixed `tip_`. 

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.payment_intent_allocations

Declared alternatives: [TipPreviousAttributes.payment_intent_allocations](../models/TipPreviousAttributes.md#tippreviousattributespayment_intent_allocations).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.percent

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.requested_tip variant 1.percent](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1requested_tip-variant-1percent).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.status

Declared alternatives: [TipPreviousAttributes.status](../models/TipPreviousAttributes.md#tippreviousattributesstatus).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.value_settlement_allocations

Declared alternatives: [TipPreviousAttributes.value_settlement_allocations](../models/TipPreviousAttributes.md#tippreviousattributesvalue_settlement_allocations).

### OrderClosedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderClosedMerchantEventDataPreviousAttributes.version

### OrderClosedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied..

- Value shape: integer. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: `int64`. 

### OrderClosedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. 

