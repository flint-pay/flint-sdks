[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetArchivedInstalledMerchantsEvent

The `modifier_set.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"modifier_set.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### ModifierSetArchivedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ModifierSet](../models/ModifierSet.md#modifierset) | A reusable collection of customization groups. `object`: [field definitions](../models/ModifierSetArchivedInstalledMerchantsEvent.md#modifiersetarchivedinstalledmerchantseventdataobject). |

### ModifierSetArchivedInstalledMerchantsEvent.data.object

A reusable collection of customization groups.

Field definitions: [shared fields](ModifierSet.md#modifierset).

### ModifierSetArchivedInstalledMerchantsEvent.data.object.metadata

Field definitions: [CreateOrderLineItem variant 1.metadata](../models/CreateOrderLineItem.md#createorderlineitem-variant-1metadata).

### ModifierSetArchivedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

