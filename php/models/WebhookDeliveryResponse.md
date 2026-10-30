[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookDeliveryResponse

A response containing `WebhookDelivery` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WebhookDelivery](../models/WebhookDelivery.md#webhookdelivery) | An attempt to deliver an event to a webhook endpoint. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

