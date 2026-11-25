[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_review_id` | Optional | string or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. `active_payment_review_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesactive_payment_review_id). |
| `authorization_amounts` | Optional | [OrderAuthorizationAmountsPreviousAttributes](../models/OrderAuthorizationAmountsPreviousAttributes.md#orderauthorizationamountspreviousattributes) or null | The amounts authorized and still capturable on the order's payments. `authorization_amounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesauthorization_amounts). |
| `buyer_contact` | Optional | [CheckoutBuyerContactPreviousAttributes](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributes) or null | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. `buyer_contact`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesbuyer_contact). |
| `buyer_note` | Optional | string or null | A note to the buyer. `buyer_note`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesbuyer_note). |
| `charges` | Optional | Array of [OrderChargePreviousAttributes](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributes) or null | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescharges). |
| `checkout_billing_contact` | Optional | [CheckoutBillingContactPreviousAttributes](../models/CheckoutBillingContactPreviousAttributes.md#checkoutbillingcontactpreviousattributes) or null | Billing name and address collected in Checkout for a successful payment. Omitted for buyer credentials and when Checkout did not collect the details. |
| `checkout_session_ids` | Optional | Array of string or null | IDs of the checkout sessions opened for this order. `checkout_session_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescheckout_session_ids). |
| `client_reference` | Optional | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesclient_reference). |
| `closed_at` | Optional | string or null | When the order last closed. Present exactly when status is closed. `closed_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Flint returns other for an unrecognized reason and may add new values. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason). |
| `closed_reason_message` | Optional | string or null | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. `closed_reason_message`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `custom_field_answers` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustom_field_answers). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | ID of the customer this order belongs to. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributes](../models/DeferredPromotionPreviousAttributes.md#deferredpromotionpreviousattributes) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions). |
| `delivery` | Optional | [OrderDeliverySummaryPreviousAttributes](../models/OrderDeliverySummaryPreviousAttributes.md#orderdeliverysummarypreviousattributes) or null | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. `delivery`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery). |
| `delivery_destination` | Optional | [OrderDeliveryDestinationPreviousAttributes](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributes) or null | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `delivery_destination`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination). |
| `discounts` | Optional | Array of [OrderDiscountPreviousAttributes](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributes) or null | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts). |
| `dispute_status` | Optional | string or null | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: [10 declared values](#orderclosedmerchanteventdatapreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdispute_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status). |
| `fulfillments` | Optional | Array of [WebhookSnapshotFulfillmentPreviousAttributes](../models/WebhookSnapshotFulfillmentPreviousAttributes.md#webhooksnapshotfulfillmentpreviousattributes) or null | Fulfillments created for the order, each covering a set of its line items. `fulfillments`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments). |
| `gift_card_estimate` | Optional | [OrderGiftCardEstimatePreviousAttributes](../models/OrderGiftCardEstimatePreviousAttributes.md#ordergiftcardestimatepreviousattributes) or null | An estimate of how the order balance splits between gift cards and the payment processor. |
| `gift_card_settlements` | Optional | Array of [OrderGiftCardSettlementPreviousAttributes](../models/OrderGiftCardSettlementPreviousAttributes.md#ordergiftcardsettlementpreviousattributes) or null | The gift card redemptions applied to the order's payments. `gift_card_settlements`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_settlements). |
| `gift_card_tender_enabled` | Optional | boolean or null | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. `gift_card_tender_enabled`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_card_tender_enabled). |
| `gift_cards` | Optional | Array of [OrderGiftCardSelectionPreviousAttributes](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributes) or null | Gift cards available to pay the order, with each card's available balance. `gift_cards`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgift_cards). |
| `governing_delivery_selection_id` | Optional | string or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. `governing_delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesgoverning_delivery_selection_id). |
| `handover` | Optional | [OrderHandoverPreviousAttributes](../models/OrderHandoverPreviousAttributes.md#orderhandoverpreviousattributes) or null | Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. `handover`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributeshandover). |
| `internal_note` | Optional | string or null | A note for your team. Buyer reads leave it out. `internal_note`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinternal_note). |
| `inventory_exception_reason` | Optional | string or null | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. `inventory_exception_reason`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_reason). |
| `inventory_exception_resolution_message` | Optional | string or null | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. `inventory_exception_resolution_message`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_resolution_message). |
| `inventory_exception_status` | Optional | string or null | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. `inventory_exception_status`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_exception_status). |
| `inventory_reservation_id` | Optional | string or null | The reservation holding stock for this order, when one exists. `inventory_reservation_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributes](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributes) or null | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. `inventory_routing_source`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinventory_routing_source). |
| `invoice_id` | Optional | string or null | The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. `invoice_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesinvoice_id). |
| `line_items` | Optional | Array of [OrderLineItemPreviousAttributes](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributes) or null | Items the order sells, each with its pricing, tax, and fulfillment quantities. `line_items`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order_id` | Optional | string or null | Unique identifier for this order, prefixed `ord_`. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number). |
| `origin` | Optional | string or null | How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"shop"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. `origin`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesorigin). |
| `paid_at` | Optional | string or null | When the current paid state began, including a final capture that releases the remaining balance. A reversal that reopens the order clears this timestamp. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents created to collect this order. `payment_intent_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Payment intents included when `expand` names `payment_intents`. `payment_intents`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_intents). |
| `payment_link_id` | Optional | string or null | Payment link that created this order or started the subscription it renews. Absent for other orders. Filter GET /v1/orders by payment_link_id to list a link's orders. `payment_link_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespayment_link_id). |
| `payment_status` | Optional | string or null | Collection progress. Reversing a recorded invoice payment can move this back to unpaid or partially_paid. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status). |
| `pending_order_edit_id` | Optional | string or null | The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. `pending_order_edit_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributespending_order_edit_id). |
| `prepayment_order_id` | Optional | string or null | Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. `prepayment_order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesprepayment_order_id). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributes](../models/PricingAmountsPreviousAttributes.md#pricingamountspreviousattributes) or null | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Optional | Array of string or null | IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. `refund_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesrefund_ids). |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status). |
| `return_credit_settlements` | Optional | Array of [OrderReturnCreditSettlementPreviousAttributes](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributes) or null | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. `return_credit_settlements`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_credit_settlements). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. `return_resolution_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesreturn_resolution_id). |
| `settlement_amounts` | Optional | [OrderSettlementAmountsPreviousAttributes](../models/OrderSettlementAmountsPreviousAttributes.md#ordersettlementamountspreviousattributes) or null | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. |
| `shop_id` | Optional | string or null | ID of the shop that started checkout. `shop_id`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesshop_id). |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. An order closed as paid reopens if reversing a recorded invoice payment leaves an outstanding order balance. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus). |
| `subscription` | Optional | [ExpandedSubscriptionSummaryPreviousAttributes](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributes) or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. `subscription`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription). |
| `subscription_cycle` | Optional | integer or null | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. `subscription_cycle`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_cycle). |
| `subscription_delivery_changed_at` | Optional | string or null | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. `subscription_delivery_changed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_changed_at). |
| `subscription_delivery_number` | Optional | integer or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. `subscription_delivery_number`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_delivery_number). |
| `subscription_id` | Optional | string or null | ID of the subscription this order bills. Absent on an order that isn't from a subscription. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_id). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryPreviousAttributes](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributes) or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. `subscription_plan`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessupported_actions). |
| `tax` | Optional | [OrderTaxPreviousAttributes](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributes) or null | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. |
| `ticketed_event` | Optional | [TicketedEventPreviousAttributes](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributes) or null | Event and tickets this order sold through an event payment link. Absent on other orders. `ticketed_event`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event). |
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

