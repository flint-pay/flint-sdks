[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryExternalPricingStrategyPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string or null | ID of the delivery rate callback that supplies the price. `delivery_rate_callback_id`: [declared alternatives](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinputdelivery_rate_callback_id). |
| `delivery_rate_callback_revision_id` | Optional | string or null | ID of the rate callback revision the method uses. `delivery_rate_callback_revision_id`: [declared alternatives](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinputdelivery_rate_callback_revision_id). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputmaximum_fee_currency_options). |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options`: [declared alternatives](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputminimum_fee_currency_options). |
| `preview_enabled` | Optional | boolean or null | Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. `preview_enabled`: [declared alternatives](../models/DeliveryExternalPricingStrategyPreviousAttributesInput.md#deliveryexternalpricingstrategypreviousattributesinputpreview_enabled). |

### DeliveryExternalPricingStrategyPreviousAttributesInput.delivery_rate_callback_id

### DeliveryExternalPricingStrategyPreviousAttributesInput.delivery_rate_callback_id variant 1

anyOf variant 1: ID of the delivery rate callback that supplies the price..

- Value shape: string. ID of the delivery rate callback that supplies the price. ID of the delivery rate callback that supplies the price. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. 

### DeliveryExternalPricingStrategyPreviousAttributesInput.delivery_rate_callback_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery rate callback that supplies the price. 

### DeliveryExternalPricingStrategyPreviousAttributesInput.delivery_rate_callback_revision_id

### DeliveryExternalPricingStrategyPreviousAttributesInput.delivery_rate_callback_revision_id variant 1

anyOf variant 1: ID of the rate callback revision the method uses..

- Value shape: string. ID of the rate callback revision the method uses. ID of the rate callback revision the method uses. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. 

### DeliveryExternalPricingStrategyPreviousAttributesInput.delivery_rate_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the rate callback revision the method uses. 

### DeliveryExternalPricingStrategyPreviousAttributesInput.maximum_fee_currency_options

Declared alternatives: [DeliveryCalculatedPricingStrategyPreviousAttributesInput.maximum_fee_currency_options](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputmaximum_fee_currency_options).

### DeliveryExternalPricingStrategyPreviousAttributesInput.minimum_fee_currency_options

Declared alternatives: [DeliveryCalculatedPricingStrategyPreviousAttributesInput.minimum_fee_currency_options](../models/DeliveryCalculatedPricingStrategyPreviousAttributesInput.md#deliverycalculatedpricingstrategypreviousattributesinputminimum_fee_currency_options).

### DeliveryExternalPricingStrategyPreviousAttributesInput.preview_enabled

### DeliveryExternalPricingStrategyPreviousAttributesInput.preview_enabled variant 1

anyOf variant 1: Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`..

- Value shape: boolean. Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. 

### DeliveryExternalPricingStrategyPreviousAttributesInput.preview_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. 

