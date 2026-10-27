[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEndpointsCreateWebhookTestEventResponse201

A response containing `WebhookDeliveryAction` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WebhookDeliveryAction](../models/WebhookDeliveryAction.md#webhookdeliveryaction) | The result of a webhook delivery action, such as a resend: the delivery, attempt, status, and any error details. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

