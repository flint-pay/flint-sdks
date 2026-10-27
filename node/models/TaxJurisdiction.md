[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxJurisdiction







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `level` | Required | string | Values: `"state"`, `"county"`, `"city"`, `"district"`. |
| `name` | Required | string | minLength: `1`. |
| `state` | Required | string | minLength: `1`. |

### TaxJurisdiction variant 1

anyOf variant 1: Declared schema OrderDraftTaxJurisdictionRequest. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country..

- Constraints for `country`: Example: `"US"`.

### TaxJurisdiction variant 2

anyOf variant 2: Declared schema TaxJurisdiction. A taxing jurisdiction with its level, such as state or city, name, state, and country..

- Constraints for `code`: Stable opaque Flint jurisdiction key used for equality and report grouping.

