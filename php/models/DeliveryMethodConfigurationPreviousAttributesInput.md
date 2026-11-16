[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigPreviousAttributesInput](../models/BuyerInstructionsConfigPreviousAttributesInput.md#buyerinstructionsconfigpreviousattributesinput) or null | Controls whether checkout collects buyer instructions for this method. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. `charge_tax_category`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputcharge_tax_category). |
| `eligibility` | Optional | [DeliveryEligibilityExpressionPreviousAttributesInput](../models/DeliveryEligibilityExpressionPreviousAttributesInput.md#deliveryeligibilityexpressionpreviousattributesinput) or null | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. |
| `estimate` | Optional | [DeliveryEstimateRulePreviousAttributesInput](../models/DeliveryEstimateRulePreviousAttributesInput.md#deliveryestimaterulepreviousattributesinput) or null | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. |
| `minimum_option_lifetime_seconds` | Optional | integer or null | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. `minimum_option_lifetime_seconds`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputminimum_option_lifetime_seconds). |
| `origin` | Optional | [DeliveryMethodOriginSelectorPreviousAttributesInput](../models/DeliveryMethodOriginSelectorPreviousAttributesInput.md#deliverymethodoriginselectorpreviousattributesinput) or null | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. |
| `pricing` | Optional | [DeliveryPricingStrategyPreviousAttributesInput](../models/DeliveryPricingStrategyPreviousAttributesInput.md#deliverypricingstrategypreviousattributesinput) or null | How Flint calculates the delivery charge. |
| `public_details` | Optional | Alternative shapes (see declared variants) | Buyer-visible structured details supplied by the merchant. `public_details`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputpublic_details). |
| `quote_input_fields` | Optional | Array of string or null | Address and coordinate fields a callback method requires and is allowed to receive. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). `quote_input_fields`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputquote_input_fields). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementPreviousAttributesInput](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinput) or null | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputrecipient_requirements). |
| `selection_guarantee_seconds` | Optional | integer or null | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. `selection_guarantee_seconds`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputselection_guarantee_seconds). |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. `taxable`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputtaxable). |

### DeliveryMethodConfigurationPreviousAttributesInput.charge_tax_category

### DeliveryMethodConfigurationPreviousAttributesInput.charge_tax_category variant 1

anyOf variant 1: Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings..

- Value shape: string. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`.

### DeliveryMethodConfigurationPreviousAttributesInput.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. 

### DeliveryMethodConfigurationPreviousAttributesInput.minimum_option_lifetime_seconds

### DeliveryMethodConfigurationPreviousAttributesInput.minimum_option_lifetime_seconds variant 1

anyOf variant 1: Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime..

- Value shape: integer. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. 

### DeliveryMethodConfigurationPreviousAttributesInput.minimum_option_lifetime_seconds variant 2

anyOf variant 2.

- Value shape: null. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. 

### DeliveryMethodConfigurationPreviousAttributesInput.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Conditional | string or null | Buyer-visible instructions for this method. `instructions`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputpublic_details-variant-1instructions). |
| `pickup_mode` | Conditional | string or null | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputpublic_details-variant-1pickup_mode). |
| `service_level` | Conditional | string or null | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. `service_level`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesInput.md#deliverymethodconfigurationpreviousattributesinputpublic_details-variant-1service_level). |

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1

anyOf variant 1.

- Optional: `instructions`, `pickup_mode`, `service_level`.

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 2

anyOf variant 2.

- Undeclared: `instructions`, `pickup_mode`, `service_level`.
- Value shape: null. Buyer-visible structured details supplied by the merchant. 

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.instructions

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.instructions variant 1

anyOf variant 1: Buyer-visible instructions for this method..

- Value shape: string. Buyer-visible instructions for this method. Buyer-visible instructions for this method. maxLength: `2048`. 

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible instructions for this method. 

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.pickup_mode

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.pickup_mode variant 1

anyOf variant 1: Required for pickup methods and rejected for other method types..

- Value shape: string. Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. Required for pickup methods and rejected for other method types. 

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.service_level

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.service_level variant 1

anyOf variant 1: Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled..

- Value shape: string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`.

### DeliveryMethodConfigurationPreviousAttributesInput.public_details variant 1.service_level variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. 

### DeliveryMethodConfigurationPreviousAttributesInput.quote_input_fields

### DeliveryMethodConfigurationPreviousAttributesInput.quote_input_fields variant 1

anyOf variant 1: Address and coordinate fields a callback method requires and is allowed to receive..

- Value shape: Array of string. Address and coordinate fields a callback method requires and is allowed to receive. Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: `"destination_address"`, `"destination_address.line1"`, `"destination_address.line2"`, `"destination_address.city"`, `"destination_address.state"`, `"destination_address.postal_code"`, `"destination_address.country"`, `"buyer_location"`, `"buyer_location.address.line1"`, `"buyer_location.address.line2"`, `"buyer_location.address.city"`, `"buyer_location.address.state"`, `"buyer_location.address.postal_code"`, `"buyer_location.address.country"`, `"buyer_location.coordinate"`.

### DeliveryMethodConfigurationPreviousAttributesInput.quote_input_fields variant 2

anyOf variant 2.

- Value shape: null. Address and coordinate fields a callback method requires and is allowed to receive. 

### DeliveryMethodConfigurationPreviousAttributesInput.recipient_requirements

### DeliveryMethodConfigurationPreviousAttributesInput.recipient_requirements variant 1

anyOf variant 1: Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them..

- Value shape: Array of [DeliveryRecipientRequirementPreviousAttributesInput](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinput). Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. 

### DeliveryMethodConfigurationPreviousAttributesInput.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. 

### DeliveryMethodConfigurationPreviousAttributesInput.selection_guarantee_seconds

### DeliveryMethodConfigurationPreviousAttributesInput.selection_guarantee_seconds variant 1

anyOf variant 1: How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry..

- Value shape: integer. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. 

### DeliveryMethodConfigurationPreviousAttributesInput.selection_guarantee_seconds variant 2

anyOf variant 2.

- Value shape: null. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. 

### DeliveryMethodConfigurationPreviousAttributesInput.taxable

### DeliveryMethodConfigurationPreviousAttributesInput.taxable variant 1

anyOf variant 1: Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`..

- Value shape: boolean. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. 

### DeliveryMethodConfigurationPreviousAttributesInput.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. 

