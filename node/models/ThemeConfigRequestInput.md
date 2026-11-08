[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ThemeConfigRequestInput

Request input. Response: [ThemeConfig](../models/ThemeConfig.md#themeconfig).

Colors and title to apply to a checkout session's page.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | Accent color of the checkout, such as #1A73E8. minLength: `1`. |
| `primary_color` | Optional | string | Primary color of the checkout, such as #1A73E8. minLength: `1`. |
| `title` | Optional | string | Title shown in place of the merchant's business name. minLength: `1`. |

