[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutThemeInput

Colors, corner radius, font family, and title that style a checkout, taken from the session or link theme or the merchant's branding settings.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | Accent color, from the session or link theme, or from branding settings. maxLength: `50`. |
| `background_color` | Optional | string | Page background color from branding settings, as a six-digit hex value such as `#ffffff`. pattern: `^#[0-9a-fA-F]{6}$`. |
| `corner_radius` | Optional | integer | Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format: `int32`. minimum: `0`. maximum: `32`. |
| `font_family` | Optional | string | Font family from branding settings. New values may be added. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`. |
| `primary_color` | Optional | string | Primary color, from the session or link theme, or from branding settings. maxLength: `50`. |
| `text_color` | Optional | string | Text color from branding settings, as a six-digit hex value. pattern: `^#[0-9a-fA-F]{6}$`. |
| `title` | Optional | string | Title shown in place of the merchant's business name. maxLength: `255`. |

