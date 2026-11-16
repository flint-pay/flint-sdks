[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodActivatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Optional | Alternative shapes (see declared variants) | Current eligibility, pricing, origin, estimate, and tax configuration. `configuration`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration). |
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
| `subscription_counts` | Optional | Alternative shapes (see declared variants) | How many subscriptions use this method, by status. `subscription_counts`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributessubscription_counts). |
| `type` | Optional | string or null | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | Time the method last changed. `updated_at`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Optimistic-concurrency version for method writes. `version`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesversion). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration

Current eligibility, pricing, origin, estimate, and tax configuration.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Conditional | Alternative shapes (see declared variants) | Controls whether checkout collects buyer instructions for this method. `buyer_instructions`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1buyer_instructions). |
| `charge_tax_category` | Conditional | string or null or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. `charge_tax_category`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1charge_tax_category). |
| `eligibility` | Conditional | object and Alternative shapes (see declared variants) or null | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. `eligibility`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility). |
| `estimate` | Conditional | Alternative shapes (see declared variants) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. `estimate`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate). |
| `minimum_option_lifetime_seconds` | Conditional | integer or null | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. `minimum_option_lifetime_seconds`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1minimum_option_lifetime_seconds). |
| `origin` | Conditional | object and Alternative shapes (see declared variants) or null | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. `origin`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin). |
| `pricing` | Conditional | object and Alternative shapes (see declared variants) or null | How Flint calculates the delivery charge. `pricing`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing). |
| `public_details` | Conditional | Alternative shapes (see declared variants) | Buyer-visible structured details supplied by the merchant. `public_details`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1public_details). |
| `quote_input_fields` | Conditional | Array of string or null | Address and coordinate fields a callback method requires and is allowed to receive. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). `quote_input_fields`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1quote_input_fields). |
| `recipient_requirements` | Conditional | Array of object or null | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. `recipient_requirements`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1recipient_requirements). |
| `selection_guarantee_seconds` | Conditional | integer or null | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. `selection_guarantee_seconds`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1selection_guarantee_seconds). |
| `taxable` | Conditional | boolean or null or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. `taxable`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1taxable). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1

anyOf DeliveryMethodConfigurationPreviousAttributes.

- Optional: `buyer_instructions`, `charge_tax_category`, `eligibility`, `estimate`, `minimum_option_lifetime_seconds`, `origin`, `pricing`, `public_details`, `quote_input_fields`, `recipient_requirements`, `selection_guarantee_seconds`, `taxable`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 2

anyOf variant 2.

- Undeclared: `buyer_instructions`, `charge_tax_category`, `eligibility`, `estimate`, `minimum_option_lifetime_seconds`, `origin`, `pricing`, `public_details`, `quote_input_fields`, `recipient_requirements`, `selection_guarantee_seconds`, `taxable`.
- Value shape: null. Current eligibility, pricing, origin, estimate, and tax configuration. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions

Controls whether checkout collects buyer instructions for this method.

Field definitions: [shared fields](CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions variant 1

anyOf BuyerInstructionsConfigPreviousAttributes.

- Optional: `enabled`, `label`, `placeholder`, `required`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions variant 2

anyOf variant 2.

- Undeclared: `enabled`, `label`, `placeholder`, `required`.
- Value shape: null. Controls whether checkout collects buyer instructions for this method. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions variant 1.enabled

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.enabled](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1enabled).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions variant 1.label

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.label](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1label).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions variant 1.placeholder

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.placeholder](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1placeholder).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.buyer_instructions variant 1.required

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.buyer_instructions variant 1.required](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1buyer_instructions-variant-1required).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.charge_tax_category

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.charge_tax_category variant 1

anyOf variant 1: Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings..

- Value shape: (string or null). Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility

Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when every nested expression matches. `all`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any). |
| `country` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country). |
| `customer_has_email` | Conditional | Alternative shapes (see declared variants) | Matches when whether the customer has an email address equals `value`. `customer_has_email`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email). |
| `customer_has_phone` | Conditional | Alternative shapes (see declared variants) | Matches when whether the customer has a phone number equals `value`. `customer_has_phone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone). |
| `customer_merchant_verified` | Conditional | Alternative shapes (see declared variants) | Matches the is_merchant_verified flag you set on the customer against value. `customer_merchant_verified`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified). |
| `customer_segment` | Conditional | Alternative shapes (see declared variants) | Matches the free-form segment you assign to the customer against values. `customer_segment`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) or null | Matches when the nested expression does not match. `not`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not). |
| `postal_code` | Conditional | Alternative shapes (see declared variants) | Matches when the address postal code matches one of the listed codes. `postal_code`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code). |
| `radius` | Conditional | Alternative shapes (see declared variants) | Matches when the address is within a set distance of an origin. `radius`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius). |
| `state` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state). |
| `subscription_purchase` | Conditional | Alternative shapes (see declared variants) | Matches when whether the purchase is a subscription purchase equals `value`. `subscription_purchase`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase). |
| `window_time` | Conditional | Alternative shapes (see declared variants) | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. `window_time`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time). |
| `zone` | Conditional | Alternative shapes (see declared variants) | Matches when the address is inside the delivery zone you name. `zone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 1; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 2; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 3; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 4; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 5; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 6; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 7; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 8; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 9; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 10; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 11; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 12; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 13; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 14.

- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1

anyOf variant 1: Matches when every nested expression matches..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Matches when every nested expression matches. Matches when every nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 2

anyOf variant 2.

- Value shape: null. Matches when every nested expression matches. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when every nested expression matches. `all`: [field definitions](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all). |
| `any` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any). |
| `country` | Optional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country). |
| `customer_has_email` | Optional | Alternative shapes (see declared variants) | Matches when whether the customer has an email address equals `value`. `customer_has_email`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email). |
| `customer_has_phone` | Optional | Alternative shapes (see declared variants) | Matches when whether the customer has a phone number equals `value`. `customer_has_phone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone). |
| `customer_merchant_verified` | Optional | Alternative shapes (see declared variants) | Matches the is_merchant_verified flag you set on the customer against value. `customer_merchant_verified`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified). |
| `customer_segment` | Optional | Alternative shapes (see declared variants) | Matches the free-form segment you assign to the customer against values. `customer_segment`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment). |
| `not` | Optional | object and Alternative shapes (see declared variants) or null | Matches when the nested expression does not match. `not`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not). |
| `postal_code` | Optional | Alternative shapes (see declared variants) | Matches when the address postal code matches one of the listed codes. `postal_code`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code). |
| `radius` | Optional | Alternative shapes (see declared variants) | Matches when the address is within a set distance of an origin. `radius`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius). |
| `state` | Optional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state). |
| `subscription_purchase` | Optional | Alternative shapes (see declared variants) | Matches when whether the purchase is a subscription purchase equals `value`. `subscription_purchase`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase). |
| `window_time` | Optional | Alternative shapes (see declared variants) | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. `window_time`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time). |
| `zone` | Optional | Alternative shapes (see declared variants) | Matches when the address is inside the delivery zone you name. `zone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1 variant 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

