[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedInstalledMerchantsEventInput

The `order.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"order.closed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### OrderClosedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [WebhookOrderInput](../models/WebhookOrderInput.md#webhookorderinput) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`, `setup_collection`. `object`: [field definitions](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributes). |

### OrderClosedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit these fields: `buyer_actions`, `active_payment_attempt`, `payment_collection`, `setup_collection`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_review_id` | Optional | string or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. |
| `authorization_amounts` | Optional | [OrderAuthorizationAmountsInput](../models/OrderAuthorizationAmountsInput.md#orderauthorizationamountsinput) | The amounts authorized and still capturable on the order's payments. The amounts authorized and still capturable on an order's payments, with the authorization expiry. |
| `buyer_contact` | Optional | [CheckoutBuyerContactInput](../models/CheckoutBuyerContactInput.md#checkoutbuyercontactinput) | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. Buyer contact supplied with payment or saved during checkout. |
| `buyer_note` | Optional | string | A note to the buyer. |
| `charges` | Required | Array of [OrderChargeInput](../models/OrderChargeInput.md#orderchargeinput) | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. |
| `checkout_session_ids` | Required | Array of string | IDs of the checkout sessions opened for this order. Items: Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `client_reference` | Optional | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. minLength: `1`. maxLength: `255`. |
| `closed_at` | Optional | string | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `closed_reason` | Optional | string | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. |
| `closed_reason_message` | Optional | string | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `custom_field_answers` | Optional | Array of [CustomFieldAnswerInput](../models/CustomFieldAnswerInput.md#customfieldanswerinput) | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: `20`. |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | ID of the customer this order belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `deferred_promotions` | Required | Array of [DeferredPromotionInput](../models/DeferredPromotionInput.md#deferredpromotioninput) | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. |
| `delivery` | Optional | [OrderDeliverySummaryInput](../models/OrderDeliverySummaryInput.md#orderdeliverysummaryinput) | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. Method, type and recipient of governing_delivery_selection_id. delivery_destination contains the resolved address. These values describe the same selection. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationInput](../models/OrderDeliveryDestinationInput.md#orderdeliverydestinationinput) | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Where an order is delivered: the address, the recipient, and where the destination came from. |
| `discounts` | Required | Array of [OrderDiscountInput](../models/OrderDiscountInput.md#orderdiscountinput) | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. |
| `dispute_status` | Optional | string | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: [10 declared values](#orderclosedinstalledmerchantseventinputdataobject-dispute_status-values). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_status` | Optional | string | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. |
| `fulfillments` | Required | Array of [WebhookSnapshotFulfillmentInput](../models/WebhookSnapshotFulfillmentInput.md#webhooksnapshotfulfillmentinput) | Fulfillments created for the order, each covering a set of its line items. |
| `gift_card_estimate` | Optional | [OrderGiftCardEstimateInput](../models/OrderGiftCardEstimateInput.md#ordergiftcardestimateinput) | An estimate of how the order balance splits between gift cards and the payment processor. An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it. |
| `gift_card_settlements` | Required | Array of [OrderGiftCardSettlementInput](../models/OrderGiftCardSettlementInput.md#ordergiftcardsettlementinput) | The gift card redemptions applied to the order's payments. |
| `gift_card_tender_enabled` | Required | boolean | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. |
| `gift_cards` | Required | Array of [OrderGiftCardSelectionInput](../models/OrderGiftCardSelectionInput.md#ordergiftcardselectioninput) | Gift cards available to pay the order, with each card's available balance. |
| `governing_delivery_selection_id` | Required | string or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `handover` | Optional | [OrderHandoverInput](../models/OrderHandoverInput.md#orderhandoverinput) | Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection. |
| `internal_note` | Optional | string | A note for your team. Buyer reads leave it out. |
| `inventory_exception_reason` | Optional | string | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. |
| `inventory_exception_resolution_message` | Optional | string | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. |
| `inventory_exception_status` | Optional | string | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. |
| `inventory_reservation_id` | Optional | string | The reservation holding stock for this order, when one exists. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceInput](../models/InventoryRoutingSourceInput.md#inventoryroutingsourceinput) | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. |
| `invoice_id` | Required | string or null | The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `line_items` | Required | Array of [OrderLineItemInput](../models/OrderLineItemInput.md#orderlineiteminput) | Items the order sells, each with its pricing, tax, and fulfillment quantities. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order_id` | Required | string | Unique identifier for this order, prefixed `ord_`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable order number for receipts and merchant reference. |
| `origin` | Optional | string | How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. |
| `paid_at` | Required | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `payment_intent_ids` | Required | Array of string | IDs of the payment intents created to collect this order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) | Payment intents included when `expand` names `payment_intents`. |
| `payment_link_id` | Optional | string | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. |
| `payment_status` | Required | string | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. |
| `pending_order_edit_id` | Optional | string or null | The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. |
| `prepayment_order_id` | Required | string or null | Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `pricing_amounts` | Required | [PricingAmountsInput](../models/PricingAmountsInput.md#pricingamountsinput) | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Required | Array of string | IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refund_status` | Required | string | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. |
| `return_credit_settlements` | Required | Array of [OrderReturnCreditSettlementInput](../models/OrderReturnCreditSettlementInput.md#orderreturncreditsettlementinput) | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. |
| `return_resolution_id` | Optional | string | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `settlement_amounts` | Required | [OrderSettlementAmountsInput](../models/OrderSettlementAmountsInput.md#ordersettlementamountsinput) | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. The bill settlement amounts plus order overpayments, settled tips, debt discharged by final capture, and value order edits removed. Money collected, returned, waived, and still owed on a bill. Money collected, returned, waived, and still owed on a bill. |
| `status` | Required | string | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. |
| `subscription` | Optional | [ExpandedSubscriptionSummaryInput](../models/ExpandedSubscriptionSummaryInput.md#expandedsubscriptionsummaryinput) or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. |
| `subscription_cycle` | Optional | integer | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: `uint64`. minimum: `0`. |
| `subscription_delivery_changed_at` | Optional | string | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `subscription_delivery_number` | Required | integer or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: `uint32`. minimum: `2`. maximum: `24`. |
| `subscription_id` | Optional | string | ID of the subscription this order bills. Absent on an order that isn't from a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryInput](../models/ExpandedSubscriptionPlanSummaryInput.md#expandedsubscriptionplansummaryinput) or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `supported_actions` | Optional | Array of string | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. |
| `tax` | Required | [OrderTaxInput](../models/OrderTaxInput.md#ordertaxinput) | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns. |
| `ticketed_event` | Optional | [TicketedEventInput](../models/TicketedEventInput.md#ticketedeventinput) | Event and tickets this order sold through an event payment link. Absent on other orders. Event details for a ticketed order: name, location, start time, time zone, and the tickets issued. |
| `tips` | Required | Array of [TipInput](../models/TipInput.md#tipinput) | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: `int64`. |

#### OrderClosedInstalledMerchantsEventInput.data.object dispute_status values

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

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_review_id` | Optional | string or null | The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. `active_payment_review_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesactive_payment_review_id). |
| `authorization_amounts` | Optional | [OrderAuthorizationAmountsPreviousAttributesInput](../models/OrderAuthorizationAmountsPreviousAttributesInput.md#orderauthorizationamountspreviousattributesinput) or null | The amounts authorized and still capturable on the order's payments. |
| `buyer_contact` | Optional | [CheckoutBuyerContactPreviousAttributesInput](../models/CheckoutBuyerContactPreviousAttributesInput.md#checkoutbuyercontactpreviousattributesinput) or null | Email and phone saved when payment started, from the pay request's buyer_contact or the paying checkout session's saved contact. It does not change the linked customer. |
| `buyer_note` | Optional | string or null | A note to the buyer. `buyer_note`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesbuyer_note). |
| `charges` | Optional | Array of [OrderChargePreviousAttributesInput](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinput) or null | Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. `charges`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributescharges). |
| `checkout_session_ids` | Optional | Array of string or null | IDs of the checkout sessions opened for this order. `checkout_session_ids`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributescheckout_session_ids). |
| `client_reference` | Optional | string or null | The reference the payment link URL or resolve request carried, such as your user ID. `null` when none was sent or checkout did not start from a payment link. Returned only to merchant credentials; omitted for buyer credentials. Set by the buyer's browser, so treat it as a claim, not proof of identity. Always present with merchant credentials. `client_reference`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesclient_reference). |
| `closed_at` | Optional | string or null | When the order closed. Present exactly when status is closed. Set once at the transition and never changed. `closed_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_at). |
| `closed_reason` | Optional | string or null | Why the order closed. Present exactly when status is closed. Set once at closure. Unrecognized reasons are returned as other; new values may be added. Values: `"invoice_voided"`, `"paid"`, `"closed_by_merchant"`, `"checkout_expired"`, `"written_off"`, `"superseded"`, `"return_resolution_canceled"`, `"other"`. `closed_reason`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_reason). |
| `closed_reason_message` | Optional | string or null | The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. `closed_reason_message`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesclosed_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `custom_field_answers` | Optional | Array of [CustomFieldAnswerPreviousAttributesInput](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput) or null | The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_&lt;key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. `custom_field_answers`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributescustom_field_answers). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributesInput](../models/ExpandedCustomerSummaryPreviousAttributesInput.md#expandedcustomersummarypreviousattributesinput) or null | Customer summary included when `expand` names `customer`; `null` when expanded and no customer is linked. Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer this order belongs to. `customer_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `deferred_promotions` | Optional | Array of [DeferredPromotionPreviousAttributesInput](../models/DeferredPromotionPreviousAttributesInput.md#deferredpromotionpreviousattributesinput) or null | Promotions accepted at subscription signup. They attach when the subscription is provisioned and first discount its first charged cycle. They do not discount this order and are separate from discounts and order totals. Always present; empty when no promotions are deferred. `deferred_promotions`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputdeferred_promotions). |
| `delivery` | Optional | [OrderDeliverySummaryPreviousAttributesInput](../models/OrderDeliverySummaryPreviousAttributesInput.md#orderdeliverysummarypreviousattributesinput) or null | Method, type and recipient of governing_delivery_selection_id. The address remains in delivery_destination. Omitted when no shipment or local-delivery selection governs the order. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationPreviousAttributesInput](../models/OrderDeliveryDestinationPreviousAttributesInput.md#orderdeliverydestinationpreviousattributesinput) or null | The shipment or local-delivery destination committed for this order. Payment freezes this value; fulfillment recipient changes do not replace it. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `discounts` | Optional | Array of [OrderDiscountPreviousAttributesInput](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinput) or null | Discounts applied to the order, each with its amount, status, and the line items and charges it covers. `discounts`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesdiscounts). |
| `dispute_status` | Optional | string or null | Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: [10 declared values](#orderclosedinstalledmerchantseventinputdataprevious_attributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesdispute_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `fulfillment_status` | Optional | string or null | Aggregate progress across the order's fulfillment quantities. Values: `"not_fulfilled"`, `"partially_fulfilled"`, `"fulfilled"`, `"canceled"`, `"not_applicable"`, `"closed"`. `fulfillment_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputfulfillment_status). |
| `fulfillments` | Optional | Array of [WebhookSnapshotFulfillmentPreviousAttributesInput](../models/WebhookSnapshotFulfillmentPreviousAttributesInput.md#webhooksnapshotfulfillmentpreviousattributesinput) or null | Fulfillments created for the order, each covering a set of its line items. `fulfillments`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesfulfillments). |
| `gift_card_estimate` | Optional | [OrderGiftCardEstimatePreviousAttributesInput](../models/OrderGiftCardEstimatePreviousAttributesInput.md#ordergiftcardestimatepreviousattributesinput) or null | An estimate of how the order balance splits between gift cards and the payment processor. |
| `gift_card_settlements` | Optional | Array of [OrderGiftCardSettlementPreviousAttributesInput](../models/OrderGiftCardSettlementPreviousAttributesInput.md#ordergiftcardsettlementpreviousattributesinput) or null | The gift card redemptions applied to the order's payments. `gift_card_settlements`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesgift_card_settlements). |
| `gift_card_tender_enabled` | Optional | boolean or null | Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. `gift_card_tender_enabled`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesgift_card_tender_enabled). |
| `gift_cards` | Optional | Array of [OrderGiftCardSelectionPreviousAttributesInput](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinput) or null | Gift cards available to pay the order, with each card's available balance. `gift_cards`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesgift_cards). |
| `governing_delivery_selection_id` | Optional | string or null | ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. `governing_delivery_selection_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesgoverning_delivery_selection_id). |
| `handover` | Optional | [OrderHandoverPreviousAttributesInput](../models/OrderHandoverPreviousAttributesInput.md#orderhandoverpreviousattributesinput) or null | Carry-out handover: every physical item is handed to the buyer at this location when the order is paid, in place of a delivery selection. Payment then creates one completed `handover` fulfillment. Absent without a handover. |
| `internal_note` | Optional | string or null | A note for your team. Buyer reads leave it out. `internal_note`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesinternal_note). |
| `inventory_exception_reason` | Optional | string or null | Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`. `inventory_exception_reason`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesinventory_exception_reason). |
| `inventory_exception_resolution_message` | Optional | string or null | The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. `inventory_exception_resolution_message`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesinventory_exception_resolution_message). |
| `inventory_exception_status` | Optional | string or null | Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`. `inventory_exception_status`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesinventory_exception_status). |
| `inventory_reservation_id` | Optional | string or null | The reservation holding stock for this order, when one exists. `inventory_reservation_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesinventory_reservation_id). |
| `inventory_routing_source` | Optional | [InventoryRoutingSourcePreviousAttributesInput](../models/InventoryRoutingSourcePreviousAttributesInput.md#inventoryroutingsourcepreviousattributesinput) or null | Where this order's tracked demand is routed. Required before an order containing tracked variants can hold stock. |
| `invoice_id` | Optional | string or null | The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. `invoice_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `line_items` | Optional | Array of [OrderLineItemPreviousAttributesInput](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinput) or null | Items the order sells, each with its pricing, tax, and fulfillment quantities. `line_items`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesline_items). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `order_id` | Optional | string or null | Unique identifier for this order, prefixed `ord_`. `order_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `order_number` | Optional | string or null | Human-readable order number for receipts and merchant reference. `order_number`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputorder_number). |
| `origin` | Optional | string or null | How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`. `origin`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesorigin). |
| `paid_at` | Optional | string or null | When `payment_status` became `paid`, including a final capture that releases the remaining balance. Set once and never changed, including after refunds. `null` when `payment_status` isn't `paid`, including an order whose balance was written off without being paid. `paid_at`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpaid_at). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents created to collect this order. `payment_intent_ids`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributespayment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributesInput](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinput) or null | Payment intents included when `expand` names `payment_intents`. `payment_intents`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributespayment_intents). |
| `payment_link_id` | Optional | string or null | Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. `payment_link_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributespayment_link_id). |
| `payment_status` | Optional | string or null | Collection progress. An invoice write-off also completes collection without receiving the written-off amount. Values: `"unpaid"`, `"partially_paid"`, `"paid"`. `payment_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpayment_status). |
| `pending_order_edit_id` | Optional | string or null | The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. `pending_order_edit_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributespending_order_edit_id). |
| `prepayment_order_id` | Optional | string or null | Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. `prepayment_order_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesprepayment_order_id). |
| `pricing_amounts` | Optional | [PricingAmountsPreviousAttributesInput](../models/PricingAmountsPreviousAttributesInput.md#pricingamountspreviousattributesinput) or null | The order's money totals: subtotal, discounts, charges, tax, requested tip, and total. |
| `refund_ids` | Optional | Array of string or null | IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. `refund_ids`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesrefund_ids). |
| `refund_status` | Optional | string or null | Refund progress for collected money. Refunds with `reason` `payment_returned` return money the order never received and don't count. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputrefund_status). |
| `return_credit_settlements` | Optional | Array of [OrderReturnCreditSettlementPreviousAttributesInput](../models/OrderReturnCreditSettlementPreviousAttributesInput.md#orderreturncreditsettlementpreviousattributesinput) or null | Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. `return_credit_settlements`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesreturn_credit_settlements). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. `return_resolution_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesreturn_resolution_id). |
| `settlement_amounts` | Optional | [OrderSettlementAmountsPreviousAttributesInput](../models/OrderSettlementAmountsPreviousAttributesInput.md#ordersettlementamountspreviousattributesinput) or null | How much of the order has been paid, refunded, credited, written off, and settled as tips, and what is still outstanding. |
| `status` | Optional | string or null | Whether the order still accepts changes and new payments. Refunds, fulfillment, disputes, returns, and metadata or note edits continue on a closed order. Values: `"open"`, `"closed"`. `status`: [declared alternatives](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputstatus). |
| `subscription` | Optional | [ExpandedSubscriptionSummaryPreviousAttributesInput](../models/ExpandedSubscriptionSummaryPreviousAttributesInput.md#expandedsubscriptionsummarypreviousattributesinput) or null | Subscription summary included when `expand` names `subscription`; `null` when expanded and this order does not bill a subscription. Present only when `expand` includes `subscription`; `null` when expanded and there is no related subscription. |
| `subscription_cycle` | Optional | integer or null | Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. `subscription_cycle`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributessubscription_cycle). |
| `subscription_delivery_changed_at` | Optional | string or null | Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. `subscription_delivery_changed_at`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributessubscription_delivery_changed_at). |
| `subscription_delivery_number` | Optional | integer or null | Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. `subscription_delivery_number`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributessubscription_delivery_number). |
| `subscription_id` | Optional | string or null | ID of the subscription this order bills. Absent on an order that isn't from a subscription. `subscription_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributessubscription_id). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummaryPreviousAttributesInput](../models/ExpandedSubscriptionPlanSummaryPreviousAttributesInput.md#expandedsubscriptionplansummarypreviousattributesinput) or null | Plan summary included when `expand` names `subscription_plan`; `null` when expanded and this order does not bill a subscription plan. Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. `subscription_plan_id`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributessubscription_plan_id). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`. `supported_actions`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `tax` | Optional | [OrderTaxPreviousAttributesInput](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinput) or null | The order's tax state: whether tax is enabled, its status, location, exemption, and per-jurisdiction rows. |
| `ticketed_event` | Optional | [TicketedEventPreviousAttributesInput](../models/TicketedEventPreviousAttributesInput.md#ticketedeventpreviousattributesinput) or null | Event and tickets this order sold through an event payment link. Absent on other orders. |
| `tips` | Optional | Array of [TipPreviousAttributesInput](../models/TipPreviousAttributesInput.md#tippreviousattributesinput) or null | Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. `tips`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributestips). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. `version`: [declared alternatives](../models/OrderClosedInstalledMerchantsEventInput.md#orderclosedinstalledmerchantseventinputdataprevious_attributesversion). |

#### OrderClosedInstalledMerchantsEventInput.data.previous_attributes dispute_status values

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

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.active_payment_review_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.active_payment_review_id variant 1

anyOf variant 1: The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials..

- Value shape: string. The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.active_payment_review_id variant 2

anyOf variant 2.

- Value shape: null. The earliest open or resolving payment review on this order's counted payments. `null` when no review is open or resolving. List reviews with GET /v1/payment-reviews?order_id=&status=open. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.buyer_note

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.buyer_note variant 1

anyOf variant 1: A note to the buyer..

- Value shape: string. A note to the buyer. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.buyer_note variant 2

anyOf variant 2.

- Value shape: null. A note to the buyer. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.charges

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.charges variant 1

anyOf variant 1: Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount..

- Value shape: Array of [OrderChargePreviousAttributesInput](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinput). Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.charges variant 2

anyOf variant 2.

- Value shape: null. Charges added to the order, such as delivery or service fees, each with its applied amount, tax, and refunded amount. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_ids

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_ids variant 1

anyOf variant 1: IDs of the checkout sessions opened for this order..

- Value shape: Array of string. IDs of the checkout sessions opened for this order. Items: Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the checkout sessions opened for this order. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.client_reference

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEventInput.data.previous_attributes.client_reference](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesclient_reference).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.closed_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.closed_at](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_at).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.closed_reason

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.closed_reason](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputclosed_reason).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.closed_reason_message

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.closed_reason_message variant 1

anyOf variant 1: The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer..

- Value shape: string. The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.closed_reason_message variant 2

anyOf variant 2.

- Value shape: null. The caller note supplied when closing the order. System closures leave it absent. It is not shown to the buyer. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.custom_field_answers

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.custom_field_answers variant 1

anyOf variant 1: The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials..

- Value shape: (Array of ([CustomFieldAnswerPreviousAttributesInput](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput) and ([CustomFieldAnswerTextPreviousAttributesInput](../models/CustomFieldAnswerTextPreviousAttributesInput.md#customfieldanswertextpreviousattributesinput) or [CustomFieldAnswerTextareaPreviousAttributesInput](../models/CustomFieldAnswerTextareaPreviousAttributesInput.md#customfieldanswertextareapreviousattributesinput) or [CustomFieldAnswerDropdownPreviousAttributesInput](../models/CustomFieldAnswerDropdownPreviousAttributesInput.md#customfieldanswerdropdownpreviousattributesinput) or [CustomFieldAnswerCheckboxPreviousAttributesInput](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinput)))). The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. maxItems: `20`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.custom_field_answers variant 2

anyOf variant 2.

- Value shape: null. The buyer's answers to the payment link's custom fields, recorded when checkout started, in the order the link showed the fields. Each answer keeps the field's key, label, and type from that moment, so later changes to the link don't change it. Optional fields the buyer left blank are left out. Read-only. Empty when the order didn't come from a payment link, the link had no custom fields, or the buyer answered none. Orders created before Flint recorded answers here also return an empty list and keep their answers in `metadata` as `custom_field_<key>`. Deleting the customer removes the answers. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.customer_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer this order belongs to..

- Value shape: string. ID of the customer this order belongs to. ID of the customer this order belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer this order belongs to. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.deferred_promotions

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.deferred_promotions](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputdeferred_promotions).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.discounts

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.discounts variant 1

anyOf variant 1: Discounts applied to the order, each with its amount, status, and the line items and charges it covers..

- Value shape: Array of [OrderDiscountPreviousAttributesInput](../models/OrderDiscountPreviousAttributesInput.md#orderdiscountpreviousattributesinput). Discounts applied to the order, each with its amount, status, and the line items and charges it covers. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.discounts variant 2

anyOf variant 2.

- Value shape: null. Discounts applied to the order, each with its amount, status, and the line items and charges it covers. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.dispute_status

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.dispute_status variant 1

anyOf variant 1: Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials..

- Value shape: string. Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. Values: `"none"`, `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Aggregate dispute state across the order's counted payment intents, excluding payment_returned. Always returned to merchant credentials and omitted from buyer reads. Open states take precedence in this order: needs_response, under_review, inquiry_needs_response, inquiry_under_review, other. Otherwise the most severe closed state wins: lost, won, prevented, inquiry_closed; none when no disputes count. List individual cases with GET /v1/disputes?order_id={order_id}. Always present with merchant credentials. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.fulfillment_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.fulfillment_status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputfulfillment_status).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.fulfillments

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.fulfillments variant 1

anyOf variant 1: Fulfillments created for the order, each covering a set of its line items..

- Value shape: Array of ([WebhookSnapshotFulfillmentPreviousAttributesInput](../models/WebhookSnapshotFulfillmentPreviousAttributesInput.md#webhooksnapshotfulfillmentpreviousattributesinput) and [FulfillmentPreviousAttributesInput](../models/FulfillmentPreviousAttributesInput.md#fulfillmentpreviousattributesinput)). Fulfillments created for the order, each covering a set of its line items. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.fulfillments variant 2

anyOf variant 2.

- Value shape: null. Fulfillments created for the order, each covering a set of its line items. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_card_settlements

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_card_settlements variant 1

anyOf variant 1: The gift card redemptions applied to the order's payments..

- Value shape: Array of [OrderGiftCardSettlementPreviousAttributesInput](../models/OrderGiftCardSettlementPreviousAttributesInput.md#ordergiftcardsettlementpreviousattributesinput). The gift card redemptions applied to the order's payments. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_card_settlements variant 2

anyOf variant 2.

- Value shape: null. The gift card redemptions applied to the order's payments. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_card_tender_enabled

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_card_tender_enabled variant 1

anyOf variant 1: Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts..

- Value shape: boolean. Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_card_tender_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether gift cards can pay for this order now. Gift cards pay only USD orders that still accept changes, are not subscription purchases, and whose merchant has at least one gift card that is not closed in this environment. Gift cards cannot fund gift card purchases; this is false when those purchases leave no amount eligible for gift card tender. Recomputed on each read; a spent but open card still counts. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_cards

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_cards variant 1

anyOf variant 1: Gift cards available to pay the order, with each card's available balance..

- Value shape: Array of [OrderGiftCardSelectionPreviousAttributesInput](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinput). Gift cards available to pay the order, with each card's available balance. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.gift_cards variant 2

anyOf variant 2.

- Value shape: null. Gift cards available to pay the order, with each card's available balance. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.governing_delivery_selection_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.governing_delivery_selection_id variant 1

anyOf variant 1: ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection..

- Value shape: string. ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.governing_delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery selection that governs this order, including pickup choices without a delivery destination: the checkout's provisional selection before payment, and the selection a payment committed after. Read it with GET /v1/delivery-selections/{delivery_selection_id}. Null when no selection governs the order. While set, change the destination through the delivery selection. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.internal_note

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.internal_note variant 1

anyOf variant 1: A note for your team. Buyer reads leave it out..

- Value shape: string. A note for your team. Buyer reads leave it out. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.internal_note variant 2

anyOf variant 2.

- Value shape: null. A note for your team. Buyer reads leave it out. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_reason

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_reason variant 1

anyOf variant 1: Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added..

- Value shape: string. Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. Values: `"inventory_deduction_failed"`, `"inventory_handoff_failed"`, `"auto_refund_required"`, `"auto_refund_failed"`, `"policy_resolution_failed"`, `"other"`.

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_reason variant 2

anyOf variant 2.

- Value shape: null. Why inventory could not be committed after payment. The cause remains after resolution. Omitted when no reason was recorded. Unrecognized reasons are returned as other; new values may be added. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_resolution_message

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_resolution_message variant 1

anyOf variant 1: The merchant note supplied when resolving the inventory exception. It is not shown to the buyer..

- Value shape: string. The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_resolution_message variant 2

anyOf variant 2.

- Value shape: null. The merchant note supplied when resolving the inventory exception. It is not shown to the buyer. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_status

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_status variant 1

anyOf variant 1: Whether an inventory problem after payment needs attention..

- Value shape: string. Whether an inventory problem after payment needs attention. Values: `"paid_inventory_failed"`, `"resolved"`.

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_exception_status variant 2

anyOf variant 2.

- Value shape: null. Whether an inventory problem after payment needs attention. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_reservation_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_reservation_id variant 1

anyOf variant 1: The reservation holding stock for this order, when one exists..

- Value shape: string. The reservation holding stock for this order, when one exists. The reservation holding stock for this order, when one exists. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.inventory_reservation_id variant 2

anyOf variant 2.

- Value shape: null. The reservation holding stock for this order, when one exists. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it..

- Value shape: string. The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice associated with this order. Null when the order has no invoice. A replacement invoice replaces this ID; voiding an invoice preserves it. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.line_items

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: Items the order sells, each with its pricing, tax, and fulfillment quantities..

- Value shape: Array of [OrderLineItemPreviousAttributesInput](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinput). Items the order sells, each with its pricing, tax, and fulfillment quantities. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Items the order sells, each with its pricing, tax, and fulfillment quantities. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.order_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: Unique identifier for this order, prefixed `ord_`..

- Value shape: string. Unique identifier for this order, prefixed `ord_`. Unique identifier for this order, prefixed `ord_`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order, prefixed `ord_`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.order_number

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.order_number](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputorder_number).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.origin

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.origin variant 1

anyOf variant 1: How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin..

- Value shape: string. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. Values: `"virtual_terminal"`, `"payment_link"`, `"checkout"`, `"api"`, `"subscription"`, `"invoice"`.

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.origin variant 2

anyOf variant 2.

- Value shape: null. How the order was created. invoice means a Quick Pay invoice created the order; attaching an invoice to an existing order preserves its origin. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.paid_at

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.paid_at](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpaid_at).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents created to collect this order..

- Value shape: Array of string. IDs of the payment intents created to collect this order. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents created to collect this order. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_intents

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_intents variant 1

anyOf variant 1: Payment intents included when `expand` names `payment_intents`..

- Value shape: Array of [ExpandedPaymentIntentSummaryPreviousAttributesInput](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinput). Payment intents included when `expand` names `payment_intents`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_intents variant 2

anyOf variant 2.

- Value shape: null. Payment intents included when `expand` names `payment_intents`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 1

anyOf variant 1: Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders..

- Value shape: string. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Payment link whose checkout created this order. Absent for orders that did not come from a payment link. Filter GET /v1/orders by payment_link_id to list a link's orders. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.payment_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.payment_status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputpayment_status).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.pending_order_edit_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.pending_order_edit_id variant 1

anyOf variant 1: The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials..

- Value shape: string. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.pending_order_edit_id variant 2

anyOf variant 2.

- Value shape: null. The order edit waiting for its balance payment. While it is set, the units that edit removes can't join a fulfillment and the order refuses another edit. `null` when there is none. Omitted for buyer credentials. Always present with merchant credentials. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.prepayment_order_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.prepayment_order_id variant 1

anyOf variant 1: Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order..

- Value shape: string. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.prepayment_order_id variant 2

anyOf variant 2.

- Value shape: null. Order that paid for this prepaid delivery. Null when this is not a prepaid delivery order. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.refund_ids

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.refund_ids variant 1

anyOf variant 1: IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts..

- Value shape: Array of string. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the refunds that name this order. This includes refunds Flint makes to return a payment it couldn't accept (`reason` `payment_returned`), which never count toward `refund_status` or the order's refunded amounts. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.refund_status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.refund_status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputrefund_status).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.return_credit_settlements

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.return_credit_settlements variant 1

anyOf variant 1: Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money..

- Value shape: Array of [OrderReturnCreditSettlementPreviousAttributesInput](../models/OrderReturnCreditSettlementPreviousAttributesInput.md#orderreturncreditsettlementpreviousattributesinput). Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.return_credit_settlements variant 2

anyOf variant 2.

- Value shape: null. Value applied to this order from items the buyer returned, such as an exchange's replacement order. Included in settlement_amounts.paid_money. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create..

- Value shape: string. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that created this order as a replacement. Omitted for orders a return did not create. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [BuyerExpandedOrderSummaryPreviousAttributesInput.status](../models/BuyerExpandedOrderSummaryPreviousAttributesInput.md#buyerexpandedordersummarypreviousattributesinputstatus).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_cycle

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_cycle variant 1

anyOf variant 1: Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle..

- Value shape: integer. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. Format: `uint64`. minimum: `0`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_cycle variant 2

anyOf variant 2.

- Value shape: null. Charged subscription cycle associated with this order. Signup is cycle 1; unpaid retries and skipped renewals do not advance the cycle. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_changed_at

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_changed_at variant 1

anyOf variant 1: Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it..

- Value shape: string. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_changed_at variant 2

anyOf variant 2.

- Value shape: null. Time the subscriber changed delivery after this paid renewal was prepared. The order keeps its committed destination until you correct it or refund and replace it. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_number

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_number variant 1

anyOf variant 1: Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order..

- Value shape: integer. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. Format: `uint32`. minimum: `2`. maximum: `24`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_delivery_number variant 2

anyOf variant 2.

- Value shape: null. Position of this delivery among the deliveries one charge paid for, starting at 2. Null when this is not a prepaid delivery order. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 1

anyOf variant 1: ID of the subscription this order bills. Absent on an order that isn't from a subscription..

- Value shape: string. ID of the subscription this order bills. Absent on an order that isn't from a subscription. ID of the subscription this order bills. Absent on an order that isn't from a subscription. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription this order bills. Absent on an order that isn't from a subscription. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan this order bills. Absent on an order that isn't from a subscription..

- Value shape: string. ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan this order bills. Absent on an order that isn't from a subscription. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. Items values: `"close"`, `"pay"`, `"resolve_inventory_exception"`.

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of permissions. Includes close when closure is allowed, and pay while open without an active attempt and with an outstanding balance or payment-method setup available. Always present with merchant credentials. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.tips

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.tips variant 1

anyOf variant 1: Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled..

- Value shape: Array of [TipPreviousAttributesInput](../models/TipPreviousAttributesInput.md#tippreviousattributesinput). Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.tips variant 2

anyOf variant 2.

- Value shape: null. Tips on the order, each with its requested, settled, and refunded amounts. A tip cleared before payment stays listed as canceled. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.version

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied..

- Value shape: integer. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. Format: `int64`. 

### OrderClosedInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Order version for optimistic concurrency. Send this value as the expected version when changing the order. Increases with every change to the order. Ignore an order webhook snapshot whose version is lower than one you have already applied. 

### OrderClosedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

