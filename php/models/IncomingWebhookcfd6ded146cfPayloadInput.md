[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhookcfd6ded146cfPayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook4e994140ffcePayloadInput.md#incomingwebhook4e994140ffcepayloadinputdata). |
| `event_type` | Required | string | Values: `"customer_deletion_request.failed"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhookcfd6ded146cfPayloadInput variant 1: `event_type` = `"customer_deletion_request.failed"`

oneOf variant 1: The `customer_deletion_request.failed` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"customer_deletion_request.failed"`.

### IncomingWebhookcfd6ded146cfPayloadInput variant 2: `event_type` = `"customer_deletion_request.failed"`

oneOf variant 2: The `customer_deletion_request.failed` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"customer_deletion_request.failed"`.

### IncomingWebhookcfd6ded146cfPayloadInput.data

Field definitions: [IncomingWebhook4e994140ffcePayloadInput.data](../models/IncomingWebhook4e994140ffcePayloadInput.md#incomingwebhook4e994140ffcepayloadinputdata).

### IncomingWebhookcfd6ded146cfPayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhookcfd6ded146cfPayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

