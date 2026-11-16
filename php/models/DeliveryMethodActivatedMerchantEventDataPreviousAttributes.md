[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfiguration](../models/DeliveryMethodConfiguration.md#deliverymethodconfiguration) or null | Current eligibility, pricing, origin, estimate, and tax configuration. `configuration`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration). |
| `created_at` | Optional | string or null | Time the method was created. `created_at`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributescreated_at). |
| `current_delivery_method_revision_id` | Optional | string or null | Immutable revision currently used for new quotes. `current_delivery_method_revision_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributescurrent_delivery_method_revision_id). |
| `delivery_method_id` | Optional | string or null | Stable delivery method ID. `delivery_method_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_method_id). |
| `delivery_revocation_id` | Optional | string or null or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. `delivery_revocation_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_revocation_id). |
| `description` | Optional | string or null | Optional buyer-facing description. `description`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdescription). |
| `display_position` | Optional | integer or null | Ascending display order among methods. `display_position`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdisplay_position). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Merchant-facing method name. `name`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesname). |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. `recommendation_priority`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesrecommendation_priority). |
| `status` | Optional | string or null | Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesstatus). |
| `subscription_counts` | Optional | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) or null | How many subscriptions use this method, by status. |
| `type` | Optional | string or null | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | Time the method last changed. `updated_at`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for method writes. `version`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesversion). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration

Current eligibility, pricing, origin, estimate, and tax configuration.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Conditional | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Conditional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Conditional | object and Alternative shapes (see declared variants) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `eligibility`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibility). |
| `estimate` | Conditional | [DeliveryEstimateRule](../models/DeliveryEstimateRule.md#deliveryestimaterule) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Conditional | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Conditional | object and Alternative shapes (see declared variants) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations. `origin`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationorigin). |
| `pricing` | Conditional | object and Alternative shapes (see declared variants) | How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set. `pricing`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricing). |
| `public_details` | Conditional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails). |
| `quote_input_fields` | Conditional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Conditional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Conditional | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Conditional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1

anyOf DeliveryMethodConfiguration: Current eligibility, pricing, origin, estimate, and tax configuration..

- Required: `charge_tax_category`, `estimate`, `minimum_option_lifetime_seconds`, `origin`, `pricing`, `selection_guarantee_seconds`, `taxable`.
- Optional: `buyer_instructions`, `eligibility`, `public_details`, `quote_input_fields`, `recipient_requirements`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf variant 2.

- Undeclared: `buyer_instructions`, `charge_tax_category`, `eligibility`, `estimate`, `minimum_option_lifetime_seconds`, `origin`, `pricing`, `public_details`, `quote_input_fields`, `recipient_requirements`, `selection_guarantee_seconds`, `taxable`.
- Value shape: null. Current eligibility, pricing, origin, estimate, and tax configuration. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibility).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin

Declared alternatives: [DeliveryMethodResponse.data.configuration.origin](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationorigin).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing

Declared alternatives: [DeliveryMethodResponse.data.configuration.pricing](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricing).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details

Field definitions: [DeliveryMethodConfigurationPublicDetails](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.created_at

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: Time the method was created..

- Value shape: string. Time the method was created. Time the method was created. Format: `date-time`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the method was created. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.current_delivery_method_revision_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.current_delivery_method_revision_id variant 1

anyOf variant 1: Immutable revision currently used for new quotes..

- Value shape: string. Immutable revision currently used for new quotes. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.current_delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. Immutable revision currently used for new quotes. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_method_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_method_id variant 1

anyOf variant 1: Stable delivery method ID..

- Value shape: string. Stable delivery method ID. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery method ID. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id variant 1

anyOf variant 1: The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it..

- Value shape: (string or null). The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.delivery_revocation_id variant 2

anyOf variant 2.

- Value shape: null. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.description

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Optional buyer-facing description..

- Value shape: string. Optional buyer-facing description. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional buyer-facing description. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.display_position

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.display_position variant 1

anyOf variant 1: Ascending display order among methods..

- Value shape: integer. Ascending display order among methods. Ascending display order among methods. Format: `int32`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.display_position variant 2

anyOf variant 2.

- Value shape: null. Ascending display order among methods. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.metadata](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.name

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Merchant-facing method name..

- Value shape: string. Merchant-facing method name. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Merchant-facing method name. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.recommendation_priority

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.recommendation_priority variant 1

anyOf variant 1: Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method..

- Value shape: integer. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.recommendation_priority variant 2

anyOf variant 2.

- Value shape: null. Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.status

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current method lifecycle status..

- Value shape: string. Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current method lifecycle status. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: Delivery mode this method offers..

- Value shape: string. Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Delivery mode this method offers. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.updated_at

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: Time the method last changed..

- Value shape: string. Time the method last changed. Time the method last changed. Format: `date-time`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the method last changed. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.version

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Optimistic-concurrency version for method writes..

- Value shape: integer. Optimistic-concurrency version for method writes. Optimistic-concurrency version for method writes. Format: `uint64`. minimum: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Optimistic-concurrency version for method writes. 

