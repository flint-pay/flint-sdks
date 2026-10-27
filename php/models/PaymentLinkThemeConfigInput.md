[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkThemeConfigInput

Theme settings for a payment link's checkout: accent color, primary color, and title.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | minLength: `1`. maxLength: `50`. |
| `primary_color` | Optional | string | minLength: `1`. maxLength: `50`. |
| `title` | Optional | string | minLength: `1`. maxLength: `255`. |

