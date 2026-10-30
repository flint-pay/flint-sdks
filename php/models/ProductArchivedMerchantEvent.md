[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductArchivedMerchantEvent

The `product.archived` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ProductArchivedMerchantEventData](../models/ProductArchivedMerchantEventData.md#productarchivedmerchanteventdata) | `data`: [field definitions](../models/ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"product.archived"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ProductArchivedMerchantEventRequest](../models/ProductArchivedMerchantEventRequest.md#productarchivedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ProductArchivedMerchantEvent.data fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Product](../models/Product.md#product) | An item offered in the merchant's catalog. `object`: [field definitions](../models/ProductArchivedMerchantEvent.md#productarchivedmerchanteventdata-fields-1object). |

### ProductArchivedMerchantEvent.data fields 1.object

An item offered in the merchant's catalog.

Field definitions: [shared fields](Product.md#product).

### ProductArchivedMerchantEvent.data fields 1.object.metadata

Field definitions: [Bundle.metadata](../models/Bundle.md#bundlemetadata).

