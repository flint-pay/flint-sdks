[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRate

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `delivery_rate_id` | Required | string |  |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) or null | `when`: [declared alternatives](../models/DeliveryPricingRate.md#deliverypricingratewhen). |

### DeliveryPricingRate.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### DeliveryPricingRate.when

Field definitions: [shared fields](DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall).

### DeliveryPricingRate.when variant 1

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 2

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 3

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 4

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryPricingRate.when variant 5

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 6

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 7

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 8

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 9

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryPricingRate.when variant 10

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 11

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 12

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 13

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 14

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null.  

### DeliveryPricingRate.when variant 1.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 1.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 1.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 2.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 2.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 2.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 3.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 3.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 3.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 4.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 4.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 4.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 5.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 5.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 5.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 6.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 6.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 6.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 7.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 7.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 7.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 8.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 8.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 8.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 9.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 9.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 9.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 10.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 10.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 10.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 11.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 11.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 11.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 12.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 12.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 12.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 13.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 13.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 13.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryPricingRate.when variant 14.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryPricingRate.when variant 14.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 14.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

