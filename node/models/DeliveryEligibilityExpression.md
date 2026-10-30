[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpression

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall). |
| `any` | Conditional | Array of [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall). |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment). |
| `not` | Conditional | [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall). |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeCondition](../models/DeliveryWindowTimeCondition.md#deliverywindowtimecondition) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneCondition](../models/DeliveryZoneCondition.md#deliveryzonecondition) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone). |

### DeliveryEligibilityExpression variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpression variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpression variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment). |
| `not` | Conditional | [DeliveryEligibilityExpression](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpression) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeCondition](../models/DeliveryWindowTimeCondition.md#deliverywindowtimecondition) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneCondition](../models/DeliveryZoneCondition.md#deliveryzonecondition) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone). |

### DeliveryEligibilityExpression.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpression.all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpression.all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpression.all[].country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryEligibilityExpression.all[].customer_segment

Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Required | Array of string | Items: minLength: `1`. |

### DeliveryEligibilityExpression.all[].radius

Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | A distance as a `value` in meters, kilometers, or miles. `maximum_distance`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradiusmaximum_distance). |
| `measurement` | Optional | string | Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOrigin](../models/DeliveryRadiusOrigin.md#deliveryradiusorigin) | The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). `origin`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradiusorigin). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryEligibilityExpression.all[].radius.maximum_distance

A distance as a `value` in meters, kilometers, or miles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number |  |

### DeliveryEligibilityExpression.all[].radius.origin

The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | minLength: `1`. Example: `"loc_01ARZ3NDEKTSV4RRFFQ69G5FAV"`. |
| `method_origin` | Optional | boolean |  |

### DeliveryEligibilityExpression.all[].state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryEligibilityExpression.all[].zone

Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | minLength: `1`. Example: `"dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV"`. |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryEligibilityExpression.any[]

Declared alternatives: [DeliveryEligibilityExpression.all[]](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall).

### DeliveryEligibilityExpression.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryEligibilityExpression.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryEligibilityExpression.not

Declared alternatives: [DeliveryEligibilityExpression.all[]](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionall).

### DeliveryEligibilityExpression.radius

Field definitions: [DeliveryEligibilityExpression.all[].radius](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallradius).

### DeliveryEligibilityExpression.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryEligibilityExpression.zone

Field definitions: [DeliveryEligibilityExpression.all[].zone](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallzone).

