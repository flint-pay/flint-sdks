[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook2111a23e6e7cPayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook2111a23e6e7cPayloadInput.md#incomingwebhook2111a23e6e7cpayloadinputdata). |
| `event_type` | Required | string | Values: `"return.canceled"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook2111a23e6e7cPayloadInput variant 1: `event_type` = `"return.canceled"`

oneOf variant 1: The `return.canceled` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"return.canceled"`.

### IncomingWebhook2111a23e6e7cPayloadInput variant 2: `event_type` = `"return.canceled"`

oneOf variant 2: The `return.canceled` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"return.canceled"`.

### IncomingWebhook2111a23e6e7cPayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnResourceInput](../models/ReturnResourceInput.md#returnresourceinput) | A request to send purchased items back. `object`: [field definitions](../models/IncomingWebhook2111a23e6e7cPayloadInput.md#incomingwebhook2111a23e6e7cpayloadinputdataobject). |

### IncomingWebhook2111a23e6e7cPayloadInput.data.object

A request to send purchased items back.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_actions` | Required | Array of [BuyerActionInput](../models/BuyerActionInput.md#buyeractioninput) | What the buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all three every time; merchant reads and webhooks get an empty list. ship_items is required while handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is required while a resolution waits for the buyer's payment. Example: `[]`. |
| `canceled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `canceled_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `cancellation_reason` | Optional | string | Values: `"buyer_request"`, `"merchant_request"`, `"duplicate"`, `"expired"`, `"created_in_error"`, `"other"`. |
| `cancellation_reason_message` | Optional | string |  |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `completed_by` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `completion_blockers` | Required | Array of [ReturnCompletionBlockerInput](../models/ReturnCompletionBlockerInput.md#returncompletionblockerinput) |  |
| `completion_mode` | Optional | string | automatic completes the Return when the last completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Values: `"manual"`, `"automatic"`. |
| `completion_reason` | Optional | string | Values: `"manual_completion"`, `"exception_waived"`, `"other"`. |
| `completion_reason_message` | Optional | string |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null |  |
| `customer_id` | Optional | string |  |
| `decision_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `decision_status` | Required | string | Values: `"pending"`, `"approved"`, `"partially_approved"`, `"declined"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `financial_summary` | Required | [ReturnFinancialSummaryInput](../models/ReturnFinancialSummaryInput.md#returnfinancialsummaryinput) | The money for a return: returned value, deductions, credits, replacement total, and amounts due to or from the buyer. |
| `handoff_requirements` | Required | Array of [ReturnHandoffRequirementInput](../models/ReturnHandoffRequirementInput.md#returnhandoffrequirementinput) |  |
| `initiated_by` | Required | string | Who created the Return, from the credential that sent the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `line_items` | Required | Array of [ReturnLineItemInput](../models/ReturnLineItemInput.md#returnlineiteminput) |  |
| `merchandise_status` | Required | string | On the Return, the least-finished line's value. Values: [10 declared values](#incomingwebhook2111a23e6e7cpayloadinputdataobject-merchandise_status-values). |
| `metadata` | Required | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null |  |
| `order_id` | Required | string |  |
| `policy_evaluation` | Optional | [ReturnPolicyEvaluationInput](../models/ReturnPolicyEvaluationInput.md#returnpolicyevaluationinput) | How a return policy evaluated a return request: overall status and reason, the policy revision used, and per-line results. |
| `resolution_status` | Required | string | Values: `"not_selected"`, `"pending"`, `"partially_fulfilled"`, `"requires_action"`, `"fulfilled"`, `"failed"`. |
| `return_disposition_ids` | Required | Array of string | IDs of every disposition recorded for this Return, oldest first, including failed and canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_dispositions` | Optional | Array of [ReturnDispositionInput](../models/ReturnDispositionInput.md#returndispositioninput) |  |
| `return_id` | Required | string |  |
| `return_inspection_ids` | Required | Array of string | IDs of every inspection recorded for this Return, oldest first, including superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_inspections` | Optional | Array of [ReturnInspectionInput](../models/ReturnInspectionInput.md#returninspectioninput) |  |
| `return_number` | Required | string |  |
| `return_receipt_ids` | Required | Array of string | IDs of every receipt recorded for this Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_receipts` | Optional | Array of [ReturnReceiptInput](../models/ReturnReceiptInput.md#returnreceiptinput) |  |
| `return_resolution_ids` | Required | Array of string | IDs of every resolution created for this Return, oldest first, including failed and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline. |
| `return_resolutions` | Optional | Array of [ReturnResolutionInput](../models/ReturnResolutionInput.md#returnresolutioninput) |  |
| `shipment_ids` | Required | Array of string | IDs of every shipment raised to send this Return's items back, oldest first, including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline. |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryInput](../models/ExpandedShipmentSummaryInput.md#expandedshipmentsummaryinput) |  |
| `status` | Required | string | Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. |
| `supported_actions` | Required | Array of string | Items values: `"cancel"`, `"complete"`, `"decide"`, `"reopen"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

#### IncomingWebhook2111a23e6e7cPayloadInput.data.object merchandise_status values

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

### IncomingWebhook2111a23e6e7cPayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook2111a23e6e7cPayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

