[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxJurisdictionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Stable opaque Flint jurisdiction key used for equality and report grouping. `code`: [declared alternatives](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributescode). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributescountry). |
| `level` | Optional | string or null | The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`. `level`: [declared alternatives](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributeslevel). |
| `name` | Optional | string or null | Name of the jurisdiction, up to 200 characters. `name`: [declared alternatives](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributesname). |
| `state` | Optional | string or null | Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. `state`: [declared alternatives](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributesstate). |

### TaxJurisdictionPreviousAttributes.code

### TaxJurisdictionPreviousAttributes.code variant 1

anyOf variant 1: Stable opaque Flint jurisdiction key used for equality and report grouping..

- Value shape: string. Stable opaque Flint jurisdiction key used for equality and report grouping. Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`. 

### TaxJurisdictionPreviousAttributes.code variant 2

anyOf variant 2.

- Value shape: null. Stable opaque Flint jurisdiction key used for equality and report grouping. 

### TaxJurisdictionPreviousAttributes.country

Declared alternatives: [AddressPreviousAttributes.country](../models/AddressPreviousAttributes.md#addresspreviousattributescountry).

### TaxJurisdictionPreviousAttributes.level

### TaxJurisdictionPreviousAttributes.level variant 1

anyOf variant 1: The level of government that imposes the tax..

- Value shape: string. The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`.

### TaxJurisdictionPreviousAttributes.level variant 2

anyOf variant 2.

- Value shape: null. The level of government that imposes the tax. 

### TaxJurisdictionPreviousAttributes.name

### TaxJurisdictionPreviousAttributes.name variant 1

anyOf variant 1: Name of the jurisdiction, up to 200 characters..

- Value shape: string. Name of the jurisdiction, up to 200 characters. Name of the jurisdiction, up to 200 characters. minLength: `1`. 

### TaxJurisdictionPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the jurisdiction, up to 200 characters. 

### TaxJurisdictionPreviousAttributes.state

### TaxJurisdictionPreviousAttributes.state variant 1

anyOf variant 1: Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level..

- Value shape: string. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: `1`. 

### TaxJurisdictionPreviousAttributes.state variant 2

anyOf variant 2.

- Value shape: null. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. 

