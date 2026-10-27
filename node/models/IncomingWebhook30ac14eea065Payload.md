[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook30ac14eea065Payload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook30ac14eea065Payload.md#incomingwebhook30ac14eea065payloaddata). |
| `event_type` | Required | string | Values: `"fraud_warning.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook30ac14eea065Payload variant 1: `event_type` = `"fraud_warning.created"`

oneOf variant 1: The `fraud_warning.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"fraud_warning.created"`.

### IncomingWebhook30ac14eea065Payload variant 2: `event_type` = `"fraud_warning.created"`

oneOf variant 2: The `fraud_warning.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"fraud_warning.created"`.

### IncomingWebhook30ac14eea065Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [FraudWarning](../models/FraudWarning.md#fraudwarning) | A notice that a payment may be fraudulent. `object`: [field definitions](../models/IncomingWebhook30ac14eea065Payload.md#incomingwebhook30ac14eea065payloaddataobject). |

### IncomingWebhook30ac14eea065Payload.data.object

A notice that a payment may be fraudulent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `dispute` | Optional | [Dispute](../models/Dispute.md#dispute) or null |  |
| `dispute_id` | Required | string or null |  |
| `fraud_type` | Required | string | Values: [7 declared values](#incomingwebhook30ac14eea065payloaddataobject-fraud_type-values). |
| `fraud_warning_id` | Required | string |  |
| `is_actionable` | Required | boolean |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Required | string |  |
| `payment_summary` | Required | [FraudWarningPaymentSummary](../models/FraudWarningPaymentSummary.md#fraudwarningpaymentsummary) | Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

#### IncomingWebhook30ac14eea065Payload.data.object fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

### IncomingWebhook30ac14eea065Payload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook30ac14eea065Payload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

