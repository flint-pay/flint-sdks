[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningUpdatedMerchantEvent

The `fraud_warning.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [FraudWarningUpdatedMerchantEventData](../models/FraudWarningUpdatedMerchantEventData.md#fraudwarningupdatedmerchanteventdata) | `data`: [field definitions](../models/FraudWarningUpdatedMerchantEvent.md#fraudwarningupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"fraud_warning.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [FraudWarningUpdatedMerchantEventRequest](../models/FraudWarningUpdatedMerchantEventRequest.md#fraudwarningupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### FraudWarningUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](FraudWarningCreatedMerchantEvent.md#fraudwarningcreatedmerchanteventdata-fields-1).

### FraudWarningUpdatedMerchantEvent.data fields 1.object

Field definitions: [FraudWarningCreatedMerchantEvent.data fields 1.object](../models/FraudWarningCreatedMerchantEvent.md#fraudwarningcreatedmerchanteventdata-fields-1object).

