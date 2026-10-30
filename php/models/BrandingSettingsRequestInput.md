[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BrandingSettingsRequestInput

Branding values to change when updating settings. Send null for a color or `font_family` to clear it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string or null | A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: `1`. pattern: `^#[0-9a-fA-F]{6}$`. |
| `background_color` | Optional | string or null | A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: `1`. pattern: `^#[0-9a-fA-F]{6}$`. |
| `corner_radius` | Optional | integer | Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: `int32`. minimum: `0`. maximum: `32`. |
| `font_family` | Optional | string or null | Send null to clear it. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`, `null`. |
| `primary_color` | Optional | string or null | A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: `1`. pattern: `^#[0-9a-fA-F]{6}$`. |
| `text_color` | Optional | string or null | A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: `1`. pattern: `^#[0-9a-fA-F]{6}$`. |