anyOf variant 1; anyOf variant 2; anyOf variant 3; anyOf variant 4; anyOf variant 5; anyOf variant 6; anyOf variant 7; anyOf variant 8; anyOf variant 9; anyOf variant 10; anyOf variant 11; anyOf variant 12; anyOf variant 13; anyOf variant 14.

No additional constraints.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any variant 1

anyOf variant 1: Matches when at least one nested expression matches..

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). Matches when at least one nested expression matches. Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any variant 2

anyOf variant 2.

- Value shape: null. Matches when at least one nested expression matches. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any variant 1.[] fields 1

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country

Matches when the address is in one of the listed countries.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject). |
| `values` | Conditional | Array of string or null | ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. `values`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1values). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1

anyOf DeliveryCountryConditionPreviousAttributes.

- Optional: `subject`, `values`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 2

anyOf variant 2.

- Undeclared: `subject`, `values`.
- Value shape: null. Matches when the address is in one of the listed countries. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject variant 1

anyOf variant 1: Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location..

- Value shape: string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject variant 2

anyOf variant 2.

- Value shape: null. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.values

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.values variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them..

- Value shape: Array of string. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. Example: `["US"]`. Items: minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.values variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email

Matches when whether the customer has an email address equals `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Conditional | boolean or null | The value the fact must have. `true` matches when the fact holds, `false` when it does not. `value`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email-variant-1value). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1

anyOf DeliveryCustomerBooleanConditionPreviousAttributes.

- Optional: `value`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 2

anyOf variant 2.

- Undeclared: `value`.
- Value shape: null. Matches when whether the customer has an email address equals `value`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1.value

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1.value variant 1

anyOf variant 1: The value the fact must have. `true` matches when the fact holds, `false` when it does not..

- Value shape: boolean. The value the fact must have. `true` matches when the fact holds, `false` when it does not. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1.value variant 2

anyOf variant 2.

- Value shape: null. The value the fact must have. `true` matches when the fact holds, `false` when it does not. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone

Matches when whether the customer has a phone number equals `value`.

Field definitions: [shared fields](#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone variant 1

anyOf DeliveryCustomerBooleanConditionPreviousAttributes.

- Optional: `value`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone variant 2

anyOf variant 2.

- Undeclared: `value`.
- Value shape: null. Matches when whether the customer has a phone number equals `value`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone variant 1.value

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1.value](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email-variant-1value).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified

Matches the is_merchant_verified flag you set on the customer against value.

Field definitions: [shared fields](#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified variant 1

anyOf DeliveryCustomerBooleanConditionPreviousAttributes.

- Optional: `value`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified variant 2

anyOf variant 2.

- Undeclared: `value`.
- Value shape: null. Matches the is_merchant_verified flag you set on the customer against value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified variant 1.value

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1.value](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email-variant-1value).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment

Matches the free-form segment you assign to the customer against values.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Conditional | Array of string or null | Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. `values`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment-variant-1values). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment variant 1

anyOf DeliveryCustomerSegmentConditionPreviousAttributes.

- Optional: `values`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment variant 2

anyOf variant 2.

- Undeclared: `values`.
- Value shape: null. Matches the free-form segment you assign to the customer against values. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment variant 1.values

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment variant 1.values variant 1

anyOf variant 1: Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them..

- Value shape: Array of string. Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. Items: minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment variant 1.values variant 2

anyOf variant 2.

- Value shape: null. Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not

Matches when the nested expression does not match.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when every nested expression matches. `all`: [field definitions](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any). |
| `country` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country). |
| `customer_has_email` | Conditional | Alternative shapes (see declared variants) | Matches when whether the customer has an email address equals `value`. `customer_has_email`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email). |
| `customer_has_phone` | Conditional | Alternative shapes (see declared variants) | Matches when whether the customer has a phone number equals `value`. `customer_has_phone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone). |
| `customer_merchant_verified` | Conditional | Alternative shapes (see declared variants) | Matches the is_merchant_verified flag you set on the customer against value. `customer_merchant_verified`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified). |
| `customer_segment` | Conditional | Alternative shapes (see declared variants) | Matches the free-form segment you assign to the customer against values. `customer_segment`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) or null | Matches when the nested expression does not match. `not`: [field definitions](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not). |
| `postal_code` | Conditional | Alternative shapes (see declared variants) | Matches when the address postal code matches one of the listed codes. `postal_code`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code). |
| `radius` | Conditional | Alternative shapes (see declared variants) | Matches when the address is within a set distance of an origin. `radius`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius). |
| `state` | Conditional | Alternative shapes (see declared variants) | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state). |
| `subscription_purchase` | Conditional | Alternative shapes (see declared variants) | Matches when whether the purchase is a subscription purchase equals `value`. `subscription_purchase`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase). |
| `window_time` | Conditional | Alternative shapes (see declared variants) | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. `window_time`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time). |
| `zone` | Conditional | Alternative shapes (see declared variants) | Matches when the address is inside the delivery zone you name. `zone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 1; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 2; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 3; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 4; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 5; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 6; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 7; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 8; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 9; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 10; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 11; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 12; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 13; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 14.

- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Matches when the nested expression does not match. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code

Matches when the address postal code matches one of the listed codes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject). |
| `values` | Conditional | Array of object or null | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code-variant-1values). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1

anyOf DeliveryPostalCodeConditionPreviousAttributes.

- Optional: `subject`, `values`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 2

anyOf variant 2.

- Undeclared: `subject`, `values`.
- Value shape: null. Matches when the address postal code matches one of the listed codes. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.subject

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1

anyOf variant 1: Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4..

- Value shape: Array of object. Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 2

anyOf variant 2.

- Value shape: null. Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country). |
| `type` | Optional | string or null | Whether `value` is a whole postal code or the start of one. Values: `"exact"`, `"prefix"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code-variant-1values-variant-1-fields-1type). |
| `value` | Optional | string or null | The postal code, or the start of postal codes, to match. `value`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code-variant-1values-variant-1-fields-1value). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.type variant 1

anyOf variant 1: Whether `value` is a whole postal code or the start of one..

