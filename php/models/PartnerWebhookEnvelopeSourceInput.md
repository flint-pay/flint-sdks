[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerWebhookEnvelopeSourceInput

The source of a partner webhook event, selected by type.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `merchant_id` | Required | string |  |
| `partner_app_install_id` | Required | string |  |
| `type` | Required | string |  |
| `environment_grant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `sandbox_id` | Conditional | string |  |

### PartnerWebhookEnvelopeSourceInput variant 1: `type` = `"partner_app"`

oneOf variant 1: The partner_app source of a partner webhook event..

- Undeclared: `environment_grant_id`, `mode`, `sandbox_id`.
- Constraints for `type`: Values: `"partner_app"`.

### PartnerWebhookEnvelopeSourceInput variant 2: `type` = `"installed_merchants"`

oneOf variant 2: The installed_merchants source of a partner webhook event..

- Required: `environment_grant_id`, `mode`.
- Optional: `sandbox_id`.
- Constraints for `type`: Values: `"installed_merchants"`.

