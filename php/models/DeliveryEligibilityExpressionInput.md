[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpressionInput

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputall). |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputall). |
| `country` | Conditional | [DeliveryCountryConditionInput](../models/DeliveryCountryConditionInput.md#deliverycountryconditioninput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [DeliveryCustomerSegmentConditionInput](../models/DeliveryCustomerSegmentConditionInput.md#deliverycustomersegmentconditioninput) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). |
| `not` | Conditional | [DeliveryEligibilityExpressionInput](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninput) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputall). |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionInput](../models/DeliveryPostalCodeConditionInput.md#deliverypostalcodeconditioninput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius). |
| `state` | Conditional | [DeliveryStateConditionInput](../models/DeliveryStateConditionInput.md#deliverystateconditioninput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeConditionInput](../models/DeliveryWindowTimeConditionInput.md#deliverywindowtimeconditioninput) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneConditionInput](../models/DeliveryZoneConditionInput.md#deliveryzoneconditioninput) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallzone). |

### DeliveryEligibilityExpressionInput variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpressionInput variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpressionInput variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

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
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius). |
| `state` | Conditional | [DeliveryStateConditionInput](../models/DeliveryStateConditionInput.md#deliverystateconditioninput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeConditionInput](../models/DeliveryWindowTimeConditionInput.md#deliverywindowtimeconditioninput) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneConditionInput](../models/DeliveryZoneConditionInput.md#deliveryzoneconditioninput) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallzone). |

### DeliveryEligibilityExpressionInput.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpressionInput.all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpressionInput.all[].radius

Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistanceInput](../models/DeliveryDistanceInput.md#deliverydistanceinput) | A distance as a `value` in meters, kilometers, or miles. |
| `measurement` | Optional | string | Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOriginInput](../models/DeliveryRadiusOriginInput.md#deliveryradiusorigininput) | The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). `origin`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradiusorigin). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryEligibilityExpressionInput.all[].radius.origin

The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`).

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | minLength: `1`. Example: `"loc_01ARZ3NDEKTSV4RRFFQ69G5FAV"`. |
| `method_origin` | Optional | boolean |  |

### DeliveryEligibilityExpressionInput.all[].zone

Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_zone_id` | Required | string | minLength: `1`. Example: `"dzone_01ARZ3NDEKTSV4RRFFQ69G5FAV"`. |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryEligibilityExpressionInput.any[]

Declared alternatives: [DeliveryEligibilityExpressionInput.all[]](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputall).

### DeliveryEligibilityExpressionInput.not

Declared alternatives: [DeliveryEligibilityExpressionInput.all[]](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputall).

### DeliveryEligibilityExpressionInput.radius

Field definitions: [DeliveryEligibilityExpressionInput.all[].radius](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius).

### DeliveryEligibilityExpressionInput.zone

Field definitions: [DeliveryEligibilityExpressionInput.all[].zone](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallzone).

