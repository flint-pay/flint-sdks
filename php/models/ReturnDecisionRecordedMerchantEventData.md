[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDecisionRecordedMerchantEventData

The resource snapshot recorded for this event and rendered at the delivery API version.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [ReturnDecisionRecordedMerchantEventDataObject](../models/ReturnDecisionRecordedMerchantEventDataObject.md#returndecisionrecordedmerchanteventdataobject) | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. |
| `previous_attributes` | Optional | [ReturnDecisionRecordedMerchantEventDataPreviousAttributes](../models/ReturnDecisionRecordedMerchantEventDataPreviousAttributes.md#returndecisionrecordedmerchanteventdatapreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnDecisionRecordedMerchantEventData.md#returndecisionrecordedmerchanteventdataprevious_attributes). |

### ReturnDecisionRecordedMerchantEventData.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) or null | Who canceled the Return. |
| `cancellation_reason` | Optional | string or null | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `completed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) or null | Who completed the Return. `system` when Flint completed it automatically. |
| `completion_blockers` | Optional | Array of [ReturnCompletionBlocker](../models/ReturnCompletionBlocker.md#returncompletionblocker) or null | What is still owed before the Return can complete. Empty when nothing is. `completion_blockers`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_blockers). |
| `completion_mode` | Optional | string or null | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. `completion_mode`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_mode). |
| `completion_reason` | Optional | string or null | Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`. `completion_reason`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason). |
| `completion_reason_message` | Optional | string or null | Detail sent when the Return was completed by hand. `completion_reason_message`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer the Return belongs to. `customer_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescustomer_id). |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `decision_status` | Optional | string or null | Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. `decision_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesdecision_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `financial_summary` | Optional | [ReturnFinancialSummary](../models/ReturnFinancialSummary.md#returnfinancialsummary) or null | The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. |
| `handoff_requirements` | Optional | Array of [ReturnHandoffRequirement](../models/ReturnHandoffRequirement.md#returnhandoffrequirement) or null | What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. `handoff_requirements`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributeshandoff_requirements). |
| `initiated_by` | Optional | string or null | Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`. `initiated_by`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesinitiated_by). |
| `line_items` | Optional | Array of [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) or null | The lines being returned. `line_items`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items). |
| `merchandise_status` | Optional | string or null | On the Return, the least-finished line's value. Values: [10 declared values](#returndecisionrecordedmerchanteventdataprevious_attributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesmerchandise_status). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the Order the Return is against. `order_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesorder_id). |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) or null | How your return policies judged the request when the Return was created. |
| `resolution_status` | Optional | string or null | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. `resolution_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesresolution_status). |
| `return_disposition_ids` | Optional | Array of string or null | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. `return_disposition_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_disposition_ids). |
| `return_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) or null | Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. `return_dispositions`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_dispositions). |
| `return_id` | Optional | string or null | Unique identifier for this return, prefixed `ret_`. `return_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_id). |
| `return_inspection_ids` | Optional | Array of string or null | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. `return_inspection_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspection_ids). |
| `return_inspections` | Optional | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) or null | Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. `return_inspections`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections). |
| `return_number` | Optional | string or null | Human-readable number for the Return. `return_number`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_number). |
| `return_receipt_ids` | Optional | Array of string or null | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. `return_receipt_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipt_ids). |
| `return_receipts` | Optional | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) or null | Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. `return_receipts`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. `return_resolution_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolution_ids). |
| `return_resolutions` | Optional | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) or null | Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. `return_resolutions`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions). |
| `shipment_ids` | Optional | Array of string or null | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. `shipment_ids`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipment_ids). |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) or null | Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. `shipments`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipments). |
| `status` | Optional | string or null | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`. `supported_actions`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. `version`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesversion). |

#### ReturnDecisionRecordedMerchantEventData.previous_attributes merchandise_status values

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

### ReturnDecisionRecordedMerchantEventData.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.cancellation_reason

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.completion_blockers

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_blockers).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.completion_mode

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_mode](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_mode).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.completion_reason

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.completion_reason_message

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason_message](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason_message).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.customer_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.customer_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescustomer_id).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.decision_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.decision_status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.decision_status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesdecision_status).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.handoff_requirements

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributeshandoff_requirements).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.initiated_by

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesinitiated_by).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.line_items

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.line_items](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.merchandise_status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesmerchandise_status).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.order_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.order_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesorder_id).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.resolution_status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.resolution_status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesresolution_status).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_disposition_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_disposition_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_disposition_ids).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_dispositions

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_dispositions).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_id).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_inspection_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_inspection_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspection_ids).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_inspections

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_number

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_number](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_number).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_receipt_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_receipt_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipt_ids).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_receipts

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_resolution_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_resolution_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolution_ids).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.return_resolutions

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.shipment_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.shipment_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipment_ids).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.shipments

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.shipments](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipments).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesstatus).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.supported_actions

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributessupported_actions).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnDecisionRecordedMerchantEventData.previous_attributes.version

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.version](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesversion).

