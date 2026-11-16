[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistanceUnitPricePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options). |
| `unit` | Optional | string or null | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. `unit`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputunit). |
| `unit_quantity` | Optional | integer or null | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. `unit_quantity`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputunit_quantity). |

### DeliveryDistanceUnitPricePreviousAttributesInput.currency_options

### DeliveryDistanceUnitPricePreviousAttributesInput.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Price by ISO 4217 currency code. Each key must equal the currency of its Money value. 

### DeliveryDistanceUnitPricePreviousAttributesInput.currency_options variant 2

anyOf variant 2.

- Value shape: null. Price by ISO 4217 currency code. Each key must equal the currency of its Money value. 

### DeliveryDistanceUnitPricePreviousAttributesInput.unit

### DeliveryDistanceUnitPricePreviousAttributesInput.unit variant 1

anyOf variant 1: Distance unit used by unit_quantity..

- Value shape: string. Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`.

### DeliveryDistanceUnitPricePreviousAttributesInput.unit variant 2

anyOf variant 2.

- Value shape: null. Distance unit used by unit_quantity. 

### DeliveryDistanceUnitPricePreviousAttributesInput.unit_quantity

### DeliveryDistanceUnitPricePreviousAttributesInput.unit_quantity variant 1

anyOf variant 1: Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. 

### DeliveryDistanceUnitPricePreviousAttributesInput.unit_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. 

