[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook2b16597f72aaPayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook2b16597f72aaPayloadInput.md#incomingwebhook2b16597f72aapayloadinputdata). |
| `event_type` | Required | string | Values: `"return_receipt.verified"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook2b16597f72aaPayloadInput variant 1: `event_type` = `"return_receipt.verified"`

oneOf variant 1: The `return_receipt.verified` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"return_receipt.verified"`.

### IncomingWebhook2b16597f72aaPayloadInput variant 2: `event_type` = `"return_receipt.verified"`

oneOf variant 2: The `return_receipt.verified` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"return_receipt.verified"`.

### IncomingWebhook2b16597f72aaPayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [ReturnReceiptInput](../models/ReturnReceiptInput.md#returnreceiptinput) | A record of returned items arriving at a location. `object`: [field definitions](../models/IncomingWebhook2b16597f72aaPayloadInput.md#incomingwebhook2b16597f72aapayloadinputdataobject). |

### IncomingWebhook2b16597f72aaPayloadInput.data.object

A record of returned items arriving at a location.

Field definitions: [shared fields](ReturnReceiptInput.md#returnreceiptinput).

### IncomingWebhook2b16597f72aaPayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook2b16597f72aaPayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

