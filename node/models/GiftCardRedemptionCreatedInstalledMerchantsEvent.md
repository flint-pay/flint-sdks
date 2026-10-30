[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionCreatedInstalledMerchantsEvent

The `gift_card_redemption.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/GiftCardRedemptionCreatedInstalledMerchantsEvent.md#giftcardredemptioncreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"gift_card_redemption.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardRedemption](../models/GiftCardRedemption.md#giftcardredemption) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. `object`: [field definitions](../models/GiftCardRedemptionCreatedInstalledMerchantsEvent.md#giftcardredemptioncreatedinstalledmerchantseventdataobject). |

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object

Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.

Field definitions: [shared fields](GiftCardRedemption.md#giftcardredemption).

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object.captured_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object.refunded_money

Field definitions: [GiftCardRedemption.refunded_money](../models/GiftCardRedemption.md#giftcardredemptionrefunded_money).

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object.remaining_refundable_money

Field definitions: [GiftCardRedemption.remaining_refundable_money](../models/GiftCardRedemption.md#giftcardredemptionremaining_refundable_money).

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object.requested_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object.reserved_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardRedemptionCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

