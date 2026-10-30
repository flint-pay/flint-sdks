[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxJurisdictionRequestInput

Request input. Response: [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction).

A taxing jurisdiction with its level, such as state or city, name, state, and country.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `level` | Required | string | Values: `"state"`, `"county"`, `"city"`, `"district"`. |
| `name` | Required | string | minLength: `1`. |
| `state` | Required | string | minLength: `1`. |

