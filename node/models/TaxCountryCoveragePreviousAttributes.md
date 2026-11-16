[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCountryCoveragePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_scope` | Optional | string or null | all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Values: `"all"`, `"digital"`. `category_scope`: [declared alternatives](../models/TaxCountryCoveragePreviousAttributes.md#taxcountrycoveragepreviousattributescategory_scope). |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 destination country. `country`: [declared alternatives](../models/TaxCountryCoveragePreviousAttributes.md#taxcountrycoveragepreviousattributescountry). |

### TaxCountryCoveragePreviousAttributes.category_scope

### TaxCountryCoveragePreviousAttributes.category_scope variant 1

anyOf variant 1: all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges..

- Value shape: string. all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. Values: `"all"`, `"digital"`.

### TaxCountryCoveragePreviousAttributes.category_scope variant 2

anyOf variant 2.

- Value shape: null. all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada, EU member states, GB, AU and NZ use digital, so they do not cover services, professional_services or taxable charges. 

### TaxCountryCoveragePreviousAttributes.country

### TaxCountryCoveragePreviousAttributes.country variant 1

anyOf variant 1: ISO 3166-1 alpha-2 destination country..

- Value shape: string. ISO 3166-1 alpha-2 destination country. ISO 3166-1 alpha-2 destination country. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. 

### TaxCountryCoveragePreviousAttributes.country variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 destination country. 

