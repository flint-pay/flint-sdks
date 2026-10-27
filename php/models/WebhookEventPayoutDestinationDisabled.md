[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventPayoutDestinationDisabled

The `payout_destination.disabled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [WebhookEventPayoutDestinationDisabledData](../models/WebhookEventPayoutDestinationDisabledData.md#webhookeventpayoutdestinationdisableddata) | `data`: [field definitions](../models/WebhookEventPayoutDestinationDisabled.md#webhookeventpayoutdestinationdisableddata-fields-1). |
| `event_type` | Required | string | Values: `"payout_destination.disabled"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [WebhookEventPayoutDestinationDisabledRequest](../models/WebhookEventPayoutDestinationDisabledRequest.md#webhookeventpayoutdestinationdisabledrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### WebhookEventPayoutDestinationDisabled.data fields 1

Field definitions: [shared fields](WebhookEventPayoutDestinationArchived.md#webhookeventpayoutdestinationarchiveddata-fields-1).

### WebhookEventPayoutDestinationDisabled.data fields 1.object

Field definitions: [WebhookEventPayoutDestinationArchived.data fields 1.object](../models/WebhookEventPayoutDestinationArchived.md#webhookeventpayoutdestinationarchiveddata-fields-1object).

