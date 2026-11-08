[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemVariantTaxCalculationComponentsItemJurisdiction

The taxing jurisdiction this component's tax is owed to.

The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Your stable key for the jurisdiction: 1 to 128 letters, digits, `.`, `_`, `:`, or `-`, starting with a letter or digit. Reports group tax by this code. minLength: `1`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `level` | Required | string | The level of government that imposes the tax. Values: `"state"`, `"county"`, `"city"`, `"district"`, `"country"`, `"province"`. |
| `name` | Required | string | Name of the jurisdiction, up to 200 characters. minLength: `1`. |
| `state` | Optional | string | Two-letter US state at every level. Elsewhere, the ISO 3166-2 suffix (1 to 3 uppercase letters or digits), required below country level and omitted at country level. minLength: `1`. |

