[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodResponse

A response containing `DeliveryMethod` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod) | Resource, collection, or operation result returned by this request. A configured shipping, pickup, or local delivery option. `data`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryMethodResponse.data

Resource, collection, or operation result returned by this request. A configured shipping, pickup, or local delivery option.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryMethodConfiguration](../models/DeliveryMethodConfiguration.md#deliverymethodconfiguration) | Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes. `configuration`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfiguration). |
| `created_at` | Required | string | Time the method was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_method_revision_id` | Required | string | Immutable revision currently used for new quotes. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `delivery_method_id` | Required | string | Stable delivery method ID. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_revocation_id` | Required | string or null | The revocation fencing this resource's own current revision. `null` when the current revision isn't revoked. It doesn't cover dependencies: a method can be unusable while this is `null` because its rate callback revision, signing key, or a Location's address is revoked. A revocation doesn't change `status`; publish a new revision to clear it. Example: `"drev_01KEZF7C007Q141XJ28YAAC87B"`. |
| `description` | Optional | string | Optional buyer-facing description. |
| `display_position` | Required | integer | Ascending display order among methods. Format: `int32`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing method name. |
| `recommendation_priority` | Optional | integer | Marks this method as recommended. Within each choice group, the available method with the lowest value is recommended and listed first. Ties go to the lower display_position, then the method ID. Null never recommends the method. Format: `int32`. |
| `status` | Required | string | Current method lifecycle status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `subscription_counts` | Required | [SubscriptionCounts](../models/SubscriptionCounts.md#subscriptioncounts) | How many subscriptions use this method, by status. Counts of subscriptions by status: active, past due, and paused. |
| `type` | Required | string | Delivery mode this method offers. Values: `"shipment"`, `"local_delivery"`, `"pickup"`. |
| `updated_at` | Required | string | Time the method last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for method writes. Format: `uint64`. minimum: `1`. |

### DeliveryMethodResponse.data.configuration

Current eligibility, pricing, origin, estimate, and tax configuration. How a delivery method works: its origin, pricing, eligibility, timing estimate, tax settings, recipient requirements, and option lifetimes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_instructions` | Optional | [BuyerInstructionsConfig](../models/BuyerInstructionsConfig.md#buyerinstructionsconfig) | Controls whether checkout collects buyer instructions for this method. Controls buyer instructions for a delivery option. Omit it from a method configuration to disable instruction collection. |
| `charge_tax_category` | Required | string or null | Tax category of the delivery charge, which decides its automatic tax and appears in tax records and reporting. Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and surcharge at the general rate at the charge location, including the store for pickup. `null` when the method inherits the default delivery tax category from settings. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`, `null`. |
| `eligibility` | Optional | object and Alternative shapes (see declared variants) | Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `eligibility`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibility). |
| `estimate` | Required | [DeliveryEstimateRule](../models/DeliveryEstimateRule.md#deliveryestimaterule) | The buyer-visible delivery or pickup estimate. Use type none when the merchant makes no timing promise. How a delivery method estimates timing, chosen by `type`: no estimate, a transit time, or a schedule window. |
| `minimum_option_lifetime_seconds` | Required | integer | Minimum remaining quote lifetime required before Flint offers this method. Required for calculated, callback, and caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's 15-minute quote lifetime. Format: `int64`. minimum: `0`. maximum: `899`. |
| `origin` | Required | object and Alternative shapes (see declared variants) | Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations. `origin`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationorigin). |
| `pricing` | Required | object and Alternative shapes (see declared variants) | How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set. `pricing`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricing). |
| `public_details` | Optional | object | Buyer-visible structured details supplied by the merchant. `public_details`: [field definitions](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails). |
| `quote_input_fields` | Optional | Array of string | Address and coordinate fields a callback method requires and is allowed to receive. maxItems: `12`. uniqueItems: `true`. Items: Request properties the callback needs. - `destination_address`: The full destination address. - `destination_address.line1`: The destination street address. - `destination_address.line2`: The destination apartment, suite, or other secondary address. - `destination_address.city`: The destination city. - `destination_address.state`: The destination state or region. - `destination_address.postal_code`: The destination postal code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. - `buyer_location`: The buyer location, supplied as an address or coordinates. - `buyer_location.address.line1`: The street address in the buyer location's address variant. - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the buyer location's address variant. - `buyer_location.address.city`: The city in the buyer location's address variant. - `buyer_location.address.state`: The state or region in the buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1 alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`: The latitude and longitude in the buyer location's coordinate variant. Items values: [15 declared values](CreateDeliveryMethodRequestInput.md#createdeliverymethodrequestinput-variant-1configuration-quote_input_fields--values). |
| `recipient_requirements` | Optional | Array of [DeliveryRecipientRequirement](../models/DeliveryRecipientRequirement.md#deliveryrecipientrequirement) | Recipient fields this method asks for. A delivery selection can leave out required fields, but payment needs them. |
| `selection_guarantee_seconds` | Required | integer | How long after evaluation Flint guarantees a selected price, when that is later than the option expiry. Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart without tracked inventory hold until the checkout's calculation expiry. Format: `int64`. minimum: `0`. |
| `taxable` | Required | boolean or null | Whether the delivery charge is taxable. Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to inheriting. `null` when the method inherits `settings.tax.default_delivery_taxable`. |

### DeliveryMethodResponse.data.configuration.eligibility

Conditions that decide where this method is offered. Omit this field to offer the method everywhere the merchant serves. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `customer_has_email` | Conditional | object | Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |
| `subscription_purchase` | Conditional | object | Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase). |
| `window_time` | Conditional | object | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time). |
| `zone` | Conditional | object | Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone). |

