[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnDispositionCreatedMerchantEvent

The `return_disposition.created` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ReturnDispositionCreatedMerchantEventData](../models/ReturnDispositionCreatedMerchantEventData.md#returndispositioncreatedmerchanteventdata) | `data`: [field definitions](../models/ReturnDispositionCreatedMerchantEvent.md#returndispositioncreatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"return_disposition.created"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ReturnDispositionCreatedMerchantEventRequest](../models/ReturnDispositionCreatedMerchantEventRequest.md#returndispositioncreatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ReturnDispositionCreatedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnDisposition](../models/ReturnDisposition.md#returndisposition) | A decision about how returned merchandise will be handled. `object`: [field definitions](../models/ReturnDispositionCreatedMerchantEvent.md#returndispositioncreatedmerchanteventdata-fields-1object). |

### ReturnDispositionCreatedMerchantEvent.data fields 1.object

A decision about how returned merchandise will be handled.

Field definitions: [shared fields](ReturnDisposition.md#returndisposition).

### ReturnDispositionCreatedMerchantEvent.data fields 1.object.metadata

Field definitions: [CancelReturnResponse.data.metadata](../models/CancelReturnResponse.md#cancelreturnresponsedatametadata).