- Value shape: string. The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. 

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

Field definitions: [shared fields](ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1

anyOf CheckoutBuyerContactPreviousAttributes.

- Optional: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 2

anyOf variant 2.

- Undeclared: `email`, `is_email_cleared`, `is_phone_cleared`, `phone`, `updated_at`.
- Value shape: null. Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. 

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.email

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.email](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact-variant-1email).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_email_cleared

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.is_email_cleared](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_email_cleared).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.is_phone_cleared

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.is_phone_cleared](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesis_phone_cleared).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.phone

Declared alternatives: [CheckoutBuyerContactPreviousAttributes.phone](../models/CheckoutBuyerContactPreviousAttributes.md#checkoutbuyercontactpreviousattributesphone).

### OrderClosedMerchantEventDataPreviousAttributes.buyer_contact variant 1.updated_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact variant 1.updated_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact-variant-1updated_at).

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

Field definitions: [InvoiceSnapshotPreviousAttributes.charges variant 1.[] fields 1](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributescharges-variant-1-fields-1).

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

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_at).

### OrderClosedMerchantEventDataPreviousAttributes.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

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

anyOf ExpandedCustomerSummaryPreviousAttributes.

- Optional: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 2

anyOf variant 2.

- Undeclared: `created_at`, `customer_id`, `email`, `name`, `phone`, `status`, `updated_at`.
- Value shape: null. Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. 

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.customer_id

Declared alternatives: [BuyerRefundPreviousAttributes.customer variant 1.customer_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributescustomer-variant-1customer_id).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.email

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.email](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.name

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.name](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.phone

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.phone](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone).

### OrderClosedMerchantEventDataPreviousAttributes.customer variant 1.status

