[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodActivatedInstalledMerchantsEvent

The `payment_method.activated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentMethodActivatedInstalledMerchantsEventData](../models/PaymentMethodActivatedInstalledMerchantsEventData.md#paymentmethodactivatedinstalledmerchantseventdata) | `data`: [field definitions](../models/PaymentMethodActivatedInstalledMerchantsEvent.md#paymentmethodactivatedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_method.activated"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentMethodActivatedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1).

### PaymentMethodActivatedInstalledMerchantsEvent.data fields 1.object

Field definitions: [PaymentMethodActivatedMerchantEvent.data fields 1.object](../models/PaymentMethodActivatedMerchantEvent.md#paymentmethodactivatedmerchanteventdata-fields-1object).

### PaymentMethodActivatedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

