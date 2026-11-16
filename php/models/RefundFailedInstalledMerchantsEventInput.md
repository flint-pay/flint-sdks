[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundFailedInstalledMerchantsEventInput

The `refund.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"refund.failed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### RefundFailedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/RefundCreatedInstalledMerchantsEventInput.md#refundcreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributes). |

### RefundFailedInstalledMerchantsEventInput.data.object

Field definitions: [RefundCreatedInstalledMerchantsEventInput.data.object](../models/RefundCreatedInstalledMerchantsEventInput.md#refundcreatedinstalledmerchantseventinputdataobject).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Total refunded across all tenders, including `refunded_tip_money`. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `credit_note_id` | Optional | string or null | ID of the credit note this refund paid out. Present only on refunds issued through a credit note. `credit_note_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributescredit_note_id). |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | ID of the customer on the refunded order or payment. Absent when neither has one. `customer_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `failure_reason` | Optional | string or null | Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: [11 declared values](BuyerPaymentRefundInput.md#buyerpaymentrefundinput-failure_reason-values). `failure_reason`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesfailure_reason). |
| `idempotency_key` | Optional | string or null | The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. `idempotency_key`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesinitiated_by). |
| `invoice_id` | Optional | string or null | ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. `invoice_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `line_item_allocations` | Optional | Array of [RefundLineItemAllocationInput](../models/RefundLineItemAllocationInput.md#refundlineitemallocationinput) or null | How the refund applied to each order line item it covered, with quantity, tax, and adjustments. `line_item_allocations`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesline_item_allocations). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_edit_id` | Optional | string or null | ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. `order_edit_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesorder_edit_id). |
| `order_id` | Optional | string or null | ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. `order_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Optional | string or null | ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. `payment_intent_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_intent_id). |
| `payment_refunds` | Optional | Array of [PaymentRefundInput](../models/PaymentRefundInput.md#paymentrefundinput) or null | The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. `payment_refunds`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_refunds). |
| `payment_review_id` | Optional | string or null | ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. `payment_review_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespayment_review_id). |
| `pending_reason` | Optional | string or null or null | Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`. `pending_reason`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributespending_reason). |
| `processed_by` | Optional | string or null | Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`. `processed_by`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesprocessed_by). |
| `reason` | Optional | string or null or null | Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: [15 declared values](RefundInput.md#refundinput-reason-values). `reason`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesreason). |
| `reason_message` | Optional | string or null | Note explaining the refund, up to 1,024 characters. `reason_message`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesreason_message). |
| `refund_id` | Optional | string or null | Unique identifier for this refund, prefixed `ref_`. `refund_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesrefund_id). |
| `refund_platform_fee` | Optional | boolean or null | Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. `refund_platform_fee`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesrefund_platform_fee). |
| `refund_reference` | Optional | string or null | The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. `refund_reference`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesrefund_reference). |
| `refunded_at` | Optional | string or null | When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. `refunded_at`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesrefunded_at). |
| `refunded_tip_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | Share of `amount_money` that refunds tips. |
| `return_id` | Optional | string or null | ID of the return this refund paid out. Present only on refunds issued by a return. `return_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued this refund. Present only on refunds issued by a return. `return_resolution_id`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesreturn_resolution_id). |
| `status` | Optional | string or null | Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`. `status`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `succeeded_at` | Optional | string or null | When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. `succeeded_at`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributessucceeded_at). |
| `tax_breakdown_refunds` | Optional | Array of [RefundTaxBreakdownRefundInput](../models/RefundTaxBreakdownRefundInput.md#refundtaxbreakdownrefundinput) or null | Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. `tax_breakdown_refunds`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributestax_breakdown_refunds). |
| `tender_allocations` | Optional | Array of [RefundTenderAllocationInput](../models/RefundTenderAllocationInput.md#refundtenderallocationinput) or null | Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. `tender_allocations`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributestender_allocations). |
| `unissued_gift_card_recoveries` | Optional | Array of [RefundUnissuedGiftCardRecoveryInput](../models/RefundUnissuedGiftCardRecoveryInput.md#refundunissuedgiftcardrecoveryinput) or null | Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. `unissued_gift_card_recoveries`: [declared alternatives](../models/RefundFailedInstalledMerchantsEventInput.md#refundfailedinstalledmerchantseventinputdataprevious_attributesunissued_gift_card_recoveries). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesversion). |

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id variant 1

anyOf variant 1: ID of the credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"cn_01KEZF7C00N1TRRCVDNY8S471H"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.credit_note_id variant 2

anyOf variant 2.

- Value shape: null. ID of the credit note this refund paid out. Present only on refunds issued through a credit note. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.customer_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 1

anyOf variant 1: ID of the customer on the refunded order or payment. Absent when neither has one..

- Value shape: string. ID of the customer on the refunded order or payment. Absent when neither has one. ID of the customer on the refunded order or payment. Absent when neither has one. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer on the refunded order or payment. Absent when neither has one. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason variant 1

anyOf variant 1: Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed..

- Value shape: string. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. Values: `"expired_or_canceled_card"`, `"lost_or_stolen_card"`, `"insufficient_funds"`, `"insufficient_available_balance"`, `"declined"`, `"merchant_request"`, `"payment_disputed"`, `"refund_abandoned"`, `"payment_refund_failed"`, `"payment_refund_not_attempted"`, `"refund_failed"`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Why a refund failed or a payment refund was canceled. Failed and canceled amounts become refundable again, except a refund with reason payment_returned that failed with payment_disputed: the buyer won a dispute on the charge, so nothing is left to refund. A payment_returned refund that failed with refund_abandoned can't be retried through Flint either: the money is in your balance. Flint hasn't repaid the buyer. Repay them another way if you haven't already. Fix the cause, then create a new refund with a new idempotency key. Unknown provider values are returned as refund_failed. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 1

anyOf variant 1: The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response..

- Value shape: string. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The caller's Idempotency-Key when this refund was created, including refunds created by issuing a credit note. Use GET /v1/refunds?idempotency_key= to recover a lost response. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by variant 1

anyOf variant 1: Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only..

- Value shape: string. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. Values: `"merchant"`, `"flint"`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who decided to make this refund: `merchant` for you or your integration, `flint` for a refund Flint made on its own to return a payment it couldn't accept. Unlike a Return's `initiated_by`, it doesn't say which credential asked. Read-only. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note..

- Value shape: string. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice whose credit note this refund paid out. Present only on refunds issued through a credit note. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.line_item_allocations

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.line_item_allocations variant 1

anyOf variant 1: How the refund applied to each order line item it covered, with quantity, tax, and adjustments..

- Value shape: Array of [RefundLineItemAllocationInput](../models/RefundLineItemAllocationInput.md#refundlineitemallocationinput). How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.line_item_allocations variant 2

anyOf variant 2.

- Value shape: null. How the refund applied to each order line item it covered, with quantity, tax, and adjustments. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributesmerchant_id).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_edit_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_edit_id variant 1

anyOf variant 1: ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit..

- Value shape: string. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. Example: `"oed_01KEZF7C00A6BQ4TBGWFDJ944A"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_edit_id variant 2

