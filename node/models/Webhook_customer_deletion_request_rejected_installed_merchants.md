[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Webhook_customer_deletion_request_rejected_installed_merchants

The `customer_deletion_request.rejected` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook4e994140ffcePayload.md#incomingwebhook4e994140ffcepayloaddata). |
| `event_type` | Required | string | Values: `"customer_deletion_request.rejected"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### Webhook_customer_deletion_request_rejected_installed_merchants.data

Field definitions: [IncomingWebhook4e994140ffcePayload.data](../models/IncomingWebhook4e994140ffcePayload.md#incomingwebhook4e994140ffcepayloaddata).

### Webhook_customer_deletion_request_rejected_installed_merchants.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

