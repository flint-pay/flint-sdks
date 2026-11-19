[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who canceled the Return. `canceled_by`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescanceled_by). |
| `cancellation_reason` | Optional | string or null | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `completed_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who completed the Return. `system` when Flint completed it automatically. `completed_by`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompleted_by). |
| `completion_blockers` | Optional | Array of [ReturnCompletionBlockerPreviousAttributes](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributes) or null | What is still owed before the Return can complete. Empty when nothing is. `completion_blockers`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_blockers). |
| `completion_mode` | Optional | string or null | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. `completion_mode`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_mode). |
| `completion_reason` | Optional | string or null | Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`. `completion_reason`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason). |
| `completion_reason_message` | Optional | string or null | Detail sent when the Return was completed by hand. `completion_reason_message`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. `customer`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer). |
| `customer_id` | Optional | string or null | The customer the Return belongs to. `customer_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescustomer_id). |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `decision_status` | Optional | string or null | Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. `decision_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesdecision_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `financial_summary` | Optional | [ReturnFinancialSummaryPreviousAttributes](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributes) or null | The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. |
| `handoff_requirements` | Optional | Array of [ReturnHandoffRequirementPreviousAttributes](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributes) or null | What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. `handoff_requirements`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributeshandoff_requirements). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. `idempotency_key`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesidempotency_key). |
| `initiated_by` | Optional | string or null | Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. `initiated_by`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesinitiated_by). |
| `line_items` | Optional | Array of [ReturnLineItemPreviousAttributes](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributes) or null | The lines being returned. `line_items`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items). |
| `merchandise_status` | Optional | string or null | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledmerchanteventdatapreviousattributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesmerchandise_status). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | ID of the Order the Return is against. `order_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesorder_id). |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluationPreviousAttributes](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributes) or null | How your return policies judged the request when the Return was created. `policy_evaluation`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributespolicy_evaluation). |
| `resolution_status` | Optional | string or null | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. `resolution_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesresolution_status). |
| `return_disposition_ids` | Optional | Array of string or null | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. `return_disposition_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_disposition_ids). |
| `return_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. `return_dispositions`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_dispositions). |
| `return_id` | Optional | string or null | Unique identifier for this return, prefixed `ret_`. `return_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_id). |
| `return_inspection_ids` | Optional | Array of string or null | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. `return_inspection_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspection_ids). |
| `return_inspections` | Optional | Array of [ReturnInspectionPreviousAttributes](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributes) or null | Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. `return_inspections`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections). |
| `return_number` | Optional | string or null | Human-readable number for the Return. `return_number`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_number). |
| `return_receipt_ids` | Optional | Array of string or null | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. `return_receipt_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipt_ids). |
| `return_receipts` | Optional | Array of [ReturnReceiptPreviousAttributes](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes) or null | Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. `return_receipts`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. `return_resolution_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolution_ids). |
| `return_resolutions` | Optional | Array of [ReturnResolutionPreviousAttributes](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes) or null | Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. `return_resolutions`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions). |
| `shipment_ids` | Optional | Array of string or null | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. `shipment_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipment_ids). |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes) or null | Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. `shipments`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipments). |
| `status` | Optional | string or null | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`. `supported_actions`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. `version`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesversion). |

#### ReturnCanceledMerchantEventDataPreviousAttributes merchandise_status values

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

### ReturnCanceledMerchantEventDataPreviousAttributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.canceled_by

Who canceled the Return.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.canceled_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnCanceledMerchantEventDataPreviousAttributes.canceled_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who canceled the Return. 

### ReturnCanceledMerchantEventDataPreviousAttributes.canceled_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.canceled_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the Return was canceled..

- Value shape: string. Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the Return was canceled. 

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_by

Who completed the Return. `system` when Flint completed it automatically.

Field definitions: [shared fields](ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who completed the Return. `system` when Flint completed it automatically. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1

anyOf variant 1: What is still owed before the Return can complete. Empty when nothing is..

- Value shape: Array of [ReturnCompletionBlockerPreviousAttributes](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributes). What is still owed before the Return can complete. Empty when nothing is. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 2

anyOf variant 2.

- Value shape: null. What is still owed before the Return can complete. Empty when nothing is. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Values: [11 declared values](ReturnCompletionBlockerInput.md#returncompletionblockerinput-code-values). `code`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributescode). |
| `message` | Optional | string or null | Explanation of what is still owed. `message`: [declared alternatives](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesmessage). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `null` when return_line_item_id is null. `return_id`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | ID of the Return line the entry is about. `return_line_item_id`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items-variant-1-fields-1return_line_item_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt holding this blocker up. `return_receipt_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_blockers-variant-1-fields-1return_receipt_id). |
| `return_resolution_id` | Optional | string or null | ID of the resolution holding this blocker up. `return_resolution_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_blockers-variant-1-fields-1return_resolution_id). |

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.code

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.code](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributescode).

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.message

Declared alternatives: [ReturnCompletionBlockerPreviousAttributes.message](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributesmessage).

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_id

