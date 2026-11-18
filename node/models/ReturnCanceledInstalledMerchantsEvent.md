[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCanceledInstalledMerchantsEvent

The `return.canceled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return.canceled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnCanceledInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributes). |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |

### ReturnCanceledInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `canceled_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who canceled the Return. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `cancellation_reason` | Optional | string | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string | Detail sent with the cancellation. Merchant reads only. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `completed_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who completed the Return. `system` when Flint completed it automatically. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `completion_blockers` | Required | Array of [ReturnCompletionBlocker](../models/ReturnCompletionBlocker.md#returncompletionblocker) | What is still owed before the Return can complete. Empty when nothing is. |
| `completion_mode` | Optional | string | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. |
| `completion_reason` | Optional | string | Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`. |
| `completion_reason_message` | Optional | string | Detail sent when the Return was completed by hand. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string | The customer the Return belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `decision_status` | Required | string | Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `financial_summary` | Required | [ReturnFinancialSummary](../models/ReturnFinancialSummary.md#returnfinancialsummary) | The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer. |
| `handoff_requirements` | Required | Array of [ReturnHandoffRequirement](../models/ReturnHandoffRequirement.md#returnhandoffrequirement) | What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. |
| `initiated_by` | Required | string | Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. |
| `line_items` | Required | Array of [ReturnLineItem](../models/ReturnLineItem.md#returnlineitem) | The lines being returned. |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledinstalledmerchantseventdataobject-merchandise_status-values). |
| `metadata` | Required | [MetadataMap](../models/MetadataMap.md#metadatamap) | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CancelOrderEditResult.md#cancelordereditresultordermetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | ID of the Order the Return is against. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluation](../models/ReturnPolicyEvaluation.md#returnpolicyevaluation) | How your return policies judged the request when the Return was created. How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `resolution_status` | Required | string | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. |
| `return_disposition_ids` | Required | Array of string | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. |
| `return_dispositions` | Optional | Array of [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. |
| `return_id` | Required | string | Unique identifier for this return, prefixed `ret_`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_inspection_ids` | Required | Array of string | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. |
| `return_inspections` | Optional | Array of [ReturnInspection](../models/ReturnInspection.md#returninspection) | Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. |
| `return_number` | Required | string | Human-readable number for the Return. |
| `return_receipt_ids` | Required | Array of string | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. |
| `return_receipts` | Optional | Array of [ReturnReceipt](../models/ReturnReceipt.md#returnreceipt) | Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `return_resolutions` | Optional | Array of [ReturnResolution](../models/ReturnResolution.md#returnresolution) | Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. |
| `shipment_ids` | Required | Array of string | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. |
| `status` | Required | string | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: `int64`. minimum: `0`. |

#### ReturnCanceledInstalledMerchantsEvent.data.object merchandise_status values

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

### ReturnCanceledInstalledMerchantsEvent.data.object.metadata

Field definitions: [CancelOrderEditResult.order.metadata](../models/CancelOrderEditResult.md#cancelordereditresultordermetadata).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | RFC3339 timestamp. `canceled_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `canceled_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who canceled the Return. |
| `cancellation_reason` | Optional | string or null | Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. `cancellation_reason`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescancellation_reason). |
| `cancellation_reason_message` | Optional | string or null | Detail sent with the cancellation. Merchant reads only. `cancellation_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescancellation_reason_message). |
| `completed_at` | Optional | string or null | RFC3339 timestamp. `completed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `completed_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who completed the Return. `system` when Flint completed it automatically. |
| `completion_blockers` | Optional | Array of [ReturnCompletionBlockerPreviousAttributes](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributes) or null | What is still owed before the Return can complete. Empty when nothing is. `completion_blockers`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescompletion_blockers). |
| `completion_mode` | Optional | string or null | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. `completion_mode`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescompletion_mode). |
| `completion_reason` | Optional | string or null | Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`. `completion_reason`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescompletion_reason). |
| `completion_reason_message` | Optional | string or null | Detail sent when the Return was completed by hand. `completion_reason_message`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescompletion_reason_message). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer` | Optional | [ExpandedCustomerSummaryPreviousAttributes](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributes) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Optional | string or null | The customer the Return belongs to. `customer_id`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescustomer_id). |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `decision_status` | Optional | string or null | Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. `decision_status`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesdecision_status). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `financial_summary` | Optional | [ReturnFinancialSummaryPreviousAttributes](../models/ReturnFinancialSummaryPreviousAttributes.md#returnfinancialsummarypreviousattributes) or null | The Return's money in one place: the value of the returned lines, deductions and credits, and what has been refunded or collected. |
| `handoff_requirements` | Optional | Array of [ReturnHandoffRequirementPreviousAttributes](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributes) or null | What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. `handoff_requirements`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributeshandoff_requirements). |
| `initiated_by` | Optional | string or null | Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. `initiated_by`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesinitiated_by). |
| `line_items` | Optional | Array of [ReturnLineItemPreviousAttributes](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributes) or null | The lines being returned. `line_items`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesline_items). |
| `merchandise_status` | Optional | string or null | On the Return, the least-finished line's value. Values: [10 declared values](#returncanceledinstalledmerchantseventdataprevious_attributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesmerchandise_status). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | ID of the Order the Return is against. `order_id`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesorder_id). |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluationPreviousAttributes](../models/ReturnPolicyEvaluationPreviousAttributes.md#returnpolicyevaluationpreviousattributes) or null | How your return policies judged the request when the Return was created. |
| `resolution_status` | Optional | string or null | Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`. `resolution_status`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesresolution_status). |
| `return_disposition_ids` | Optional | Array of string or null | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. `return_disposition_ids`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_disposition_ids). |
| `return_dispositions` | Optional | Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes) or null | Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. `return_dispositions`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_dispositions). |
| `return_id` | Optional | string or null | Unique identifier for this return, prefixed `ret_`. `return_id`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_id). |
| `return_inspection_ids` | Optional | Array of string or null | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. `return_inspection_ids`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_inspection_ids). |
| `return_inspections` | Optional | Array of [ReturnInspectionPreviousAttributes](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributes) or null | Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. `return_inspections`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_inspections). |
| `return_number` | Optional | string or null | Human-readable number for the Return. `return_number`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_number). |
| `return_receipt_ids` | Optional | Array of string or null | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. `return_receipt_ids`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_receipt_ids). |
| `return_receipts` | Optional | Array of [ReturnReceiptPreviousAttributes](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes) or null | Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. `return_receipts`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_receipts). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. `return_resolution_ids`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_resolution_ids). |
| `return_resolutions` | Optional | Array of [ReturnResolutionPreviousAttributes](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes) or null | Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. `return_resolutions`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesreturn_resolutions). |
| `shipment_ids` | Optional | Array of string or null | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. `shipment_ids`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesshipment_ids). |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes) or null | Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. `shipments`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesshipments). |
| `status` | Optional | string or null | Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`. `supported_actions`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. `version`: [declared alternatives](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributesversion). |

#### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes merchandise_status values

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

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason variant 1

anyOf variant 1: Why the Return was canceled..

- Value shape: string. Why the Return was canceled. Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason variant 2

anyOf variant 2.

- Value shape: null. Why the Return was canceled. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message variant 1

anyOf variant 1: Detail sent with the cancellation. Merchant reads only..

- Value shape: string. Detail sent with the cancellation. Merchant reads only. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the cancellation. Merchant reads only. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_blockers

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_blockers variant 1

anyOf variant 1: What is still owed before the Return can complete. Empty when nothing is..

- Value shape: Array of [ReturnCompletionBlockerPreviousAttributes](../models/ReturnCompletionBlockerPreviousAttributes.md#returncompletionblockerpreviousattributes). What is still owed before the Return can complete. Empty when nothing is. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_blockers variant 2

anyOf variant 2.

- Value shape: null. What is still owed before the Return can complete. Empty when nothing is. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_mode

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_mode variant 1

anyOf variant 1: automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual..

- Value shape: string. automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_mode variant 2

anyOf variant 2.

- Value shape: null. automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_reason

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_reason variant 1

anyOf variant 1: Why the Return was completed by hand. Absent when Flint completed it automatically..

- Value shape: string. Why the Return was completed by hand. Absent when Flint completed it automatically. Values: `"manual_completion"`, `"exception_waived"`, `"other"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_reason variant 2

anyOf variant 2.

- Value shape: null. Why the Return was completed by hand. Absent when Flint completed it automatically. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_reason_message

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_reason_message variant 1

anyOf variant 1: Detail sent when the Return was completed by hand..

- Value shape: string. Detail sent when the Return was completed by hand. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.completion_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent when the Return was completed by hand. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.customer_id

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.customer_id variant 1

anyOf variant 1: The customer the Return belongs to..

- Value shape: string. The customer the Return belongs to. The customer the Return belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. The customer the Return belongs to. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.decision_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.decision_status

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.decision_status variant 1

anyOf variant 1: Whether the requested units were approved. `pending` until one decision covers every line..

- Value shape: string. Whether the requested units were approved. `pending` until one decision covers every line. Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.decision_status variant 2

anyOf variant 2.

- Value shape: null. Whether the requested units were approved. `pending` until one decision covers every line. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.handoff_requirements

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.handoff_requirements variant 1

anyOf variant 1: What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer..

- Value shape: Array of [ReturnHandoffRequirementPreviousAttributes](../models/ReturnHandoffRequirementPreviousAttributes.md#returnhandoffrequirementpreviousattributes). What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.handoff_requirements variant 2

anyOf variant 2.

- Value shape: null. What the buyer still has to send back and where. Each entry leaves the list once it is satisfied, so an empty list means nothing is waiting on the buyer. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.initiated_by

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.initiated_by variant 1

anyOf variant 1: Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent..

- Value shape: string. Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.initiated_by variant 2

anyOf variant 2.

- Value shape: null. Who created the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app, or system for Flint automation. It cannot be sent. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.line_items

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.line_items variant 1

anyOf variant 1: The lines being returned..

- Value shape: Array of [ReturnLineItemPreviousAttributes](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributes). The lines being returned. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. The lines being returned. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.merchandise_status

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.merchandise_status variant 1

anyOf variant 1: On the Return, the least-finished line's value..

- Value shape: string. On the Return, the least-finished line's value. Values: `"not_required"`, `"awaiting_handoff"`, `"in_transit"`, `"partially_received"`, `"inspection_required"`, `"partially_inspected"`, `"inspection_review_required"`, `"disposition_required"`, `"resolved"`, `"exception"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.merchandise_status variant 2

anyOf variant 2.

- Value shape: null. On the Return, the least-finished line's value. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.order_id

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the Order the Return is against..

- Value shape: string. ID of the Order the Return is against. ID of the Order the Return is against. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Order the Return is against. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.resolution_status

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.resolution_status variant 1

anyOf variant 1: Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections..

- Value shape: string. Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. Values: `"not_selected"`, `"pending"`, `"partially_completed"`, `"requires_action"`, `"completed"`, `"failed"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.resolution_status variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer has received the value they are owed. Combines the Return's resolutions and its unsettled corrections. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_disposition_ids

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_disposition_ids variant 1

anyOf variant 1: IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retdsp_01KEZF7C007H87J66PH2EEK1VW"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_disposition_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_dispositions

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_dispositions variant 1

anyOf variant 1: Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order..

- Value shape: Array of [ReturnDispositionPreviousAttributes](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributes). Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_dispositions variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_id

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_id variant 1

anyOf variant 1: Unique identifier for this return, prefixed `ret_`..

- Value shape: string. Unique identifier for this return, prefixed `ret_`. Unique identifier for this return, prefixed `ret_`. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return, prefixed `ret_`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_inspection_ids

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_inspection_ids variant 1

anyOf variant 1: IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retins_01KEZF7C00WPB0BR4WTT7CMSB8"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_inspection_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_inspections

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_inspections variant 1

anyOf variant 1: Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order..

- Value shape: Array of [ReturnInspectionPreviousAttributes](../models/ReturnInspectionPreviousAttributes.md#returninspectionpreviousattributes). Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_inspections variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_inspections`. The inspections in `return_inspection_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_number

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_number variant 1

anyOf variant 1: Human-readable number for the Return..

- Value shape: string. Human-readable number for the Return. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable number for the Return. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_receipt_ids

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_receipt_ids variant 1

anyOf variant 1: IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retrc_01KEZF7C0052GWDW41D9AJAVJZ"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_receipt_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_receipts

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_receipts variant 1

anyOf variant 1: Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order..

- Value shape: Array of [ReturnReceiptPreviousAttributes](../models/ReturnReceiptPreviousAttributes.md#returnreceiptpreviousattributes). Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_receipts variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_resolution_ids

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_resolution_ids variant 1

anyOf variant 1: IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_resolution_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_resolutions

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_resolutions variant 1

anyOf variant 1: Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order..

- Value shape: Array of [ReturnResolutionPreviousAttributes](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes). Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.return_resolutions variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.shipment_ids

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.shipment_ids variant 1

anyOf variant 1: IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline..

- Value shape: Array of string. IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. Items: Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.shipment_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.shipments

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.shipments variant 1

anyOf variant 1: Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order..

- Value shape: Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes). Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.shipments variant 2

anyOf variant 2.

- Value shape: null. Present only when `expand` includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.status

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need..

- Value shape: string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. Items values: `"cancel"`, `"complete"`, `"decide"`, `"process"`, `"reopen"`.

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while no units have been received, inspected, dispositioned, or resolved, and it has no current receipts or inspections, non-canceled dispositions or resolutions, or non-voided return shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.version

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value..

- Value shape: integer. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. Format: `int64`. minimum: `0`. 

### ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Goes up with every change to the Return. Each activity's `return_version` is the version that activity produced. A write that takes `expected_version` or `expected_return_version` for this Return compares it with this value. 

### ReturnCanceledInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

