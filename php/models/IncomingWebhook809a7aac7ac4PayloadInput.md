[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook809a7aac7ac4PayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook0452cf0e91f7PayloadInput.md#incomingwebhook0452cf0e91f7payloadinputdata). |
| `event_type` | Required | string | Values: `"inventory_reservation.released"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook809a7aac7ac4PayloadInput variant 1: `event_type` = `"inventory_reservation.released"`

oneOf variant 1: The `inventory_reservation.released` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"inventory_reservation.released"`.

### IncomingWebhook809a7aac7ac4PayloadInput variant 2: `event_type` = `"inventory_reservation.released"`

oneOf variant 2: The `inventory_reservation.released` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"inventory_reservation.released"`.

### IncomingWebhook809a7aac7ac4PayloadInput.data

Field definitions: [IncomingWebhook0452cf0e91f7PayloadInput.data](../models/IncomingWebhook0452cf0e91f7PayloadInput.md#incomingwebhook0452cf0e91f7payloadinputdata).

### IncomingWebhook809a7aac7ac4PayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook809a7aac7ac4PayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

