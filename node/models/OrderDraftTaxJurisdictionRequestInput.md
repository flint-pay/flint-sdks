[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftTaxJurisdictionRequestInput

Request input. Response: [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction).

The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `level` | Required | string | Values: `"state"`, `"county"`, `"city"`, `"district"`. |
| `name` | Required | string | minLength: `1`. |
| `state` | Required | string | minLength: `1`. |