Declared alternatives: [ExpandedCustomerSummaryPreviousAttributes.status](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus).

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

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### OrderClosedMerchantEventDataPreviousAttributes.delivery

Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Conditional | string or null | Method used by governing_delivery_selection_id. `delivery_method_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery-variant-1delivery_method_id). |
| `recipient` | Conditional | [DeliveryRecipientResourcePreviousAttributes](../models/DeliveryRecipientResourcePreviousAttributes.md#deliveryrecipientresourcepreviousattributes) or null | Name, email and phone of the recipient recorded by the governing selection. |
| `type` | Conditional | string or null | How the governing selection delivers this order. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/OrderDeliverySummaryPreviousAttributes.md#orderdeliverysummarypreviousattributestype). |

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

### OrderClosedMerchantEventDataPreviousAttributes.delivery variant 1.type

Declared alternatives: [OrderDeliverySummaryPreviousAttributes.type](../models/OrderDeliverySummaryPreviousAttributes.md#orderdeliverysummarypreviousattributestype).

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination

The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Address the order's items are delivered to. `address`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesaddress). |
| `delivery_selection_id` | Conditional | string or null | Delivery selection that controls this destination, when checkout collected it. `delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1delivery_selection_id). |
| `frozen_at` | Conditional | string or null | Time payment froze this destination. `frozen_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdelivery_destination-variant-1frozen_at). |
| `recipient` | Conditional | [OrderDeliveryDestinationRecipientPreviousAttributes](../models/OrderDeliveryDestinationRecipientPreviousAttributes.md#orderdeliverydestinationrecipientpreviousattributes) or null | Who receives the order. Omitted when no recipient was saved. |
| `source` | Conditional | string or null | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. `source`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributessource). |

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1

anyOf OrderDeliveryDestinationPreviousAttributes.

- Optional: `address`, `delivery_selection_id`, `frozen_at`, `recipient`, `source`.

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 2

anyOf variant 2.

- Undeclared: `address`, `delivery_selection_id`, `frozen_at`, `recipient`, `source`.
- Value shape: null. The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.address

Declared alternatives: [OrderDeliveryDestinationPreviousAttributes.address](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesaddress).

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

### OrderClosedMerchantEventDataPreviousAttributes.delivery_destination variant 1.source

Declared alternatives: [OrderDeliveryDestinationPreviousAttributes.source](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributessource).

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
| `customer_facing_name` | Optional | string or null | Name the buyer sees for the discount. `customer_facing_name`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name). |
| `discount_class` | Optional | string or null | Which part of the order the discount reduces. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesdiscount_class). |
| `order_charge_ids` | Optional | Array of string or null | IDs of the charges this discount reduces. `order_charge_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_charge_ids). |
| `order_discount_id` | Optional | string or null | Order discount ID. It starts with ad_. Pass it to POST /v1/orders/{order_id}/discounts/remove to remove the discount. `order_discount_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_discount_id). |
| `order_id` | Optional | string or null | ID of the order the discount applies to. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_id). |
| `order_line_item_ids` | Optional | Array of string or null | IDs of the order line items this discount applies to. `order_line_item_ids`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1order_line_item_ids). |
| `promotion_code` | Optional | string or null | Promotion code used to create this discount. Present only when source is promotion and a code was used. `promotion_code`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributespromotion_code). |
| `promotion_id` | Optional | string or null | Promotion that created this discount. Present only when source is promotion. `promotion_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesdiscounts-variant-1-fields-1promotion_id). |
| `source` | Optional | string or null | Where the discount came from. Values: `"manual"`, `"promotion"`, `"plan_change_credit"`, `"proration"`, `"prepaid_delivery"`. `source`: [declared alternatives](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource). |
| `status` | Optional | string or null | Redemption state of the discount. Values: `"pending"`, `"redeemed"`, `"canceled"`. `status`: [declared alternatives](../models/OrderDiscountPreviousAttributes.md#orderdiscountpreviousattributesstatus). |

### OrderClosedMerchantEventDataPreviousAttributes.discounts variant 1.[] fields 1.customer_facing_name

Declared alternatives: [InvoiceDiscountPreviousAttributes.customer_facing_name](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributescustomer_facing_name).

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

Declared alternatives: [InvoiceDiscountPreviousAttributes.source](../models/InvoiceDiscountPreviousAttributes.md#invoicediscountpreviousattributessource).

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

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1

anyOf variant 1: Fulfillments created for the order, each covering a set of its line items..

- Value shape: Array of ([WebhookSnapshotFulfillmentPreviousAttributes](../models/WebhookSnapshotFulfillmentPreviousAttributes.md#webhooksnapshotfulfillmentpreviousattributes) and [FulfillmentPreviousAttributes](../models/FulfillmentPreviousAttributes.md#fulfillmentpreviousattributes)). Fulfillments created for the order, each covering a set of its line items. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 2

anyOf variant 2.

- Value shape: null. Fulfillments created for the order, each covering a set of its line items. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldPreviousAttributes](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributes) or null | Current hold details. Present exactly when status is on_hold. `active_hold`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1completed_at). |
| `created_at` | Optional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1created_at). |
| `customer_id` | Optional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1customer_id). |
| `delivery_choice_group_id` | Optional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_choice_group_id). |
| `delivery_execution_leg_id` | Optional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_execution_leg_id). |
| `delivery_method_id` | Optional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_method_id). |
| `delivery_selection_id` | Optional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_selection_id). |
| `device_id` | Optional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1device_id). |
| `digital_details` | Optional | [DigitalFulfillmentDetailsPreviousAttributes](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributes) or null | Delivery URL and completion time for a digital fulfillment. `digital_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details). |
| `dispatched_at` | Optional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1dispatched_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `fulfillment_id` | Optional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1fulfillment_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key). |
| `line_items` | Optional | Array of [FulfillmentLineItemPreviousAttributes](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributes) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetailsPreviousAttributes](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributes) or null | Courier, delivery window, and handoff details for a local delivery fulfillment. `local_delivery_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details). |
| `location_id` | Optional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1location_id). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the fulfillment. `metadata`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1order_id). |
| `order_number` | Optional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number). |
| `outcome` | Optional | [FulfillmentOutcomePreviousAttributes](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributes) or null | Terminal outcome details. Present exactly when status is no_show. `outcome`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome). |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages). |
| `packed_at` | Optional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1packed_at). |
| `picked_at` | Optional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1picked_at). |
| `pickup_details` | Optional | [PickupFulfillmentDetailsPreviousAttributes](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributes) or null | Pickup window, pickup mode, and handoff times for a pickup fulfillment. `pickup_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details). |
| `recipient` | Optional | [FulfillmentRecipientPreviousAttributes](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `scheduled_start_at` | Optional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1scheduled_start_at). |
| `service_details` | Optional | [ServiceFulfillmentDetailsPreviousAttributes](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributes) or null | Schedule and completion details for a service fulfillment. `service_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details). |
| `shipment_details` | Optional | [ShipmentFulfillmentDetailsPreviousAttributes](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributes) or null | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. `shipment_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details). |
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

anyOf variant 1: When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded..

- Value shape: string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. 

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

- Value shape: string. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id variant 1

anyOf variant 1: Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id variant 1

anyOf variant 1: Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials..

- Value shape: string. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_selection_id

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

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

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.idempotency_key

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key).

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

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at variant 1

anyOf variant 1: Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction..

- Value shape: string. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. 

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
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4). |
| `requires_authorization` | Optional | boolean or null | Whether the card's current code must be applied again before the order can use it. `requires_authorization`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesrequires_authorization). |

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id variant 1

anyOf variant 1: ID of the gift card selected for the order..

- Value shape: string. ID of the gift card selected for the order. ID of the gift card selected for the order. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card selected for the order. 

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.last4

Declared alternatives: [PaymentAttemptGiftCardRedemptionPreviousAttributes.last4](../models/PaymentAttemptGiftCardRedemptionPreviousAttributes.md#paymentattemptgiftcardredemptionpreviousattributeslast4).

### OrderClosedMerchantEventDataPreviousAttributes.gift_cards variant 1.[] fields 1.requires_authorization

Declared alternatives: [OrderGiftCardSelectionPreviousAttributes.requires_authorization](../models/OrderGiftCardSelectionPreviousAttributes.md#ordergiftcardselectionpreviousattributesrequires_authorization).

### OrderClosedMerchantEventDataPreviousAttributes.governing_delivery_selection_id

### OrderClosedMerchantEventDataPreviousAttributes.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection..

- Value shape: string. ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. 

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

Declared alternatives: [InventoryRoutingSourcePreviousAttributes.type](../models/InventoryRoutingSourcePreviousAttributes.md#inventoryroutingsourcepreviousattributestype).

### OrderClosedMerchantEventDataPreviousAttributes.invoice_id

### OrderClosedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it..

- Value shape: string. The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. 

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
| `catalog_pricing` | Optional | [CatalogPricingPreviousAttributes](../models/CatalogPricingPreviousAttributes.md#catalogpricingpreviousattributes) or null | Price source and applied quantity break frozen for a catalog variant line. Omitted for older lines, custom lines, and bundles. `catalog_pricing`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributescatalog_pricing). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributes](../models/CategoryReferencePreviousAttributes.md#categoryreferencepreviousattributes) or null | Catalog categories of the item. `categories`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributescategories). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Discount value allocated to this line item. |
| `expected_ship_date` | Optional | string or null | Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. `expected_ship_date`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1expected_ship_date). |
| `fulfillment_quantities` | Optional | Array of [OrderLineItemFulfillmentQuantitiesPreviousAttributes](../models/OrderLineItemFulfillmentQuantitiesPreviousAttributes.md#orderlineitemfulfillmentquantitiespreviousattributes) or null | Current quantities for each required fulfillment obligation: one entry for a single item or one per bundle component that requires fulfillment. Quantities use line units for single items and component units for bundles. required_quantity equals unassigned_quantity + assigned_quantity + fulfilled_quantity + canceled_quantity + failed_quantity + removed_quantity. Omitted when the line needs no fulfillment or the order's obligations cannot be computed, including older lines without recorded requirements. `fulfillment_quantities`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities). |
| `fulfillment_requirements` | Optional | [OrderLineItemFulfillmentRequirementsPreviousAttributes](../models/OrderLineItemFulfillmentRequirementsPreviousAttributes.md#orderlineitemfulfillmentrequirementspreviousattributes) or null | Fulfillment requirements fixed when the line item was created. direct describes a single item; components describes each bundle component. Omitted for older line items without recorded requirements. |
| `gift_card_purchase` | Optional | [GiftCardPurchaseSnapshotPreviousAttributes](../models/GiftCardPurchaseSnapshotPreviousAttributes.md#giftcardpurchasesnapshotpreviousattributes) or null | Gift card details for a gift card purchase line. |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `inventory_snapshot` | Optional | [LineItemInventorySnapshotPreviousAttributes](../models/LineItemInventorySnapshotPreviousAttributes.md#lineiteminventorysnapshotpreviousattributes) or null | Whether the line tracks inventory, and the inventory demands fixed when the line was added. `null` when no inventory snapshot was recorded for the line. |
| `license_key_quantity` | Optional | integer or null | Number of license keys promised by this line: quantity when its frozen catalog setting issues keys, otherwise 0. Includes keys for a subscription started by this line; renewal lines report 0. Refunds do not reduce this count. Keys arrive asynchronously after payment, so they may not exist yet when order.paid arrives. Whole-number quantity; fractional quantities are not supported. `license_key_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributeslicense_key_quantity). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Sum of the line item's modifier totals. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the line, with their prices. `modifiers`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_edit_id` | Optional | string or null | The edit that added this line. Null when the line was not added by an order edit. `order_edit_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1order_edit_id). |
| `order_id` | Optional | string or null | Order that owns this record or its referenced line item and charge. `order_id`: [declared alternatives](../models/InventoryReservationActionRequiredMerchantEventDataPreviousAttributes.md#inventoryreservationactionrequiredmerchanteventdatapreviousattributeslines-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | Unique identifier for this order line item, prefixed `li_`. `order_line_item_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `payment_link_line_item_key` | Optional | string or null | The `key` of the payment link line item this line was created from. Match order lines to the link's line items with it instead of by name. Flint sets it when checkout starts and it never changes; metadata updates don't affect it. `null` when the line didn't come from a payment link line item: the order didn't come from a payment link, the line was added to the order later, or the line came from a subscription plan through a subscription signup link. `payment_link_line_item_key`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespayment_link_line_item_key). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1product_id). |
| `product_type` | Optional | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type). |
| `purchased_gift_cards` | Optional | Array of [PurchasedGiftCardPreviousAttributes](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributes) or null | Masked card identities for fully funded units of this purchase line. Partial consideration does not issue a card. `purchased_gift_cards`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `refundable` | Optional | [OrderLineItemRefundablePreviousAttributes](../models/OrderLineItemRefundablePreviousAttributes.md#orderlineitemrefundablepreviousattributes) or null | Remaining quantity and components for an ID-only line refund target. Accounts for original-tender capacity, reversals, accepted refunds, and whole-value edit reservations, including credit transferred to added lines and pending or retryable failed edit refunds. All values are zero when exhausted. Refund eligibility is checked again on submission. |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount of this line already refunded. |
| `refunded_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `refunded_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `release_date` | Optional | string or null | Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. `release_date`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1release_date). |
| `removed_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. Whole line units removed by paid-order edits. For bundles, each removed line unit removes all of its component units. The original quantity and pricing remain the sale record; refunds are tracked separately. `removed_quantity`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesremoved_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `subscription` | Optional | [SubscribedLinePreviousAttributes](../models/SubscribedLinePreviousAttributes.md#subscribedlinepreviousattributes) or null | Recurring offer and cadence frozen for this line at signup. `subscription`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription). |
| `subscription_id` | Optional | string or null | Subscription created for this line after the order is paid. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1subscription_id). |
| `subscription_offer` | Optional | [OrderLineSubscriptionOfferSummaryPreviousAttributes](../models/OrderLineSubscriptionOfferSummaryPreviousAttributes.md#orderlinesubscriptionoffersummarypreviousattributes) or null | Applicable active offer for a one-time line, or the offer terms frozen for a subscribed line. `subscription_offer`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessubscription_offer). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base subtotal plus modifier total, before discounts and tax. |
| `tax` | Optional | [OrderCalculatedLineItemTaxPreviousAttributes](../models/OrderCalculatedLineItemTaxPreviousAttributes.md#ordercalculatedlineitemtaxpreviousattributes) or null | How tax was calculated for this line item. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for this line item, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Subtotal minus discounts, plus tax that is not already included in the price. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype). |
| `unit_dimensions` | Optional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Dimensions of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of one unit before modifiers, discounts, and tax. |
| `unit_weight` | Optional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Weight of one unit fixed when the line was created. Omitted when unknown and for bundle lines. |
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

- Value shape: string. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected calendar ship date in YYYY-MM-DD format, shown once a delivery or payment hold exists. Null when no hold exists yet, or when neither a future copied release_date nor the inventory item supplies an applicable date. A future copied release_date takes precedence even when physical stock covers every unit; otherwise the inventory item's expected ship date applies only to backordered units when it is today or later in the merchant's timezone. Past item dates are omitted and never frozen. The estimate may change before payment and freezes at settlement. Thereafter only a paid-line PATCH changes or clears it; allocation preserves it. Null or past dates add no delay. Earlier fulfillment is permitted. 

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_quantities

Declared alternatives: [OrderLineItemPreviousAttributes.fulfillment_quantities](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesfulfillment_quantities).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.license_key_quantity

Declared alternatives: [OrderLineItemPreviousAttributes.license_key_quantity](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributeslicense_key_quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [OrderLineItemPreviousAttributes.modifiers](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesmodifiers).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_edit_id

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_edit_id variant 1

anyOf variant 1: The edit that added this line. Null when the line was not added by an order edit..

- Value shape: string. The edit that added this line. Null when the line was not added by an order edit. The edit that added this line. Null when the line was not added by an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

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

Declared alternatives: [InvoiceLineItemPreviousAttributes.product_type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributesproduct_type).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.purchased_gift_cards

Declared alternatives: [OrderLineItemPreviousAttributes.purchased_gift_cards](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributespurchased_gift_cards).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.refunded_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.release_date

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.release_date variant 1

anyOf variant 1: Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted..

- Value shape: string. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Future release date copied when the line was created, in YYYY-MM-DD format. Null when the line is not a pre-order. Earlier fulfillment is permitted. Format: `date`. Example: `"2026-08-02"`. 

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

### OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.type

Declared alternatives: [InvoiceLineItemPreviousAttributes.type](../models/InvoiceLineItemPreviousAttributes.md#invoicelineitempreviousattributestype).

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

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### OrderClosedMerchantEventDataPreviousAttributes.origin

### OrderClosedMerchantEventDataPreviousAttributes.origin variant 1

anyOf variant 1: How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin..

- Value shape: string. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"shop"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`.

