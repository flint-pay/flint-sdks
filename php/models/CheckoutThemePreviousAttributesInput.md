[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutThemePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Optional | string or null | Accent color, from the session or link theme, or from branding settings. `accent_color`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputaccent_color). |
| `background_color` | Optional | string or null | Page background color from branding settings, as a six-digit hex value such as `#ffffff`. `background_color`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputbackground_color). |
| `corner_radius` | Optional | integer or null | Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. `corner_radius`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputcorner_radius). |
| `font_family` | Optional | string or null | Font family from branding settings. New values may be added. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`. `font_family`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputfont_family). |
| `primary_color` | Optional | string or null | Primary color, from the session or link theme, or from branding settings. `primary_color`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputprimary_color). |
| `text_color` | Optional | string or null | Text color from branding settings, as a six-digit hex value. `text_color`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputtext_color). |
| `title` | Optional | string or null | Title shown in place of the merchant's business name. `title`: [declared alternatives](../models/CheckoutThemePreviousAttributesInput.md#checkoutthemepreviousattributesinputtitle). |

### CheckoutThemePreviousAttributesInput.accent_color

### CheckoutThemePreviousAttributesInput.accent_color variant 1

anyOf variant 1: Accent color, from the session or link theme, or from branding settings..

- Value shape: string. Accent color, from the session or link theme, or from branding settings. Accent color, from the session or link theme, or from branding settings. maxLength: `50`. 

### CheckoutThemePreviousAttributesInput.accent_color variant 2

anyOf variant 2.

- Value shape: null. Accent color, from the session or link theme, or from branding settings. 

### CheckoutThemePreviousAttributesInput.background_color

### CheckoutThemePreviousAttributesInput.background_color variant 1

anyOf variant 1: Page background color from branding settings, as a six-digit hex value such as `#ffffff`..

- Value shape: string. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. pattern: `^#[0-9a-fA-F]{6}$`. 

### CheckoutThemePreviousAttributesInput.background_color variant 2

anyOf variant 2.

- Value shape: null. Page background color from branding settings, as a six-digit hex value such as `#ffffff`. 

### CheckoutThemePreviousAttributesInput.corner_radius

### CheckoutThemePreviousAttributesInput.corner_radius variant 1

anyOf variant 1: Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner..

- Value shape: integer. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format: `int32`. minimum: `0`. maximum: `32`. 

### CheckoutThemePreviousAttributesInput.corner_radius variant 2

anyOf variant 2.

- Value shape: null. Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. 

### CheckoutThemePreviousAttributesInput.font_family

### CheckoutThemePreviousAttributesInput.font_family variant 1

anyOf variant 1: Font family from branding settings. New values may be added..

- Value shape: string. Font family from branding settings. New values may be added. Values: `"instrument_sans"`, `"system_sans"`, `"system_serif"`, `"monospace"`.

### CheckoutThemePreviousAttributesInput.font_family variant 2

anyOf variant 2.

- Value shape: null. Font family from branding settings. New values may be added. 

### CheckoutThemePreviousAttributesInput.primary_color

### CheckoutThemePreviousAttributesInput.primary_color variant 1

anyOf variant 1: Primary color, from the session or link theme, or from branding settings..

- Value shape: string. Primary color, from the session or link theme, or from branding settings. Primary color, from the session or link theme, or from branding settings. maxLength: `50`. 

### CheckoutThemePreviousAttributesInput.primary_color variant 2

anyOf variant 2.

- Value shape: null. Primary color, from the session or link theme, or from branding settings. 

### CheckoutThemePreviousAttributesInput.text_color

### CheckoutThemePreviousAttributesInput.text_color variant 1

anyOf variant 1: Text color from branding settings, as a six-digit hex value..

- Value shape: string. Text color from branding settings, as a six-digit hex value. Text color from branding settings, as a six-digit hex value. pattern: `^#[0-9a-fA-F]{6}$`. 

### CheckoutThemePreviousAttributesInput.text_color variant 2

anyOf variant 2.

- Value shape: null. Text color from branding settings, as a six-digit hex value. 

### CheckoutThemePreviousAttributesInput.title

### CheckoutThemePreviousAttributesInput.title variant 1

anyOf variant 1: Title shown in place of the merchant's business name..

- Value shape: string. Title shown in place of the merchant's business name. Title shown in place of the merchant's business name. maxLength: `255`. 

### CheckoutThemePreviousAttributesInput.title variant 2

anyOf variant 2.

- Value shape: null. Title shown in place of the merchant's business name. 

