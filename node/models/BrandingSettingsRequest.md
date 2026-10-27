[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BrandingSettingsRequest

Branding values to change when updating settings. Send null for a color or `font_family` to clear it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `background_color` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `corner_radius` | Optional | integer | Format: `int32`. |
| `font_family` | Optional | string or null | Send null to clear it. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`, `null`. |
| `primary_color` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `text_color` | Optional | string or null | Send null to clear it. minLength: `1`. |