Declared alternatives: [ReturnInspectionPreviousAttributes.line_items variant 1.[] fields 1.return_id](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items-variant-1-fields-1return_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_line_item_id

Declared alternatives: [ReturnHandoffRequirementPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items-variant-1-fields-1return_line_item_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_receipt_id

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_receipt_id variant 1

anyOf variant 1: ID of the receipt holding this blocker up..

- Value shape: string. ID of the receipt holding this blocker up. ID of the receipt holding this blocker up. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt holding this blocker up. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_resolution_id

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_resolution_id variant 1

anyOf variant 1: ID of the resolution holding this blocker up..

- Value shape: string. ID of the resolution holding this blocker up. ID of the resolution holding this blocker up. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the resolution holding this blocker up. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_mode

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_mode variant 1

anyOf variant 1: automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual..

- Value shape: string. automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_mode variant 2

anyOf variant 2.

- Value shape: null. automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason variant 1

anyOf variant 1: Why the Return was completed by hand. Absent when Flint completed it automatically..

- Value shape: string. Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason variant 2

anyOf variant 2.

- Value shape: null. Why the Return was completed by hand. Absent when Flint completed it automatically. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason_message

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason_message variant 1

anyOf variant 1: Detail sent when the Return was completed by hand..

- Value shape: string. Detail sent when the Return was completed by hand. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent when the Return was completed by hand. 

### ReturnCanceledMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### ReturnCanceledMerchantEventDataPreviousAttributes.customer_id

### ReturnCanceledMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: The customer the Return belongs to..

- Value shape: string. The customer the Return belongs to. 

### ReturnCanceledMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer the Return belongs to. 

### ReturnCanceledMerchantEventDataPreviousAttributes.decision_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.decision_status

### ReturnCanceledMerchantEventDataPreviousAttributes.decision_status variant 1

anyOf variant 1: Whether the requested units were approved. `pending` until one decision covers every line..

- Value shape: string. Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.decision_status variant 2

anyOf variant 2.

- Value shape: null. Whether the requested units were approved. `pending` until one decision covers every line. 

### ReturnCanceledMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1

anyOf variant 1: What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer..

- Value shape: Array of [ReturnHandoffRequirementPreviousAttributes](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributes). What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. 

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 2

anyOf variant 2.

- Value shape: null. What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. 

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Optional | [ReturnHandoffDestinationPreviousAttributes](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributes) or null | Where the buyer sends the merchandise. `destination`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `instructions` | Optional | string or null | Instructions for the buyer on sending the merchandise. `instructions`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesinstructions). |
| `line_items` | Optional | Array of [ReturnHandoffRequirementLineItemPreviousAttributes](../models/ReturnHandoffRequirementLineItemPreviousAttributes.md#returnhandoffrequirementlineitempreviousattributes) or null | Return lines and the quantities still expected. `line_items`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items). |
| `shipment_count` | Optional | integer or null | Reserved. Flint doesn't set it today, so it's always omitted. `shipment_count`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesshipment_count). |
| `status` | Optional | string or null | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. `status`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesstatus). |

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1.destination

Declared alternatives: [ReturnHandoffRequirementPreviousAttributes.destination](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesdestination).

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1.expires_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1.instructions

Declared alternatives: [ReturnHandoffRequirementPreviousAttributes.instructions](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesinstructions).

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1.line_items

Declared alternatives: [ReturnHandoffRequirementPreviousAttributes.line_items](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesline_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1.shipment_count

Declared alternatives: [ReturnHandoffRequirementPreviousAttributes.shipment_count](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesshipment_count).

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1.status

Declared alternatives: [ReturnHandoffRequirementPreviousAttributes.status](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributesstatus).

### ReturnCanceledMerchantEventDataPreviousAttributes.idempotency_key

### ReturnCanceledMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace..

- Value shape: string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. 

### ReturnCanceledMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes return only keys from the buyer's namespace. 

### ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by

### ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by variant 1

anyOf variant 1: Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent..

- Value shape: string. Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: The lines being returned..

- Value shape: Array of [ReturnLineItemPreviousAttributes](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributes). The lines being returned. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines being returned. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Optional | integer or null | Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. `accepted_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesaccepted_quantity). |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesallowed_resolution_types). |
| `approved_quantity` | Optional | integer or null | Units the decision approved. Whole-number quantity; fractional quantities are not supported. `approved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesapproved_quantity). |
| `automatic_resolution_type` | Optional | string or null | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. `automatic_resolution_type`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1automatic_resolution_type). |
| `available_resolution_quantity` | Optional | integer or null | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. `available_resolution_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesavailable_resolution_quantity). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id). |
| `buyer_note` | Optional | string or null | Note the buyer gave about this line. Some return reasons require one. `buyer_note`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbuyer_note). |
| `canceled_quantity` | Optional | integer or null | Approved units canceled later. Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributescanceled_quantity). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `decided_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who recorded the decision on this line. `decided_by`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by). |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `decline_reason` | Optional | string or null | Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. `decline_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason). |
| `decline_reason_message` | Optional | string or null | Detail sent with the decline. `decline_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason_message). |
| `declined_quantity` | Optional | integer or null | Units the decision declined. Whole-number quantity; fractional quantities are not supported. `declined_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdeclined_quantity). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `dispositioned_quantity` | Optional | integer or null | Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. `dispositioned_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdispositioned_quantity). |
| `eligibility` | Optional | [ReturnLineItemEligibilityPreviousAttributes](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributes) or null | How the pinned return policy judged this line when the Return was created, with the policy revision it used. `eligibility`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeseligibility). |
| `fulfillment` | Optional | [FulfillmentPreviousAttributes](../models/FulfillmentPreviousAttributes.md#fulfillmentpreviousattributes) or null | Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. `fulfillment`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1fulfillment_id). |
| `handed_off_quantity` | Optional | integer or null | Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. `handed_off_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeshanded_off_quantity). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `inspected_quantity` | Optional | integer or null | Units that have been inspected. Whole-number quantity; fractional quantities are not supported. `inspected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspected_quantity). |
| `inspection_waived_at` | Optional | string or null | RFC3339 timestamp. `inspection_waived_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `inspection_waived_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who waived inspection for this line. `inspection_waived_by`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waived_by). |
| `inspection_waiver_reason` | Optional | string or null | Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. `inspection_waiver_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason). |
| `inspection_waiver_reason_message` | Optional | string or null | Detail sent when inspection was waived. `inspection_waiver_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason_message). |
| `is_inspection_required` | Optional | boolean or null | Whether returned units of this line must be inspected. `is_inspection_required`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_inspection_required). |
| `is_policy_overridden` | Optional | boolean or null | Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. `is_policy_overridden`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_policy_overridden). |
| `merchandise_status` | Optional | string or null | Where this line's merchandise stands, from handoff through disposition. Values: [9 declared values](#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmerchandise_status). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `overridden_at` | Optional | string or null | RFC3339 timestamp. `overridden_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `overridden_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who recorded the override. `overridden_by`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverridden_by). |
| `override_reason` | Optional | string or null | Why the decision overrode the pinned return policy's proposal. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`. `override_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverride_reason). |
| `override_reason_message` | Optional | string or null | Detail sent with the override. `override_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverride_reason_message). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. `product_id`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1product_id). |
| `received_quantity` | Optional | integer or null | Units that arrived. Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreceived_quantity). |
| `receiving_location_id` | Optional | string or null | ID of the Location the buyer sends the merchandise to. Absent when none has to come back. `receiving_location_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1receiving_location_id). |
| `rejected_quantity` | Optional | integer or null | Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. `rejected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrejected_quantity). |
| `release_timing` | Optional | string or null | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrelease_timing). |
| `requested_quantity` | Optional | integer or null | Units the request asked to return. Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrequested_quantity). |
| `requested_resolution_type` | Optional | string or null | Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `requested_resolution_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrequested_resolution_type). |
| `resolution_status` | Optional | string or null | Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`. `resolution_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesresolution_status). |
| `resolved_quantity` | Optional | integer or null | Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. `resolved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesresolved_quantity). |
| `return_id` | Optional | string or null | ID of the Return this line belongs to. `return_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | Unique identifier for this return line item, prefixed `retli_`. `return_line_item_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1return_line_item_id). |
| `return_reason` | Optional | [ReturnReasonPreviousAttributes](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributes) or null | Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. `return_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason). |
| `return_reason_handle` | Optional | string or null | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_handle`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_handle). |
| `return_reason_id` | Optional | string or null | ID of the reason chosen for this line. `return_reason_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1return_reason_id). |
| `return_reason_name` | Optional | string or null | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_name`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_name). |
| `return_required_quantity` | Optional | integer or null | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. `return_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_required_quantity). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. `return_resolution_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1return_resolution_ids). |
| `return_value` | Optional | [ReturnLineItemValuePreviousAttributes](../models/ReturnLineItemValuePreviousAttributes.md#returnlineitemvaluepreviousattributes) or null | Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. |
| `review_required_quantity` | Optional | integer or null | Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. `review_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreview_required_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `status` | Optional | string or null | Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`. `supported_actions`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id). |

#### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1 merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.accepted_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.accepted_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesaccepted_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.allowed_resolution_types

Declared alternatives: [ReturnLineItemPreviousAttributes.allowed_resolution_types](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesallowed_resolution_types).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.approved_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.approved_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesapproved_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.automatic_resolution_type

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.automatic_resolution_type variant 1

anyOf variant 1: The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually..

- Value shape: string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.automatic_resolution_type variant 2

anyOf variant 2.

- Value shape: null. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.available_resolution_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.available_resolution_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesavailable_resolution_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_components

Declared alternatives: [ReturnLineItemPreviousAttributes.bundle_components](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_id

Declared alternatives: [BuyerRefundPreviousAttributes.line_item_allocations variant 1.[] fields 1.bundle_id](../models/BuyerRefundPreviousAttributes.md#buyerrefundpreviousattributesline_item_allocations-variant-1-fields-1bundle_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.buyer_note

Declared alternatives: [ReturnLineItemPreviousAttributes.buyer_note](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbuyer_note).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.canceled_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.canceled_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributescanceled_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.decided_by

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.decision_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.decline_reason

Declared alternatives: [ReturnLineItemPreviousAttributes.decline_reason](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.decline_reason_message

Declared alternatives: [ReturnLineItemPreviousAttributes.decline_reason_message](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.declined_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.declined_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdeclined_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.description

Declared alternatives: [OrderLineItemPreviousAttributes.description](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.dispositioned_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.dispositioned_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdispositioned_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.eligibility

Declared alternatives: [ReturnLineItemPreviousAttributes.eligibility](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeseligibility).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.fulfillment

Declared alternatives: [ReturnLineItemPreviousAttributes.fulfillment](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_id

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.fulfillment_id](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1fulfillment_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.handed_off_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.handed_off_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeshanded_off_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.inspected_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.inspected_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspected_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.inspection_waived_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.inspection_waived_by

Declared alternatives: [ReturnLineItemPreviousAttributes.inspection_waived_by](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waived_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.inspection_waiver_reason

Declared alternatives: [ReturnLineItemPreviousAttributes.inspection_waiver_reason](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.inspection_waiver_reason_message

Declared alternatives: [ReturnLineItemPreviousAttributes.inspection_waiver_reason_message](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_inspection_required

Declared alternatives: [ReturnLineItemPreviousAttributes.is_inspection_required](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_inspection_required).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.is_policy_overridden

Declared alternatives: [ReturnLineItemPreviousAttributes.is_policy_overridden](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_policy_overridden).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.merchandise_status

Declared alternatives: [ReturnLineItemPreviousAttributes.merchandise_status](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmerchandise_status).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [ReturnLineItemPreviousAttributes.modifiers](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_id

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_id](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1order_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1order_line_item_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.overridden_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.overridden_by

Declared alternatives: [ReturnLineItemPreviousAttributes.overridden_by](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverridden_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.override_reason

Declared alternatives: [ReturnLineItemPreviousAttributes.override_reason](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverride_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.override_reason_message

Declared alternatives: [ReturnLineItemPreviousAttributes.override_reason_message](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverride_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.product_id

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.line_items variant 1.[] fields 1.product_id](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items-variant-1-fields-1product_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.received_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.received_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreceived_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.receiving_location_id

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.receiving_location_id variant 1

anyOf variant 1: ID of the Location the buyer sends the merchandise to. Absent when none has to come back..

- Value shape: string. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.rejected_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.rejected_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrejected_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.release_timing

Declared alternatives: [ReturnLineItemPreviousAttributes.release_timing](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrelease_timing).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.requested_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.requested_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrequested_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.requested_resolution_type

Declared alternatives: [ReturnLineItemPreviousAttributes.requested_resolution_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrequested_resolution_type).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.resolution_status

Declared alternatives: [ReturnLineItemPreviousAttributes.resolution_status](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesresolution_status).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.resolved_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.resolved_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesresolved_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_id

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the Return this line belongs to..

- Value shape: string. ID of the Return this line belongs to. ID of the Return this line belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return this line belongs to. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: Unique identifier for this return line item, prefixed `retli_`..

- Value shape: string. Unique identifier for this return line item, prefixed `retli_`. Unique identifier for this return line item, prefixed `retli_`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return line item, prefixed `retli_`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_reason

Declared alternatives: [ReturnLineItemPreviousAttributes.return_reason](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_reason_handle

Declared alternatives: [ReturnLineItemPreviousAttributes.return_reason_handle](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_handle).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_reason_id

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_reason_id variant 1

anyOf variant 1: ID of the reason chosen for this line..

- Value shape: string. ID of the reason chosen for this line. ID of the reason chosen for this line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_reason_id variant 2

anyOf variant 2.

- Value shape: null. ID of the reason chosen for this line. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_reason_name

Declared alternatives: [ReturnLineItemPreviousAttributes.return_reason_name](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_name).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_required_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.return_required_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_required_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_ids variant 1

anyOf variant 1: IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions..

- Value shape: Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.return_resolution_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.review_required_quantity

Declared alternatives: [ReturnLineItemPreviousAttributes.review_required_quantity](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreview_required_quantity).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.selected_options

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.status

Declared alternatives: [ReturnLineItemPreviousAttributes.status](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesstatus).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.supported_actions

Declared alternatives: [ReturnLineItemPreviousAttributes.supported_actions](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributessupported_actions).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.variant_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesline_items-variant-1-fields-1variant_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status

### ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status variant 1

anyOf variant 1: On the Return, the least-finished line's value..

- Value shape: string. On the Return, the least-finished line's value. Values: `"not_required"`, `"awaiting_handoff"`, `"in_transit"`, `"partially_received"`, `"inspection_required"`, `"partially_inspected"`, `"inspection_review_required"`, `"disposition_required"`, `"resolved"`, `"exception"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status variant 2

