[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | [DeliveryMethodConfigurationPreviousAttributes](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributes) or null | Current eligibility, pricing, origin, estimate, and tax configuration. `configuration`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration). |
| `created_at` | Optional | string or null | Time the method was created. `created_at`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributescreated_at). |
| `current_delivery_method_revision_id` | Optional | string or null | Immutable revision currently used for new quotes. `current_delivery_method_revision_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributescurrent_delivery_method_revision_id). |
| `delivery_method_id` | Optional | string or null | Stable delivery method ID. `delivery_method_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_method_id). |
| `delivery_revocation_id` | Optional | string or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. `delivery_revocation_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdelivery_revocation_id). |
| `description` | Optional | string or null | Optional buyer-facing description. `description`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdescription). |
| `display_position` | Optional | integer or null | Ascending display order among methods. `display_position`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesdisplay_position). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `metadata` | Optional | Map of string or null | Caller-owned metadata. `metadata`: [declared alternatives](../models/DeliveryLocationSetArchivedMerchantEventDataPreviousAttributes.md#deliverylocationsetarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Merchant-facing method name. `name`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesname). |
| `recommendation_priority` | Optional | integer or null | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. `recommendation_priority`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesrecommendation_priority). |
| `status` | Optional | string or null | Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesstatus). |
| `subscription_counts` | Optional | [SubscriptionCountsPreviousAttributes](../models/SubscriptionCountsPreviousAttributes.md#subscriptioncountspreviousattributes) or null | How many subscriptions use this method, by status. |
| `type` | Optional | string or null | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | Time the method last changed. `updated_at`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for method writes. `version`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesversion). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration

Current eligibility, pricing, origin, estimate, and tax configuration.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Conditional | [BuyerInstructionsConfigPreviousAttributes](../models/BuyerInstructionsConfigPreviousAttributes.md#buyerinstructionsconfigpreviousattributes) or null | Controls whether checkout collects buyer instructions for this method. |
| `charge_tax_category` | Conditional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. `charge_tax_category`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributescharge_tax_category). |
| `eligibility` | Conditional | object and Alternative shapes (see declared variants) or null | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. `eligibility`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility). |
| `estimate` | Conditional | [DeliveryEstimateRulePreviousAttributes](../models/DeliveryEstimateRulePreviousAttributes.md#deliveryestimaterulepreviousattributes) or null | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. |
| `minimum_option_lifetime_seconds` | Conditional | integer or null | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. `minimum_option_lifetime_seconds`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesminimum_option_lifetime_seconds). |
| `origin` | Conditional | object and Alternative shapes (see declared variants) or null | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. `origin`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesorigin). |
| `pricing` | Conditional | object and Alternative shapes (see declared variants) or null | How Flint calculates the delivery charge. `pricing`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributespricing). |
| `public_details` | Conditional | Alternative shapes (see declared variants) | Buyer-visible structured details supplied by the merchant. `public_details`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1public_details). |
| `quote_input_fields` | Conditional | Array of string or null | Address and coordinate fields a callback method requires and is allowed to receive. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). `quote_input_fields`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesquote_input_fields). |
| `recipient_requirements` | Conditional | Array of [DeliveryRecipientRequirementPreviousAttributes](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributes) or null | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesrecipient_requirements). |
| `selection_guarantee_seconds` | Conditional | integer or null | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. `selection_guarantee_seconds`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesselection_guarantee_seconds). |
| `tax_exempt_us_states` | Conditional | Array of string or null | US destinations where this shipment method's shipping charge is exempt from tax. Use uppercase two-letter state codes such as CA. All other destinations use the method's taxable setting or the merchant default. For a taxable shipment method with exemptions, quoting requires a destination country and, for US destinations, a state. Items values: [60 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-tax_exempt_us_states--values). `tax_exempt_us_states`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributestax_exempt_us_states). |
| `taxable` | Conditional | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. `taxable`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributestaxable). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1

anyOf DeliveryMethodConfigurationPreviousAttributes.

- Optional: `buyer_instructions`, `charge_tax_category`, `eligibility`, `estimate`, `minimum_option_lifetime_seconds`, `origin`, `pricing`, `public_details`, `quote_input_fields`, `recipient_requirements`, `selection_guarantee_seconds`, `tax_exempt_us_states`, `taxable`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf variant 2.

- Undeclared: `buyer_instructions`, `charge_tax_category`, `eligibility`, `estimate`, `minimum_option_lifetime_seconds`, `origin`, `pricing`, `public_details`, `quote_input_fields`, `recipient_requirements`, `selection_guarantee_seconds`, `tax_exempt_us_states`, `taxable`.
- Value shape: null. Current eligibility, pricing, origin, estimate, and tax configuration. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.charge_tax_category

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.charge_tax_category](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributescharge_tax_category).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.eligibility](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributeseligibility).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.minimum_option_lifetime_seconds

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.minimum_option_lifetime_seconds](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesminimum_option_lifetime_seconds).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.origin](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesorigin).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.pricing](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributespricing).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Conditional | string or null | Buyer-visible instructions for this method. `instructions`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailsinstructions). |
| `pickup_mode` | Conditional | string or null | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailspickup_mode). |
| `service_level` | Conditional | string or null | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. `service_level`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailsservice_level). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1

anyOf variant 1.

- Optional: `instructions`, `pickup_mode`, `service_level`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 2

anyOf variant 2.

- Undeclared: `instructions`, `pickup_mode`, `service_level`.
- Value shape: null. Buyer-visible structured details supplied by the merchant. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.instructions

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributesPublicDetails.instructions](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailsinstructions).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.pickup_mode

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributesPublicDetails.pickup_mode](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailspickup_mode).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.service_level

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributesPublicDetails.service_level](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailsservice_level).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.quote_input_fields

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.quote_input_fields](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesquote_input_fields).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.recipient_requirements

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.recipient_requirements](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesrecipient_requirements).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.selection_guarantee_seconds

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.selection_guarantee_seconds](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributesselection_guarantee_seconds).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.tax_exempt_us_states

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.tax_exempt_us_states](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributestax_exempt_us_states).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.taxable

Declared alternatives: [DeliveryMethodConfigurationPreviousAttributes.taxable](../models/DeliveryMethodConfigurationPreviousAttributes.md#deliverymethodconfigurationpreviousattributestaxable).

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

- Value shape: string. The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. 

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

