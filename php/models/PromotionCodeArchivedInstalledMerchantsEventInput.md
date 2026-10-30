[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionCodeArchivedInstalledMerchantsEventInput

The `promotion_code.archived` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"promotion_code.archived"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PromotionCodeArchivedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PromotionCodeInput](../models/PromotionCodeInput.md#promotioncodeinput) | A code a buyer enters to claim a promotion. `object`: [field definitions](../models/PromotionCodeArchivedInstalledMerchantsEventInput.md#promotioncodearchivedinstalledmerchantseventinputdataobject). |

### PromotionCodeArchivedInstalledMerchantsEventInput.data.object

A code a buyer enters to claim a promotion.

Field definitions: [shared fields](PromotionCodeInput.md#promotioncodeinput).

### PromotionCodeArchivedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

