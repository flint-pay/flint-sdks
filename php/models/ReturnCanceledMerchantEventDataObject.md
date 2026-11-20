[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCanceledMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit no additional fields.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the Return. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `canceled_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatacanceled_by). |
| `cancellation_reason` | Optional | string | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `completed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who completed the Return. `system` when Flint completed it automatically. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `completed_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatacompleted_by). |
| `completion_blockers` | Required | Array of [ReturnCompletionBlocker](../models/ReturnCompletionBlocker.md#returncompletionblocker) | What is still owed before the Return can complete. Empty when nothing is. `completion_blockers[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatacompletion_blockers). |
| `completion_mode` | Optional | string | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. |
| `completion_reason` | Optional | string | Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`. |
| `completion_reason_message` | Optional | string | Detail sent when the Return was completed by hand. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | The customer the Return belongs to. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_status` | Required | string | Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `financial_summary` | Required | [ReturnFinancialSummary](../models/ReturnFinancialSummary.md#returnfinancialsummary) | The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer. |
| `handoff_requirements` | Required | Array of [ReturnHandoffRequirement](../models/ReturnHandoffRequirement.md#returnhandoffrequirement) | What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. `handoff_requirements[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirements). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. |
| `initiated_by` | Required | string | Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |
| `line_items` | Required | Array of [WebhookSnapshotReturnLineItem](../models/WebhookSnapshotReturnLineItem.md#webhooksnapshotreturnlineitem) | The lines being returned. `line_items[]`: [field definitions](../models/ReturnCanceledMerchantEventDataObject.md#returncanceledmerchanteventdataobjectline_items). |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledmerchanteventdataobject-merchandise_status-values). |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | ID of the Order the Return is against. |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How your return policies judged the request when the Return was created. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. `policy_evaluation`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatapolicy_evaluation). |
| `resolution_status` | Required | string | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. |
| `return_disposition_ids` | Required | Array of string | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_dispositions` | Optional | Array of [WebhookSnapshotReturnDisposition](../models/WebhookSnapshotReturnDisposition.md#webhooksnapshotreturndisposition) | Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. `return_dispositions[]`: [field definitions](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions). |
| `return_id` | Required | string | Unique identifier for this return, prefixed `ret_`. |
| `return_inspection_ids` | Required | Array of string | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_inspections` | Optional | Array of [WebhookSnapshotReturnInspection](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspection) | Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. `return_inspections[]`: [field definitions](../models/ReturnCanceledMerchantEventDataObject.md#returncanceledmerchanteventdataobjectreturn_inspections). |
| `return_number` | Required | string | Human-readable number for the Return. |
| `return_receipt_ids` | Required | Array of string | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_receipts` | Optional | Array of [WebhookSnapshotReturnReceipt](../models/WebhookSnapshotReturnReceipt.md#webhooksnapshotreturnreceipt) | Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. `return_receipts[]`: [field definitions](../models/ReturnCanceledMerchantEventDataObject.md#returncanceledmerchanteventdataobjectreturn_receipts). |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_resolutions` | Optional | Array of [WebhookSnapshotReturnResolution](../models/WebhookSnapshotReturnResolution.md#webhooksnapshotreturnresolution) | Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. `return_resolutions[]`: [field definitions](../models/ReturnCanceledMerchantEventDataObject.md#returncanceledmerchanteventdataobjectreturn_resolutions). |
| `shipment_ids` | Required | Array of string | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `status` | Required | string | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: `int64`. minimum: `0`. |

#### ReturnCanceledMerchantEventDataObject merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`
- `"exception"`

### ReturnCanceledMerchantEventDataObject.canceled_by

Field definitions: [CancelReturnResponse.data.canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatacanceled_by).

### ReturnCanceledMerchantEventDataObject.completed_by

Field definitions: [CancelReturnResponse.data.completed_by](../models/CancelReturnResponse.md#cancelreturnresponsedatacompleted_by).

### ReturnCanceledMerchantEventDataObject.completion_blockers[]

Field definitions: [CancelReturnResponse.data.completion_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatacompletion_blockers).

### ReturnCanceledMerchantEventDataObject.handoff_requirements[]

Field definitions: [CancelReturnResponse.data.handoff_requirements[]](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirements).

### ReturnCanceledMerchantEventDataObject.line_items[]

An item included in a return request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Required | integer | Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `allowed_resolution_types` | Required | Array of string | Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approved_quantity` | Required | integer | Units the decision approved. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `automatic_resolution_type` | Optional | string | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `available_resolution_quantity` | Required | integer | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | Components of the bundle the line was sold from. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | ID of the bundle the line was sold from. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `buyer_note` | Optional | string | Note the buyer gave about this line. Some return reasons require one. |
| `canceled_quantity` | Required | integer | Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decided_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who recorded the decision on this line. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `decided_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsdecided_by). |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decline_reason` | Optional | string | Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. |
| `decline_reason_message` | Optional | string | Detail sent with the decline. |
| `declined_quantity` | Required | integer | Units the decision declined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `description` | Optional | string | Description of the item as sold. |
| `dispositioned_quantity` | Required | integer | Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `eligibility` | Required | [ReturnLineItemEligibility](../models/ReturnLineItemEligibility.md#returnlineitemeligibility) | How the pinned return policy judged this line when the Return was created, with the policy revision it used. Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments. `eligibility`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemseligibility). |
| `fulfillment` | Optional | [WebhookSnapshotFulfillment](../models/WebhookSnapshotFulfillment.md#webhooksnapshotfulfillment) or null | Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. `fulfillment`: [declared alternatives](../models/ReturnCanceledMerchantEventDataObject.md#returncanceledmerchanteventdataobjectline_itemsfulfillment). |
| `fulfillment_id` | Required | string | ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `handed_off_quantity` | Required | integer | Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `image` | Optional | [Image](../models/Image.md#image) | Image of the item as sold. An image with its URL, size, and alt text. |
| `inspected_quantity` | Required | integer | Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inspection_waived_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inspection_waived_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who waived inspection for this line. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `inspection_waived_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsinspection_waived_by). |
| `inspection_waiver_reason` | Optional | string | Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. |
| `inspection_waiver_reason_message` | Optional | string | Detail sent when inspection was waived. |
| `is_inspection_required` | Optional | boolean | Whether returned units of this line must be inspected. |
| `is_policy_overridden` | Required | boolean | Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. |
| `merchandise_status` | Required | string | Where this line's merchandise stands, from handoff through disposition. Values: [9 declared values](#returncanceledmerchanteventdataobjectline_items-merchandise_status-values). |
| `modifiers` | Required | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | Modifiers selected on the order line, with their prices. `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string | Name of the item as sold. |
| `order_id` | Required | string | Order that owns order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `overridden_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `overridden_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who recorded the override. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `overridden_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsoverridden_by). |
| `override_reason` | Optional | string | Why the decision overrode the pinned return policy's proposal. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`. |
| `override_reason_message` | Optional | string | Detail sent with the override. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `received_quantity` | Required | integer | Units that arrived. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `receiving_location_id` | Optional | string | ID of the Location the buyer sends the merchandise to. Absent when none has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `rejected_quantity` | Required | integer | Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `release_timing` | Optional | string | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer | Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `requested_variant` | Optional | string | ID of the variant requested for this exchange. The merchant chooses the replacement and confirms its price during resolution. |
| `resolution_status` | Required | string | Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`. |
| `resolved_quantity` | Required | integer | Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_id` | Required | string | ID of the Return this line belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_item_id` | Required | string | Unique identifier for this return line item, prefixed `retli_`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_reason` | Optional | [ReturnReason](../models/ReturnReason.md#returnreason) or null | Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. `return_reason`: [declared alternatives](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsreturn_reason). |
| `return_reason_handle` | Required | string | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. |
| `return_reason_id` | Required | string | ID of the reason chosen for this line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. |
| `return_reason_name` | Required | string | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. |
| `return_required_quantity` | Required | integer | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: `int64`. |
| `return_resolution_ids` | Required | Array of string | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `return_value` | Required | [ReturnLineItemValue](../models/ReturnLineItemValue.md#returnlineitemvalue) | Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. The value of a return line: unit price, subtotal, discount, tax, and total. |
| `review_required_quantity` | Required | integer | Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Variant options selected for the item, such as size and color. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | SKU of the item as sold. |
| `status` | Required | string | Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `variant_id` | Optional | string | ID of the catalog variant the item was sold from. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

#### ReturnCanceledMerchantEventDataObject.line_items[] merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`

### ReturnCanceledMerchantEventDataObject.line_items[].bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### ReturnCanceledMerchantEventDataObject.line_items[].decided_by

Field definitions: [CancelReturnResponse.data.line_items[].decided_by](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsdecided_by).

### ReturnCanceledMerchantEventDataObject.line_items[].eligibility

Field definitions: [CancelReturnResponse.data.line_items[].eligibility](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemseligibility).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment

Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Conditional | [FulfillmentHold](../models/FulfillmentHold.md#fulfillmenthold) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. `active_hold`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold). |
| `charges` | Conditional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. `charges[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges). |
| `completed_at` | Conditional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Conditional | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Conditional | string | Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_choice_group_id` | Conditional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_execution_leg_id` | Conditional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `delivery_method_id` | Conditional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_selection_id` | Conditional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `device_id` | Conditional | string | Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Conditional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. `digital_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details). |
| `dispatched_at` | Conditional | string | First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Conditional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_id` | Conditional | string | Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `idempotency_key` | Conditional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. |
| `line_items` | Conditional | Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. `line_items[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items). |
| `local_delivery_details` | Conditional | [DeliveryFulfillmentDetails](../models/DeliveryFulfillmentDetails.md#deliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. `local_delivery_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details). |
| `location_id` | Conditional | string | Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Conditional | Map of string | Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata). |
| `order` | Conditional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentResponse.md#fulfillmentresponsedataorder). |
| `order_id` | Conditional | string | Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Conditional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Conditional | [FulfillmentOutcome](../models/FulfillmentOutcome.md#fulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. `outcome`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome). |
| `packages` | Conditional | Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary) | Packages associated with this fulfillment. `packages[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages). |
| `packed_at` | Conditional | string | First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `picked_at` | Conditional | string | First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_details` | Conditional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. `pickup_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details). |
| `recipient` | Conditional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Conditional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_details` | Conditional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. `service_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details). |
| `shipment_details` | Conditional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. `shipment_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details). |
| `shipments` | Conditional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Shipments associated with this fulfillment. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `status` | Conditional | string | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#returncanceledmerchanteventdataobjectline_itemsfulfillment-status-values). |
| `supported_actions` | Conditional | Array of string | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#returncanceledmerchanteventdataobjectline_itemsfulfillment-supported_actions--values). |
| `terminal_at` | Conditional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Conditional | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. |
| `updated_at` | Conditional | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Conditional | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment status values

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

#### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment supported_actions [] values

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

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1

anyOf WebhookSnapshotFulfillment: Work required to deliver an order's items..

- Required: `created_at`, `fulfillment_id`, `line_items`, `order_id`, `scheduled_start_at`, `status`, `type`, `updated_at`, `version`.
- Optional: `active_hold`, `charges`, `completed_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `idempotency_key`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `service_details`, `shipment_details`, `shipments`, `supported_actions`, `terminal_at`.

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 2

anyOf variant 2.

- Undeclared: `active_hold`, `charges`, `completed_at`, `created_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `fulfillment_id`, `idempotency_key`, `line_items`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `status`, `supported_actions`, `terminal_at`, `type`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. 

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.active_hold

Field definitions: [FulfillmentResponse.data.active_hold](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.charges[]

Field definitions: [FulfillmentResponse.data.charges[]](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.digital_details

Field definitions: [FulfillmentResponse.data.digital_details](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.line_items[]

Field definitions: [FulfillmentResponse.data.line_items[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.local_delivery_details

Field definitions: [FulfillmentResponse.data.local_delivery_details](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.metadata

Field definitions: [FulfillmentResponse.data.metadata](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.outcome

Field definitions: [FulfillmentResponse.data.outcome](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.packages[]

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.pickup_details

Field definitions: [FulfillmentResponse.data.pickup_details](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.service_details

Field definitions: [FulfillmentResponse.data.service_details](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.shipment_details

Field definitions: [FulfillmentResponse.data.shipment_details](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details).

### ReturnCanceledMerchantEventDataObject.line_items[].fulfillment variant 1.shipments[]

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

### ReturnCanceledMerchantEventDataObject.line_items[].inspection_waived_by

Field definitions: [CancelReturnResponse.data.line_items[].inspection_waived_by](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsinspection_waived_by).

### ReturnCanceledMerchantEventDataObject.line_items[].modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### ReturnCanceledMerchantEventDataObject.line_items[].overridden_by

Field definitions: [CancelReturnResponse.data.line_items[].overridden_by](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsoverridden_by).

### ReturnCanceledMerchantEventDataObject.line_items[].return_reason

Declared alternatives: [CancelReturnResponse.data.line_items[].return_reason](../models/CancelReturnResponse.md#cancelreturnresponsedataline_itemsreturn_reason).

### ReturnCanceledMerchantEventDataObject.line_items[].selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

### ReturnCanceledMerchantEventDataObject.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### ReturnCanceledMerchantEventDataObject.policy_evaluation

Field definitions: [CancelReturnResponse.data.policy_evaluation](../models/CancelReturnResponse.md#cancelreturnresponsedatapolicy_evaluation).

### ReturnCanceledMerchantEventDataObject.return_dispositions[]

Field definitions: [WebhookSnapshotReturnInspection.generated_dispositions[]](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions).

### ReturnCanceledMerchantEventDataObject.return_inspections[]

An assessment of the condition of returned items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `generated_dispositions` | Required | Array of [WebhookSnapshotReturnDisposition](../models/WebhookSnapshotReturnDisposition.md#webhooksnapshotreturndisposition) | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions[]`: [field definitions](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `inspected_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `inspection_location_id` | Required | string | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `line_items` | Required | Array of [ReturnInspectionLineItem](../models/ReturnInspectionLineItem.md#returninspectionlineitem) | The lines recorded. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items). |
| `return_id` | Required | string | ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_inspection_id` | Required | string | Unique identifier for this return inspection, prefixed `retins_`. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `return_receipt_id` | Required | string | ID of the receipt being inspected. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `source_system` | Required | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null | System that recorded the observation. `null` when no source system was recorded. `source_system`: [declared alternatives](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionssource_system). |
| `status` | Required | string | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `superseded_by_return_inspection_id` | Optional | string | ID of the inspection that corrected this one. Absent while it is current. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `supersedes_return_inspection_id` | Optional | string | ID of the inspection this one corrects. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

### ReturnCanceledMerchantEventDataObject.return_inspections[].generated_dispositions[]

Field definitions: [WebhookSnapshotReturnInspection.generated_dispositions[]](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions).

### ReturnCanceledMerchantEventDataObject.return_inspections[].line_items[]

Field definitions: [CancelReturnResponse.data.return_inspections[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionsline_items).

### ReturnCanceledMerchantEventDataObject.return_inspections[].source_system

Declared alternatives: [CancelReturnResponse.data.return_inspections[].source_system](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionssource_system).

### ReturnCanceledMerchantEventDataObject.return_receipts[]

A record of returned items arriving at a location.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. |
| `correction_reason_message` | Optional | string | Detail about `correction_reason`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_actor_id` | Optional | string | Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `generated_dispositions` | Required | Array of [WebhookSnapshotReturnDisposition](../models/WebhookSnapshotReturnDisposition.md#webhooksnapshotreturndisposition) | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions[]`: [field definitions](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. |
| `line_items` | Required | Array of [ReturnReceiptLineItem](../models/ReturnReceiptLineItem.md#returnreceiptlineitem) | The lines recorded. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_items). |
| `received_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `receiving_location_id` | Required | string | ID of the Location that received the goods. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `return_id` | Required | string | ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_receipt_id` | Required | string | Unique identifier for this return receipt, prefixed `retrc_`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `shipment_id` | Optional | string | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `source_system` | Required | [ReturnSourceSystem](../models/ReturnSourceSystem.md#returnsourcesystem) or null | System that recorded the observation. `null` when no source system was recorded. `source_system`: [declared alternatives](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionssource_system). |
| `status` | Required | string | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. |
| `superseded_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `superseded_by_return_receipt_id` | Optional | string | ID of the receipt that corrected this one. Absent while it is current. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `supersedes_return_receipt_id` | Optional | string | ID of the receipt this one corrects. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

### ReturnCanceledMerchantEventDataObject.return_receipts[].generated_dispositions[]

Field definitions: [WebhookSnapshotReturnInspection.generated_dispositions[]](../models/WebhookSnapshotReturnInspection.md#webhooksnapshotreturninspectiongenerated_dispositions).

### ReturnCanceledMerchantEventDataObject.return_receipts[].line_items[]

Field definitions: [CancelReturnResponse.data.return_receipts[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receiptsline_items).

### ReturnCanceledMerchantEventDataObject.return_receipts[].source_system

Declared alternatives: [CancelReturnResponse.data.return_inspections[].source_system](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspectionssource_system).

### ReturnCanceledMerchantEventDataObject.return_resolutions[]

The refund, exchange, or other outcome of a return.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. |
| `action_required_by` | Optional | string | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. |
| `adjustments` | Required | Array of [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment) | Fees and credits applied to the resolution's amounts. `adjustments[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments). |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the resolution. Merchant reads only. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `canceled_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscanceled_by). |
| `cancellation_reason` | Optional | string | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `confirmed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `confirmed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who confirmed the resolution. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `confirmed_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsconfirmed_by). |
| `corrects_return_resolution_id` | Optional | string | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [ReturnActor](../models/ReturnActor.md#returnactor) | Who created the resolution. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `created_by`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscreated_by). |
| `credit_adjustment_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Credits added by the resolution's adjustments. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `execution_blockers` | Required | Array of [ReturnResolutionExecutionBlocker](../models/ReturnResolutionExecutionBlocker.md#returnresolutionexecutionblocker) | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsexecution_blockers). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `failure_code` | Optional | string | Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [11 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). |
| `failure_message` | Optional | string | Explanation of a failed Return resolution, when available. |
| `fulfilled_at` | Optional | string | When the resolution completed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) | Return lines and quantities the resolution covers. Absent on a correction. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items). |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `payment_intent_ids` | Required | Array of string | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents[]`: [field definitions](../models/OrderResponse.md#orderresponsedatapayment_intents). |
| `pricing_basis` | Optional | string | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. |
| `refund_ids` | Required | Array of string | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `refunds` | Optional | Array of [WebhookSnapshotRefund](../models/WebhookSnapshotRefund.md#webhooksnapshotrefund) | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds[]`: [field definitions](../models/WebhookSnapshotReturnResolution.md#webhooksnapshotreturnresolutionrefunds). |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. `replacement_order`: [declared alternatives](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_order). |
| `replacement_order_id` | Optional | string | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the replacement items the buyer receives. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `resolution_type` | Required | string | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string | ID of the Return the resolution belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_policy_id` | Required | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Optional | string | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_resolution_id` | Required | string | Unique identifier for this return resolution, prefixed `retres_`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Value of the returned units this resolution covers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `0`. |

### ReturnCanceledMerchantEventDataObject.return_resolutions[].adjustments[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].adjustments[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsadjustments).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].canceled_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscanceled_by).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].confirmed_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].confirmed_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsconfirmed_by).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].created_by

Field definitions: [CancelReturnResponse.data.return_resolutions[].created_by](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionscreated_by).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].execution_blockers[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].execution_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsexecution_blockers).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsline_items).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].refunds[]

Field definitions: [WebhookSnapshotReturnResolution.refunds[]](../models/WebhookSnapshotReturnResolution.md#webhooksnapshotreturnresolutionrefunds).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].replacement_line_items[]

Field definitions: [CancelReturnResponse.data.return_resolutions[].replacement_line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_line_items).

### ReturnCanceledMerchantEventDataObject.return_resolutions[].replacement_order

Declared alternatives: [CancelReturnResponse.data.return_resolutions[].replacement_order](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutionsreplacement_order).

### ReturnCanceledMerchantEventDataObject.shipments[]

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

