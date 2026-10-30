[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerDeletedMerchantEvent

The `customer.deleted` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [CustomerDeletedMerchantEventData](../models/CustomerDeletedMerchantEventData.md#customerdeletedmerchanteventdata) | `data`: [field definitions](../models/CustomerDeletedMerchantEvent.md#customerdeletedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"customer.deleted"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [CustomerDeletedMerchantEventRequest](../models/CustomerDeletedMerchantEventRequest.md#customerdeletedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### CustomerDeletedMerchantEvent.data fields 1

Field definitions: [shared fields](CustomerCreatedMerchantEvent.md#customercreatedmerchanteventdata-fields-1).

### CustomerDeletedMerchantEvent.data fields 1.object

Field definitions: [CustomerCreatedMerchantEvent.data fields 1.object](../models/CustomerCreatedMerchantEvent.md#customercreatedmerchanteventdata-fields-1object).