### OrderClosedMerchantEventDataPreviousAttributes.origin variant 2

anyOf variant 2.

- Value shape: null. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. 

### OrderClosedMerchantEventDataPreviousAttributes.paid_at

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.paid_at](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespaid_at).

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

anyOf variant 1: Payment link that created this order or started the subscription it renews. Absent for other orders. Filter GET /v1/orders by payment_link_id to list a link's orders..

- Value shape: string. Payment link that created this order or started the subscription it renews. Absent for other orders. Filter GET /v1/orders by payment_link_id to list a link's orders. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Payment link that created this order or started the subscription it renews. Absent for other orders. Filter GET /v1/orders by payment_link_id to list a link's orders. 

### OrderClosedMerchantEventDataPreviousAttributes.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id

### OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id variant 1

anyOf variant 1: The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials..

- Value shape: string. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.pending_order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id

### OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id variant 1

anyOf variant 1: Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order..

- Value shape: string. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. 

### OrderClosedMerchantEventDataPreviousAttributes.prepayment_order_id variant 2

anyOf variant 2.

- Value shape: null. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. 

### OrderClosedMerchantEventDataPreviousAttributes.refund_ids

### OrderClosedMerchantEventDataPreviousAttributes.refund_ids variant 1

anyOf variant 1: IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts..

