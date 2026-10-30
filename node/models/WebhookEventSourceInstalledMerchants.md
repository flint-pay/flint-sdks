[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventSourceInstalledMerchants







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment_grant_id` | Required | string |  |
| `merchant_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `partner_app_install_id` | Required | string |  |
| `sandbox_id` | Optional | string |  |
| `type` | Required | string | Values: `"installed_merchants"`. |

### WebhookEventSourceInstalledMerchants variant 1: `type` = `"installed_merchants"`

anyOf PartnerWebhookEnvelopeSourceInstalledMerchants: Declared schema PartnerWebhookEnvelopeSourceInstalledMerchants. The installed_merchants source of a partner webhook event..

No additional constraints.

### WebhookEventSourceInstalledMerchants variant 2: `type` = `"installed_merchants"`

anyOf WebhookEventSourceInstalledMerchants: Declared schema WebhookEventSourceInstalledMerchants. The installed_merchants source of a partner webhook event..

No additional constraints.

