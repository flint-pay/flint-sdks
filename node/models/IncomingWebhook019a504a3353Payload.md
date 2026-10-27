[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook019a504a3353Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddata). |
| `event_type` | Required | string | Values: `"payment_review.reopened"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook019a504a3353Payload variant 1: `event_type` = `"payment_review.reopened"`

oneOf variant 1: The `payment_review.reopened` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"payment_review.reopened"`.

### IncomingWebhook019a504a3353Payload variant 2: `event_type` = `"payment_review.reopened"`

oneOf variant 2: The `payment_review.reopened` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"payment_review.reopened"`.

### IncomingWebhook019a504a3353Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [PaymentReview](../models/PaymentReview.md#paymentreview) | A payment review requiring a merchant decision. `object`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payloaddataobject). |

### IncomingWebhook019a504a3353Payload.data.object

A payment review requiring a merchant decision.

Field definitions: [shared fields](PaymentReview.md#paymentreview).

### IncomingWebhook019a504a3353Payload.data.object.closed_by

The credential that closed this payment review. Null when Flint closed it.

Field definitions: [shared fields](CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency).

### IncomingWebhook019a504a3353Payload.data.object.closed_by variant 1

anyOf variant 1: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### IncomingWebhook019a504a3353Payload.data.object.closed_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that closed this payment review. Null when Flint closed it. 

### IncomingWebhook019a504a3353Payload.data.object.refunded_money

Refunded amount for this review. Null when no refund is recorded.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### IncomingWebhook019a504a3353Payload.data.object.refunded_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### IncomingWebhook019a504a3353Payload.data.object.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Refunded amount for this review. Null when no refund is recorded. 

### IncomingWebhook019a504a3353Payload.data.object.resolution_started_by

The credential that started resolving this payment review. Null when Flint started it.

Field definitions: [shared fields](CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency).

### IncomingWebhook019a504a3353Payload.data.object.resolution_started_by variant 1

anyOf variant 1: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### IncomingWebhook019a504a3353Payload.data.object.resolution_started_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that started resolving this payment review. Null when Flint started it. 

### IncomingWebhook019a504a3353Payload variant 1.request

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `id` | Required | string |  |
| `idempotency_key` | Optional | string | The Idempotency-Key the originating request sent. Absent when it sent none. |

### IncomingWebhook019a504a3353Payload variant 2.source

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment_grant_id` | Required | string |  |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string |  |
| `sandbox_id` | Optional | string |  |
| `type` | Required | string | Values: `"installed_merchants"`. |

### IncomingWebhook019a504a3353Payload variant 2.source variant 1: `type` = `"installed_merchants"`

oneOf variant 2.

No additional constraints.