### DeliveryMethodResponse.data.configuration.eligibility variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodResponse.data.configuration.eligibility variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. `all[]`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. `any[]`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `customer_has_email` | Conditional | object | Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |
| `subscription_purchase` | Conditional | object | Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase). |
| `window_time` | Conditional | object | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time). |
| `zone` | Conditional | object | Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone). |

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `customer_has_email` | Conditional | object | Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |
| `subscription_purchase` | Conditional | object | Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase). |
| `window_time` | Conditional | object | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time). |
| `zone` | Conditional | object | Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone). |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[]

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].any[]

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country

Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`.

Field definitions: [shared fields](DeliveryCountryConditionInput.md#deliverycountryconditioninput).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email

Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean | The value the fact must have. `true` matches when the fact holds, `false` when it does not. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone

Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean | The value the fact must have. `true` matches when the fact holds, `false` when it does not. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified

Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean | The value the fact must have. `true` matches when the fact holds, `false` when it does not. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment

Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Required | Array of string | Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. Items: minLength: `1`. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not

Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `customer_has_email` | Conditional | object | Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_email`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email). |
| `customer_has_phone` | Conditional | object | Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_has_phone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone). |
| `customer_merchant_verified` | Conditional | object | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `customer_merchant_verified`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified). |
| `customer_segment` | Conditional | object | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |
| `subscription_purchase` | Conditional | object | Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. `subscription_purchase`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase). |
| `window_time` | Conditional | object | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. `window_time`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time). |
| `zone` | Conditional | object | Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone). |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[]

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.any[]

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code

Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of object | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_codevalues). |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code.values[]

A postal code or postal code prefix with its country, used in a postal code condition.

Field definitions: [shared fields](DeliveryPostalCodeValueInput.md#deliverypostalcodevalueinput).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius

Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | object | The largest distance from the origin that still matches. A distance as a `value` in meters, kilometers, or miles. `maximum_distance`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradiusmaximum_distance). |
| `measurement` | Optional | string | How Flint measures the distance. Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | object | The point to measure the distance from. The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). `origin`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradiusorigin). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius.maximum_distance

The largest distance from the origin that still matches. A distance as a `value` in meters, kilometers, or miles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number | Distance, in `unit`. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius.origin

The point to measure the distance from. The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).

