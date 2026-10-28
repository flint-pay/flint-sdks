[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethod

A configured shipping, pickup, local delivery, or service option.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfiguration](../models/DeliveryMethodConfiguration.md#deliverymethodconfiguration) | Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes. `configuration`: [field definitions](../models/DeliveryMethod.md#deliverymethodconfiguration-fields-1). |
| `created_at` | Required | string | Time the method was created. Format: `date-time`. |
| `current_delivery_method_revision_id` | Required | string | Immutable revision currently used for new quotes. |
| `delivery_method_id` | Required | string | Stable delivery method ID. |
| `description` | Optional | string | Optional buyer-facing description. |
| `display_position` | Required | integer | Ascending display order among methods. Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LocationsCreateResponse201.md#locationscreateresponse201datametadata). |
| `name` | Required | string | Merchant-facing method name. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Required | string | Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | Counts of subscriptions by status: active, past due, and paused. |
| `type` | Required | string | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |
| `updated_at` | Required | string | Time the method last changed. Format: `date-time`. |
| `version` | Required | integer string | Optimistic-concurrency version for method writes. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### DeliveryMethod.configuration fields 1

Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Required | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | object and Alternative shapes (see declared variants) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `eligibility`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationeligibility). |
| `estimate` | Required | [DeliveryEstimateRule](../models/DeliveryEstimateRule.md#deliveryestimaterule) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Required | integer string | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | object and Alternative shapes (see declared variants) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations. `origin`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationorigin). |
| `pricing` | Required | object and Alternative shapes (see declared variants) | How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set. `pricing`: [declared alternatives](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricing). |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Required | integer string | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `taxable` | Required | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. |

### DeliveryMethod.configuration fields 1.eligibility

Declared alternatives: [DeliveryMethodConfiguration.eligibility](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationeligibility).

### DeliveryMethod.configuration fields 1.origin

Declared alternatives: [DeliveryMethodConfiguration.origin](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationorigin).

### DeliveryMethod.configuration fields 1.pricing

Declared alternatives: [DeliveryMethodConfiguration.pricing](../models/DeliveryMethodConfiguration.md#deliverymethodconfigurationpricing).

### DeliveryMethod.configuration fields 1.public_details

Field definitions: [DeliveryMethodConfigurationPublicDetails](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails).

### DeliveryMethod.metadata

Field definitions: [LocationsCreateResponse201.data.metadata](../models/LocationsCreateResponse201.md#locationscreateresponse201datametadata).

