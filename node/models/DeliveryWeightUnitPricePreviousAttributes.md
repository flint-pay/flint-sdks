[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeightUnitPricePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributescurrency_options). |
| `unit` | Optional | string or null | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryWeightUnitPricePreviousAttributes.md#deliveryweightunitpricepreviousattributesunit). |
| `unit_quantity` | Optional | integer or null | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. `unit_quantity`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributesunit_quantity). |

### DeliveryWeightUnitPricePreviousAttributes.currency_options

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributes.currency_options](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributescurrency_options).

### DeliveryWeightUnitPricePreviousAttributes.unit

### DeliveryWeightUnitPricePreviousAttributes.unit variant 1

anyOf variant 1: Weight unit used by unit_quantity..

- Value shape: string. Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### DeliveryWeightUnitPricePreviousAttributes.unit variant 2

anyOf variant 2.

- Value shape: null. Weight unit used by unit_quantity. 

### DeliveryWeightUnitPricePreviousAttributes.unit_quantity

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributes.unit_quantity](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributesunit_quantity).

