[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxJurisdictionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Stable opaque Flint jurisdiction key used for equality and report grouping. `code`: [declared alternatives](../models/TaxJurisdictionPreviousAttributesInput.md#taxjurisdictionpreviousattributesinputcode). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/TaxJurisdictionPreviousAttributesInput.md#taxjurisdictionpreviousattributesinputcountry). |
| `level` | Optional | string or null | The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`. `level`: [declared alternatives](../models/TaxJurisdictionPreviousAttributesInput.md#taxjurisdictionpreviousattributesinputlevel). |
| `name` | Optional | string or null | Name of the jurisdiction, up to 200 characters. `name`: [declared alternatives](../models/TaxJurisdictionPreviousAttributesInput.md#taxjurisdictionpreviousattributesinputname). |
| `state` | Optional | string or null | Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. `state`: [declared alternatives](../models/TaxJurisdictionPreviousAttributesInput.md#taxjurisdictionpreviousattributesinputstate). |

### TaxJurisdictionPreviousAttributesInput.code

### TaxJurisdictionPreviousAttributesInput.code variant 1

anyOf variant 1: Stable opaque Flint jurisdiction key used for equality and report grouping..

- Value shape: string. Stable opaque Flint jurisdiction key used for equality and report grouping. Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`. 

### TaxJurisdictionPreviousAttributesInput.code variant 2

anyOf variant 2.

- Value shape: null. Stable opaque Flint jurisdiction key used for equality and report grouping. 

### TaxJurisdictionPreviousAttributesInput.country

### TaxJurisdictionPreviousAttributesInput.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country code..

- Value shape: string. ISO 3166-1 alpha-2 country code. ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. 

### TaxJurisdictionPreviousAttributesInput.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country code. 

### TaxJurisdictionPreviousAttributesInput.level

### TaxJurisdictionPreviousAttributesInput.level variant 1

anyOf variant 1: The level of government that imposes the tax..

- Value shape: string. The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`.

### TaxJurisdictionPreviousAttributesInput.level variant 2

anyOf variant 2.

- Value shape: null. The level of government that imposes the tax. 

### TaxJurisdictionPreviousAttributesInput.name

### TaxJurisdictionPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the jurisdiction, up to 200 characters..

- Value shape: string. Name of the jurisdiction, up to 200 characters. Name of the jurisdiction, up to 200 characters. minLength: `1`. 

### TaxJurisdictionPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the jurisdiction, up to 200 characters. 

### TaxJurisdictionPreviousAttributesInput.state

### TaxJurisdictionPreviousAttributesInput.state variant 1

anyOf variant 1: Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level..

- Value shape: string. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: `1`. 

### TaxJurisdictionPreviousAttributesInput.state variant 2

anyOf variant 2.

- Value shape: null. Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. 

