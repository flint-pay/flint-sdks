[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryMethodRequestInput

The request body for: Create delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationCreateRequestInput](../models/DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinput) and [DeliveryMethodConfigurationRequestInput](../models/DeliveryMethodConfigurationRequestInput.md#deliverymethodconfigurationrequestinput) | The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. `configuration`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration), [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-2configuration), [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-3configuration). |
| `description` | Optional | string | minLength: `1`. |
| `display_position` | Optional | integer | Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Optional | string | Values: `"inactive"`, `"active"`. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |

### CreateDeliveryMethodRequestInput variant 1: `type` = `"shipment"`

oneOf with type: "shipment": The `shipment` variant of `CreateDeliveryMethodRequest`..

- Constraints for `type`: Values: `"shipment"`.

### CreateDeliveryMethodRequestInput variant 2: `type` = `"local_delivery"`

oneOf with type: "local_delivery": The `local_delivery` variant of `CreateDeliveryMethodRequest`..

- Constraints for `type`: Values: `"local_delivery"`.

### CreateDeliveryMethodRequestInput variant 3: `type` = `"pickup"`

oneOf with type: "pickup": The `pickup` variant of `CreateDeliveryMethodRequest`..

- Constraints for `type`: Values: `"pickup"`.

### CreateDeliveryMethodRequestInput variant 1.configuration

The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) and [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configurationpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Optional | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

#### CreateDeliveryMethodRequestInput variant 1.configuration quote_input_fields [] values

- `"destination_address"`
- `"destination_address.line1"`
- `"destination_address.line2"`
- `"destination_address.city"`
- `"destination_address.state"`
- `"destination_address.postal_code"`
- `"destination_address.country"`
- `"buyer_location"`
- `"buyer_location.line1"`
- `"buyer_location.line2"`
- `"buyer_location.city"`
- `"buyer_location.state"`
- `"buyer_location.postal_code"`
- `"buyer_location.country"`
- `"buyer_location.coordinate"`

### CreateDeliveryMethodRequestInput variant 1.configuration.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-visible instructions for this method. minLength: `1`. maxLength: `2048`. |
| `pickup_mode` | Optional | string | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `service_level` | Optional | string | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`. |

### CreateDeliveryMethodRequestInput variant 2.configuration

The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) and [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-2configurationpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Optional | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### CreateDeliveryMethodRequestInput variant 2.configuration.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-visible instructions for this method. minLength: `1`. maxLength: `2048`. |
| `pickup_mode` | Optional | string | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `service_level` | Optional | string | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"same_day"`, `"on_demand"`, `"scheduled"`. |

### CreateDeliveryMethodRequestInput variant 3.configuration

The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. `origin`: [declared alternatives](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-3configurationorigin). |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) and [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Required | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-3configurationpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Optional | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### CreateDeliveryMethodRequestInput variant 3.configuration.origin

Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list.

Field definitions: [shared fields](DeliveryMethodOriginSelectorInputPickupLocationCollectionInput.md#deliverymethodoriginselectorinputpickuplocationcollectioninput).

### CreateDeliveryMethodRequestInput variant 3.configuration.origin variant 1: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.; oneOf DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet: The Delivery location set selector for a pickup_location_collection delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`location_ids`))).
- Required: `delivery_location_set_id`.
- Optional: `location_ids`.

### CreateDeliveryMethodRequestInput variant 3.configuration.origin variant 2: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.; oneOf DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations: The Locations selector for a pickup_location_collection delivery origin..

- Condition: not (present(`location_id`)).
- Condition: not (at least one(present(`location_id`); present(`delivery_location_set_id`))).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`.

### CreateDeliveryMethodRequestInput variant 3.configuration.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-visible instructions for this method. minLength: `1`. maxLength: `2048`. |
| `pickup_mode` | Required | string | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `service_level` | Optional | string | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. |

