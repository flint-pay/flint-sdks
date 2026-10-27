[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_gift_card_transaction_created_installed_merchants

The `gift_card_transaction.created` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook067bab7c655aPayload.md#incomingwebhook067bab7c655apayloaddata). |
| `event_type` | Required | string | Values: `"gift_card_transaction.created"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_gift_card_transaction_created_installed_merchants.data

Field definitions: [IncomingWebhook067bab7c655aPayload.data](../models/IncomingWebhook067bab7c655aPayload.md#incomingwebhook067bab7c655apayloaddata).

### Webhook_gift_card_transaction_created_installed_merchants.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

