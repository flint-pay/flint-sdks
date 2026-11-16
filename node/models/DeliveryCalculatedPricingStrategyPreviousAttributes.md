[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCalculatedPricingStrategyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. `base_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesbase_fee_currency_options). |
| `distance` | Optional | [DeliveryDistanceUnitPricePreviousAttributes](../models/DeliveryDistanceUnitPricePreviousAttributes.md#deliverydistanceunitpricepreviousattributes) or null | Charge per unit of distance between the origin and the destination. |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesmaximum_fee_currency_options). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesminimum_fee_currency_options). |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. `per_item_handling_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesper_item_handling_fee_currency_options). |
| `weight` | Optional | [DeliveryWeightUnitPricePreviousAttributes](../models/DeliveryWeightUnitPricePreviousAttributes.md#deliveryweightunitpricepreviousattributes) or null | Charge per unit of weight of the items. |

### DeliveryCalculatedPricingStrategyPreviousAttributes.base_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributes.base_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Base delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.base_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Base delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.base_fee_currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### DeliveryCalculatedPricingStrategyPreviousAttributes.maximum_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributes.maximum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.maximum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.maximum_fee_currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### DeliveryCalculatedPricingStrategyPreviousAttributes.minimum_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributes.minimum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.minimum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.minimum_fee_currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

### DeliveryCalculatedPricingStrategyPreviousAttributes.per_item_handling_fee_currency_options

### DeliveryCalculatedPricingStrategyPreviousAttributes.per_item_handling_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Handling fee per item by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.per_item_handling_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Handling fee per item by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryCalculatedPricingStrategyPreviousAttributes.per_item_handling_fee_currency_options variant 1.{} fields 1

Field definitions: [CheckoutTipConfigPreviousAttributes.smart_tip_money_options variant 1.[] fields 1](../models/CheckoutTipConfigPreviousAttributes.md#checkouttipconfigpreviousattributessmart_tip_money_options-variant-1-fields-1).

