[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackActivatedInstalledMerchantsEvent

The `delivery_rate_callback.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/DeliveryRateCallbackActivatedInstalledMerchantsEvent.md#deliveryratecallbackactivatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"delivery_rate_callback.activated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliveryRateCallbackActivatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback) | An endpoint that supplies delivery rates. `object`: [field definitions](../models/DeliveryRateCallbackActivatedInstalledMerchantsEvent.md#deliveryratecallbackactivatedinstalledmerchantseventdataobject). |

### DeliveryRateCallbackActivatedInstalledMerchantsEvent.data.object

An endpoint that supplies delivery rates.

Field definitions: [shared fields](DeliveryRateCallback.md#deliveryratecallback).

### DeliveryRateCallbackActivatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

