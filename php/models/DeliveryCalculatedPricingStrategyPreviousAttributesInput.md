[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCalculatedPricingStrategyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. `base_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputbase_fee_currency_options). |
| `distance` | Optional | [DeliveryDistanceUnitPricePreviousAttributesInput](../models/DeliveryDistanceUnitPricePreviousAttributesInput.md#deliverydistanceunitpricepreviousattributesinput) or null | Charge per unit of distance between the origin and the destination. |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputmaximum_fee_currency_options). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputminimum_fee_currency_options). |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. `per_item_handling_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputper_item_handling_fee_currency_options). |
| `weight` | Optional | [DeliveryWeightUnitPricePreviousAttributesInput](../models/DeliveryWeightUnitPricePreviousAttributesInput.md#deliveryweightunitpricepreviousattributesinput) or null | Charge per unit of weight of the items. |

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.base_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.base_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Base delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.base_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Base delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.maximum_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.maximum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.maximum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.minimum_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.minimum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.minimum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.per_item_handling_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.per_item_handling_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Handling fee per item by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributesInput.per_item_handling_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Handling fee per item by ISO currency code. Each key must equal the Money object's currency. 

