[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPatchRequestInput

Only the keys you send change; keys you leave out keep their current values. Each key you send replaces that part of the configuration whole. Null removes an optional key, as each field describes. Arrays can't be null: send [] to clear recipient_requirements or quote_input_fields. pricing.rate_table.rates is an owned child collection: include delivery_rate_id to keep a rate, leave out the ID to create one, and leave out a rate to remove it. The result must be a configuration you could create, including pickup_mode for pickup methods. Requires expected_version. An empty configuration is invalid.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | object or null | Controls whether checkout collects buyer instructions for this method. Null disables instruction collection. `buyer_instructions`: [field definitions](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinputbuyer_instructions). |
| `charge_tax_category` | Optional | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Automatic tax calculates the shipping and delivery categories at the general rate and refuses the others with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Null uses settings.tax.default_delivery_tax_category, or, when that is unset, shipping for shipment, delivery for local_delivery, or service_fee for pickup. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) or null | Conditions that decide where this method is offered. Null removes the conditions, so the method is offered everywhere the merchant serves. `eligibility`: [declared alternatives](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinputeligibility). |
| `estimate` | Optional | object or null | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. Null restores type none, when the pricing type allows it. `estimate`: [field definitions](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinputestimate). |
| `minimum_option_lifetime_seconds` | Optional | integer or null | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Null restores 0 for fixed, tiered, or rate_table pricing. It is invalid for calculated, callback, or caller_supplied pricing. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Optional | [DeliveryMethodOriginSelectorRequestInput](../models/DeliveryMethodOriginSelectorRequestInput.md#deliverymethodoriginselectorrequestinput) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Null is invalid. The origin you supply for a delivery method, chosen by `type`: a fixed location, or locations from a delivery location set or an inline list. |
| `pricing` | Optional | [DeliveryPricingStrategyRequestInput](../models/DeliveryPricingStrategyRequestInput.md#deliverypricingstrategyrequestinput) | How Flint calculates the delivery charge. Null is invalid. The pricing strategy you supply when updating a delivery method. Set `type` and the matching property. |
| `public_details` | Optional | object or null | Buyer-visible structured details supplied by the merchant. Null removes the public details; pickup methods still require pickup_mode. minProperties: `1`. `public_details`: [field definitions](../models/DeliveryMethodConfigurationPatchRequestInput.md#deliverymethodconfigurationpatchrequestinputpublic_details). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. Use [] to clear it. Null is invalid. maxItems: `12`. uniqueItems: `true`. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirementInput](../models/DeliveryRecipientRequirementInput.md#deliveryrecipientrequirementinput) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. Use [] to clear it. Null is invalid. |
| `selection_guarantee_seconds` | Optional | integer or null | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Null restores 0, which uses the option expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Optional | boolean or null | Whether the delivery charge is taxable. Null follows tax.default_delivery_taxable in the merchant's settings. |

### DeliveryMethodConfigurationPatchRequestInput.buyer_instructions

Controls whether checkout collects buyer instructions for this method. Null disables instruction collection.

Field definitions: [shared fields](DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionBuyerInstructions.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueavailableoptionbuyerinstructions).

### DeliveryMethodConfigurationPatchRequestInput.eligibility

Conditions that decide where this method is offered. Null removes the conditions, so the method is offered everywhere the merchant serves.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryCountryConditionInput](../models/DeliveryCountryConditionInput.md#deliverycountryconditioninput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [DeliveryCustomerSegmentConditionInput](../models/DeliveryCustomerSegmentConditionInput.md#deliverycustomersegmentconditioninput) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). |
| `not` | Conditional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionInput](../models/DeliveryPostalCodeConditionInput.md#deliverypostalcodeconditioninput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateConditionInput](../models/DeliveryStateConditionInput.md#deliverystateconditioninput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeConditionInput](../models/DeliveryWindowTimeConditionInput.md#deliverywindowtimeconditioninput) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneConditionInput](../models/DeliveryZoneConditionInput.md#deliveryzoneconditioninput) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. |

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 1

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 2

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 3

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 4

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 5

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 6

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 7

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 8

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 9

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 10

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 11

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 12

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 13

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 14

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodConfigurationPatchRequestInput.eligibility variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Conditions that decide where this method is offered. Null removes the conditions, so the method is offered everywhere the merchant serves. 

### DeliveryMethodConfigurationPatchRequestInput.estimate

The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. Null restores type none, when the pricing type allows it.

Field definitions: [shared fields](DeliveryEstimateRuleRequestInput.md#deliveryestimaterulerequestinput).

### DeliveryMethodConfigurationPatchRequestInput.public_details

Buyer-visible structured details supplied by the merchant. Null removes the public details; pickup methods still require pickup_mode. minProperties: `1`.

Field definitions: [shared fields](DeliveryMethodConfigurationCreateRequestInput.md#deliverymethodconfigurationcreaterequestinputpublic_details).

