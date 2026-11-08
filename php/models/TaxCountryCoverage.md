[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxCountryCoverage

A country and the categories automatic tax can calculate there.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_scope` | Required | string | all covers supported line and charge categories; digital covers digital_goods, software and saas. Canada uses digital, so it does not cover services, professional_services or taxable charges. Values: `"all"`, `"digital"`. |
| `country` | Required | string | ISO 3166-1 alpha-2 destination country. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |

