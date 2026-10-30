[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionCreatedMerchantEvent

The `return_resolution.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnResolutionCreatedMerchantEventData](../models/ReturnResolutionCreatedMerchantEventData.md#returnresolutioncreatedmerchanteventdata) | `data`: [field definitions](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_resolution.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnResolutionCreatedMerchantEventRequest](../models/ReturnResolutionCreatedMerchantEventRequest.md#returnresolutioncreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnResolutionCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnResolution](../models/ReturnResolution.md#returnresolution) | The refund, exchange, or other outcome of a return. `object`: [field definitions](../models/ReturnResolutionCreatedMerchantEvent.md#returnresolutioncreatedmerchanteventdata-fields-1object). |

### ReturnResolutionCreatedMerchantEvent.data fields 1.object

The refund, exchange, or other outcome of a return.

Field definitions: [shared fields](ReturnResolution.md#returnresolution).

### ReturnResolutionCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

