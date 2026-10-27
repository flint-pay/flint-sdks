[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventDisputeInquiryClosed

The `dispute.inquiry_closed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventDisputeInquiryClosedData](../models/WebhookEventDisputeInquiryClosedData.md#webhookeventdisputeinquirycloseddata) | `data`: [field definitions](../models/WebhookEventDisputeInquiryClosed.md#webhookeventdisputeinquirycloseddata-fields-1). |
| `event_type` | Required | string | Values: `"dispute.inquiry_closed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventDisputeInquiryClosedRequest](../models/WebhookEventDisputeInquiryClosedRequest.md#webhookeventdisputeinquiryclosedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventDisputeInquiryClosed.data fields 1

Field definitions: [shared fields](WebhookEventDisputeCreated.md#webhookeventdisputecreateddata-fields-1).

### WebhookEventDisputeInquiryClosed.data fields 1.object

Field definitions: [WebhookEventDisputeCreated.data fields 1.object](../models/WebhookEventDisputeCreated.md#webhookeventdisputecreateddata-fields-1object).

