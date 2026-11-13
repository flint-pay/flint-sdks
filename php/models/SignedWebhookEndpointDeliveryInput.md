[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedWebhookEndpointDeliveryInput

A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this is not a persisted delivery or HTTP dispatch.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | string | Exact UTF-8 JSON delivery bytes. Do not parse and reserialize before forwarding. |
| `expires_at` | Required | string | JWT expiry, 300 seconds after signing. Existing receiver clock skew rules apply. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `headers` | Required | Map of string | Application headers from the real sender, including Authorization and any configured HMAC signature. Never log these credentials. |
| `webhook_endpoint_id` | Required | string | The authorized sandbox endpoint and JWT audience. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `webhook_event_id` | Required | string | The event ID, also sent as webhook-id for receiver deduplication. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

