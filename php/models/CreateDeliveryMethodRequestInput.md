[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryMethodRequestInput

The request body for: Create delivery method.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfigurationCreateRequestInput](../models/DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinput) and [DeliveryMethodConfigurationRequestInput](../models/DeliveryMethodConfigurationRequestInput.md#deliverymethodconfigurationrequestinput) | Settings that decide where this method is offered, how it is priced, and what the buyer sees. Changing them publishes a new revision. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements. Settings that decide where this method is offered, how it is priced, and what the buyer sees. Changing them publishes a new revision. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements. `configuration`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration), [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-2configuration), [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-3configuration). |
| `description` | Optional | string | Buyer-visible description of the method. minLength: `1`. |
| `display_position` | Optional | integer | Position in which this method displays among the others. Lower values display first. Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataRequestInput](../models/MetadataRequestInput.md#metadatarequestinput) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | Name of the method. Buyers see it as the option name at checkout. minLength: `1`. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Optional | string | Whether this method is available for new delivery quotes. Defaults to inactive. Default: `"inactive"`. Values: `"inactive"`, `"active"`. |
| `type` | Required | string | Delivery type of the method. It cannot change after you create the method. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |

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

Settings that decide where this method is offered, how it is priced, and what the buyer sees. Changing them publishes a new revision. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) and [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configurationpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: [15 declared values](#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementRequestInput](../models/DeliveryRecipientRequirementRequestInput.md#deliveryrecipientrequirementrequestinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
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
- `"buyer_location.address.line1"`
- `"buyer_location.address.line2"`
- `"buyer_location.address.city"`
- `"buyer_location.address.state"`
- `"buyer_location.address.postal_code"`
- `"buyer_location.address.country"`
- `"buyer_location.coordinate"`

### CreateDeliveryMethodRequestInput variant 1.configuration.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-visible instructions for this method. minLength: `1`. maxLength: `2048`. |
| `pickup_mode` | Optional | string | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `service_level` | Optional | string | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`. |

### CreateDeliveryMethodRequestInput variant 2.configuration

Settings that decide where this method is offered, how it is priced, and what the buyer sees. Changing them publishes a new revision. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) and [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-2configurationpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: [15 declared values](#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementRequestInput](../models/DeliveryRecipientRequirementRequestInput.md#deliveryrecipientrequirementrequestinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
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

Settings that decide where this method is offered, how it is priced, and what the buyer sees. Changing them publishes a new revision. The configuration you supply when creating a delivery method. `origin` and `pricing` are required. The configuration you supply for a delivery method: origin, pricing, eligibility, timing estimate, tax settings, and recipient requirements.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfigRequestInput](../models/BuyerInstructionsConfigRequestInput.md#buyerinstructionsconfigrequestinput) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `estimate` | Optional | [DeliveryEstimateRuleRequestInput](../models/DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. The timing estimate rule you supply for a delivery method, chosen by `type`: none, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Optional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. `origin`: [declared alternatives](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-3configurationorigin). |
| `pricing` | Required | [DeliveryPricingStrategyCreateRequestInput](../models/DeliveryPricingStrategyCreateRequestInput.md#deliverypricingstrategycreaterequestinput) and [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. The pricing strategy you supply when creating a delivery method. Set `type` and the matching property. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Required | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-3configurationpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: [15 declared values](#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementRequestInput](../models/DeliveryRecipientRequirementRequestInput.md#deliveryrecipientrequirementrequestinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Optional | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### CreateDeliveryMethodRequestInput variant 3.configuration.origin

Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string | Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. ID of the delivery location set that names the Locations in the group. Named delivery location set to reuse. Send either delivery_location_set_id or inline location_ids, never both. The set may contain at most 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. ID of the delivery location set that names the Locations in the group. |
| `location_id` | Optional | string | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Conditional | Array of string | Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. IDs of the Locations in the group. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. Inline Location IDs for a set managed by this delivery method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these Location IDs without exposing the managed set. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. IDs of the Locations in the group. |
| `type` | Required | string | Where delivery starts. Delivery type of the method. It cannot change after you create the method. Where delivery starts. Delivery type of the method. It cannot change after you create the method. Values: `"pickup_location_collection"`. |

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

