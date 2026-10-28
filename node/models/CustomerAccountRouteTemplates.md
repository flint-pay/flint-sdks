[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerAccountRouteTemplates







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email_preferences` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `invoice` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `order` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `return` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `subscription` | Optional | string or null | Send null to clear it. minLength: `1`. |

### CustomerAccountRouteTemplates variant 1

anyOf variant 1: Declared schema CustomerAccountRouteTemplates. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one..

No additional constraints.

### CustomerAccountRouteTemplates variant 2

anyOf variant 2: Declared schema CustomerAccountRouteTemplatesRequestRequest. Route templates for a merchant-hosted customer account: email preferences, invoice, order, return, and subscription pages. Send null to clear one..

No additional constraints.

