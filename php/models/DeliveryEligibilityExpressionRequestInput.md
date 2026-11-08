[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpressionRequestInput

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall). |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall). |
| `country` | Conditional | [DeliveryCountryConditionRequestInput](../models/DeliveryCountryConditionRequestInput.md#deliverycountryconditionrequestinput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [DeliveryCustomerSegmentConditionInput](../models/DeliveryCustomerSegmentConditionInput.md#deliverycustomersegmentconditioninput) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). |
| `not` | Conditional | [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall). |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionRequestInput](../models/DeliveryPostalCodeConditionRequestInput.md#deliverypostalcodeconditionrequestinput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionRequestInput](../models/DeliveryRadiusConditionRequestInput.md#deliveryradiusconditionrequestinput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateConditionRequestInput](../models/DeliveryStateConditionRequestInput.md#deliverystateconditionrequestinput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeConditionInput](../models/DeliveryWindowTimeConditionInput.md#deliverywindowtimeconditioninput) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneConditionRequestInput](../models/DeliveryZoneConditionRequestInput.md#deliveryzoneconditionrequestinput) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. |

### DeliveryEligibilityExpressionRequestInput variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpressionRequestInput variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[]

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryCountryConditionRequestInput](../models/DeliveryCountryConditionRequestInput.md#deliverycountryconditionrequestinput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [DeliveryCustomerSegmentConditionInput](../models/DeliveryCustomerSegmentConditionInput.md#deliverycustomersegmentconditioninput) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). |
| `not` | Conditional | [DeliveryEligibilityExpressionRequestInput](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinput) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionRequestInput](../models/DeliveryPostalCodeConditionRequestInput.md#deliverypostalcodeconditionrequestinput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionRequestInput](../models/DeliveryRadiusConditionRequestInput.md#deliveryradiusconditionrequestinput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateConditionRequestInput](../models/DeliveryStateConditionRequestInput.md#deliverystateconditionrequestinput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanConditionInput](../models/DeliveryCustomerBooleanConditionInput.md#deliverycustomerbooleanconditioninput) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeConditionInput](../models/DeliveryWindowTimeConditionInput.md#deliverywindowtimeconditioninput) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneConditionRequestInput](../models/DeliveryZoneConditionRequestInput.md#deliveryzoneconditionrequestinput) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. |

### DeliveryEligibilityExpressionRequestInput.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 4

oneOf variant 4.

- Required: `zone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 5

oneOf variant 5.

- Required: `country`.
- Optional: `all`, `any`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 6

oneOf variant 6.

- Required: `state`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 7

oneOf variant 7.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 8

oneOf variant 8.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 9

oneOf variant 9.

- Required: `window_time`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 10

oneOf variant 10.

- Required: `customer_segment`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 11

oneOf variant 11.

- Required: `customer_merchant_verified`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 12

oneOf variant 12.

- Required: `customer_has_email`.
- Optional: `all`, `any`, `country`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 13

oneOf variant 13.

- Required: `customer_has_phone`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `subscription_purchase`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.all[] variant 14

oneOf variant 14.

- Required: `subscription_purchase`.
- Optional: `all`, `any`, `country`, `customer_has_email`, `customer_has_phone`, `customer_merchant_verified`, `customer_segment`, `not`, `postal_code`, `radius`, `state`, `window_time`, `zone`.

### DeliveryEligibilityExpressionRequestInput.any[]

Declared alternatives: [DeliveryEligibilityExpressionRequestInput.all[]](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall).

### DeliveryEligibilityExpressionRequestInput.not

Declared alternatives: [DeliveryEligibilityExpressionRequestInput.all[]](../models/DeliveryEligibilityExpressionRequestInput.md#deliveryeligibilityexpressionrequestinputall).