- Value shape: string. Whether `value` is a whole postal code or the start of one. Whether `value` is a whole postal code or the start of one. Default: `"exact"`. Values: `"exact"`, `"prefix"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.type variant 2

anyOf variant 2.

- Value shape: null. Whether `value` is a whole postal code or the start of one. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.value

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.value variant 1

anyOf variant 1: The postal code, or the start of postal codes, to match..

- Value shape: string. The postal code, or the start of postal codes, to match. The postal code, or the start of postal codes, to match. minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code variant 1.values variant 1.[] fields 1.value variant 2

anyOf variant 2.

- Value shape: null. The postal code, or the start of postal codes, to match. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius

Matches when the address is within a set distance of an origin.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Conditional | Alternative shapes (see declared variants) | The largest distance from the origin that still matches. `maximum_distance`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1maximum_distance). |
| `measurement` | Conditional | string or null | How Flint measures the distance. Values: `"straight_line"`. `measurement`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1measurement). |
| `origin` | Conditional | Alternative shapes (see declared variants) | The point to measure the distance from. `origin`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1origin). |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1: `measurement` = `"straight_line"`

anyOf DeliveryRadiusConditionPreviousAttributes.

- Optional: `maximum_distance`, `measurement`, `origin`, `subject`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 2

anyOf variant 2.

- Undeclared: `maximum_distance`, `measurement`, `origin`, `subject`.
- Value shape: null. Matches when the address is within a set distance of an origin. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance

The largest distance from the origin that still matches.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Conditional | string or null | Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`. `unit`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1maximum_distance-variant-1unit). |
| `value` | Conditional | number or null | Distance, in `unit`. `value`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1maximum_distance-variant-1value). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1

anyOf DeliveryDistancePreviousAttributes.

- Optional: `unit`, `value`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 2

anyOf variant 2.

- Undeclared: `unit`, `value`.
- Value shape: null. The largest distance from the origin that still matches. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1.unit

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1.unit variant 1

anyOf variant 1: Unit of `value`..

- Value shape: string. Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1.unit variant 2

anyOf variant 2.

- Value shape: null. Unit of `value`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1.value

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1.value variant 1

anyOf variant 1: Distance, in `unit`..

- Value shape: number. Distance, in `unit`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.maximum_distance variant 1.value variant 2

anyOf variant 2.

- Value shape: null. Distance, in `unit`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.measurement

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.measurement variant 1

anyOf variant 1: How Flint measures the distance..

- Value shape: string. How Flint measures the distance. How Flint measures the distance. Default: `"straight_line"`. Values: `"straight_line"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.measurement variant 2

anyOf variant 2.

- Value shape: null. How Flint measures the distance. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin

The point to measure the distance from.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string or null | ID of the Location to measure from. Send either `location_id` or `method_origin`. `location_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1origin-variant-1location_id). |
| `method_origin` | Conditional | boolean or null | Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. `method_origin`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius-variant-1origin-variant-1method_origin). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1

anyOf DeliveryRadiusOriginPreviousAttributes.

- Optional: `location_id`, `method_origin`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 2

anyOf variant 2.

- Undeclared: `location_id`, `method_origin`.
- Value shape: null. The point to measure the distance from. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1.location_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1.location_id variant 1

anyOf variant 1: ID of the Location to measure from. Send either `location_id` or `method_origin`..

- Value shape: string. ID of the Location to measure from. Send either `location_id` or `method_origin`. ID of the Location to measure from. Send either `location_id` or `method_origin`. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location to measure from. Send either `location_id` or `method_origin`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1.method_origin

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1.method_origin variant 1

anyOf variant 1: Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`..

- Value shape: boolean. Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.origin variant 1.method_origin variant 2

anyOf variant 2.

- Value shape: null. Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius variant 1.subject

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state

Matches when the address is in one of the listed states or provinces.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject). |
| `values` | Conditional | Array of string or null | ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). `values`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state-variant-1values). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state variant 1

anyOf DeliveryStateConditionPreviousAttributes.

- Optional: `subject`, `values`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state variant 2

anyOf variant 2.

- Undeclared: `subject`, `values`.
- Value shape: null. Matches when the address is in one of the listed states or provinces. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state variant 1.subject

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state variant 1.values

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state variant 1.values variant 1

anyOf variant 1: ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input)..

- Value shape: Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). Items: minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state variant 1.values variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase

Matches when whether the purchase is a subscription purchase equals `value`.

Field definitions: [shared fields](#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase variant 1

anyOf DeliveryCustomerBooleanConditionPreviousAttributes.

- Optional: `value`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase variant 2

anyOf variant 2.

- Undeclared: `value`.
- Value shape: null. Matches when whether the purchase is a subscription purchase equals `value`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase variant 1.value

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email variant 1.value](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email-variant-1value).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time

Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Conditional | integer or null | Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. `end_minute`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time-variant-1end_minute). |
| `start_minute` | Conditional | integer or null | First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. `start_minute`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time-variant-1start_minute). |
| `weekdays` | Conditional | Array of string or null | Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. `weekdays`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time-variant-1weekdays). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1

anyOf DeliveryWindowTimeConditionPreviousAttributes.

- Optional: `end_minute`, `start_minute`, `weekdays`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 2

anyOf variant 2.

- Undeclared: `end_minute`, `start_minute`, `weekdays`.
- Value shape: null. Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.end_minute

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.end_minute variant 1

anyOf variant 1: Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`..

- Value shape: integer. Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.end_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.start_minute

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.start_minute variant 1

anyOf variant 1: First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`..

- Value shape: integer. First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.start_minute variant 2

anyOf variant 2.

- Value shape: null. First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.weekdays

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.weekdays variant 1

anyOf variant 1: Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday..

- Value shape: Array of string. Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. Items: minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time variant 1.weekdays variant 2

anyOf variant 2.

- Value shape: null. Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone

Matches when the address is inside the delivery zone you name.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Conditional | string or null | ID of the delivery zone the address must be inside. `delivery_zone_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone-variant-1delivery_zone_id). |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone variant 1

anyOf DeliveryZoneConditionPreviousAttributes.

- Optional: `delivery_zone_id`, `subject`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone variant 2

anyOf variant 2.

- Undeclared: `delivery_zone_id`, `subject`.
- Value shape: null. Matches when the address is inside the delivery zone you name. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone variant 1.delivery_zone_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone variant 1.delivery_zone_id variant 1

anyOf variant 1: ID of the delivery zone the address must be inside..

