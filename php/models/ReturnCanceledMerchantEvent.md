[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCanceledMerchantEvent

The `return.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [ReturnCanceledMerchantEventData](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnCanceledMerchantEventRequest](../models/ReturnCanceledMerchantEventRequest.md#returncanceledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### ReturnCanceledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnCanceledMerchantEvent.md#returncanceledmerchanteventdata-fields-1previous_attributes). |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdataactor). |

### ReturnCanceledMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

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
| `initiated_by` | Required | string | Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |
| `line_items` | Required | Array of [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) | The lines being returned. `line_items[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items). |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledmerchanteventdata-fields-1object-merchandise_status-values). |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | ID of the Order the Return is against. |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How your return policies judged the request when the Return was created. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. `policy_evaluation`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatapolicy_evaluation). |
| `resolution_status` | Required | string | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. |
| `return_disposition_ids` | Required | Array of string | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. `return_dispositions[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions). |
| `return_id` | Required | string | Unique identifier for this return, prefixed `ret_`. |
| `return_inspection_ids` | Required | Array of string | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_inspections` | Optional | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. `return_inspections[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections). |
| `return_number` | Required | string | Human-readable number for the Return. |
| `return_receipt_ids` | Required | Array of string | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_receipts` | Optional | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. `return_receipts[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts). |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_resolutions` | Optional | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) | Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. `return_resolutions[]`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutions). |
| `shipment_ids` | Required | Array of string | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `status` | Required | string | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: `int64`. minimum: `0`. |

#### ReturnCanceledMerchantEvent.data fields 1.object merchandise_status values

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

### ReturnCanceledMerchantEvent.data fields 1.object.canceled_by

Field definitions: [CancelReturnResponse.data.canceled_by](../models/CancelReturnResponse.md#cancelreturnresponsedatacanceled_by).

### ReturnCanceledMerchantEvent.data fields 1.object.completed_by

Field definitions: [CancelReturnResponse.data.completed_by](../models/CancelReturnResponse.md#cancelreturnresponsedatacompleted_by).

### ReturnCanceledMerchantEvent.data fields 1.object.completion_blockers[]

Field definitions: [CancelReturnResponse.data.completion_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatacompletion_blockers).

### ReturnCanceledMerchantEvent.data fields 1.object.handoff_requirements[]

Field definitions: [CancelReturnResponse.data.handoff_requirements[]](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirements).

### ReturnCanceledMerchantEvent.data fields 1.object.line_items[]

Field definitions: [CancelReturnResponse.data.line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items).

### ReturnCanceledMerchantEvent.data fields 1.object.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### ReturnCanceledMerchantEvent.data fields 1.object.policy_evaluation

Field definitions: [CancelReturnResponse.data.policy_evaluation](../models/CancelReturnResponse.md#cancelreturnresponsedatapolicy_evaluation).

### ReturnCanceledMerchantEvent.data fields 1.object.return_dispositions[]

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

### ReturnCanceledMerchantEvent.data fields 1.object.return_inspections[]

Field definitions: [CancelReturnResponse.data.return_inspections[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections).

### ReturnCanceledMerchantEvent.data fields 1.object.return_receipts[]

Field definitions: [CancelReturnResponse.data.return_receipts[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts).

### ReturnCanceledMerchantEvent.data fields 1.object.return_resolutions[]

Field definitions: [CancelReturnResponse.data.return_resolutions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutions).

### ReturnCanceledMerchantEvent.data fields 1.object.shipments[]

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

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
| `initiated_by` | Optional | string or null | Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. `initiated_by`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesinitiated_by). |
| `line_items` | Optional | Array of [ReturnLineItemPreviousAttributes](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributes) or null | The lines being returned. `line_items`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items). |
| `merchandise_status` | Optional | string or null | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledmerchanteventdata-fields-1previous_attributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesmerchandise_status). |
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

#### ReturnCanceledMerchantEvent.data fields 1.previous_attributes merchandise_status values

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

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.canceled_by

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.canceled_by](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescanceled_by).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.cancellation_reason

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnDispositionPreviousAttributes.cancellation_reason_message](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributescancellation_reason_message).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.completed_by

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completed_by](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompleted_by).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.completion_blockers

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_blockers).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.completion_mode

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_mode](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_mode).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.completion_reason

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.completion_reason_message

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.completion_reason_message](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescompletion_reason_message).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.customer

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.customer](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributescustomer).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.customer_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescustomer_id).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.decision_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.decision_status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.decision_status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesdecision_status).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.handoff_requirements

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributeshandoff_requirements).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.initiated_by

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesinitiated_by).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.line_items](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesline_items).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.merchandise_status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesmerchandise_status).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.order

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.order](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesorder).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.order_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesorder_id).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.policy_evaluation

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.policy_evaluation](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributespolicy_evaluation).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.resolution_status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.resolution_status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesresolution_status).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_disposition_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_disposition_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_disposition_ids).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_dispositions

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_dispositions).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_id](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_id).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_inspection_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_inspection_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspection_ids).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_inspections

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_inspections).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_number

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_number](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_number).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_receipt_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_receipt_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipt_ids).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_receipts

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_receipts).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_resolution_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_resolution_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolution_ids).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.return_resolutions

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesreturn_resolutions).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.shipment_ids

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.shipment_ids](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipment_ids).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.shipments

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.shipments](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesshipments).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.status](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesstatus).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributessupported_actions).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [ReturnCanceledMerchantEventDataPreviousAttributes.version](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesversion).

### ReturnCanceledMerchantEvent.data fields 1.actor

Field definitions: [ReturnCanceledMerchantEventData.actor](../models/ReturnCanceledMerchantEventData.md#returncanceledmerchanteventdataactor).

