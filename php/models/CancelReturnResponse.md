[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelReturnResponse

A response containing `Return` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnResource](../models/ReturnResource.md#returnresource) | A request to send purchased items back. `data`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CancelReturnResponse.data

A request to send purchased items back.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. Example: `[]`. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `cancellation_reason` | Optional | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string |  |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `completed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `completion_blockers` | Required | Array of [ReturnCompletionBlocker](../models/ReturnCompletionBlocker.md#returncompletionblocker) |  |
| `completion_mode` | Optional | string | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. |
| `completion_reason` | Optional | string | Values: `"manual_completion"`, `"exception_waived"`, `"other"`. |
| `completion_reason_message` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string |  |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_status` | Required | string | Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `financial_summary` | Required | [ReturnFinancialSummary](../models/ReturnFinancialSummary.md#returnfinancialsummary) | The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer. |
| `handoff_requirements` | Required | Array of [ReturnHandoffRequirement](../models/ReturnHandoffRequirement.md#returnhandoffrequirement) |  |
| `initiated_by` | Required | string | Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `line_items` | Required | Array of [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) | `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items). |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#cancelreturnresponsedata-merchandise_status-values). |
| `metadata` | Required | Map of string | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string |  |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `resolution_status` | Required | string | Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_disposition_ids` | Required | Array of string | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) |  |
| `return_id` | Required | string |  |
| `return_inspection_ids` | Required | Array of string | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_inspections` | Optional | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | `return_inspections[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections). |
| `return_number` | Required | string |  |
| `return_receipt_ids` | Required | Array of string | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_receipts` | Optional | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | `return_receipts[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts). |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_resolutions` | Optional | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) |  |
| `shipment_ids` | Required | Array of string | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) |  |
| `status` | Required | string | Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Items values: `"cancel"`, `"complete"`, `"decide"`, `"reopen"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Format: `int64`. minimum: `0`. |

#### CancelReturnResponse.data merchandise_status values

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

### CancelReturnResponse.data.line_items[]

An item included in a return request.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approved_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `automatic_resolution_type` | Optional | string | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `available_resolution_quantity` | Required | integer | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `bundle_components` | Required | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `buyer_note` | Optional | string |  |
| `canceled_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `decided_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decline_reason` | Optional | string | Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. |
| `decline_reason_message` | Optional | string |  |
| `declined_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `description` | Optional | string |  |
| `dispositioned_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `eligibility` | Required | [ReturnLineItemEligibility](../models/ReturnLineItemEligibility.md#returnlineitemeligibility) | Whether a return line is eligible under policy, with the eligible quantity, allowed resolution types, and any policy adjustments. |
| `fulfillment` | Optional | [Fulfillment](../models/Fulfillment.md#fulfillment) or null | Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. |
| `fulfillment_id` | Required | string |  |
| `handed_off_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `inspected_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `inspection_waived_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `inspection_waived_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `inspection_waiver_reason` | Optional | string | Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. |
| `inspection_waiver_reason_message` | Optional | string |  |
| `is_inspection_required` | Optional | boolean |  |
| `is_policy_overridden` | Required | boolean |  |
| `merchandise_status` | Required | string | Values: [9 declared values](#cancelreturnresponsedataline_items-merchandise_status-values). |
| `modifiers` | Required | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) |  |
| `name` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `overridden_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `overridden_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `override_reason` | Optional | string | Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`. |
| `override_reason_message` | Optional | string |  |
| `product_id` | Optional | string |  |
| `received_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `receiving_location_id` | Optional | string |  |
| `rejected_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `release_timing` | Optional | string | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `requested_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `requested_resolution_type` | Optional | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `resolution_status` | Required | string | Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `resolved_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_id` | Required | string |  |
| `return_line_item_id` | Required | string |  |
| `return_reason` | Optional | [ReturnReason](../models/ReturnReason.md#returnreason) or null | Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. |
| `return_reason_handle` | Required | string | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. |
| `return_reason_id` | Required | string | ID of the reason chosen for this line. |
| `return_reason_name` | Required | string | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. |
| `return_required_quantity` | Required | integer | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: `int64`. |
| `return_resolution_ids` | Required | Array of string | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. |
| `return_value` | Required | [ReturnLineItemValue](../models/ReturnLineItemValue.md#returnlineitemvalue) | The value of a return line: unit price, subtotal, discount, tax, and total. |
| `review_required_quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `status` | Required | string | Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Items values: `"cancel"`, `"waive_inspection"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `variant_id` | Optional | string |  |

#### CancelReturnResponse.data.line_items[] merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`

### CancelReturnResponse.data.metadata

Value shape: Map of string. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### CancelReturnResponse.data.return_inspections[]

An assessment of the condition of returned items.

Field definitions: [shared fields](ReturnInspection.md#returninspection).

### CancelReturnResponse.data.return_receipts[]

A record of returned items arriving at a location.

Field definitions: [shared fields](ReturnReceipt.md#returnreceipt).