- Value shape: Array of string. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. 

### OrderClosedMerchantEventDataPreviousAttributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. 

### OrderClosedMerchantEventDataPreviousAttributes.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

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

### OrderClosedMerchantEventDataPreviousAttributes.shop_id

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.shop_id](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesshop_id).

### OrderClosedMerchantEventDataPreviousAttributes.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### OrderClosedMerchantEventDataPreviousAttributes.subscription

Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Conditional | integer or null | Day of the month used for monthly and yearly billing in the subscription's billing timezone. Applies only to Flint-owned schedules; 0 when no anchor day is set. `billing_anchor_day`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesbilling_anchor_day). |
| `cancel_at_period_end` | Conditional | boolean or null | True when the subscription is scheduled to cancel instead of renewing. `cancel_at_period_end`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescancel_at_period_end). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `current_period_end_at` | Conditional | string or null | RFC3339 timestamp. `current_period_end_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `current_period_start_at` | Conditional | string or null | RFC3339 timestamp. `current_period_start_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | The customer this subscription bills. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1customer_id). |
| `next_billing_at` | Conditional | string or null | When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. `next_billing_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1next_billing_at). |
| `status` | Conditional | string or null | Where the subscription is in its lifecycle. Each value says what it means. Values: `"trialing"`, `"active"`, `"paused"`, `"past_due"`, `"canceled"`, `"incomplete"`, `"scheduled"`. `status`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesstatus). |
| `subscription_id` | Conditional | string or null | Unique identifier for this subscription, prefixed `sub_`. `subscription_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1subscription_id). |
| `subscription_plan_id` | Conditional | string or null | ID of the subscription plan the terms come from. An empty string when `terms_type` is `subscription_offer`. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription-variant-1subscription_plan_id). |
| `supported_actions` | Conditional | Array of string or null | Merchant lifecycle actions accepted by the subscription's current state. Always present with merchant credentials. Items values: `"cancel"`, `"pause"`, `"resume"`, `"skip_cycle"`, `"renew"`, `"change_plan"`, `"change_quantity"`. `supported_actions`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributessupported_actions). |
| `terms_type` | Conditional | string or null | Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Values: `"subscription_plan"`, `"subscription_offer"`. `terms_type`: [declared alternatives](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesterms_type). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1

