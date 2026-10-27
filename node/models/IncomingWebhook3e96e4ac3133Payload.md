[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook3e96e4ac3133Payload

The `merchant.readiness_updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook3e96e4ac3133Payload.md#incomingwebhook3e96e4ac3133payloaddata). |
| `event_type` | Required | string | Values: `"merchant.readiness_updated"`. |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### IncomingWebhook3e96e4ac3133Payload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Merchant](../models/Merchant.md#merchant) | The business accepting payments. `object`: [field definitions](../models/IncomingWebhook3e96e4ac3133Payload.md#incomingwebhook3e96e4ac3133payloaddataobject). |

### IncomingWebhook3e96e4ac3133Payload.data.object

The business accepting payments.

Field definitions: [shared fields](Merchant.md#merchant).

### IncomingWebhook3e96e4ac3133Payload.data.object.address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

### IncomingWebhook3e96e4ac3133Payload.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

