[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkThemeConfigInput

Theme settings for a payment link's checkout: accent color, primary color, and title.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | Accent color of the checkout, such as #1A73E8. minLength: `1`. maxLength: `50`. |
| `primary_color` | Optional | string | Primary color of the checkout, such as #1A73E8. minLength: `1`. maxLength: `50`. |
| `title` | Optional | string | Title shown in place of the merchant's business name. minLength: `1`. maxLength: `255`. |

