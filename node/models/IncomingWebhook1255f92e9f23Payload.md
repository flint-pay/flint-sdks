[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook1255f92e9f23Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook1255f92e9f23Payload.md#incomingwebhook1255f92e9f23payloaddata). |
| `event_type` | Required | string | Values: `"subscription.canceled"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook1255f92e9f23Payload variant 1: `event_type` = `"subscription.canceled"`

oneOf variant 1: The `subscription.canceled` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"subscription.canceled"`.

### IncomingWebhook1255f92e9f23Payload variant 2: `event_type` = `"subscription.canceled"`

oneOf variant 2: The `subscription.canceled` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"subscription.canceled"`.

### IncomingWebhook1255f92e9f23Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Subscription](../models/Subscription.md#subscription) | A customer's recurring purchase. `object`: [field definitions](../models/IncomingWebhook1255f92e9f23Payload.md#incomingwebhook1255f92e9f23payloaddataobject). |

### IncomingWebhook1255f92e9f23Payload.data.object

A customer's recurring purchase.

Field definitions: [shared fields](Subscription.md#subscription).

### IncomingWebhook1255f92e9f23Payload.data.object.early_termination_fee_money

Field definitions: [BuyerSubscription.early_termination_fee_money](../models/BuyerSubscription.md#buyersubscriptionearly_termination_fee_money).

### IncomingWebhook1255f92e9f23Payload.data.object.metadata

Field definitions: [BuyerRefund.metadata](../models/BuyerRefund.md#buyerrefundmetadata).

### IncomingWebhook1255f92e9f23Payload.data.object.outstanding_money

Field definitions: [BuyerSubscription.outstanding_money](../models/BuyerSubscription.md#buyersubscriptionoutstanding_money).

### IncomingWebhook1255f92e9f23Payload.data.object.recurring_subtotal_money

Declared alternatives: [BuyerSubscription.recurring_subtotal_money](../models/BuyerSubscription.md#buyersubscriptionrecurring_subtotal_money).

### IncomingWebhook1255f92e9f23Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook1255f92e9f23Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

