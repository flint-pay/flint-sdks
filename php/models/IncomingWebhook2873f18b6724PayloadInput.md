[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook2873f18b6724PayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook2873f18b6724PayloadInput.md#incomingwebhook2873f18b6724payloadinputdata). |
| `event_type` | Required | string | Values: `"delivery_profile.updated"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook2873f18b6724PayloadInput variant 1: `event_type` = `"delivery_profile.updated"`

oneOf variant 1: The `delivery_profile.updated` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"delivery_profile.updated"`.

### IncomingWebhook2873f18b6724PayloadInput variant 2: `event_type` = `"delivery_profile.updated"`

oneOf variant 2: The `delivery_profile.updated` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"delivery_profile.updated"`.

### IncomingWebhook2873f18b6724PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliveryProfileInput](../models/DeliveryProfileInput.md#deliveryprofileinput) | Reusable delivery rules assigned to catalog items. `object`: [field definitions](../models/IncomingWebhook2873f18b6724PayloadInput.md#incomingwebhook2873f18b6724payloadinputdataobject). |

### IncomingWebhook2873f18b6724PayloadInput.data.object

Reusable delivery rules assigned to catalog items.

Field definitions: [shared fields](DeliveryProfileInput.md#deliveryprofileinput).

### IncomingWebhook2873f18b6724PayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook2873f18b6724PayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

