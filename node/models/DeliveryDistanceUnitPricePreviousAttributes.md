[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistanceUnitPricePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributescurrency_options). |
| `unit` | Optional | string or null | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. `unit`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributesunit). |
| `unit_quantity` | Optional | integer or null | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. `unit_quantity`: [declared alternatives](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributesunit_quantity). |

### DeliveryDistanceUnitPricePreviousAttributes.currency_options

### DeliveryDistanceUnitPricePreviousAttributes.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Price by ISO 4217 currency code. Each key must equal the currency of its Money value. 

### DeliveryDistanceUnitPricePreviousAttributes.currency_options variant 2

anyOf variant 2.

- Value shape: null. Price by ISO 4217 currency code. Each key must equal the currency of its Money value. 

### DeliveryDistanceUnitPricePreviousAttributes.currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### DeliveryDistanceUnitPricePreviousAttributes.unit

### DeliveryDistanceUnitPricePreviousAttributes.unit variant 1

anyOf variant 1: Distance unit used by unit_quantity..

- Value shape: string. Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`.

### DeliveryDistanceUnitPricePreviousAttributes.unit variant 2

anyOf variant 2.

- Value shape: null. Distance unit used by unit_quantity. 

### DeliveryDistanceUnitPricePreviousAttributes.unit_quantity

### DeliveryDistanceUnitPricePreviousAttributes.unit_quantity variant 1

anyOf variant 1: Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. 

### DeliveryDistanceUnitPricePreviousAttributes.unit_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. 

