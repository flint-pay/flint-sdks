[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook4e994140ffcePayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook4e994140ffcePayloadInput.md#incomingwebhook4e994140ffcepayloadinputdata). |
| `event_type` | Required | string | Values: `"customer_deletion_request.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook4e994140ffcePayloadInput variant 1: `event_type` = `"customer_deletion_request.created"`

oneOf variant 1: The `customer_deletion_request.created` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"customer_deletion_request.created"`.

### IncomingWebhook4e994140ffcePayloadInput variant 2: `event_type` = `"customer_deletion_request.created"`

oneOf variant 2: The `customer_deletion_request.created` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"customer_deletion_request.created"`.

### IncomingWebhook4e994140ffcePayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [CustomerDeletionRequestInput](../models/CustomerDeletionRequestInput.md#customerdeletionrequestinput) | A request to delete a customer's personal information. `object`: [field definitions](../models/IncomingWebhook4e994140ffcePayloadInput.md#incomingwebhook4e994140ffcepayloadinputdataobject). |

### IncomingWebhook4e994140ffcePayloadInput.data.object

A request to delete a customer's personal information.

Field definitions: [shared fields](CustomerDeletionRequestInput.md#customerdeletionrequestinput).

### IncomingWebhook4e994140ffcePayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook4e994140ffcePayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

