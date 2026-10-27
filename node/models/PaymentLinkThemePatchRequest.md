[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkThemePatchRequest

Changes to a payment link's checkout theme. Send null on a field to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `50`. |
| `primary_color` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `50`. |
| `title` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |

