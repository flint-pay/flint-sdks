[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventSourceInstalledMerchants

The source of a partner webhook event, selected by type.

The installed_merchants source of a partner webhook event.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment_grant_id` | Required | string |  |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string |  |
| `sandbox_id` | Optional | string |  |
| `type` | Required | string | Values: `"installed_merchants"`. |

