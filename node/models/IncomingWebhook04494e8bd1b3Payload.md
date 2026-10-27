[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook04494e8bd1b3Payload

The `dispute.prevented` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook04494e8bd1b3Payload.md#incomingwebhook04494e8bd1b3payloaddata). |
| `event_type` | Required | string | Values: `"dispute.prevented"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook04494e8bd1b3Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Dispute](../models/Dispute.md#dispute) | A challenge to a collected payment. `object`: [field definitions](../models/IncomingWebhook04494e8bd1b3Payload.md#incomingwebhook04494e8bd1b3payloaddataobject). |

### IncomingWebhook04494e8bd1b3Payload.data.object

A challenge to a collected payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `can_respond_with_evidence` | Required | boolean | Whether this dispute has an evidence response window. It stays true after the window closes or a decision is made. Use is_action_required to know whether a response is needed now. |
| `case_type` | Required | string | Values: `"inquiry"`, `"chargeback"`, `"compliance"`, `"resolution"`, `"block"`, `"other"`, `"bank_return"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer` | Optional | [ExpandedCustomerSummary](../models/ExpandedCustomerSummary.md#expandedcustomersummary) or null |  |
| `customer_id` | Optional | string |  |
| `dispute_id` | Required | string |  |
| `evidence_due_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `evidence_submission_count` | Required | integer | Format: `int32`. |
| `fraud_warning_id` | Optional | string |  |
| `has_evidence` | Required | boolean | Whether evidence is saved for this dispute, submitted or not. evidence_submission_count says whether it was submitted. |
| `is_action_required` | Required | boolean |  |
| `is_evidence_deadline_passed` | Required | boolean |  |
| `merchant_id` | Required | string |  |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Optional | string |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Optional | string |  |
| `payment_option` | Required | string or null | Values: `"card"`, `"apple_pay"`, `"google_pay"`, `"affirm"`, `"ach_debit"`, `null`. |
| `reason` | Required | string | Values: [12 declared values](Dispute.md#dispute-reason-values). |
| `response_unavailable_reason` | Optional | string | Why a response is unavailable when can_respond_with_evidence is false. Absent when no reason is reported. Current values are bank_return_not_contestable and response_window_unavailable. response_window_unavailable means no evidence deadline was supplied. Values: `"bank_return_not_contestable"`, `"response_window_unavailable"`. |
| `status` | Required | string | Values: `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`. |
| `status_changed_at` | Optional | string | Recorded time of the current status. On first observation this is the dispute creation time. Later status changes use the provider event time when available, or the time Flint observed the change. This may not be the exact decision or submission time. Format: `date-time`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

### IncomingWebhook04494e8bd1b3Payload.data.object.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### IncomingWebhook04494e8bd1b3Payload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