- Value shape: string. ID of the delivery zone the address must be inside. ID of the delivery zone the address must be inside. minLength: `1`. Example: `"dzone_01KEZF7C005RY7KGCN4M2CH5WP"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone variant 1.delivery_zone_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery zone the address must be inside. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone variant 1.subject

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country variant 1.subject](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country-variant-1subject).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 2.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 3.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 4.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 5.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 6.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 7.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 8.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 9.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 10.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 11.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 12.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 13.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.all

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.not

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 14.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 1

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 2

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 3

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 4

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 5

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 6

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 7

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 8

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 9

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 10

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 11

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 12

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.all fields 13

Field definitions: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 2.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 3.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 4.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 5.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 6.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 7.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 8.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 9.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 10.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 11.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 12.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 13.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 14.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate

The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `schedule_window` | Conditional | Alternative shapes (see declared variants) | Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. `schedule_window`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window). |
| `transit_time` | Conditional | Alternative shapes (see declared variants) | Handling and transit time. Set only when `type` is `transit_time`. `transit_time`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time). |
| `type` | Conditional | string or null | How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1type). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1

anyOf DeliveryEstimateRulePreviousAttributes.

- Optional: `schedule_window`, `transit_time`, `type`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 2

anyOf variant 2.

- Undeclared: `schedule_window`, `transit_time`, `type`.
- Value shape: null. The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window

Weekly schedule of delivery windows. Set only when `type` is `schedule_window`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `availability` | Conditional | Alternative shapes (see declared variants) | When windows can be offered. `availability`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1

anyOf DeliveryScheduleWindowRulePreviousAttributes.

- Optional: `availability`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 2

anyOf variant 2.

- Undeclared: `availability`.
- Value shape: null. Weekly schedule of delivery windows. Set only when `type` is `schedule_window`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability

When windows can be offered.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blackout_intervals` | Conditional | Array of object or null | Local date-time spans in which no window is offered. `blackout_intervals`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1blackout_intervals). |
| `dst_disambiguation` | Conditional | string or null | Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Values: `"earlier"`, `"later"`. `dst_disambiguation`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1dst_disambiguation). |
| `maximum_scheduling_horizon_days` | Conditional | integer or null | How many days ahead windows are offered, from 1 to 365. `maximum_scheduling_horizon_days`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1maximum_scheduling_horizon_days). |
| `preparation_lead_time_seconds` | Conditional | integer or null | Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. `preparation_lead_time_seconds`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1preparation_lead_time_seconds). |
| `same_day_cutoff_minute` | Conditional | integer or null | Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. `same_day_cutoff_minute`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1same_day_cutoff_minute). |
| `timezone` | Conditional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1timezone). |
| `weekly_intervals` | Conditional | Array of object or null | One to 100 weekly spans in which windows are offered. They cannot overlap. `weekly_intervals`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1weekly_intervals). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1

anyOf DeliveryAvailabilityPreviousAttributes.

- Optional: `blackout_intervals`, `dst_disambiguation`, `maximum_scheduling_horizon_days`, `preparation_lead_time_seconds`, `same_day_cutoff_minute`, `timezone`, `weekly_intervals`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 2

anyOf variant 2.

- Undeclared: `blackout_intervals`, `dst_disambiguation`, `maximum_scheduling_horizon_days`, `preparation_lead_time_seconds`, `same_day_cutoff_minute`, `timezone`, `weekly_intervals`.
- Value shape: null. When windows can be offered. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1

anyOf variant 1: Local date-time spans in which no window is offered..

- Value shape: Array of object. Local date-time spans in which no window is offered. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 2

anyOf variant 2.

- Value shape: null. Local date-time spans in which no window is offered. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_local` | Optional | string or null | Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. `end_local`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1blackout_intervals-variant-1-fields-1end_local). |
| `start_local` | Optional | string or null | Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. `start_local`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1blackout_intervals-variant-1-fields-1start_local). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1.end_local

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1.end_local variant 1

anyOf variant 1: Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone..

- Value shape: string. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1.end_local variant 2

anyOf variant 2.

- Value shape: null. Local date and time the blackout ends, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1.start_local

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1.start_local variant 1

anyOf variant 1: Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone..

- Value shape: string. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.blackout_intervals variant 1.[] fields 1.start_local variant 2

anyOf variant 2.

- Value shape: null. Local date and time the blackout starts, as `YYYY-MM-DDTHH:MM:SS` in the schedule's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.dst_disambiguation

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.dst_disambiguation variant 1

anyOf variant 1: Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`..

- Value shape: string. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. Default: `"earlier"`. Values: `"earlier"`, `"later"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.dst_disambiguation variant 2

anyOf variant 2.

- Value shape: null. Which of the two instants a local time means when a clock change makes it happen twice. Defaults to `earlier`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.maximum_scheduling_horizon_days

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.maximum_scheduling_horizon_days variant 1

anyOf variant 1: How many days ahead windows are offered, from 1 to 365..

- Value shape: integer. How many days ahead windows are offered, from 1 to 365. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.maximum_scheduling_horizon_days variant 2

anyOf variant 2.

- Value shape: null. How many days ahead windows are offered, from 1 to 365. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.preparation_lead_time_seconds

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.preparation_lead_time_seconds variant 1

anyOf variant 1: Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered..

- Value shape: integer. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. Format: `int64`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.preparation_lead_time_seconds variant 2

anyOf variant 2.

- Value shape: null. Notice the merchant needs before a window starts, in seconds. A buyer can choose a window until this long before it starts. Quotes offer only windows that can still be chosen, so a window already under way is not offered. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.same_day_cutoff_minute

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.same_day_cutoff_minute variant 1

anyOf variant 1: Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff..

- Value shape: integer. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.same_day_cutoff_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day, from 0 to 1439 in the schedule's timezone, after which today's windows are no longer offered. Omit it to apply no cutoff. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.timezone

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.timezone variant 1

anyOf variant 1: Uses an IANA time zone name..

- Value shape: string. Uses an IANA time zone name. Uses an IANA time zone name. minLength: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.timezone variant 2

anyOf variant 2.

- Value shape: null. Uses an IANA time zone name. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1

anyOf variant 1: One to 100 weekly spans in which windows are offered. They cannot overlap..

- Value shape: Array of object. One to 100 weekly spans in which windows are offered. They cannot overlap. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 2

anyOf variant 2.

- Value shape: null. One to 100 weekly spans in which windows are offered. They cannot overlap. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Optional | integer or null | Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. `end_minute`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1weekly_intervals-variant-1-fields-1end_minute). |
| `end_weekday` | Optional | integer or null | Weekday the span ends, from 0 for Sunday to 6 for Saturday. `end_weekday`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1weekly_intervals-variant-1-fields-1end_weekday). |
| `start_minute` | Optional | integer or null | Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. `start_minute`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1weekly_intervals-variant-1-fields-1start_minute). |
| `start_weekday` | Optional | integer or null | Weekday the span starts, from 0 for Sunday to 6 for Saturday. `start_weekday`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1schedule_window-variant-1availability-variant-1weekly_intervals-variant-1-fields-1start_weekday). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.end_minute

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.end_minute variant 1

anyOf variant 1: Minute of the day the span ends, from 0 to 1439, in the schedule's timezone..

- Value shape: integer. Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.end_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day the span ends, from 0 to 1439, in the schedule's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.end_weekday

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.end_weekday variant 1

anyOf variant 1: Weekday the span ends, from 0 for Sunday to 6 for Saturday..

- Value shape: integer. Weekday the span ends, from 0 for Sunday to 6 for Saturday. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.end_weekday variant 2

anyOf variant 2.

- Value shape: null. Weekday the span ends, from 0 for Sunday to 6 for Saturday. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.start_minute

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.start_minute variant 1

anyOf variant 1: Minute of the day the span starts, from 0 to 1439, in the schedule's timezone..

- Value shape: integer. Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.start_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day the span starts, from 0 to 1439, in the schedule's timezone. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.start_weekday

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.start_weekday variant 1

anyOf variant 1: Weekday the span starts, from 0 for Sunday to 6 for Saturday..

- Value shape: integer. Weekday the span starts, from 0 for Sunday to 6 for Saturday. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.schedule_window variant 1.availability variant 1.weekly_intervals variant 1.[] fields 1.start_weekday variant 2

anyOf variant 2.

- Value shape: null. Weekday the span starts, from 0 for Sunday to 6 for Saturday. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time

Handling and transit time. Set only when `type` is `transit_time`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `handling_days` | Conditional | Alternative shapes (see declared variants) | Business days the merchant needs to prepare the order. `handling_days`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1handling_days). |
| `transit_days` | Conditional | Alternative shapes (see declared variants) | Business days the order spends in transit. `transit_days`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1transit_days). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1

anyOf DeliveryTransitTimeRulePreviousAttributes.

- Optional: `handling_days`, `transit_days`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 2

anyOf variant 2.

- Undeclared: `handling_days`, `transit_days`.
- Value shape: null. Handling and transit time. Set only when `type` is `transit_time`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days

Business days the merchant needs to prepare the order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum` | Conditional | integer or null | Most business days, from `minimum` to 365. `maximum`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1handling_days-variant-1maximum). |
| `minimum` | Conditional | integer or null | Fewest business days, from 0. `minimum`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1handling_days-variant-1minimum). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1

