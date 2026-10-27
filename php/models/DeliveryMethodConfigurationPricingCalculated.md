[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPricingCalculated

How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

The `calculated` variant of `DeliveryPricingStrategy`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Required | [DeliveryMethodConfigurationPricingCalculatedCalculated](../models/DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated) | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1). |
| `callback` | Optional | [DeliveryMethodConfigurationPricingCalculatedCallback](../models/DeliveryMethodConfigurationPricingCalculatedCallback.md#deliverymethodconfigurationpricingcalculatedcallback) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1). |
| `caller_supplied` | Optional | [DeliveryMethodConfigurationPricingCalculatedCallerSupplied](../models/DeliveryMethodConfigurationPricingCalculatedCallerSupplied.md#deliverymethodconfigurationpricingcalculatedcallersupplied) | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcaller_supplied). |
| `fixed` | Optional | [DeliveryMethodConfigurationPricingCalculatedFixed](../models/DeliveryMethodConfigurationPricingCalculatedFixed.md#deliverymethodconfigurationpricingcalculatedfixed) | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedfixed-fields-1). |
| `rate_table` | Optional | [DeliveryMethodConfigurationPricingCalculatedRateTable](../models/DeliveryMethodConfigurationPricingCalculatedRateTable.md#deliverymethodconfigurationpricingcalculatedratetable) | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table). |
| `tiered` | Optional | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered). |
| `type` | Required | string | Values: `"calculated"`. |

### DeliveryMethodConfigurationPricingCalculated.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | object | A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1distance). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | object | Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1weight). |

### DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance

A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculateddistance-fields-1).

### DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight

Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedCalculated.md#deliverymethodconfigurationpricingcalculatedcalculatedweight-fields-1).

### DeliveryMethodConfigurationPricingCalculated.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string |  |
| `delivery_rate_callback_revision_id` | Optional | string |  |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `preview_enabled` | Optional | boolean |  |

### DeliveryMethodConfigurationPricingCalculated.caller_supplied

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfigurationPricingCalculated.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfigurationPricingCalculated.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of object | `rates[]`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerates). |
| `unmatched_behavior` | Required | string | Values: `"unavailable"`. |

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |
| `delivery_rate_id` | Required | string |  |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | object and Alternative shapes (see declared variants) or null | `when`: [declared alternatives](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerateswhen). |

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14

anyOf variant 1: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null.  

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 1.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 2.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 3.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 4.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 5.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 6.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 7.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 8.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 9.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 10.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 11.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 12.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 13.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfigurationPricingCalculated.rate_table.rates[].when variant 14.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfigurationPricingCalculated.tiered

Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of object | `bands[]`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtieredbands). |
| `basis` | Required | string | Quantity measured by the tier bands. Money subtotal bases use minor currency units. Values: [7 declared values](DeliveryTieredPricingStrategyInput.md#deliverytieredpricingstrategyinput-basis-values). |
| `unit` | Conditional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

### DeliveryMethodConfigurationPricingCalculated.tiered variant 1: `basis` = `"choice_group.total_weight"`

oneOf variant 1: The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryMethodConfigurationPricingCalculated.tiered variant 2

oneOf variant 2: The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

### DeliveryMethodConfigurationPricingCalculated.tiered.bands[]

One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |
| `from` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `to` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