Field definitions: [shared fields](DeliveryRadiusOriginInput.md#deliveryradiusorigininput).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state

Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.

Field definitions: [shared fields](DeliveryStateConditionInput.md#deliverystateconditioninput).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase

Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `value` | Required | boolean | The value the fact must have. `true` matches when the fact holds, `false` when it does not. |

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time

Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`.

Field definitions: [shared fields](DeliveryWindowTimeConditionInput.md#deliverywindowtimeconditioninput).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone

Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

Field definitions: [shared fields](DeliveryZoneConditionInput.md#deliveryzoneconditioninput).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 1

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 1

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 2

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 2

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 3

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 3

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 4

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 4

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 5

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 5

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 6

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 6

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 7

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 7

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 8

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 8

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 9

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 9

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 10

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 10

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 11

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 11

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 12

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 12

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.all[] fields 13

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.not fields 13

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 1

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 2

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 3

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 4

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 5

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 6

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 7

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 8

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 9

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 10

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 11

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 12

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].all[].all[] fields 13

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.eligibility.all[].country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.eligibility.all[].customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.eligibility.all[].customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.eligibility.all[].customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.eligibility.all[].customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.eligibility.all[].not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.all[].postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.eligibility.all[].radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.eligibility.all[].state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.eligibility.all[].subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.eligibility.all[].window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.eligibility.all[].zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.eligibility.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.eligibility.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.eligibility.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.eligibility.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.eligibility.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.eligibility.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.eligibility.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.eligibility.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.eligibility.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.eligibility.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.eligibility.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.eligibility.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.eligibility.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.origin

Where delivery starts. A method can use a fixed location or a delivery location set; origin.type determines allocation or buyer pickup behavior. Where a delivery method starts, chosen by `type`: a fixed location, an allocated group of locations, or a collection of pickup locations.

Field definitions: [shared fields](DeliveryMethodOriginSelectorInput.md#deliverymethodoriginselectorinput).

### DeliveryMethodResponse.data.configuration.origin variant 1: `type` = `"fixed_location"`

oneOf with type: "fixed_location": The `fixed_location` variant of `DeliveryMethodOriginSelector`..

- Condition: not (at least one(present(`delivery_location_set_id`); present(`delivery_location_set_revision_id`); present(`location_ids`))).
- Required: `location_id`.
- Optional: `delivery_location_set_id`, `location_ids`.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodResponse.data.configuration.origin variant 2: `type` = `"allocated_origin_group"`

oneOf with type: "allocated_origin_group": The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.; anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodResponse.data.configuration.origin variant 3: `type` = `"allocated_origin_group"`

oneOf with type: "allocated_origin_group": The `allocated_origin_group` variant of `DeliveryMethodOriginSelector`.; anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `25`. uniqueItems: `true`.
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodResponse.data.configuration.origin variant 4: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.; anyOf variant 1.

- Condition: not (present(`location_id`)).
- Required: `delivery_location_set_id`.
- Optional: `location_id`, `location_ids`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodResponse.data.configuration.origin variant 5: `type` = `"pickup_location_collection"`

oneOf with type: "pickup_location_collection": The `pickup_location_collection` variant of `DeliveryMethodOriginSelector`.; anyOf variant 2.

- Condition: not (present(`location_id`)).
- Required: `location_ids`.
- Optional: `delivery_location_set_id`, `location_id`.
- Constraints for `location_ids`: minItems: `1`. maxItems: `1000`. uniqueItems: `true`.
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodResponse.data.configuration.pricing

How Flint calculates the delivery charge. How a delivery method sets its price, selected by `type`. Only the matching property (`fixed`, `rate_table`, `tiered`, `calculated`, `callback`, or `caller_supplied`) is set.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculated` | Conditional | object | Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency. `calculated`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculated). |
| `callback` | Conditional | object | Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `callback`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcallback). |
| `caller_supplied` | Conditional | object | Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency. `caller_supplied`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcaller_supplied). |
| `fixed` | Conditional | object | Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency. `fixed`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingfixed). |
| `rate_table` | Conditional | object | Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match. `rate_table`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_table). |
| `tiered` | Conditional | object and Alternative shapes (see declared variants) | Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases. `tiered`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingtiered). |
| `type` | Required | string | How the method sets its price. Set the property named by this value. Values: `"fixed"`, `"rate_table"`, `"tiered"`, `"calculated"`, `"callback"`, `"caller_supplied"`. |

### DeliveryMethodResponse.data.configuration.pricing variant 1: `type` = `"calculated"`

oneOf with type: "calculated": The `calculated` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `calculated`.
- Optional: `callback`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"calculated"`.

### DeliveryMethodResponse.data.configuration.pricing variant 2: `type` = `"callback"`

oneOf with type: "callback": The `callback` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`caller_supplied`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `callback`.
- Optional: `calculated`, `caller_supplied`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"callback"`.

### DeliveryMethodResponse.data.configuration.pricing variant 3: `type` = `"caller_supplied"`

