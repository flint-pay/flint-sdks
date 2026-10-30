[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnCompletedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [ReturnCompletedInstalledMerchantsEventDataObject](../models/ReturnCompletedInstalledMerchantsEventDataObject.md#returncompletedinstalledmerchantseventdataobject) | A request to send purchased items back. `object`: [field definitions](../models/ReturnCompletedInstalledMerchantsEventData.md#returncompletedinstalledmerchantseventdataobject-fields-1). |

### ReturnCompletedInstalledMerchantsEventData.object fields 1

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
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#returncompletedinstalledmerchantseventdataobject-fields-1-merchandise_status-values). |
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

#### ReturnCompletedInstalledMerchantsEventData.object fields 1 merchandise_status values

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

### ReturnCompletedInstalledMerchantsEventData.object fields 1.line_items[]

Field definitions: [CancelReturnResponse.data.line_items[]](../models/CancelReturnResponse.md#cancelreturnresponsedataline_items).

### ReturnCompletedInstalledMerchantsEventData.object fields 1.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

### ReturnCompletedInstalledMerchantsEventData.object fields 1.return_inspections[]

Field definitions: [CancelReturnResponse.data.return_inspections[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_inspections).

### ReturnCompletedInstalledMerchantsEventData.object fields 1.return_receipts[]

Field definitions: [CancelReturnResponse.data.return_receipts[]](../models/CancelReturnResponse.md#cancelreturnresponsedatareturn_receipts).

