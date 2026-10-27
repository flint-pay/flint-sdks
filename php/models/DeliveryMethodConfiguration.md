[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfiguration

How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Required | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | object and Alternative shapes (see declared variants) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `eligibility`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationeligibility). |
| `estimate` | Required | [DeliveryEstimateRule](../models/DeliveryEstimateRule.md#deliveryestimaterule) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Required | integer string | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | object and Alternative shapes (see declared variants) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations. `origin`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationorigin). |
| `pricing` | Required | object and Alternative shapes (see declared variants) | How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set. `pricing`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricing). |
| `public_details` | Optional | [DeliveryMethodConfigurationPublicDetails](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails) | Buyer-visible structured details supplied by the merchant. |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Required | integer string | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `taxable` | Required | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### DeliveryMethodConfiguration.eligibility

Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1all).

### DeliveryMethodConfiguration.eligibility variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfiguration.eligibility variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfiguration.eligibility.all[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall).

### DeliveryMethodConfiguration.eligibility.any[]

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall).

### DeliveryMethodConfiguration.eligibility.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryMethodConfiguration.eligibility.customer_has_email

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfiguration.eligibility.customer_has_phone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfiguration.eligibility.customer_merchant_verified

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_merchant_verified](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_merchant_verified).

### DeliveryMethodConfiguration.eligibility.customer_segment

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_segment](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_segment).

### DeliveryMethodConfiguration.eligibility.not

Declared alternatives: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[]](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allall).

### DeliveryMethodConfiguration.eligibility.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryMethodConfiguration.eligibility.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryMethodConfiguration.eligibility.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryMethodConfiguration.eligibility.subscription_purchase

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].customer_has_email](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcustomer_has_email).

### DeliveryMethodConfiguration.eligibility.window_time

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].window_time](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallwindow_time).

### DeliveryMethodConfiguration.eligibility.zone

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].zone](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallzone).

### DeliveryMethodConfiguration.origin

Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.

Field definitions: [shared fields](DeliveryMethodOriginSelectorInput.md#deliverymethodoriginselectorinput).

### DeliveryMethodConfiguration.origin variant 1: `type` = `"fixed_location"`

oneOf variant 1: The `fixed_location` variant of `DeliveryMethodOriginSelector`..

- Condition: not (at least one(present(`delivery_location_set_id`); present(`delivery_location_set_revision_id`); present(`location_ids`))).
- Required: `location_id`.
- Optional: `delivery_location_set_id`, `location_ids`.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodConfiguration.origin variant 2: `type` = `"allocated_origin_group"`

oneOf variant 2: The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.; anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodConfiguration.origin variant 3: `type` = `"allocated_origin_group"`

oneOf variant 2: The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.; anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodConfiguration.origin variant 4: `type` = `"pickup_location_collection"`

oneOf variant 3: The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.; anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodConfiguration.origin variant 5: `type` = `"pickup_location_collection"`

oneOf variant 3: The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.; anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodConfiguration.pricing

How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | object | Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingcalculated-fields-1). |
| `callback` | Conditional | object | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingcallback-fields-1). |
| `caller_supplied` | Conditional | object | Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingcallback-fields-1). |
| `fixed` | Conditional | object | A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingfixed-fields-1). |
| `rate_table` | Conditional | object | Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingrate_table). |
| `tiered` | Conditional | object and Alternative shapes (see declared variants) | Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingtiered-fields-1). |
| `type` | Required | string | Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryMethodConfiguration.pricing variant 1: `type` = `"calculated"`

oneOf variant 1: The `calculated` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryMethodConfiguration.pricing variant 2: `type` = `"callback"`

oneOf variant 2: The `callback` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryMethodConfiguration.pricing variant 3: `type` = `"caller_supplied"`

oneOf variant 3: The `caller_supplied` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryMethodConfiguration.pricing variant 4: `type` = `"fixed"`

oneOf variant 4: The `fixed` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryMethodConfiguration.pricing variant 5: `type` = `"rate_table"`

oneOf variant 5: The `rate_table` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryMethodConfiguration.pricing variant 6: `type` = `"tiered"`

oneOf variant 6: The `tiered` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

### DeliveryMethodConfiguration.pricing.calculated fields 1

Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1).

### DeliveryMethodConfiguration.pricing.calculated fields 1.distance

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.distance](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1distance).

### DeliveryMethodConfiguration.pricing.calculated fields 1.weight

Field definitions: [DeliveryMethodConfigurationPricingCalculated.calculated fields 1.weight](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcalculated-fields-1weight).

### DeliveryMethodConfiguration.pricing.callback fields 1

Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedcallback-fields-1).

### DeliveryMethodConfiguration.pricing.caller_supplied

Field definitions: [DeliveryMethodConfiguration.pricing.callback fields 1](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricingcallback-fields-1).

### DeliveryMethodConfiguration.pricing.fixed fields 1

A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) |  |

### DeliveryMethodConfiguration.pricing.rate_table

Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_table).

### DeliveryMethodConfiguration.pricing.rate_table.rates[]

Field definitions: [DeliveryMethodConfigurationPricingCalculated.rate_table.rates[]](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedrate_tablerates).

### DeliveryMethodConfiguration.pricing.tiered fields 1

Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.

Field definitions: [shared fields](DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtiered).

### DeliveryMethodConfiguration.pricing.tiered fields 1 variant 1: `basis` = `"choice_group.total_weight"`

oneOf variant 1: The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryMethodConfiguration.pricing.tiered fields 1 variant 2

oneOf variant 2: The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`.

### DeliveryMethodConfiguration.pricing.tiered fields 1.bands[]

Field definitions: [DeliveryMethodConfigurationPricingCalculated.tiered.bands[]](../models/DeliveryMethodConfigurationPricingCalculated.md#deliverymethodconfigurationpricingcalculatedtieredbands).

