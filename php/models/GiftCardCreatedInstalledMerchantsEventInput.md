[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCreatedInstalledMerchantsEventInput

The `gift_card.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/GiftCardCreatedInstalledMerchantsEventInput.md#giftcardcreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"gift_card.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardCreatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardInput](../models/GiftCardInput.md#giftcardinput) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `object`: [field definitions](../models/GiftCardCreatedInstalledMerchantsEventInput.md#giftcardcreatedinstalledmerchantseventinputdataobject). |

### GiftCardCreatedInstalledMerchantsEventInput.data.object

Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardInput.md#giftcardinput).

### GiftCardCreatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

