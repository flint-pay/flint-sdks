[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook1a457f95e64ePayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook1a457f95e64ePayloadInput.md#incomingwebhook1a457f95e64epayloadinputdata). |
| `event_type` | Required | string | Values: `"inventory_transfer.lost"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook1a457f95e64ePayloadInput variant 1: `event_type` = `"inventory_transfer.lost"`

oneOf variant 1: The `inventory_transfer.lost` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"inventory_transfer.lost"`.

### IncomingWebhook1a457f95e64ePayloadInput variant 2: `event_type` = `"inventory_transfer.lost"`

oneOf variant 2: The `inventory_transfer.lost` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"inventory_transfer.lost"`.

### IncomingWebhook1a457f95e64ePayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [InventoryTransferInput](../models/InventoryTransferInput.md#inventorytransferinput) | Stock moving between locations. `object`: [field definitions](../models/IncomingWebhook1a457f95e64ePayloadInput.md#incomingwebhook1a457f95e64epayloadinputdataobject). |

### IncomingWebhook1a457f95e64ePayloadInput.data.object

Stock moving between locations.

Field definitions: [shared fields](InventoryTransferInput.md#inventorytransferinput).

### IncomingWebhook1a457f95e64ePayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook1a457f95e64ePayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

