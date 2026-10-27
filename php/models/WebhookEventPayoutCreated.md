[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPayoutCreated

The `payout.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPayoutCreatedData](../models/WebhookEventPayoutCreatedData.md#webhookeventpayoutcreateddata) | `data`: [field definitions](../models/WebhookEventPayoutCreated.md#webhookeventpayoutcreateddata-fields-1). |
| `event_type` | Required | string | Values: `"payout.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventPayoutCreatedRequest](../models/WebhookEventPayoutCreatedRequest.md#webhookeventpayoutcreatedrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPayoutCreated.data fields 1

Field definitions: [shared fields](WebhookEventPayoutCanceled.md#webhookeventpayoutcanceleddata-fields-1).

### WebhookEventPayoutCreated.data fields 1.object

Field definitions: [WebhookEventPayoutCanceled.data fields 1.object](../models/WebhookEventPayoutCanceled.md#webhookeventpayoutcanceleddata-fields-1object).