anyOf DeliveryBusinessDayRangePreviousAttributes.

- Optional: `maximum`, `minimum`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 2

anyOf variant 2.

- Undeclared: `maximum`, `minimum`.
- Value shape: null. Business days the merchant needs to prepare the order. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.maximum

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.maximum variant 1

anyOf variant 1: Most business days, from `minimum` to 365..

- Value shape: integer. Most business days, from `minimum` to 365. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.maximum variant 2

anyOf variant 2.

- Value shape: null. Most business days, from `minimum` to 365. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.minimum

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.minimum variant 1

anyOf variant 1: Fewest business days, from 0..

- Value shape: integer. Fewest business days, from 0. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.minimum variant 2

anyOf variant 2.

- Value shape: null. Fewest business days, from 0. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.transit_days

Business days the order spends in transit.

Field definitions: [shared fields](#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1handling_days).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.transit_days variant 1

anyOf DeliveryBusinessDayRangePreviousAttributes.

- Optional: `maximum`, `minimum`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.transit_days variant 2

anyOf variant 2.

- Undeclared: `maximum`, `minimum`.
- Value shape: null. Business days the order spends in transit. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.transit_days variant 1.maximum

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.maximum](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1handling_days-variant-1maximum).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.transit_days variant 1.minimum

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.transit_time variant 1.handling_days variant 1.minimum](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1estimate-variant-1transit_time-variant-1handling_days-variant-1minimum).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.type variant 1

anyOf variant 1: How Flint estimates timing. Set the property named by this value..

- Value shape: string. How Flint estimates timing. Set the property named by this value. Values: `"none"`, `"transit_time"`, `"schedule_window"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.estimate variant 1.type variant 2

anyOf variant 2.

- Value shape: null. How Flint estimates timing. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.minimum_option_lifetime_seconds

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.minimum_option_lifetime_seconds variant 1

anyOf variant 1: Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime..

- Value shape: integer. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.minimum_option_lifetime_seconds variant 2

anyOf variant 2.

- Value shape: null. Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin

Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Conditional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_id). |
| `delivery_location_set_revision_id` | Conditional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_revision_id). |
| `location_id` | Conditional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1location_id). |
| `location_ids` | Conditional | Varies by condition | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1location_ids), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-2location_ids), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-4location_ids). |
| `type` | Conditional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-2type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-4type). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1: `type` = `"fixed_location"`

anyOf DeliveryMethodOriginSelectorPreviousAttributes; anyOf DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.

- Optional: `delivery_location_set_id`, `delivery_location_set_revision_id`, `location_id`, `location_ids`, `type`.
- Constraints for `location_ids`: Array of string or null.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2, 3: `type` = `"allocated_origin_group"`

anyOf DeliveryMethodOriginSelectorPreviousAttributes; anyOf DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes; anyOf variant 1; anyOf DeliveryMethodOriginSelectorPreviousAttributes; anyOf DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes; anyOf variant 2.

- Optional: `delivery_location_set_id`, `delivery_location_set_revision_id`, `location_id`, `location_ids`, `type`.
- Constraints for `location_ids`: (Array of string or null).
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4, 5: `type` = `"pickup_location_collection"`

anyOf DeliveryMethodOriginSelectorPreviousAttributes; anyOf DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes; anyOf variant 1; anyOf DeliveryMethodOriginSelectorPreviousAttributes; anyOf DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes; anyOf variant 2.

- Optional: `delivery_location_set_id`, `delivery_location_set_revision_id`, `location_id`, `location_ids`, `type`.
- Constraints for `location_ids`: (Array of string or null).
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 6

anyOf variant 2.

- Undeclared: `delivery_location_set_id`, `delivery_location_set_revision_id`, `location_id`, `location_ids`, `type`.
- Value shape: null. Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id variant 1

anyOf variant 1: ID of the delivery location set that names the Locations in the group..

- Value shape: string. ID of the delivery location set that names the Locations in the group. ID of the delivery location set that names the Locations in the group. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery location set that names the Locations in the group. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id variant 1

anyOf variant 1: ID of the location set revision in effect for this method revision..

- Value shape: string. ID of the location set revision in effect for this method revision. ID of the location set revision in effect for this method revision. Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the location set revision in effect for this method revision. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id variant 1

anyOf variant 1: ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise..

- Value shape: string. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_ids

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_ids variant 1

anyOf variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.delivery_location_set_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_revision_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.location_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1location_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.location_ids

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.location_ids variant 1

anyOf group 1 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.location_ids variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.location_ids variant 3

anyOf group 2 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. IDs of the Locations in the group. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 3.delivery_location_set_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 3.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_revision_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 3.location_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1location_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 3.location_ids

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.location_ids](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-2location_ids).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 3.type

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 2.type](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-2type).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.delivery_location_set_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_revision_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.location_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1location_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.location_ids

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.location_ids variant 1

anyOf group 1 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.location_ids variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.location_ids variant 3

anyOf group 2 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. IDs of the Locations in the group. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 5.delivery_location_set_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 5.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.delivery_location_set_revision_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1delivery_location_set_revision_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 5.location_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 1.location_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-1location_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 5.location_ids

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.location_ids](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-4location_ids).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 5.type

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.origin variant 4.type](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1origin-variant-4type).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing

How Flint calculates the delivery charge.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | Alternative shapes (see declared variants) | Calculated pricing settings. Set only when `type` is `calculated`. `calculated`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated). |
| `callback` | Conditional | Alternative shapes (see declared variants) | Rate callback pricing settings. Set only when `type` is `callback`. `callback`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback). |
| `caller_supplied` | Conditional | Alternative shapes (see declared variants) | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. `caller_supplied`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1caller_supplied). |
| `fixed` | Conditional | Alternative shapes (see declared variants) | Fixed pricing settings. Set only when `type` is `fixed`. `fixed`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1fixed). |
| `rate_table` | Conditional | Alternative shapes (see declared variants) | Rate table pricing settings. Set only when `type` is `rate_table`. `rate_table`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table). |
| `tiered` | Conditional | object and Alternative shapes (see declared variants) or null | Tiered pricing settings. Set only when `type` is `tiered`. `tiered`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered). |
| `type` | Conditional | (string or null) and Alternative shapes (see declared variants) | How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. `type`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-2type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-3type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-4type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-5type), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-6type). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1: `type` = `"calculated"`

anyOf DeliveryPricingStrategyPreviousAttributes; anyOf DeliveryPricingStrategyCalculatedPreviousAttributes.

- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2: `type` = `"callback"`

anyOf DeliveryPricingStrategyPreviousAttributes; anyOf DeliveryPricingStrategyCallbackPreviousAttributes.

- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3: `type` = `"caller_supplied"`

anyOf DeliveryPricingStrategyPreviousAttributes; anyOf DeliveryPricingStrategyCallerSuppliedPreviousAttributes.

- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4: `type` = `"fixed"`

anyOf DeliveryPricingStrategyPreviousAttributes; anyOf DeliveryPricingStrategyFixedPreviousAttributes.

- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5: `type` = `"rate_table"`

anyOf DeliveryPricingStrategyPreviousAttributes; anyOf DeliveryPricingStrategyRateTablePreviousAttributes.

- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6: `type` = `"tiered"`

anyOf DeliveryPricingStrategyPreviousAttributes; anyOf DeliveryPricingStrategyTieredPreviousAttributes.

- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Constraints for `type`: Values: `"tiered"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 7

anyOf variant 2.

- Undeclared: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`, `type`.
- Value shape: null. How Flint calculates the delivery charge. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated

Calculated pricing settings. Set only when `type` is `calculated`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. `base_fee_currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1base_fee_currency_options). |
| `distance` | Conditional | Alternative shapes (see declared variants) | Charge per unit of distance between the origin and the destination. `distance`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance). |
| `maximum_fee_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1maximum_fee_currency_options). |
| `minimum_fee_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1minimum_fee_currency_options). |
| `per_item_handling_fee_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. `per_item_handling_fee_currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1per_item_handling_fee_currency_options). |
| `weight` | Conditional | Alternative shapes (see declared variants) | Charge per unit of weight of the items. `weight`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1weight). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1

anyOf DeliveryCalculatedPricingStrategyPreviousAttributes.

- Optional: `base_fee_currency_options`, `distance`, `maximum_fee_currency_options`, `minimum_fee_currency_options`, `per_item_handling_fee_currency_options`, `weight`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 2

anyOf variant 2.

- Undeclared: `base_fee_currency_options`, `distance`, `maximum_fee_currency_options`, `minimum_fee_currency_options`, `per_item_handling_fee_currency_options`, `weight`.
- Value shape: null. Calculated pricing settings. Set only when `type` is `calculated`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.base_fee_currency_options

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.base_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Base delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.base_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Base delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance

Charge per unit of distance between the origin and the destination.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options). |
| `unit` | Conditional | string or null | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. `unit`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1unit). |
| `unit_quantity` | Conditional | integer or null | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. `unit_quantity`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1unit_quantity). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1

anyOf DeliveryDistanceUnitPricePreviousAttributes.

- Optional: `currency_options`, `unit`, `unit_quantity`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 2

anyOf variant 2.

- Undeclared: `currency_options`, `unit`, `unit_quantity`.
- Value shape: null. Charge per unit of distance between the origin and the destination. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Price by ISO 4217 currency code. Each key must equal the currency of its Money value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options variant 2

anyOf variant 2.

- Value shape: null. Price by ISO 4217 currency code. Each key must equal the currency of its Money value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit variant 1

anyOf variant 1: Distance unit used by unit_quantity..

- Value shape: string. Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit variant 2

anyOf variant 2.

- Value shape: null. Distance unit used by unit_quantity. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit_quantity

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit_quantity variant 1

anyOf variant 1: Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit_quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.maximum_fee_currency_options

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.maximum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.maximum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.minimum_fee_currency_options

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.minimum_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.minimum_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.per_item_handling_fee_currency_options

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.per_item_handling_fee_currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Handling fee per item by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.per_item_handling_fee_currency_options variant 2

anyOf variant 2.

- Value shape: null. Handling fee per item by ISO currency code. Each key must equal the Money object's currency. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight

Charge per unit of weight of the items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options). |
| `unit` | Conditional | string or null | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1weight-variant-1unit). |
| `unit_quantity` | Conditional | integer or null | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. `unit_quantity`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1unit_quantity). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 1

anyOf DeliveryWeightUnitPricePreviousAttributes.

- Optional: `currency_options`, `unit`, `unit_quantity`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 2

anyOf variant 2.

- Undeclared: `currency_options`, `unit`, `unit_quantity`.
- Value shape: null. Charge per unit of weight of the items. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 1.currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 1.unit

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 1.unit variant 1

anyOf variant 1: Weight unit used by unit_quantity..

- Value shape: string. Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 1.unit variant 2

anyOf variant 2.

- Value shape: null. Weight unit used by unit_quantity. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.weight variant 1.unit_quantity

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.unit_quantity](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1unit_quantity).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback

Rate callback pricing settings. Set only when `type` is `callback`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Conditional | string or null | ID of the delivery rate callback that supplies the price. `delivery_rate_callback_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback-variant-1delivery_rate_callback_id). |
| `delivery_rate_callback_revision_id` | Conditional | string or null | ID of the rate callback revision the method uses. `delivery_rate_callback_revision_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback-variant-1delivery_rate_callback_revision_id). |
| `maximum_fee_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. `maximum_fee_currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1maximum_fee_currency_options). |
| `minimum_fee_currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. `minimum_fee_currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1minimum_fee_currency_options). |
| `preview_enabled` | Conditional | boolean or null | Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. `preview_enabled`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback-variant-1preview_enabled). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1

anyOf DeliveryExternalPricingStrategyPreviousAttributes.

- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `maximum_fee_currency_options`, `minimum_fee_currency_options`, `preview_enabled`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 2

anyOf variant 2.

- Undeclared: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `maximum_fee_currency_options`, `minimum_fee_currency_options`, `preview_enabled`.
- Value shape: null. Rate callback pricing settings. Set only when `type` is `callback`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_id variant 1

anyOf variant 1: ID of the delivery rate callback that supplies the price..

- Value shape: string. ID of the delivery rate callback that supplies the price. ID of the delivery rate callback that supplies the price. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery rate callback that supplies the price. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_revision_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_revision_id variant 1

anyOf variant 1: ID of the rate callback revision the method uses..

- Value shape: string. ID of the rate callback revision the method uses. ID of the rate callback revision the method uses. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the rate callback revision the method uses. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.maximum_fee_currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.maximum_fee_currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1maximum_fee_currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.minimum_fee_currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.minimum_fee_currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1minimum_fee_currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.preview_enabled

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.preview_enabled variant 1

