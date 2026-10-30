[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestCreatedMerchantEvent

The `customer_deletion_request.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomerDeletionRequestCreatedMerchantEventData](../models/CustomerDeletionRequestCreatedMerchantEventData.md#customerdeletionrequestcreatedmerchanteventdata) | `data`: [field definitions](../models/CustomerDeletionRequestCreatedMerchantEvent.md#customerdeletionrequestcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"customer_deletion_request.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerDeletionRequestCreatedMerchantEventRequest](../models/CustomerDeletionRequestCreatedMerchantEventRequest.md#customerdeletionrequestcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomerDeletionRequestCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1).

### CustomerDeletionRequestCreatedMerchantEvent.data fields 1.object

Field definitions: [CustomerDeletionRequestCompletedMerchantEvent.data fields 1.object](../models/CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1object).

