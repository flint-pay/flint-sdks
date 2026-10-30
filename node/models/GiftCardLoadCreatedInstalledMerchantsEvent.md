[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadCreatedInstalledMerchantsEvent

The `gift_card_load.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/GiftCardLoadCreatedInstalledMerchantsEvent.md#giftcardloadcreatedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"gift_card_load.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardLoadCreatedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. `object`: [field definitions](../models/GiftCardLoadCreatedInstalledMerchantsEvent.md#giftcardloadcreatedinstalledmerchantseventdataobject). |

### GiftCardLoadCreatedInstalledMerchantsEvent.data.object

Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Field definitions: [shared fields](GiftCardLoad.md#giftcardload).

### GiftCardLoadCreatedInstalledMerchantsEvent.data.object.consideration_money

Declared alternatives: [GiftCardLoad.consideration_money](../models/GiftCardLoad.md#giftcardloadconsideration_money).

### GiftCardLoadCreatedInstalledMerchantsEvent.data.object.refund_transferred_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardLoadCreatedInstalledMerchantsEvent.data.object.remaining_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardLoadCreatedInstalledMerchantsEvent.data.object.reversed_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardLoadCreatedInstalledMerchantsEvent.data.object.value_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### GiftCardLoadCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

