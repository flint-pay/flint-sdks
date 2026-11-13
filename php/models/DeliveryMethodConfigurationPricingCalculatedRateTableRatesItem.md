[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of ([DeliveryMethodConfigurationPricingCalculatedRateTableRatesItemCurrencyOptionsValue](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItemCurrencyOptionsValue.md#deliverymethodconfigurationpricingcalculatedratetableratesitemcurrencyoptionsvalue) and [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `delivery_rate_id` | Required | string | ID of this rate. Flint assigns it. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | (object and Alternative shapes (see declared variants) or null) | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. `when`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen). |

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when

Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.

Field definitions: [shared fields](DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. 

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 2.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 3.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 4.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 5.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 6.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 7.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 8.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 9.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 10.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 11.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 12.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 13.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 14.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