anyOf variant 2.

- Value shape: null. ID of the paid-order edit that created this refund. Present only on refunds issued through an order edit. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund..

- Value shape: string. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order the refund was issued against. For a refund with `reason` `payment_returned`, the order the returned payment was for; the order never received this money. Absent for a refund of a payment that has no order, and for a standalone gift card refund. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through..

- Value shape: string. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment the refund was issued against, when it targeted one payment. `payment_refunds` lists every payment it returned money through. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds variant 1

anyOf variant 1: The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit..

- Value shape: Array of [PaymentRefundInput](../models/PaymentRefundInput.md#paymentrefundinput). The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_refunds variant 2

anyOf variant 2.

- Value shape: null. The part of the refund returned through each payment, with its own status. Absent when the refund was all gift card credit or store credit. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id variant 1

anyOf variant 1: ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review..

- Value shape: string. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment review whose decline created this refund. Present only on refunds issued for a declined review. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.pending_reason

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.pending_reason variant 1

anyOf variant 1: Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review..

- Value shape: (string or null). Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. Values: `"manual_review"`, `null`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.pending_reason variant 2

anyOf variant 2.

- Value shape: null. Why a pending refund is waiting. `null` when `status` isn't `pending`, or when the refund is on its way without review. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.processed_by

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.processed_by variant 1

anyOf variant 1: Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint..

- Value shape: string. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. Values: `"flint"`, `"merchant"`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.processed_by variant 2

anyOf variant 2.

- Value shape: null. Who moved or is moving the money for this refund. Flint processes refunds through a processor or a gift card; merchant means the merchant returned the money outside Flint and recorded it here. Existing refunds are processed by Flint. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason variant 1

anyOf variant 1: Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded..

- Value shape: (string or null). Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. Values: `"duplicate"`, `"fraudulent"`, `"requested_by_customer"`, `"defective_product"`, `"wrong_item_shipped"`, `"never_received"`, `"not_as_described"`, `"arrived_too_late"`, `"customer_changed_mind"`, `"better_price_found"`, `"accidental_order"`, `"other"`, `"out_of_stock"`, `"payment_returned"`, `null`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason variant 2

anyOf variant 2.

- Value shape: null. Why the refund was issued. It never changes how the money moves. The buyer's refund receipt shows it only for `requested_by_customer`, `duplicate`, `defective_product`, `wrong_item_shipped`, `never_received`, `not_as_described`, `arrived_too_late`, `accidental_order`, and `out_of_stock`. Only Flint sets `payment_returned`, and it can't be sent in requests. `null` when no reason was recorded. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason_message

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason_message variant 1

anyOf variant 1: Note explaining the refund, up to 1,024 characters..

- Value shape: string. Note explaining the refund, up to 1,024 characters. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.reason_message variant 2

anyOf variant 2.

- Value shape: null. Note explaining the refund, up to 1,024 characters. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_id variant 1

anyOf variant 1: Unique identifier for this refund, prefixed `ref_`..

- Value shape: string. Unique identifier for this refund, prefixed `ref_`. Unique identifier for this refund, prefixed `ref_`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this refund, prefixed `ref_`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee variant 1

anyOf variant 1: Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns..

- Value shape: boolean. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_platform_fee variant 2

anyOf variant 2.

- Value shape: null. Whether the request asked to return the platform fee on the payments this refund refunds (refund_platform_fee). Each payment refund's refunded_platform_fee_money is what it returns. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_reference

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_reference variant 1

anyOf variant 1: The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID..

- Value shape: string. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. minLength: `1`. maxLength: `255`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refund_reference variant 2

anyOf variant 2.

- Value shape: null. The merchant's opaque check, wire, or other reference for money returned outside Flint, preserved exactly. Present only when processed_by is merchant and a reference was supplied. external_reference_id is the merchant's own refund ID. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refunded_at

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refunded_at variant 1

anyOf variant 1: When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant..

- Value shape: string. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.refunded_at variant 2

anyOf variant 2.

- Value shape: null. When the merchant reports that the money was returned outside Flint. Present only when processed_by is merchant. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 1

anyOf variant 1: ID of the return this refund paid out. Present only on refunds issued by a return..

- Value shape: string. ID of the return this refund paid out. Present only on refunds issued by a return. ID of the return this refund paid out. Present only on refunds issued by a return. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return this refund paid out. Present only on refunds issued by a return. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued this refund. Present only on refunds issued by a return..

- Value shape: string. ID of the return resolution that issued this refund. Present only on refunds issued by a return. ID of the return resolution that issued this refund. Present only on refunds issued by a return. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued this refund. Present only on refunds issued by a return. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.status

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes..

- Value shape: string. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. Values: `"pending"`, `"succeeded"`, `"partially_succeeded"`, `"failed"`.

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and partially_succeeded can still change when a bank rejects a refund after accepting it. A refund Flint made to return a payment it couldn't accept goes from succeeded back to pending, with pending_reason manual_review, when a bank reverses it. Follow refund.created when it is accepted, refund.succeeded, refund.partially_succeeded, or refund.failed when its outcome changes, and refund.updated for other changes. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.succeeded_at

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.succeeded_at variant 1

anyOf variant 1: When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time..

- Value shape: string. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.succeeded_at variant 2

anyOf variant 2.

- Value shape: null. When `status` first became `succeeded`. For a refund with `payment_refunds` or `tender_allocations`, it's when the last of them first succeeded, so it equals the latest `succeeded_at` among them. For a refund Flint processes, it's when Flint recorded the outcome; with `processed_by` `merchant`, it equals `refunded_at`. Present only while `status` is `succeeded`; absent for every other status, including `partially_succeeded` and a refund that failed after it succeeded. A refund that succeeds again shows its first success time. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tax_breakdown_refunds

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tax_breakdown_refunds variant 1

anyOf variant 1: Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`..

- Value shape: Array of [RefundTaxBreakdownRefundInput](../models/RefundTaxBreakdownRefundInput.md#refundtaxbreakdownrefundinput). Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tax_breakdown_refunds variant 2

anyOf variant 2.

- Value shape: null. Tax reversed on order-level charges and flat taxes, one entry per tax breakdown. Tax reversed on line items is in `line_item_allocations[].tax_breakdown_refunds`. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tender_allocations

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tender_allocations variant 1

anyOf variant 1: Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination..

- Value shape: Array of [RefundTenderAllocationInput](../models/RefundTenderAllocationInput.md#refundtenderallocationinput). Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.tender_allocations variant 2

anyOf variant 2.

- Value shape: null. Every tender the refund drew from, payment or gift card, with its amount, tip share, status, and destination. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries variant 1

anyOf variant 1: Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive..

- Value shape: Array of [RefundUnissuedGiftCardRecoveryInput](../models/RefundUnissuedGiftCardRecoveryInput.md#refundunissuedgiftcardrecoveryinput). Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.unissued_gift_card_recoveries variant 2

anyOf variant 2.

- Value shape: null. Cash returned after an unissued gift card purchase refund failed. Return it through a new refund against payment_intent_id and order_line_item_id. It does not issue another card. Source remaining and pending amounts describe the entire original settlement allocation; repeated entries for that source are not additive. 

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### RefundFailedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEventInput.data.previous_attributes.version](../models/CheckoutSessionClosedInstalledMerchantsEventInput.md#checkoutsessionclosedinstalledmerchantseventinputdataprevious_attributesversion).

### RefundFailedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