anyOf ExpandedSubscriptionSummaryPreviousAttributes.

- Optional: `billing_anchor_day`, `cancel_at_period_end`, `created_at`, `current_period_end_at`, `current_period_start_at`, `customer_id`, `next_billing_at`, `status`, `subscription_id`, `subscription_plan_id`, `supported_actions`, `terms_type`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 2

anyOf variant 2.

- Undeclared: `billing_anchor_day`, `cancel_at_period_end`, `created_at`, `current_period_end_at`, `current_period_start_at`, `customer_id`, `next_billing_at`, `status`, `subscription_id`, `subscription_plan_id`, `supported_actions`, `terms_type`, `updated_at`.
- Value shape: null. Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.billing_anchor_day

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.billing_anchor_day](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesbilling_anchor_day).

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.cancel_at_period_end

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.cancel_at_period_end](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributescancel_at_period_end).

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

anyOf variant 1: When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule..

- Value shape: string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.next_billing_at variant 2

anyOf variant 2.

- Value shape: null. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.status

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.status](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesstatus).

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

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.supported_actions](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributessupported_actions).

### OrderClosedMerchantEventDataPreviousAttributes.subscription variant 1.terms_type

Declared alternatives: [ExpandedSubscriptionSummaryPreviousAttributes.terms_type](../models/ExpandedSubscriptionSummaryPreviousAttributes.md#expandedsubscriptionsummarypreviousattributesterms_type).

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

- Value shape: integer. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: `uint32`. minimum: `2`. maximum: `24`. 

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
| `billing_interval` | Conditional | string or null | Unit of the plan's default billing period. Read with `billing_interval_count`: monthly with a count of 3 bills every three months. A new subscription starts on the pair the buyer chose from `billing_interval_options`, or on this one when they chose none. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval). |
| `billing_interval_count` | Conditional | integer or null | Number of `billing_interval` units between charges on the plan's default pair. `billing_interval_count`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_count). |
| `billing_interval_options` | Conditional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Offered billing interval and count pairs, including the plan's default pair. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Use separate plans or promotions for different prices per interval. `billing_interval_options`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_options). |
| `created_at` | Conditional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `currency` | Conditional | string or null | ISO 4217 currency code. `currency`: [declared alternatives](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances-variant-1-fields-1currency). |
| `description` | Conditional | string or null | Description of the plan. Omitted when none is set. `description`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesdescription). |
| `line_items` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | The lines a subscription on this plan bills each period, in the order you set them. Flint copied each catalog line's details from the catalog when it added the line. `line_items`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items). |
| `name` | Conditional | string or null | Name of the plan. Buyers see it at checkout and on their subscription. `name`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesname). |
| `setup_fee_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment of a new subscription, except one that continues an imported paid period. Omitted when the plan has no setup fee. |
| `status` | Conditional | string or null | Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED while existing subscriptions keep renewing. Archived plans are read-only and their status is set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesstatus). |
| `subscription_plan_id` | Conditional | string or null | Unique identifier for this subscription plan, prefixed `plan_`. `subscription_plan_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributessubscription_plan-variant-1subscription_plan_id). |
| `trial_period_days` | Conditional | integer or null | Days of free trial before the first recurring charge. Omitted or 0 when the plan has no trial. `trial_period_days`: [declared alternatives](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributestrial_period_days). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1

