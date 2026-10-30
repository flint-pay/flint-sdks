[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestProcessingMerchantEvent

The `customer_deletion_request.processing` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomerDeletionRequestProcessingMerchantEventData](../models/CustomerDeletionRequestProcessingMerchantEventData.md#customerdeletionrequestprocessingmerchanteventdata) | `data`: [field definitions](../models/CustomerDeletionRequestProcessingMerchantEvent.md#customerdeletionrequestprocessingmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"customer_deletion_request.processing"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerDeletionRequestProcessingMerchantEventRequest](../models/CustomerDeletionRequestProcessingMerchantEventRequest.md#customerdeletionrequestprocessingmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomerDeletionRequestProcessingMerchantEvent.data fields 1

Field definitions: [shared fields](CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1).

### CustomerDeletionRequestProcessingMerchantEvent.data fields 1.object

Field definitions: [CustomerDeletionRequestCompletedMerchantEvent.data fields 1.object](../models/CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1object).

