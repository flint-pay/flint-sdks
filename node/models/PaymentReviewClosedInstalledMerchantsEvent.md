[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewClosedInstalledMerchantsEvent

The `payment_review.closed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdata). |
| `event_type` | Required | string | Values: `"payment_review.closed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### PaymentReviewClosedInstalledMerchantsEvent.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentReview](../models/PaymentReview.md#paymentreview) | A payment review requiring a merchant decision. `object`: [field definitions](../models/PaymentReviewClosedInstalledMerchantsEvent.md#paymentreviewclosedinstalledmerchantseventdataobject). |

### PaymentReviewClosedInstalledMerchantsEvent.data.object

A payment review requiring a merchant decision.

Field definitions: [shared fields](PaymentReview.md#paymentreview).

### PaymentReviewClosedInstalledMerchantsEvent.data.object.closed_by

Declared alternatives: [PaymentReview.closed_by](../models/PaymentReview.md#paymentreviewclosed_by).

### PaymentReviewClosedInstalledMerchantsEvent.data.object.refunded_money

Declared alternatives: [PaymentReview.refunded_money](../models/PaymentReview.md#paymentreviewrefunded_money).

### PaymentReviewClosedInstalledMerchantsEvent.data.object.resolution_started_by

Declared alternatives: [PaymentReview.resolution_started_by](../models/PaymentReview.md#paymentreviewresolution_started_by).

### PaymentReviewClosedInstalledMerchantsEvent.source

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.source](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventsource).

