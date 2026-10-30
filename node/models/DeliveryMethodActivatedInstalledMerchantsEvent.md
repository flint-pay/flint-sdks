[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedInstalledMerchantsEvent

The `delivery_method.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/DeliveryMethodActivatedInstalledMerchantsEvent.md#deliverymethodactivatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"delivery_method.activated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryMethodActivatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod) | A configured shipping, pickup, local delivery, or service option. `object`: [field definitions](../models/DeliveryMethodActivatedInstalledMerchantsEvent.md#deliverymethodactivatedinstalledmerchantseventdataobject). |

### DeliveryMethodActivatedInstalledMerchantsEvent.data.object

A configured shipping, pickup, local delivery, or service option.

Field definitions: [shared fields](DeliveryMethod.md#deliverymethod).

### DeliveryMethodActivatedInstalledMerchantsEvent.data.object.metadata

Field definitions: [DeliveryLocationSet.metadata](../models/DeliveryLocationSet.md#deliverylocationsetmetadata).

### DeliveryMethodActivatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