anyOf variant 2.

- Value shape: null. On the Return, the least-finished line's value. 

### ReturnCanceledMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnCanceledMerchantEventDataPreviousAttributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### ReturnCanceledMerchantEventDataPreviousAttributes.order_id

### ReturnCanceledMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the Order the Return is against..

- Value shape: string. ID of the Order the Return is against. 

### ReturnCanceledMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Order the Return is against. 

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation

How your return policies judged the request when the Return was created.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Conditional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `expires_at` | Conditional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `line_items` | Conditional | Array of [ReturnPolicyEvaluationLineItemPreviousAttributes](../models/ReturnPolicyEvaluationLineItemPreviousAttributes.md#returnpolicyevaluationlineitempreviousattributes) or null | Eligibility of each line asked about. `line_items`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items). |
| `reason` | Conditional | string or null | Why the selection got this result. Values: [9 declared values](#returncanceledmerchanteventdatapreviousattributespolicy_evaluation-reason-values). `reason`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesreason). |
| `reason_message` | Conditional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message). |
| `return_policy_id` | Conditional | string or null | ID of the policy that judged the lines. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributespolicy_evaluation-variant-1return_policy_id). |
| `return_policy_revision_id` | Conditional | string or null | ID of the policy revision that judged the lines. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributespolicy_evaluation-variant-1return_policy_revision_id). |
| `status` | Conditional | string or null | Overall result for the selection. `review_required` when the lines differ. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesstatus). |

#### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1

anyOf ReturnPolicyEvaluationPreviousAttributes.

