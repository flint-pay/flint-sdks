[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventSource







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string |  |
| `environment_grant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `sandbox_id` | Conditional | string |  |

### WebhookEventSource variant 1: `type` = `"partner_app"`

anyOf variant 1: Declared schema PartnerWebhookEnvelopeSource. The source of a partner webhook event, selected by type.; oneOf variant 1: The partner_app source of a partner webhook event..

- Undeclared: `environment_grant_id`, `mode`, `sandbox_id`.
- Constraints for `type`: Values: `"partner_app"`.

### WebhookEventSource variant 2: `type` = `"installed_merchants"`

anyOf variant 1: Declared schema PartnerWebhookEnvelopeSource. The source of a partner webhook event, selected by type.; oneOf variant 2: The installed_merchants source of a partner webhook event..

- Required: `environment_grant_id`, `mode`.
- Optional: `sandbox_id`.
- Constraints for `type`: Values: `"installed_merchants"`.

### WebhookEventSource variant 3: `type` = `"partner_app"`

anyOf variant 2: Declared schema WebhookEventSource. The source of a partner webhook event, selected by type.; oneOf variant 1: The partner_app source of a partner webhook event..

- Undeclared: `environment_grant_id`, `mode`, `sandbox_id`.
- Constraints for `type`: Values: `"partner_app"`.

### WebhookEventSource variant 4: `type` = `"installed_merchants"`

anyOf variant 2: Declared schema WebhookEventSource. The source of a partner webhook event, selected by type.; oneOf variant 2: The installed_merchants source of a partner webhook event..

- Required: `environment_grant_id`, `mode`.
- Optional: `sandbox_id`.
- Constraints for `type`: Values: `"installed_merchants"`.