anyOf ExpandedSubscriptionPlanSummaryPreviousAttributes.

- Optional: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `billing_interval_options`, `created_at`, `currency`, `description`, `line_items`, `name`, `setup_fee_money`, `status`, `subscription_plan_id`, `trial_period_days`, `updated_at`.
- Value shape: null. Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_count

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_count](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_count).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.billing_interval_options

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.billing_interval_options](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesbilling_interval_options).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.currency

Declared alternatives: [CustomerReceivablesPreviousAttributes.balances variant 1.[] fields 1.currency](../models/CustomerReceivablesPreviousAttributes.md#customerreceivablespreviousattributesbalances-variant-1-fields-1currency).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.description

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.description](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesdescription).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.line_items

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.line_items](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesline_items).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.name

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.name](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesname).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.status

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.status](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributesstatus).

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id variant 1

anyOf variant 1: Unique identifier for this subscription plan, prefixed `plan_`..

- Value shape: string. Unique identifier for this subscription plan, prefixed `plan_`. Unique identifier for this subscription plan, prefixed `plan_`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this subscription plan, prefixed `plan_`. 

### OrderClosedMerchantEventDataPreviousAttributes.subscription_plan variant 1.trial_period_days

Declared alternatives: [ExpandedSubscriptionPlanSummaryPreviousAttributes.trial_period_days](../models/ExpandedSubscriptionPlanSummaryPreviousAttributes.md#expandedsubscriptionplansummarypreviousattributestrial_period_days).

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

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event

Event and tickets this order sold through an event payment link. Absent on other orders.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location` | Conditional | string or null | Where the event takes place. `location`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributeslocation). |
| `name` | Conditional | string or null | Event name when the order was placed. `name`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesname). |
| `starts_at` | Conditional | string or null | When the event starts. RFC 3339 timestamp. `starts_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesticketed_event-variant-1starts_at). |
| `ticket_numbers` | Conditional | Array of string or null | Ticket numbers issued for this order. Empty while ticket_status is pending. `ticket_numbers`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesticket_numbers). |
| `ticket_status` | Conditional | string or null | Whether the order's tickets are issued. Values: `"pending"`, `"issued"`, `"voided"`. `ticket_status`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesticket_status). |
| `timezone` | Conditional | string or null | IANA time zone Flint shows the event in. `timezone`: [declared alternatives](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributestimezone). |

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1

