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
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### ReturnCanceledMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerAction](../models/BuyerAction.md#buyeraction) | What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. `buyer_actions[]`: [field definitions](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions). |
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
| `initiated_by` | Required | string | Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`. |
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
| `supported_actions` | Required | Array of string | Items values: `"cancel"`, `"complete"`, `"decide"`, `"reopen"`. |
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

### ReturnCanceledMerchantEvent.data fields 1.object.buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

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

