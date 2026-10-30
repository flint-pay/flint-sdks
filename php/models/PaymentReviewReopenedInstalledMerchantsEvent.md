[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewReopenedInstalledMerchantsEvent

The `payment_review.reopened` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | [PaymentReviewReopenedInstalledMerchantsEventData](../models/PaymentReviewReopenedInstalledMerchantsEventData.md#paymentreviewreopenedinstalledmerchantseventdata) | `data`: [field definitions](../models/PaymentReviewReopenedInstalledMerchantsEvent.md#paymentreviewreopenedinstalledmerchantseventdata-fields-1). |
| `event_type` | Required | string | Values: `"payment_review.reopened"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentReviewReopenedInstalledMerchantsEvent.data fields 1

Field definitions: [shared fields](PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1).

### PaymentReviewReopenedInstalledMerchantsEvent.data fields 1.object

Field definitions: [PaymentReviewClosedMerchantEvent.data fields 1.object](../models/PaymentReviewClosedMerchantEvent.md#paymentreviewclosedmerchanteventdata-fields-1object).

### PaymentReviewReopenedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

