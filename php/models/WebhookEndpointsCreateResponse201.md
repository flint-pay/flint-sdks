[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEndpointsCreateResponse201

A response containing `WebhookEndpointWithSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WebhookEndpointWithSecret](../models/WebhookEndpointWithSecret.md#webhookendpointwithsecret) | A webhook endpoint with its one-time signing secret, returned when the endpoint is created or its secret is rotated. A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created it and receives only that environment's events. Partner endpoints select sources with event_sources and installed_merchant_modes. A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created it and receives only that environment's events. Partner endpoints select sources with event_sources and installed_merchant_modes. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

