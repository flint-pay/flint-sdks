[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletionRequestCompletedMerchantEvent

The `customer_deletion_request.completed` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomerDeletionRequestCompletedMerchantEventData](../models/CustomerDeletionRequestCompletedMerchantEventData.md#customerdeletionrequestcompletedmerchanteventdata) | `data`: [field definitions](../models/CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"customer_deletion_request.completed"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerDeletionRequestCompletedMerchantEventRequest](../models/CustomerDeletionRequestCompletedMerchantEventRequest.md#customerdeletionrequestcompletedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomerDeletionRequestCompletedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CustomerDeletionRequest](../models/CustomerDeletionRequest.md#customerdeletionrequest) | A request to delete a customer's personal information. `object`: [field definitions](../models/CustomerDeletionRequestCompletedMerchantEvent.md#customerdeletionrequestcompletedmerchanteventdata-fields-1object). |

### CustomerDeletionRequestCompletedMerchantEvent.data fields 1.object

A request to delete a customer's personal information.

Field definitions: [shared fields](CustomerDeletionRequestInput.md#customerdeletionrequestinput).