- Optional: `evaluated_at`, `expires_at`, `line_items`, `reason`, `reason_message`, `return_policy_id`, `return_policy_revision_id`, `status`.

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 2

anyOf variant 2.

- Undeclared: `evaluated_at`, `expires_at`, `line_items`, `reason`, `reason_message`, `return_policy_id`, `return_policy_revision_id`, `status`.
- Value shape: null. How your return policies judged the request when the Return was created. 

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.evaluated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.expires_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.line_items

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.line_items](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesline_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.reason

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.reason](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesreason).

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.reason_message

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.reason_message](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.return_policy_id

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.return_policy_id variant 1

anyOf variant 1: ID of the policy that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy that judged the lines. Absent when none matched. ID of the policy that judged the lines. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the lines. Absent when none matched. 

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.return_policy_revision_id

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the lines. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the lines. Absent when none matched. ID of the policy revision that judged the lines. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the lines. Absent when none matched. 

### ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation variant 1.status

Declared alternatives: [ReturnPolicyEvaluationPreviousAttributes.status](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributesstatus).

### ReturnCanceledMerchantEventDataPreviousAttributes.resolution_status

### ReturnCanceledMerchantEventDataPreviousAttributes.resolution_status variant 1

anyOf variant 1: Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections..

- Value shape: string. Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.resolution_status variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_disposition_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.return_disposition_ids variant 1

anyOf variant 1: IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_disposition_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions

### ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions variant 1

anyOf variant 1: Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order..

- Value shape: Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes). Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions variant 1.[] fields 1

Field definitions: [ReturnInspectionPreviousAttributes.generated_dispositions variant 1.[] fields 1](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions-variant-1-fields-1).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: Unique identifier for this return, prefixed `ret_`..

- Value shape: string. Unique identifier for this return, prefixed `ret_`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return, prefixed `ret_`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspection_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspection_ids variant 1

anyOf variant 1: IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspection_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1

anyOf variant 1: Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order..

- Value shape: Array of [ReturnInspectionPreviousAttributes](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributes). Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance-variant-1external_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key). |
| `inspected_at` | Optional | string or null | RFC3339 timestamp. `inspected_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `inspection_location_id` | Optional | string or null | Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. `inspection_location_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1inspection_location_id). |
| `line_items` | Optional | Array of [ReturnInspectionLineItemPreviousAttributes](../models/ReturnInspectionLineItemPreviousAttributes.md#returninspectionlineitempreviousattributes) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1return_id). |
| `return_inspection_id` | Optional | string or null | Unique identifier for this return inspection, prefixed `retins_`. `return_inspection_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1return_inspection_id). |
| `return_receipt_id` | Optional | string or null | ID of the receipt being inspected. `return_receipt_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1return_receipt_id). |
| `source_system` | Optional | [ReturnSourceSystemPreviousAttributes](../models/ReturnSourceSystemPreviousAttributes.md#returnsourcesystempreviousattributes) or null | System that recorded the observation. `null` when no source system was recorded. `source_system`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system). |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `superseded_by_return_inspection_id` | Optional | string or null | ID of the inspection that corrected this one. Absent while it is current. `superseded_by_return_inspection_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1superseded_by_return_inspection_id). |
| `supersedes_return_inspection_id` | Optional | string or null | ID of the inspection this one corrects. `supersedes_return_inspection_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1supersedes_return_inspection_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion). |

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.correction_reason

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.correction_reason_message

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason_message](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.external_actor_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.external_actor_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance-variant-1external_actor_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.generated_dispositions

Declared alternatives: [ReturnInspectionPreviousAttributes.generated_dispositions](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.inspected_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.inspection_location_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.inspection_location_id variant 1

anyOf variant 1: Location where the returned merchandise was inspected. Must match the receipt receiving_location_id..

- Value shape: string. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.inspection_location_id variant 2

anyOf variant 2.

- Value shape: null. Location where the returned merchandise was inspected. Must match the receipt receiving_location_id. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.line_items

Declared alternatives: [ReturnInspectionPreviousAttributes.line_items](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesline_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the Return the goods belong to..

- Value shape: string. ID of the Return the goods belong to. ID of the Return the goods belong to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the goods belong to. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_inspection_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_inspection_id variant 1

anyOf variant 1: Unique identifier for this return inspection, prefixed `retins_`..

- Value shape: string. Unique identifier for this return inspection, prefixed `retins_`. Unique identifier for this return inspection, prefixed `retins_`. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return inspection, prefixed `retins_`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_receipt_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_receipt_id variant 1

anyOf variant 1: ID of the receipt being inspected..

- Value shape: string. ID of the receipt being inspected. ID of the receipt being inspected. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt being inspected. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.source_system

Declared alternatives: [ReturnInspectionPreviousAttributes.source_system](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.status

Declared alternatives: [ReturnInspectionPreviousAttributes.status](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.superseded_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.superseded_by_return_inspection_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.superseded_by_return_inspection_id variant 1

anyOf variant 1: ID of the inspection that corrected this one. Absent while it is current..

- Value shape: string. ID of the inspection that corrected this one. Absent while it is current. ID of the inspection that corrected this one. Absent while it is current. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.superseded_by_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection that corrected this one. Absent while it is current. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.supersedes_return_inspection_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.supersedes_return_inspection_id variant 1

anyOf variant 1: ID of the inspection this one corrects..

- Value shape: string. ID of the inspection this one corrects. ID of the inspection this one corrects. Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.supersedes_return_inspection_id variant 2

anyOf variant 2.

- Value shape: null. ID of the inspection this one corrects. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.version

Declared alternatives: [ReturnInspectionPreviousAttributes.version](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_number

### ReturnCanceledMerchantEventDataPreviousAttributes.return_number variant 1

anyOf variant 1: Human-readable number for the Return..

- Value shape: string. Human-readable number for the Return. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable number for the Return. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipt_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipt_ids variant 1

anyOf variant 1: IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipt_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1

anyOf variant 1: Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order..

- Value shape: Array of [ReturnReceiptPreviousAttributes](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes). Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `correction_reason` | Optional | string or null | Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Values: `"entry_error"`, `"duplicate_observation"`, `"source_correction"`, `"reconciliation_correction"`, `"other"`. `correction_reason`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason). |
| `correction_reason_message` | Optional | string or null | Detail about `correction_reason`. `correction_reason_message`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `external_actor_id` | Optional | string or null | Your identifier for the actor who recorded the event. Don't put secrets in this field. `external_actor_id`: [declared alternatives](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance-variant-1external_actor_id). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `generated_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Dispositions Flint created when it recorded this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. `generated_dispositions`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. `idempotency_key`: [declared alternatives](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key). |
| `line_items` | Optional | Array of [ReturnReceiptLineItemPreviousAttributes](../models/ReturnReceiptLineItemPreviousAttributes.md#returnreceiptlineitempreviousattributes) or null | The lines recorded. `line_items`: [declared alternatives](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items). |
| `received_at` | Optional | string or null | RFC3339 timestamp. `received_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `receiving_location_id` | Optional | string or null | ID of the Location that received the goods. `receiving_location_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts-variant-1-fields-1receiving_location_id). |
| `return_id` | Optional | string or null | ID of the Return the goods belong to. `return_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1return_id). |
| `return_receipt_id` | Optional | string or null | Unique identifier for this return receipt, prefixed `retrc_`. `return_receipt_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts-variant-1-fields-1return_receipt_id). |
| `shipment_id` | Optional | string or null | ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. `shipment_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts-variant-1-fields-1shipment_id). |
| `source_system` | Optional | [ReturnSourceSystemPreviousAttributes](../models/ReturnSourceSystemPreviousAttributes.md#returnsourcesystempreviousattributes) or null | System that recorded the observation. `null` when no source system was recorded. `source_system`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system). |
| `status` | Optional | string or null | Whether this is the current observation of these units or a correction replaced it. Values: `"current"`, `"superseded"`. `status`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus). |
| `superseded_at` | Optional | string or null | RFC3339 timestamp. `superseded_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `superseded_by_return_receipt_id` | Optional | string or null | ID of the receipt that corrected this one. Absent while it is current. `superseded_by_return_receipt_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts-variant-1-fields-1superseded_by_return_receipt_id). |
| `supersedes_return_receipt_id` | Optional | string or null | ID of the receipt this one corrects. `supersedes_return_receipt_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts-variant-1-fields-1supersedes_return_receipt_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion). |

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.correction_reason

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.correction_reason_message

