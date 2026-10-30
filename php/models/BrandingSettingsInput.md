[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BrandingSettingsInput

A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as its default theme.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string | A hex color in the form #RRGGBB, such as #1A73E8. |
| `background_color` | Optional | string | A hex color in the form #RRGGBB, such as #1A73E8. |
| `corner_radius` | Optional | integer | Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: `int32`. |
| `font_family` | Optional | string | Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`. |
| `primary_color` | Optional | string | A hex color in the form #RRGGBB, such as #1A73E8. |
| `text_color` | Optional | string | A hex color in the form #RRGGBB, such as #1A73E8. |