anyOf variant 1: Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`..

- Value shape: boolean. Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.preview_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied

Caller-supplied pricing settings. Set only when `type` is `caller_supplied`.

Field definitions: [shared fields](#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 1

anyOf DeliveryExternalPricingStrategyPreviousAttributes.

- Optional: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `maximum_fee_currency_options`, `minimum_fee_currency_options`, `preview_enabled`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 2

anyOf variant 2.

- Undeclared: `delivery_rate_callback_id`, `delivery_rate_callback_revision_id`, `maximum_fee_currency_options`, `minimum_fee_currency_options`, `preview_enabled`.
- Value shape: null. Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 1.delivery_rate_callback_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback-variant-1delivery_rate_callback_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 1.delivery_rate_callback_revision_id

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.delivery_rate_callback_revision_id](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback-variant-1delivery_rate_callback_revision_id).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 1.maximum_fee_currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.maximum_fee_currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1maximum_fee_currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 1.minimum_fee_currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.minimum_fee_currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1minimum_fee_currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied variant 1.preview_enabled

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback variant 1.preview_enabled](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback-variant-1preview_enabled).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed

Fixed pricing settings. Set only when `type` is `fixed`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed variant 1

anyOf DeliveryFixedPricingStrategyPreviousAttributes.

- Optional: `currency_options`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed variant 2

anyOf variant 2.

- Undeclared: `currency_options`.
- Value shape: null. Fixed pricing settings. Set only when `type` is `fixed`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed variant 1.currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table

Rate table pricing settings. Set only when `type` is `rate_table`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Conditional | Array of object or null | One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. `rates`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table-variant-1rates). |
| `unmatched_behavior` | Conditional | string or null | What happens when no rate matches. Values: `"unavailable"`. `unmatched_behavior`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table-variant-1unmatched_behavior). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1: `unmatched_behavior` = `"unavailable"`

anyOf DeliveryRateTablePricingStrategyPreviousAttributes.

- Optional: `rates`, `unmatched_behavior`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 2

anyOf variant 2.

- Undeclared: `rates`, `unmatched_behavior`.
- Value shape: null. Rate table pricing settings. Set only when `type` is `rate_table`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1

anyOf variant 1: One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match..

- Value shape: Array of object. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: `1`. maxItems: `100`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 2

anyOf variant 2.

- Value shape: null. One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options). |
| `delivery_rate_id` | Optional | string or null | ID of this rate. Flint assigns it. `delivery_rate_id`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table-variant-1rates-variant-1-fields-1delivery_rate_id). |
| `priority` | Optional | integer or null | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. `priority`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table-variant-1rates-variant-1-fields-1priority). |
| `when` | Optional | (object and Alternative shapes (see declared variants) or null) or null | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. `when`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table-variant-1rates-variant-1-fields-1when). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.delivery_rate_id

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.delivery_rate_id variant 1

anyOf variant 1: ID of this rate. Flint assigns it..

- Value shape: string. ID of this rate. Flint assigns it. ID of this rate. Flint assigns it. Example: `"drate_01KEZF7C00FD0B4QEC0M00MJ4S"`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.delivery_rate_id variant 2

anyOf variant 2.

- Value shape: null. ID of this rate. Flint assigns it. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.priority

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.priority variant 1

anyOf variant 1: Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0..

- Value shape: integer. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.priority variant 2

anyOf variant 2.

- Value shape: null. Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when

Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.

Field definitions: [shared fields](#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 1; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 2; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 3; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 4; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 5; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 6; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 7; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 8; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 9; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 10; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 11; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 12; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 13; anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf DeliveryEligibilityExpressionPreviousAttributes; anyOf variant 14.

- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 15, 16

anyOf variant 1: Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.; anyOf variant 2; anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 1.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 2.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 3.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 4.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 5.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 6.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 7.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 8.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 9.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 10.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 11.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 12.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 13.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.all

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.any

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.any](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1any).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.country

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.country](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1country).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.customer_has_email

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_email](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_email).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.customer_has_phone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_has_phone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_has_phone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.customer_merchant_verified

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_merchant_verified](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_merchant_verified).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.customer_segment

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.customer_segment](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1customer_segment).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.not

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.postal_code

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.postal_code](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1postal_code).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.radius

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.radius](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1radius).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.state

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.state](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1state).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.subscription_purchase

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.subscription_purchase](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1subscription_purchase).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.window_time

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.window_time](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1window_time).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.rates variant 1.[] fields 1.when variant 14.zone

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.eligibility variant 1.all variant 1.[] fields 1.not variant 1.zone](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1eligibility-variant-1all-variant-1-fields-1not-variant-1zone).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.unmatched_behavior

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.unmatched_behavior variant 1

anyOf variant 1: What happens when no rate matches..

- Value shape: string. What happens when no rate matches. Values: `"unavailable"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table variant 1.unmatched_behavior variant 2

anyOf variant 2.

- Value shape: null. What happens when no rate matches. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered

Tiered pricing settings. Set only when `type` is `tiered`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Conditional | Array of object or null | One to 25 contiguous bands in ascending order. The final band has no upper bound. `bands`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1bands). |
| `basis` | Conditional | (string or null) | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: [7 declared values](DeliveryTieredPricingStrategyInput.md#deliverytieredpricingstrategyinput-basis-values). `basis`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1basis), [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-2basis). |
| `unit` | Conditional | string or null | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. `unit`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1unit). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1: `basis` = `"choice_group.total_weight"`

anyOf DeliveryTieredPricingStrategyPreviousAttributes; anyOf DeliveryTieredPricingStrategyWeightPreviousAttributes.

- Optional: `bands`, `basis`, `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2

anyOf DeliveryTieredPricingStrategyPreviousAttributes; anyOf DeliveryTieredPricingStrategyQuantityOrMoneyPreviousAttributes.

- Optional: `bands`, `basis`, `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 3

anyOf variant 2.

- Undeclared: `bands`, `basis`, `unit`.
- Value shape: null. Tiered pricing settings. Set only when `type` is `tiered`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1

anyOf variant 1: One to 25 contiguous bands in ascending order. The final band has no upper bound..

- Value shape: Array of object. One to 25 contiguous bands in ascending order. The final band has no upper bound. One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: `1`. maxItems: `25`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 2

anyOf variant 2.

- Value shape: null. One to 25 contiguous bands in ascending order. The final band has no upper bound. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Optional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. `currency_options`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options). |
| `from` | Optional | integer or null | Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. `from`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1bands-variant-1-fields-1from). |
| `to` | Optional | integer or null | Exclusive upper bound. Required for every band except the final band, where it must be omitted. `to`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1bands-variant-1-fields-1to). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.currency_options

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated variant 1.distance variant 1.currency_options](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated-variant-1distance-variant-1currency_options).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.from

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.from variant 1