Declared alternatives: [ReturnInspectionPreviousAttributes.correction_reason_message](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributescorrection_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.external_actor_id

Declared alternatives: [InventoryCountAppliedMerchantEventDataPreviousAttributes.observation_provenance variant 1.external_actor_id](../models/InventoryCountAppliedMerchantEventDataPreviousAttributes.md#inventorycountappliedmerchanteventdatapreviousattributesobservation_provenance-variant-1external_actor_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.generated_dispositions

Declared alternatives: [ReturnInspectionPreviousAttributes.generated_dispositions](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesgenerated_dispositions).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.line_items

Declared alternatives: [ReturnReceiptPreviousAttributes.line_items](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributesline_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.received_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.receiving_location_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.receiving_location_id variant 1

anyOf variant 1: ID of the Location that received the goods..

- Value shape: string. ID of the Location that received the goods. ID of the Location that received the goods. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that received the goods. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.return_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1.return_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections-variant-1-fields-1return_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.return_receipt_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.return_receipt_id variant 1

anyOf variant 1: Unique identifier for this return receipt, prefixed `retrc_`..

- Value shape: string. Unique identifier for this return receipt, prefixed `retrc_`. Unique identifier for this return receipt, prefixed `retrc_`. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return receipt, prefixed `retrc_`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.shipment_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.shipment_id variant 1

anyOf variant 1: ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment..

- Value shape: string. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.shipment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.source_system

Declared alternatives: [ReturnInspectionPreviousAttributes.source_system](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributessource_system).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.status

Declared alternatives: [ReturnInspectionPreviousAttributes.status](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesstatus).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.superseded_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.superseded_by_return_receipt_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.superseded_by_return_receipt_id variant 1

anyOf variant 1: ID of the receipt that corrected this one. Absent while it is current..

- Value shape: string. ID of the receipt that corrected this one. Absent while it is current. ID of the receipt that corrected this one. Absent while it is current. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.superseded_by_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt that corrected this one. Absent while it is current. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.supersedes_return_receipt_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.supersedes_return_receipt_id variant 1

anyOf variant 1: ID of the receipt this one corrects..

- Value shape: string. ID of the receipt this one corrects. ID of the receipt this one corrects. Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.supersedes_return_receipt_id variant 2

anyOf variant 2.

- Value shape: null. ID of the receipt this one corrects. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1.version

Declared alternatives: [ReturnInspectionPreviousAttributes.version](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributesversion).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolution_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolution_ids variant 1

anyOf variant 1: IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolution_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1

anyOf variant 1: Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order..

- Value shape: Array of [ReturnResolutionPreviousAttributes](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes). Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action_reason` | Optional | string or null | Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release means the merchant must release the resolution. Values: `"buyer_payment"`, `"manual_release"`. `action_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_reason). |
| `action_required_by` | Optional | string or null | Who has to act while the resolution's status is `requires_action`. Values: `"buyer"`, `"merchant"`. `action_required_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_required_by). |
| `adjustments` | Optional | Array of [ReturnResolutionAdjustmentPreviousAttributes](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributes) or null | Fees and credits applied to the resolution's amounts. `adjustments`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments). |
| `buyer_payment_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Amount the buyer owes when deduction_money and replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action. |
| `buyer_refund_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that balance is zero or more. For store_credit, the value issued on new gift cards. Zero for no_monetary_action. |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who canceled the resolution. Merchant reads only. `canceled_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescanceled_by). |
| `cancellation_reason` | Optional | string or null | Why the resolution was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message). |
| `confirmed_at` | Optional | string or null | RFC3339 timestamp. `confirmed_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `confirmed_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who confirmed the resolution. `confirmed_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesconfirmed_by). |
| `corrects_return_resolution_id` | Optional | string or null | ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. `corrects_return_resolution_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1corrects_return_resolution_id). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `created_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who created the resolution. `created_by`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescreated_by). |
| `credit_adjustment_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Credits added by the resolution's adjustments. |
| `deduction_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Deductions taken by the resolution's adjustments, such as a restocking fee. |
| `execution_blockers` | Optional | Array of [ReturnResolutionExecutionBlockerPreviousAttributes](../models/ReturnResolutionExecutionBlockerPreviousAttributes.md#returnresolutionexecutionblockerpreviousattributes) or null | What a confirmed resolution is still waiting for. Empty when nothing is. `execution_blockers`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `failure_code` | Optional | string or null | Reason code for a failed Return resolution, when available. refund_payment_balance_unavailable means the original payments cannot fund the resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint. refund_line_value_unavailable means another refund already returned part of an order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means the original gift card cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means the original payment cannot fund store credit; cancel the resolution and create a refund resolution. Values: [11 declared values](BuyerReturnResolutionInput.md#buyerreturnresolutioninput-failure_code-values). `failure_code`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_code). |
| `failure_message` | Optional | string or null | Explanation of a failed Return resolution, when available. `failure_message`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_message). |
| `fulfilled_at` | Optional | string or null | When the resolution completed. `fulfilled_at`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1fulfilled_at). |
| `gift_card_refund_destination` | Optional | string or null | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Values: `"original"`, `"new_gift_card"`. `gift_card_refund_destination`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesgift_card_refund_destination). |
| `line_items` | Optional | Array of [ReturnResolutionLineItemPreviousAttributes](../models/ReturnResolutionLineItemPreviousAttributes.md#returnresolutionlineitempreviousattributes) or null | Return lines and quantities the resolution covers. Absent on a correction. `line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `payment_intent_ids` | Optional | Array of string or null | IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. `payment_intent_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1payment_intent_ids). |
| `payment_intents` | Optional | Array of [ExpandedPaymentIntentSummaryPreviousAttributes](../models/ExpandedPaymentIntentSummaryPreviousAttributes.md#expandedpaymentintentsummarypreviousattributes) or null | Present only when `expand` includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same order. `payment_intents`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intents). |
| `pricing_basis` | Optional | string or null | How replacement lines are priced. Present on exchanges and replacements. Values: `"original_price"`, `"current_price"`, `"merchant_agreed_price"`. `pricing_basis`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespricing_basis). |
| `refund_ids` | Optional | Array of string or null | IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. `refund_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1refund_ids). |
| `refunds` | Optional | Array of [RefundPreviousAttributes](../models/RefundPreviousAttributes.md#refundpreviousattributes) or null | Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. `refunds`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds). |
| `replacement_line_items` | Optional | Array of [ReturnReplacementLineItemPreviousAttributes](../models/ReturnReplacementLineItemPreviousAttributes.md#returnreplacementlineitempreviousattributes) or null | Merchandise the buyer receives instead, for an exchange or replacement. `replacement_line_items`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items). |
| `replacement_order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `replacement_order`; `null` when expanded and there is no related order. `replacement_order`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order). |
| `replacement_order_id` | Optional | string or null | ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. `replacement_order_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1replacement_order_id). |
| `replacement_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total of the replacement items the buyer receives. |
| `resolution_type` | Optional | string or null | What the buyer gets for the approved quantity. Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. `resolution_type`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesresolution_type). |
| `return_id` | Optional | string or null | ID of the Return the resolution belongs to. `return_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1return_id). |
| `return_policy_id` | Optional | string or null | Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null. `return_policy_id`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments-variant-1-fields-1return_policy_id). |
| `return_policy_revision_id` | Optional | string or null | ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. `return_policy_revision_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1return_policy_revision_id). |
| `return_resolution_id` | Optional | string or null | Unique identifier for this return resolution, prefixed `retres_`. `return_resolution_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions-variant-1-fields-1return_resolution_id). |
| `returned_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Value of the returned units this resolution covers. |
| `status` | Optional | string or null | completed means the buyer has the value: every linked Refund succeeded, any balance was collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable. Values: `"proposed"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. checkout_session is listed while a replacement Order needs a buyer payment, including when the parent Return is not open. Other actions require an open Return. A failed resolution lists retry while it has a failed effect and its failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. Items values: `"cancel"`, `"checkout_session"`, `"confirm"`, `"release"`, `"retry"`. `supported_actions`: [declared alternatives](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion). |

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.action_reason

Declared alternatives: [ReturnResolutionPreviousAttributes.action_reason](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.action_required_by

Declared alternatives: [ReturnResolutionPreviousAttributes.action_required_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_required_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.adjustments

Declared alternatives: [ReturnResolutionPreviousAttributes.adjustments](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.canceled_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.canceled_by

Declared alternatives: [ReturnResolutionPreviousAttributes.canceled_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescanceled_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.cancellation_reason

Declared alternatives: [ReturnResolutionPreviousAttributes.cancellation_reason](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescancellation_reason).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.confirmed_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.confirmed_by

Declared alternatives: [ReturnResolutionPreviousAttributes.confirmed_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesconfirmed_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.corrects_return_resolution_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.corrects_return_resolution_id variant 1

anyOf variant 1: ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`..

