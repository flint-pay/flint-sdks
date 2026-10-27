[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkThemeConfigInput

Request input. Response: [ThemeConfig](../models/ThemeConfig.md#themeconfig).

Theme settings for a payment link's checkout: accent color, primary color, and title.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | minLength: `1`. maxLength: `50`. |
| `primary_color` | Optional | string | minLength: `1`. maxLength: `50`. |
| `title` | Optional | string | minLength: `1`. maxLength: `255`. |

