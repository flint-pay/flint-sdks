[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProductVariantUpdatedMerchantEvent

The `product_variant.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [ProductVariantUpdatedMerchantEventData](../models/ProductVariantUpdatedMerchantEventData.md#productvariantupdatedmerchanteventdata) | `data`: [field definitions](../models/ProductVariantUpdatedMerchantEvent.md#productvariantupdatedmerchanteventdata-fields-1). |
| `event_type` | Required | string | Values: `"product_variant.updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [ProductVariantUpdatedMerchantEventRequest](../models/ProductVariantUpdatedMerchantEventRequest.md#productvariantupdatedmerchanteventrequest) or null |  |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ProductVariantUpdatedMerchantEvent.data fields 1

Field definitions: [shared fields](ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1).

### ProductVariantUpdatedMerchantEvent.data fields 1.object

Field definitions: [ProductVariantArchivedMerchantEvent.data fields 1.object](../models/ProductVariantArchivedMerchantEvent.md#productvariantarchivedmerchanteventdata-fields-1object).