- Value shape: string. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.corrects_return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the settled resolution this correction adjusts. Present only when `resolution_type` is `correction`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.created_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.created_by

Declared alternatives: [ReturnResolutionPreviousAttributes.created_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescreated_by).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.execution_blockers

Declared alternatives: [ReturnResolutionPreviousAttributes.execution_blockers](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.failure_code

Declared alternatives: [ReturnResolutionPreviousAttributes.failure_code](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_code).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.failure_message

Declared alternatives: [ReturnResolutionPreviousAttributes.failure_message](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_message).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.fulfilled_at

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.fulfilled_at variant 1

anyOf variant 1: When the resolution completed..

- Value shape: string. When the resolution completed. When the resolution completed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.fulfilled_at variant 2

anyOf variant 2.

- Value shape: null. When the resolution completed. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.gift_card_refund_destination

Declared alternatives: [ReturnResolutionPreviousAttributes.gift_card_refund_destination](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesgift_card_refund_destination).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.line_items

Declared alternatives: [ReturnResolutionPreviousAttributes.line_items](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.payment_intent_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.payment_intent_ids variant 1

anyOf variant 1: IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists..

- Value shape: Array of string. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. Items: Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.payment_intent_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the payment intents that collect the buyer's balance for this resolution, in the order Flint linked them. Empty until a payment exists. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.payment_intents

Declared alternatives: [ReturnResolutionPreviousAttributes.payment_intents](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intents).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.pricing_basis

Declared alternatives: [ReturnResolutionPreviousAttributes.pricing_basis](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespricing_basis).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.refund_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.refund_ids variant 1

anyOf variant 1: IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists..

- Value shape: Array of string. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. Items: Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.refund_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.refunds

Declared alternatives: [ReturnResolutionPreviousAttributes.refunds](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.replacement_line_items

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_line_items](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.replacement_order

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_order](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.replacement_order_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.replacement_order_id variant 1

anyOf variant 1: ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists..

- Value shape: string. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.replacement_order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the replacement Order Flint created for an exchange or replacement. Absent until it exists. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.resolution_type

Declared alternatives: [ReturnResolutionPreviousAttributes.resolution_type](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesresolution_type).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the Return the resolution belongs to..

- Value shape: string. ID of the Return the resolution belongs to. ID of the Return the resolution belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return the resolution belongs to. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_policy_id

Declared alternatives: [ReturnResolutionPreviousAttributes.adjustments variant 1.[] fields 1.return_policy_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments-variant-1-fields-1return_policy_id).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_policy_revision_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_policy_revision_id variant 1

anyOf variant 1: ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections..

- Value shape: string. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return policy revision that judged the lines. Set only when Flint created the resolution itself and no merchant decision overrode the policy. Absent otherwise, including on resolutions you create and on corrections. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_resolution_id

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_resolution_id variant 1

anyOf variant 1: Unique identifier for this return resolution, prefixed `retres_`..

- Value shape: string. Unique identifier for this return resolution, prefixed `retres_`. Unique identifier for this return resolution, prefixed `retres_`. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return resolution, prefixed `retres_`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.status

Declared alternatives: [ReturnResolutionPreviousAttributes.status](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesstatus).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.supported_actions

Declared alternatives: [ReturnResolutionPreviousAttributes.supported_actions](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributessupported_actions).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

### ReturnCanceledMerchantEventDataPreviousAttributes.shipment_ids

### ReturnCanceledMerchantEventDataPreviousAttributes.shipment_ids variant 1

anyOf variant 1: IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.shipment_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledMerchantEventDataPreviousAttributes.shipments

### ReturnCanceledMerchantEventDataPreviousAttributes.shipments variant 1

anyOf variant 1: Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order..

- Value shape: Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes). Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.shipments variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1

Field definitions: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1).

### ReturnCanceledMerchantEventDataPreviousAttributes.status

### ReturnCanceledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need..

- Value shape: string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. 

### ReturnCanceledMerchantEventDataPreviousAttributes.supported_actions

### ReturnCanceledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. 

### ReturnCanceledMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.version

### ReturnCanceledMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value..

- Value shape: integer. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: `int64`. minimum: `0`. 

### ReturnCanceledMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. 