anyOf variant 1: Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`..

- Value shape: integer. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Format: `int64`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.from variant 2

anyOf variant 2.

- Value shape: null. Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.to

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.to variant 1

anyOf variant 1: Exclusive upper bound. Required for every band except the final band, where it must be omitted..

- Value shape: integer. Exclusive upper bound. Required for every band except the final band, where it must be omitted. Exclusive upper bound. Required for every band except the final band, where it must be omitted. Format: `int64`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands variant 1.[] fields 1.to variant 2

anyOf variant 2.

- Value shape: null. Exclusive upper bound. Required for every band except the final band, where it must be omitted. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.basis

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.basis variant 1

anyOf group 1 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`, `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.basis variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.basis variant 3

anyOf group 2 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.unit

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.unit variant 1

anyOf variant 1: Required only for choice_group.total_weight and forbidden for every other basis..

- Value shape: string. Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.unit variant 2

anyOf variant 2.

- Value shape: null. Required only for choice_group.total_weight and forbidden for every other basis. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2.bands

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.bands](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1bands).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2.basis

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2.basis variant 1

anyOf group 1 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.total_weight"`, `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2.basis variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2.basis variant 3

anyOf group 2 variant 1: Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote..

- Value shape: string. Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 2.unit

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered variant 1.unit](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered-variant-1unit).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"calculated"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"calculated"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.calculated

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.callback

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.caller_supplied

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1caller_supplied).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.fixed

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1fixed).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.rate_table

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.tiered

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"callback"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 2.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"callback"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.calculated

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.callback

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.caller_supplied

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1caller_supplied).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.fixed

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1fixed).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.rate_table

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.tiered

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 3.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.calculated

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.callback

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.caller_supplied

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1caller_supplied).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.fixed

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1fixed).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.rate_table

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.tiered

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 4.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"fixed"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.calculated

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.callback

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.caller_supplied

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1caller_supplied).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.fixed

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1fixed).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.rate_table

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.tiered

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 5.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"rate_table"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.calculated

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.calculated](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1calculated).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.callback

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.callback](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1callback).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.caller_supplied

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.caller_supplied](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1caller_supplied).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.fixed

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.fixed](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1fixed).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.rate_table

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.rate_table](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1rate_table).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.tiered

Declared alternatives: [DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 1.tiered](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1pricing-variant-1tiered).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.type

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.type variant 1

anyOf group 1 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the method sets its price. Set the property named by this value. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.type variant 3

anyOf group 2 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: string. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.pricing variant 6.type variant 5

anyOf group 3 variant 1: How the method sets its price. Set the property named by this value..

- Value shape: any. How the method sets its price. Set the property named by this value. Values: `"tiered"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details

Buyer-visible structured details supplied by the merchant.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Conditional | string or null | Buyer-visible instructions for this method. `instructions`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1public_details-variant-1instructions). |
| `pickup_mode` | Conditional | string or null | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1public_details-variant-1pickup_mode). |
| `service_level` | Conditional | string or null | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. `service_level`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributesconfiguration-variant-1public_details-variant-1service_level). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1

anyOf variant 1.

- Optional: `instructions`, `pickup_mode`, `service_level`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 2

anyOf variant 2.

- Undeclared: `instructions`, `pickup_mode`, `service_level`.
- Value shape: null. Buyer-visible structured details supplied by the merchant. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.instructions

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.instructions variant 1

anyOf variant 1: Buyer-visible instructions for this method..

- Value shape: string. Buyer-visible instructions for this method. Buyer-visible instructions for this method. maxLength: `2048`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible instructions for this method. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.pickup_mode

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.pickup_mode variant 1

anyOf variant 1: Required for pickup methods and rejected for other method types..

- Value shape: string. Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. Required for pickup methods and rejected for other method types. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.service_level

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.service_level variant 1

anyOf variant 1: Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled..

- Value shape: string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.public_details variant 1.service_level variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.quote_input_fields

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.quote_input_fields variant 1

anyOf variant 1: Address and coordinate fields a callback method requires and is allowed to receive..

- Value shape: Array of string. Address and coordinate fields a callback method requires and is allowed to receive. Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: `"destination_address"`, `"destination_address.line1"`, `"destination_address.line2"`, `"destination_address.city"`, `"destination_address.state"`, `"destination_address.postal_code"`, `"destination_address.country"`, `"buyer_location"`, `"buyer_location.address.line1"`, `"buyer_location.address.line2"`, `"buyer_location.address.city"`, `"buyer_location.address.state"`, `"buyer_location.address.postal_code"`, `"buyer_location.address.country"`, `"buyer_location.coordinate"`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.quote_input_fields variant 2

anyOf variant 2.

- Value shape: null. Address and coordinate fields a callback method requires and is allowed to receive. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.recipient_requirements

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.recipient_requirements variant 1

anyOf variant 1: Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them..

- Value shape: Array of object. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.recipient_requirements variant 2

anyOf variant 2.

- Value shape: null. Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.recipient_requirements variant 1.[] fields 1

Field definitions: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.option variant 1.recipient_requirements variant 1.[] fields 1](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1option-variant-1recipient_requirements-variant-1-fields-1).

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.selection_guarantee_seconds

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.selection_guarantee_seconds variant 1

anyOf variant 1: How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry..

- Value shape: integer. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.selection_guarantee_seconds variant 2

anyOf variant 2.

- Value shape: null. How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.taxable

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.taxable variant 1

anyOf variant 1: Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`..

- Value shape: (boolean or null). Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.configuration variant 1.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. 

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

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts

How many subscriptions use this method, by status.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active` | Conditional | integer or null | Number of counted subscriptions with status `active`. `active`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributessubscription_counts-variant-1active). |
| `past_due` | Conditional | integer or null | Number of counted subscriptions with status `past_due`. `past_due`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributessubscription_counts-variant-1past_due). |
| `paused` | Conditional | integer or null | Number of counted subscriptions with status `paused`. `paused`: [declared alternatives](../models/DeliveryMethodActivatedMerchantEventDataPreviousAttributes.md#deliverymethodactivatedmerchanteventdatapreviousattributessubscription_counts-variant-1paused). |

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1

anyOf SubscriptionCountsPreviousAttributes.

- Optional: `active`, `past_due`, `paused`.

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 2

anyOf variant 2.

- Undeclared: `active`, `past_due`, `paused`.
- Value shape: null. How many subscriptions use this method, by status. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.active

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.active variant 1

anyOf variant 1: Number of counted subscriptions with status `active`..

- Value shape: integer. Number of counted subscriptions with status `active`. Number of counted subscriptions with status `active`. Format: `int64`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.active variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `active`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.past_due

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.past_due variant 1

anyOf variant 1: Number of counted subscriptions with status `past_due`..

- Value shape: integer. Number of counted subscriptions with status `past_due`. Number of counted subscriptions with status `past_due`. Format: `int64`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.past_due variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `past_due`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.paused

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.paused variant 1

anyOf variant 1: Number of counted subscriptions with status `paused`..

- Value shape: integer. Number of counted subscriptions with status `paused`. Number of counted subscriptions with status `paused`. Format: `int64`. 

### DeliveryMethodActivatedMerchantEventDataPreviousAttributes.subscription_counts variant 1.paused variant 2

anyOf variant 2.

- Value shape: null. Number of counted subscriptions with status `paused`. 

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

