[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodCreatedMerchantEvent

The `delivery_method.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [DeliveryMethodCreatedMerchantEventData](../models/DeliveryMethodCreatedMerchantEventData.md#deliverymethodcreatedmerchanteventdata) | `data`: [field definitions](../models/DeliveryMethodCreatedMerchantEvent.md#deliverymethodcreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"delivery_method.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [DeliveryMethodCreatedMerchantEventRequest](../models/DeliveryMethodCreatedMerchantEventRequest.md#deliverymethodcreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryMethodCreatedMerchantEvent.data fields 1

Field definitions: [shared fields](DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1).

### DeliveryMethodCreatedMerchantEvent.data fields 1.object

Field definitions: [DeliveryMethodActivatedMerchantEvent.data fields 1.object](../models/DeliveryMethodActivatedMerchantEvent.md#deliverymethodactivatedmerchanteventdata-fields-1object).

