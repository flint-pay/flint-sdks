[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventSourcePartnerApp

The source of a partner webhook event, selected by type.

The partner_app source of a partner webhook event.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string | Values: `"partner_app"`. |