oneOf with type: "caller_supplied": The `caller_supplied` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`fixed`); present(`rate_table`); present(`tiered`))).
- Required: `caller_supplied`.
- Optional: `calculated`, `callback`, `fixed`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"caller_supplied"`.

### DeliveryMethodResponse.data.configuration.pricing variant 4: `type` = `"fixed"`

oneOf with type: "fixed": The `fixed` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`rate_table`); present(`tiered`))).
- Required: `fixed`.
- Optional: `calculated`, `callback`, `caller_supplied`, `rate_table`, `tiered`.
- Constraints for `type`: Values: `"fixed"`.

### DeliveryMethodResponse.data.configuration.pricing variant 5: `type` = `"rate_table"`

oneOf with type: "rate_table": The `rate_table` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`tiered`))).
- Required: `rate_table`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `tiered`.
- Constraints for `type`: Values: `"rate_table"`.

### DeliveryMethodResponse.data.configuration.pricing variant 6: `type` = `"tiered"`

oneOf with type: "tiered": The `tiered` variant of `DeliveryPricingStrategy`..

- Condition: not (at least one(present(`calculated`); present(`callback`); present(`caller_supplied`); present(`fixed`); present(`rate_table`))).
- Required: `tiered`.
- Optional: `calculated`, `callback`, `caller_supplied`, `fixed`, `rate_table`.
- Constraints for `type`: Values: `"tiered"`.

### DeliveryMethodResponse.data.configuration.pricing.calculated

Calculated pricing settings. Set only when `type` is `calculated`. Delivery pricing calculated from a base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Base delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `distance` | Optional | object | Charge per unit of distance between the origin and the destination. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`. `distance`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculateddistance). |
| `maximum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `per_item_handling_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Handling fee per item by ISO currency code. Each key must equal the Money object's currency. |
| `weight` | Optional | object | Charge per unit of weight of the items. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`. `weight`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingcalculatedweight). |

### DeliveryMethodResponse.data.configuration.pricing.calculated.distance

Charge per unit of distance between the origin and the destination. A distance rate for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `unit` | Required | string | Distance unit used by unit_quantity. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

### DeliveryMethodResponse.data.configuration.pricing.calculated.weight

Charge per unit of weight of the items. Price per unit of weight for calculated pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `unit` | Required | string | Weight unit used by unit_quantity. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |
| `unit_quantity` | Required | integer | Whole-number quantity of the selected unit charged at each configured currency price; fractional quantities are not supported. Format: `int64`. minimum: `1`. |

### DeliveryMethodResponse.data.configuration.pricing.callback

Rate callback pricing settings. Set only when `type` is `callback`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_rate_callback_id` | Optional | string | ID of the delivery rate callback that supplies the price. Example: `"dcb_01KEZF7C00Q4GZ7YPQ60GC4HV1"`. |
| `delivery_rate_callback_revision_id` | Optional | string | ID of the rate callback revision the method uses. Example: `"dcbr_01KEZF7C003QAPFXXMCHC59T5J"`. |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Maximum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `minimum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Minimum delivery fee by ISO currency code. Each key must equal the Money object's currency. |
| `preview_enabled` | Optional | boolean | Whether delivery previews call the rate callback. Previews call it only when this setting and the callback's `preview_enabled` setting are both `true`. |

### DeliveryMethodResponse.data.configuration.pricing.caller_supplied

Caller-supplied pricing settings. Set only when `type` is `caller_supplied`. Delivery pricing that comes from outside Flint, from a delivery rate callback or the caller, bounded by minimum and maximum fees by currency.

Field definitions: [shared fields](#deliverymethodresponsedataconfigurationpricingcallback).

### DeliveryMethodResponse.data.configuration.pricing.fixed

Fixed pricing settings. Set only when `type` is `fixed`. A fixed delivery price, by currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |

### DeliveryMethodResponse.data.configuration.pricing.rate_table

Rate table pricing settings. Set only when `type` is `rate_table`. Pricing strategy that charges the price of the first matching rate in a list of prioritized rates. `unmatched_behavior` says what happens when none match.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `rates` | Required | Array of object | One to 100 rates. Flint checks them from the highest priority to the lowest and uses the first match. minItems: `1`. maxItems: `100`. `rates[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_tablerates). |
| `unmatched_behavior` | Required | string | What happens when no rate matches. Values: `"unavailable"`. |

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[]

One rate in a rate table pricing strategy: a `when` condition, a `priority`, and a price per currency. The first matching rate by priority sets the price.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `delivery_rate_id` | Required | string | ID of this rate. Flint assigns it. Example: `"drate_01KEZF7C00FD0B4QEC0M00MJ4S"`. |
| `priority` | Required | integer | Rates are checked from the highest priority to the lowest. The first matching rate sets the price. Priorities must be unique and at least 0. Format: `int32`. |
| `when` | Required | object and Alternative shapes (see declared variants) or null | Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. `when`: [declared alternatives](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingrate_tablerateswhen). |

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when

Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression.

