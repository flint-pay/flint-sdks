[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountRouteTemplatesInput

Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_preferences` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `invoice` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `order` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `return` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `subscription` | Optional | string or null | Send null to clear it. minLength: `1`. |

