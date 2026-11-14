[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpressionRequest

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry). |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment). |
| `not` | Conditional | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate). |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeCondition](../models/DeliveryWindowTimeCondition.md#deliverywindowtimecondition) | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneCondition](../models/DeliveryZoneCondition.md#deliveryzonecondition) | Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallzone). |

### DeliveryEligibilityExpressionRequest variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpressionRequest variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpressionRequest variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry). |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches when whether the customer has an email address equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches when whether the customer has a phone number equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment). |
| `not` | Conditional | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | Matches when the nested expression does not match. A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate). |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches when whether the purchase is a subscription purchase equals `value`. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeCondition](../models/DeliveryWindowTimeCondition.md#deliverywindowtimecondition) | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneCondition](../models/DeliveryZoneCondition.md#deliveryzonecondition) | Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallzone). |

### DeliveryEligibilityExpressionRequest.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpressionRequest.all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequest.all[].country

Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`.

Field definitions: [shared fields](DeliveryCountryConditionRequestInput.md#deliverycountryconditionrequestinput).

### DeliveryEligibilityExpressionRequest.all[].customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryEligibilityExpressionRequest.all[].postal_code

Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of [DeliveryPostalCodeValue](../models/DeliveryPostalCodeValue.md#deliverypostalcodevalue) | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values[]`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_codevalues). |

### DeliveryEligibilityExpressionRequest.all[].postal_code.values[]

A postal code or postal code prefix with its country, used in a postal code condition.

Field definitions: [shared fields](DeliveryPostalCodeValue.md#deliverypostalcodevalue).

### DeliveryEligibilityExpressionRequest.all[].radius

Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | The largest distance from the origin that still matches. A distance as a `value` in meters, kilometers, or miles. `maximum_distance`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradiusmaximum_distance). |
| `measurement` | Optional | string | How Flint measures the distance. Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOrigin](../models/DeliveryRadiusOrigin.md#deliveryradiusorigin) | The point to measure the distance from. The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### DeliveryEligibilityExpressionRequest.all[].radius.maximum_distance

The largest distance from the origin that still matches. A distance as a `value` in meters, kilometers, or miles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number | Distance, in `unit`. |

### DeliveryEligibilityExpressionRequest.all[].state

Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.

Field definitions: [shared fields](DeliveryStateConditionRequestInput.md#deliverystateconditionrequestinput).

### DeliveryEligibilityExpressionRequest.all[].zone

Matches when the address is inside the delivery zone you name. Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

Field definitions: [shared fields](DeliveryZoneCondition.md#deliveryzonecondition).

### DeliveryEligibilityExpressionRequest.any[]

Declared alternatives: [DeliveryEligibilityExpressionRequest.all[]](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall).

### DeliveryEligibilityExpressionRequest.country

Field definitions: [DeliveryEligibilityExpressionRequest.all[].country](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry).

### DeliveryEligibilityExpressionRequest.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryEligibilityExpressionRequest.postal_code

Field definitions: [DeliveryEligibilityExpressionRequest.all[].postal_code](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code).

### DeliveryEligibilityExpressionRequest.radius

Field definitions: [DeliveryEligibilityExpressionRequest.all[].radius](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius).

### DeliveryEligibilityExpressionRequest.state

Field definitions: [DeliveryEligibilityExpressionRequest.all[].state](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate).

### DeliveryEligibilityExpressionRequest.zone

Field definitions: [DeliveryEligibilityExpressionRequest.all[].zone](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallzone).

