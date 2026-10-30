[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderClosedInstalledMerchantsEvent

The `order.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/OrderClosedInstalledMerchantsEvent.md#orderclosedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"order.closed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### OrderClosedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Order](../models/Order.md#order) | A customer's purchase and its payment and fulfillment progress. `object`: [field definitions](../models/OrderClosedInstalledMerchantsEvent.md#orderclosedinstalledmerchantseventdataobject). |

### OrderClosedInstalledMerchantsEvent.data.object

A customer's purchase and its payment and fulfillment progress.

Field definitions: [shared fields](Order.md#order).

### OrderClosedInstalledMerchantsEvent.data.object.inventory_routing_source

Field definitions: [Order.inventory_routing_source](../models/Order.md#orderinventory_routing_source).

### OrderClosedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CheckoutSession.metadata](../models/CheckoutSession.md#checkoutsessionmetadata).

### OrderClosedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

