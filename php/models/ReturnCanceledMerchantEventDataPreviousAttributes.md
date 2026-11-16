[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `canceled_by` | Optional | [ReturnCanceledMerchantEventDataPreviousAttributesCanceledBy](../models/ReturnCanceledMerchantEventDataPreviousAttributesCanceledBy.md#returncanceledmerchanteventdatapreviousattributescanceledby) or null | Who canceled the Return. |
| `cancellation_reason` | Optional | string or null | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributescancellation_reason_message). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `completed_by` | Optional | [ReturnCanceledMerchantEventDataPreviousAttributesCompletedBy](../models/ReturnCanceledMerchantEventDataPreviousAttributesCompletedBy.md#returncanceledmerchanteventdatapreviousattributescompletedby) or null | Who completed the Return. `system` when Flint completed it automatically. |
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
| `merchandise_status` | Optional | string or null | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledmerchanteventdatapreviousattributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesmerchandise_status). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the Order the Return is against. `order_id`: [declared alternatives](../models/ReturnCanceledMerchantEventDataPreviousAttributes.md#returncanceledmerchanteventdatapreviousattributesorder_id). |
| `policy_evaluation` | Optional | [ReturnCanceledMerchantEventDataPreviousAttributesPolicyEvaluation](../models/ReturnCanceledMerchantEventDataPreviousAttributesPolicyEvaluation.md#returncanceledmerchanteventdatapreviousattributespolicyevaluation) or null | How your return policies judged the request when the Return was created. |
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

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 1

anyOf variant 1: Why the Return was canceled..

- Value shape: string. Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the Return was canceled. 

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message variant 1

anyOf variant 1: Detail sent with the cancellation. Merchant reads only..

- Value shape: string. Detail sent with the cancellation. Merchant reads only. 

### ReturnCanceledMerchantEventDataPreviousAttributes.cancellation_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the cancellation. Merchant reads only. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1

anyOf variant 1: What is still owed before the Return can complete. Empty when nothing is..

- Value shape: Array of [ReturnCompletionBlocker](../models/ReturnCompletionBlocker.md#returncompletionblocker). What is still owed before the Return can complete. Empty when nothing is. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 2

anyOf variant 2.

- Value shape: null. What is still owed before the Return can complete. Empty when nothing is. 

### ReturnCanceledMerchantEventDataPreviousAttributes.completion_blockers variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.completion_blockers[]](../models/CancelReturnResponse.md#cancelreturnresponsedatacompletion_blockers).

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

- Value shape: Array of [ReturnHandoffRequirement](../models/ReturnHandoffRequirement.md#returnhandoffrequirement). What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. 

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 2

anyOf variant 2.

- Value shape: null. What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. 

### ReturnCanceledMerchantEventDataPreviousAttributes.handoff_requirements variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.handoff_requirements[]](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirements).

### ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by

### ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by variant 1

anyOf variant 1: Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent..

- Value shape: string. Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: The lines being returned..

- Value shape: Array of [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem). The lines being returned. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines being returned. 

### ReturnCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items).

### ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status

### ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status variant 1

anyOf variant 1: On the Return, the least-finished line's value..

- Value shape: string. On the Return, the least-finished line's value. Values: `"not_required"`, `"awaiting_handoff"`, `"in_transit"`, `"partially_received"`, `"inspection_required"`, `"partially_inspected"`, `"inspection_review_required"`, `"disposition_required"`, `"resolved"`, `"exception"`.

### ReturnCanceledMerchantEventDataPreviousAttributes.merchandise_status variant 2

anyOf variant 2.

- Value shape: null. On the Return, the least-finished line's value. 

### ReturnCanceledMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### ReturnCanceledMerchantEventDataPreviousAttributes.order_id

### ReturnCanceledMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the Order the Return is against..

- Value shape: string. ID of the Order the Return is against. 

### ReturnCanceledMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Order the Return is against. 

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

- Value shape: Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition). Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_dispositions variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_dispositions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_dispositions).

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

- Value shape: Array of [ReturnInspection](../models/ReturnInspection.md#returninspection). Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_inspections variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_inspections[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections).

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

- Value shape: Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt). Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_receipts variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_receipts[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts).

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

- Value shape: Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution). Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.return_resolutions variant 1.[] fields 1

Field definitions: [CancelReturnResponse.data.return_resolutions[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_resolutions).

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

- Value shape: Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary). Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.shipments variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. 

### ReturnCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

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

