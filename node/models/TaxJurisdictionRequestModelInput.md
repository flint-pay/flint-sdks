[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxJurisdictionRequestModelInput

Request input. Response: [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction).

A taxing jurisdiction with its level, such as state or city, name, state, and country.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `level` | Required | string | The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`. |
| `name` | Required | string | Name of the jurisdiction, up to 200 characters. minLength: `1`. |
| `state` | Optional | string | Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: `1`. |

