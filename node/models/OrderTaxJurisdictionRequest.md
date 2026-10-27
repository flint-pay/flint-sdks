[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxJurisdictionRequest

The taxing jurisdiction of an externally supplied tax component, identified by code, level, name, state, and country.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. Values: `"US"`. |
| `level` | Required | string | Values: `"state"`, `"county"`, `"city"`, `"district"`. |
| `name` | Required | string | minLength: `1`. maxLength: `200`. pattern: `^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$`. |
| `state` | Required | string | minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |

