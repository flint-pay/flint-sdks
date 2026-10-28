[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventSourcePartnerApp







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string | Values: `"partner_app"`. |

### WebhookEventSourcePartnerApp variant 1: `type` = `"partner_app"`

anyOf variant 1: Declared schema PartnerWebhookEnvelopeSourcePartnerApp. The partner_app source of a partner webhook event..

No additional constraints.

### WebhookEventSourcePartnerApp variant 2: `type` = `"partner_app"`

anyOf variant 2: Declared schema WebhookEventSourcePartnerApp. The partner_app source of a partner webhook event..

No additional constraints.

