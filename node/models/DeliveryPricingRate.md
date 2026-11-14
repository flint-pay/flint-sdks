[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPricingRate

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `delivery_rate_id` | Required | string | ID of this rate. Flint assigns it. Example: `"drate_01KEZF7C00FD0B4QEC0M00MJ4S"`. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) or null | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. `when`: [declared alternatives](../models/DeliveryPricingRate.md#deliverypricingratewhen). |

### DeliveryPricingRate.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### DeliveryPricingRate.when

Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.

Field definitions: [shared fields](DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall).

### DeliveryPricingRate.when variant 1

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 2

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 3

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 4

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryPricingRate.when variant 5

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 6

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 7

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 8

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 9

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryPricingRate.when variant 10

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 11

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 12

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 13

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 14

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryPricingRate.when variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. 

### DeliveryPricingRate.when variant 1.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 1.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 1.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 1.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 1.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 1.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 2.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 2.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 2.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 2.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 2.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 2.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 3.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 3.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 3.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 3.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 3.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 3.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 4.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 4.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 4.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 4.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 4.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 4.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 5.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 5.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 5.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 5.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 5.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 5.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 6.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 6.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 6.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 6.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 6.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 6.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 7.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 7.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 7.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 7.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 7.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 7.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 8.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 8.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 8.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 8.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 8.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 8.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 9.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 9.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 9.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 9.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 9.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 9.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 10.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 10.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 10.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 10.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 10.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 10.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 11.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 11.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 11.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 11.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 11.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 11.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 12.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 12.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 12.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 12.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 12.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 12.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 13.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 13.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 13.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 13.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 13.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 13.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

### DeliveryPricingRate.when variant 14.country

Field definitions: [DeliveryEligibilityExpression.all[].country](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcountry).

### DeliveryPricingRate.when variant 14.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryPricingRate.when variant 14.postal_code

Field definitions: [DeliveryEligibilityExpression.all[].postal_code](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_code).

### DeliveryPricingRate.when variant 14.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryPricingRate.when variant 14.state

Field definitions: [DeliveryEligibilityExpression.all[].state](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallstate).

### DeliveryPricingRate.when variant 14.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