anyOf TicketedEventPreviousAttributes.

- Optional: `location`, `name`, `starts_at`, `ticket_numbers`, `ticket_status`, `timezone`.

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 2

anyOf variant 2.

- Undeclared: `location`, `name`, `starts_at`, `ticket_numbers`, `ticket_status`, `timezone`.
- Value shape: null. Event and tickets this order sold through an event payment link. Absent on other orders. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.location

Declared alternatives: [TicketedEventPreviousAttributes.location](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributeslocation).

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.name

Declared alternatives: [TicketedEventPreviousAttributes.name](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesname).

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.starts_at

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.starts_at variant 1

anyOf variant 1: When the event starts. RFC 3339 timestamp..

- Value shape: string. When the event starts. RFC 3339 timestamp. When the event starts. RFC 3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.starts_at variant 2

anyOf variant 2.

- Value shape: null. When the event starts. RFC 3339 timestamp. 

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_numbers

Declared alternatives: [TicketedEventPreviousAttributes.ticket_numbers](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesticket_numbers).

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.ticket_status

Declared alternatives: [TicketedEventPreviousAttributes.ticket_status](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributesticket_status).

### OrderClosedMerchantEventDataPreviousAttributes.ticketed_event variant 1.timezone

Declared alternatives: [TicketedEventPreviousAttributes.timezone](../models/TicketedEventPreviousAttributes.md#ticketedeventpreviousattributestimezone).

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
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription). |
| `effective_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tip amount the order collects. For a percent tip, the resolved amount. |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname). |
| `order_tip_id` | Optional | string or null | ID of the tip, prefixed `tip_`. `order_tip_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributestips-variant-1-fields-1order_tip_id). |
| `payment_intent_allocations` | Optional | Array of [TipPaymentIntentAllocationPreviousAttributes](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributes) or null | How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. `payment_intent_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributespayment_intent_allocations). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been refunded. |
| `settled_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been paid. |
| `status` | Optional | string or null | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. `status`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `value_settlement_allocations` | Optional | Array of [TipValueSettlementAllocationPreviousAttributes](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributes) or null | How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. `value_settlement_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesvalue_settlement_allocations). |

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.description

Declared alternatives: [InvoiceTipPreviousAttributes.description](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderClosedMerchantEventDataPreviousAttributes.tips variant 1.[] fields 1.name

Declared alternatives: [InvoiceTipPreviousAttributes.name](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname).

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

Declared alternatives: [InvoiceTipPreviousAttributes.percent](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent).

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