Field definitions: [shared fields](#deliverymethodresponsedataconfigurationeligibilityall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14

anyOf DeliveryEligibilityExpression: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.; oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 15

anyOf variant 2.

- Undeclared: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.
- Value shape: null. Eligibility expression that decides whether this rate applies. The rate matches when the expression matches. `null` when a stored rate has no condition. Flint requires a condition on every rate, so expect an expression. 

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 1.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 2.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 3.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 4.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 5.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 6.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 7.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 8.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 9.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 10.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 11.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 12.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 13.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.all[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.any[]

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[]](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallall).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.customer_has_email

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_email](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_email).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.customer_has_phone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_has_phone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_has_phone).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.customer_merchant_verified

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_merchant_verified](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_merchant_verified).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.customer_segment

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].customer_segment](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcustomer_segment).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.not

Declared alternatives: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnot).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.subscription_purchase

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.subscription_purchase](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotsubscription_purchase).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.window_time

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.window_time](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotwindow_time).

### DeliveryMethodResponse.data.configuration.pricing.rate_table.rates[].when variant 14.zone

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.zone](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotzone).

### DeliveryMethodResponse.data.configuration.pricing.tiered

Tiered pricing settings. Set only when `type` is `tiered`. Pricing strategy that charges by band. The `basis` value, such as total weight or subtotal, selects a band, and `unit` applies to weight bases.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bands` | Required | Array of object | One to 25 contiguous bands in ascending order. The final band has no upper bound. minItems: `1`. maxItems: `25`. `bands[]`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationpricingtieredbands). |
| `basis` | Required | string | Value matched against the numeric tier bands. Money subtotal bases use minor currency units; caller.tier_key uses the nonnegative tier_key supplied when creating the checkout delivery quote. Values: [7 declared values](DeliveryTieredPricingStrategyInput.md#deliverytieredpricingstrategyinput-basis-values). |
| `unit` | Conditional | string | Required only for choice_group.total_weight and forbidden for every other basis. Values: `"gram"`, `"kilogram"`, `"ounce"`, `"pound"`. |

### DeliveryMethodResponse.data.configuration.pricing.tiered variant 1: `basis` = `"choice_group.total_weight"`

oneOf with basis: "choice_group.total_weight": The `choice_group.total_weight` variant of `DeliveryTieredPricingStrategy`..

- Required: `unit`.
- Constraints for `basis`: Values: `"choice_group.total_weight"`.

### DeliveryMethodResponse.data.configuration.pricing.tiered variant 2

oneOf with basis: "caller.tier_key" | "choice_group.fulfillment_quantity" | "choice_group.merchandise_subtotal_after_line_item_discounts" | "choice_group.merchandise_subtotal_before_discounts" | "order.merchandise_subtotal_after_line_item_discounts" | "order.merchandise_subtotal_before_discounts": The `caller.tier_key` variant of `DeliveryTieredPricingStrategy`. The `choice_group.fulfillment_quantity` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `choice_group.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_after_line_item_discounts` variant of `DeliveryTieredPricingStrategy`. The `order.merchandise_subtotal_before_discounts` variant of `DeliveryTieredPricingStrategy`..

- Condition: not (present(`unit`)).
- Optional: `unit`.
- Constraints for `basis`: Values: `"choice_group.fulfillment_quantity"`, `"choice_group.merchandise_subtotal_before_discounts"`, `"choice_group.merchandise_subtotal_after_line_item_discounts"`, `"order.merchandise_subtotal_before_discounts"`, `"order.merchandise_subtotal_after_line_item_discounts"`, `"caller.tier_key"`.

### DeliveryMethodResponse.data.configuration.pricing.tiered.bands[]

One band of a tiered pricing strategy, covering values of the strategy's `basis` from `from` to `to`, with a price per currency.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price by ISO 4217 currency code. Each key must equal the currency of its Money value. |
| `from` | Required | integer | Inclusive lower bound. The first band starts at 0; every later band starts at the previous band's `to`. Format: `int64`. |
| `to` | Optional | integer | Exclusive upper bound. Required for every band except the final band, where it must be omitted. Format: `int64`. |

### DeliveryMethodResponse.data.configuration.public_details

Field definitions: [DeliveryMethodConfigurationPublicDetails](../models/DeliveryMethodConfigurationPublicDetails.md#deliverymethodconfigurationpublicdetails).

### DeliveryMethodResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryMethodResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

