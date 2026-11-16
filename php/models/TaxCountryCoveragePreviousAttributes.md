[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCountryCoveragePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_scope` | Optional | string or null | all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Values: `"all"`, `"digital"`. `category_scope`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescoverage-variant-1-fields-1category_scope). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 destination country. `country`: [declared alternatives](../models/TaxCountryCoveragePreviousAttributes.md#taxcountrycoveragepreviousattributescountry). |

### TaxCountryCoveragePreviousAttributes.category_scope

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.coverage variant 1.[] fields 1.category_scope](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributescoverage-variant-1-fields-1category_scope).

### TaxCountryCoveragePreviousAttributes.country

### TaxCountryCoveragePreviousAttributes.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 destination country..

- Value shape: string. ISO 3166-1 alpha-2 destination country. ISO 3166-1 alpha-2 destination country. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. 

### TaxCountryCoveragePreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 destination country. 

