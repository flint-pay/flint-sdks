[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessUpdatedEvent

The `merchant.readiness_updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [MerchantReadinessUpdatedEventData](../models/MerchantReadinessUpdatedEventData.md#merchantreadinessupdatedeventdata) | `data`: [field definitions](../models/MerchantReadinessUpdatedEvent.md#merchantreadinessupdatedeventdata-fields-1). |
| `event_type` | Required | string | Values: `"merchant.readiness_updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [MerchantReadinessUpdatedEventRequest](../models/MerchantReadinessUpdatedEventRequest.md#merchantreadinessupdatedeventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### MerchantReadinessUpdatedEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Merchant](../models/Merchant.md#merchant) | The business accepting payments. `object`: [field definitions](../models/MerchantReadinessUpdatedEvent.md#merchantreadinessupdatedeventdata-fields-1object). |

### MerchantReadinessUpdatedEvent.data fields 1.object

The business accepting payments.

Field definitions: [shared fields](Merchant.md#merchant).

### MerchantReadinessUpdatedEvent.data fields 1.object.address

Field definitions: [DeliveryPreviewResponse.data variant 1.buyer_location.address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1buyer_locationaddress).

### MerchantReadinessUpdatedEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

