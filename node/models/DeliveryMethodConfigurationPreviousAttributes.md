[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigPreviousAttributes](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributes) or null | Controls whether checkout collects buyer instructions for this method. |
| `charge_tax_category` | Optional | string or null or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. `charge_tax_category`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributescharge_tax_category). |
| `eligibility` | Optional | [DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) or null | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. |
| `estimate` | Optional | [DeliveryEstimateRulePreviousAttributes](../models/DeliveryEstimateRulePreviousAttributes.md#deliveryestimaterulepreviousattributes) or null | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. |
| `minimum_option_lifetime_seconds` | Optional | integer or null | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. `minimum_option_lifetime_seconds`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesminimum_option_lifetime_seconds). |
| `origin` | Optional | [DeliveryMethodOriginSelectorPreviousAttributes](../models/DeliveryMethodOriginSelectorPreviousAttributes.md#deliverymethodoriginselectorpreviousattributes) or null | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. |
| `pricing` | Optional | [DeliveryPricingStrategyPreviousAttributes](../models/DeliveryPricingStrategyPreviousAttributes.md#deliverypricingstrategypreviousattributes) or null | How Flint calculates the delivery charge. |
| `public_details` | Optional | Alternative shapes (see declared variants) | Buyer-visible structured details supplied by the merchant. `public_details`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributespublic_details). |
| `quote_input_fields` | Optional | Array of string or null | Address and coordinate fields a callback method requires and is allowed to receive. Items values: [15 declared values](CreateDeliveryMethodRequest.md#createdeliverymethodrequest-variant-1configuration-quote_input_fields--values). `quote_input_fields`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesquote_input_fields). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes) or null | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesrecipient_requirements). |
| `selection_guarantee_seconds` | Optional | integer or null | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. `selection_guarantee_seconds`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesselection_guarantee_seconds). |
| `taxable` | Optional | boolean or null or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. `taxable`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributestaxable). |

### DeliveryMethodConfigurationPreviousAttributes.charge_tax_category

### DeliveryMethodConfigurationPreviousAttributes.charge_tax_category variant 1

anyOf variant 1: Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings..

- Value shape: (string or null). Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`.

### DeliveryMethodConfigurationPreviousAttributes.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. 

### DeliveryMethodConfigurationPreviousAttributes.minimum_option_lifetime_seconds

### DeliveryMethodConfigurationPreviousAttributes.minimum_option_lifetime_seconds variant 1

anyOf variant 1: Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime..

- Value shape: integer. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. 

### DeliveryMethodConfigurationPreviousAttributes.minimum_option_lifetime_seconds variant 2

anyOf variant 2.

- Value shape: null. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. 

### DeliveryMethodConfigurationPreviousAttributes.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Conditional | string or null | Buyer-visible instructions for this method. `instructions`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributespublic_details-variant-1instructions). |
| `pickup_mode` | Conditional | string or null | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributespublic_details-variant-1pickup_mode). |
| `service_level` | Conditional | string or null | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. `service_level`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributespublic_details-variant-1service_level). |

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1

anyOf variant 1.

- Optional: `instructions`, `pickup_mode`, `service_level`.

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 2

anyOf variant 2.

- Undeclared: `instructions`, `pickup_mode`, `service_level`.
- Value shape: null. Buyer-visible structured details supplied by the merchant. 

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.instructions

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.instructions variant 1

anyOf variant 1: Buyer-visible instructions for this method..

- Value shape: string. Buyer-visible instructions for this method. Buyer-visible instructions for this method. maxLength: `2048`. 

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible instructions for this method. 

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.pickup_mode

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.pickup_mode variant 1

anyOf variant 1: Required for pickup methods and rejected for other method types..

- Value shape: string. Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. Required for pickup methods and rejected for other method types. 

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.service_level

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.service_level variant 1

anyOf variant 1: Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled..

- Value shape: string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`.

### DeliveryMethodConfigurationPreviousAttributes.public_details variant 1.service_level variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. 

### DeliveryMethodConfigurationPreviousAttributes.quote_input_fields

### DeliveryMethodConfigurationPreviousAttributes.quote_input_fields variant 1

anyOf variant 1: Address and coordinate fields a callback method requires and is allowed to receive..

- Value shape: Array of string. Address and coordinate fields a callback method requires and is allowed to receive. Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: `"destination_address"`, `"destination_address.line1"`, `"destination_address.line2"`, `"destination_address.city"`, `"destination_address.state"`, `"destination_address.postal_code"`, `"destination_address.country"`, `"buyer_location"`, `"buyer_location.address.line1"`, `"buyer_location.address.line2"`, `"buyer_location.address.city"`, `"buyer_location.address.state"`, `"buyer_location.address.postal_code"`, `"buyer_location.address.country"`, `"buyer_location.coordinate"`.

### DeliveryMethodConfigurationPreviousAttributes.quote_input_fields variant 2

anyOf variant 2.

- Value shape: null. Address and coordinate fields a callback method requires and is allowed to receive. 

### DeliveryMethodConfigurationPreviousAttributes.recipient_requirements

### DeliveryMethodConfigurationPreviousAttributes.recipient_requirements variant 1

anyOf variant 1: Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them..

- Value shape: Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes). Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. 

### DeliveryMethodConfigurationPreviousAttributes.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. 

### DeliveryMethodConfigurationPreviousAttributes.selection_guarantee_seconds

### DeliveryMethodConfigurationPreviousAttributes.selection_guarantee_seconds variant 1

anyOf variant 1: How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry..

- Value shape: integer. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. 

### DeliveryMethodConfigurationPreviousAttributes.selection_guarantee_seconds variant 2

anyOf variant 2.

- Value shape: null. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. 

### DeliveryMethodConfigurationPreviousAttributes.taxable

### DeliveryMethodConfigurationPreviousAttributes.taxable variant 1

anyOf variant 1: Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`..

- Value shape: (boolean or null). Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. 

### DeliveryMethodConfigurationPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. 

