[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestRejectedMerchantEvent

The `customer_deletion_request.rejected` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomerDeletionRequestRejectedMerchantEventData](../models/CustomerDeletionRequestRejectedMerchantEventData.md#customerdeletionrequestrejectedmerchanteventdata) | `data`: [field definitions](../models/CustomerDeletionRequestRejectedMerchantEvent.md#customerdeletionrequestrejectedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"customer_deletion_request.rejected"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerDeletionRequestRejectedMerchantEventRequest](../models/CustomerDeletionRequestRejectedMerchantEventRequest.md#customerdeletionrequestrejectedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomerDeletionRequestRejectedMerchantEvent.data fields 1

Field definitions: [shared fields](CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1).

### CustomerDeletionRequestRejectedMerchantEvent.data fields 1.object

Field definitions: [CustomerDeletionRequestCompletedMerchantEvent.data fields 1.object](../models/CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1object).

