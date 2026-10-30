[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardTransactionCreatedInstalledMerchantsEvent

The `gift_card_transaction.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [GiftCardTransactionCreatedInstalledMerchantsEventData](../models/GiftCardTransactionCreatedInstalledMerchantsEventData.md#giftcardtransactioncreatedinstalledmerchantseventdata) | `data`: [field definitions](../models/GiftCardTransactionCreatedInstalledMerchantsEvent.md#giftcardtransactioncreatedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"gift_card_transaction.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### GiftCardTransactionCreatedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](GiftCardTransactionCreatedMerchantEvent.md#giftcardtransactioncreatedmerchanteventdata-fields-1).

### GiftCardTransactionCreatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [GiftCardTransactionCreatedMerchantEvent.data fields 1.object](../models/GiftCardTransactionCreatedMerchantEvent.md#giftcardtransactioncreatedmerchanteventdata-fields-1object).

### GiftCardTransactionCreatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

