[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxJurisdiction







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string |  |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `level` | Required | string | The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`. |
| `name` | Required | string | Name of the jurisdiction, up to 200 characters. |
| `state` | Optional | string | Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. |

### TaxJurisdiction variant 1

anyOf variant 1: Declared schema OrderDraftTaxJurisdictionRequest. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country..

- Constraints for `code`: Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`, starting with a letter or digit. Reports group tax by this code. minLength: `1`.
- Constraints for `country`: Example: `"US"`.
- Constraints for `name`: minLength: `1`.
- Constraints for `state`: minLength: `1`.

### TaxJurisdiction variant 2

anyOf variant 2: Declared schema OrderDraftTaxJurisdictionRequestModel. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country..

- Constraints for `code`: Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`, starting with a letter or digit. Reports group tax by this code. minLength: `1`.
- Constraints for `country`: Example: `"US"`.
- Constraints for `name`: minLength: `1`.
- Constraints for `state`: minLength: `1`.

### TaxJurisdiction variant 3

anyOf variant 3: Declared schema OrderTaxJurisdictionRequest. The taxing jurisdiction of an externally supplied tax component, identified by code, level, name, state, and country..

- Constraints for `code`: Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`, starting with a letter or digit. Reports group tax by this code. minLength: `1`. maxLength: `128`. pattern: `^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$`.
- Constraints for `country`: Example: `"US"`.
- Constraints for `name`: minLength: `1`. maxLength: `200`. pattern: `^[^\s\x00](?:[^\r\n\x00]*[^\s\x00])?$`.
- Constraints for `state`: minLength: `1`. maxLength: `3`. pattern: `^[A-Z0-9]{1,3}$`.

### TaxJurisdiction variant 4

anyOf variant 4: Declared schema TaxJurisdiction. A taxing jurisdiction with its level, such as state or city, name, state, and country..

- Constraints for `code`: Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`.
- Constraints for `name`: minLength: `1`.
- Constraints for `state`: minLength: `1`.

### TaxJurisdiction variant 5

anyOf variant 5: Declared schema TaxJurisdictionRequest. A taxing jurisdiction with its level, such as state or city, name, state, and country..

- Constraints for `code`: Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`.
- Constraints for `name`: minLength: `1`.
- Constraints for `state`: minLength: `1`.

### TaxJurisdiction variant 6

anyOf variant 6: Declared schema TaxJurisdictionRequestModel. A taxing jurisdiction with its level, such as state or city, name, state, and country..

- Constraints for `code`: Stable opaque Flint jurisdiction key used for equality and report grouping. minLength: `1`.
- Constraints for `country`: Example: `"US"`.
- Constraints for `name`: minLength: `1`.
- Constraints for `state`: minLength: `1`.

