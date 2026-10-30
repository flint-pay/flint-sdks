[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionCreatedInstalledMerchantsEventInput

The `gift_card_redemption.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/GiftCardRedemptionCreatedInstalledMerchantsEventInput.md#giftcardredemptioncreatedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"gift_card_redemption.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardRedemptionCreatedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardRedemptionInput](../models/GiftCardRedemptionInput.md#giftcardredemptioninput) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. `object`: [field definitions](../models/GiftCardRedemptionCreatedInstalledMerchantsEventInput.md#giftcardredemptioncreatedinstalledmerchantseventinputdataobject). |

### GiftCardRedemptionCreatedInstalledMerchantsEventInput.data.object

Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.

Field definitions: [shared fields](GiftCardRedemptionInput.md#giftcardredemptioninput).

### GiftCardRedemptionCreatedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

