[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupArchivedInstalledMerchantsEvent

The `modifier_group.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"modifier_group.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ModifierGroupArchivedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | A group of choices that customize an item. `object`: [field definitions](../models/ModifierGroupArchivedInstalledMerchantsEvent.md#modifiergrouparchivedinstalledmerchantseventdataobject). |

### ModifierGroupArchivedInstalledMerchantsEvent.data.object

A group of choices that customize an item.

Field definitions: [shared fields](ModifierGroup.md#modifiergroup).

### ModifierGroupArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### ModifierGroupArchivedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

