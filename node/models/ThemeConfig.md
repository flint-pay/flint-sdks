[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ThemeConfig







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | Accent color of the checkout, such as #1A73E8. |
| `primary_color` | Optional | string | Primary color of the checkout, such as #1A73E8. |
| `title` | Optional | string | Title shown in place of the merchant's business name. |

### ThemeConfig variant 1

anyOf variant 1: Declared schema PaymentLinkThemeConfig. Theme settings for a payment link's checkout: accent color, primary color, and title..

- Constraints for `accent_color`: minLength: `1`. maxLength: `50`.
- Constraints for `primary_color`: minLength: `1`. maxLength: `50`.
- Constraints for `title`: minLength: `1`. maxLength: `255`.

### ThemeConfig variant 2

anyOf variant 2: Declared schema ThemeConfig. Colors and title applied to a payment link's checkout page..

No additional constraints.

### ThemeConfig variant 3

anyOf variant 3: Declared schema ThemeConfigRequest. Colors and title to apply to a checkout session's page..

- Constraints for `accent_color`: minLength: `1`.
- Constraints for `primary_color`: minLength: `1`.
- Constraints for `title`: minLength: `1`.

