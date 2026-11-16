[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryExternalPricingStrategyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string or null | ID of the delivery rate callback that supplies the price. `delivery_rate_callback_id`: [declared alternatives](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributesdelivery_rate_callback_id). |
| `delivery_rate_callback_revision_id` | Optional | string or null | ID of the rate callback revision the method uses. `delivery_rate_callback_revision_id`: [declared alternatives](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributesdelivery_rate_callback_revision_id). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesmaximum_fee_currency_options). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesminimum_fee_currency_options). |
| `preview_enabled` | Optional | boolean or null | Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. `preview_enabled`: [declared alternatives](../models/DeliveryExternalPricingStrategyPreviousAttributes.md#deliveryexternalpricingstrategypreviousattributespreview_enabled). |

### DeliveryExternalPricingStrategyPreviousAttributes.delivery_rate_callback_id

### DeliveryExternalPricingStrategyPreviousAttributes.delivery_rate_callback_id variant 1

anyOf variant 1: ID of the delivery rate callback that supplies the price..

- Value shape: string. ID of the delivery rate callback that supplies the price. ID of the delivery rate callback that supplies the price. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. 

### DeliveryExternalPricingStrategyPreviousAttributes.delivery_rate_callback_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery rate callback that supplies the price. 

### DeliveryExternalPricingStrategyPreviousAttributes.delivery_rate_callback_revision_id

### DeliveryExternalPricingStrategyPreviousAttributes.delivery_rate_callback_revision_id variant 1

anyOf variant 1: ID of the rate callback revision the method uses..

- Value shape: string. ID of the rate callback revision the method uses. ID of the rate callback revision the method uses. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. 

### DeliveryExternalPricingStrategyPreviousAttributes.delivery_rate_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the rate callback revision the method uses. 

### DeliveryExternalPricingStrategyPreviousAttributes.maximum_fee_currency_options

Declared alternatives: [DeliveryCalculatedPricingStrategyPreviousAttributes.maximum_fee_currency_options](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesmaximum_fee_currency_options).

### DeliveryExternalPricingStrategyPreviousAttributes.minimum_fee_currency_options

Declared alternatives: [DeliveryCalculatedPricingStrategyPreviousAttributes.minimum_fee_currency_options](../models/DeliveryCalculatedPricingStrategyPreviousAttributes.md#deliverycalculatedpricingstrategypreviousattributesminimum_fee_currency_options).

### DeliveryExternalPricingStrategyPreviousAttributes.preview_enabled

### DeliveryExternalPricingStrategyPreviousAttributes.preview_enabled variant 1

anyOf variant 1: Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`..

- Value shape: boolean. Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. 

### DeliveryExternalPricingStrategyPreviousAttributes.preview_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. 

