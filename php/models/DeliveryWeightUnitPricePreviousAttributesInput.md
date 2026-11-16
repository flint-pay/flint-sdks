[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWeightUnitPricePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options). |
| `unit` | Optional | string or null | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryWeightUnitPricePreviousAttributesInput.md#deliveryweightunitpricepreviousattributesinputunit). |
| `unit_quantity` | Optional | integer or null | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. `unit_quantity`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputunit_quantity). |

### DeliveryWeightUnitPricePreviousAttributesInput.currency_options

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributesInput.currency_options](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputcurrency_options).

### DeliveryWeightUnitPricePreviousAttributesInput.unit

### DeliveryWeightUnitPricePreviousAttributesInput.unit variant 1

anyOf variant 1: Weight unit used by unit_quantity..

- Value shape: string. Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### DeliveryWeightUnitPricePreviousAttributesInput.unit variant 2

anyOf variant 2.

- Value shape: null. Weight unit used by unit_quantity. 

### DeliveryWeightUnitPricePreviousAttributesInput.unit_quantity

Declared alternatives: [DeliveryDistanceUnitPricePreviousAttributesInput.unit_quantity](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinputunit_quantity).

