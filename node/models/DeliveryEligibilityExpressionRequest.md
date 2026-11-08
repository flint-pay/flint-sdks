[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpressionRequest

A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `all[]`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | minItems: `1`. maxItems: `100`. Items: A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `any[]`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment). |
| `not` | Conditional | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. `not`: [declared alternatives](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall). |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeCondition](../models/DeliveryWindowTimeCondition.md#deliverywindowtimecondition) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneCondition](../models/DeliveryZoneCondition.md#deliveryzonecondition) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallzone). |

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
| `all` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `customer_has_email` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_has_phone` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_merchant_verified` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | Matches the is_merchant_verified flag you set on the customer against value. A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `customer_segment` | Conditional | [AddRiskListItemsRequest](../models/AddRiskListItemsRequest.md#addrisklistitemsrequest) | Matches the free-form segment you assign to the customer against values. A delivery eligibility condition that matches customers in one of the listed segments (`values`). `customer_segment`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment). |
| `not` | Conditional | [DeliveryEligibilityExpressionRequest](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequest) | A boolean expression containing exactly one operator or typed condition at each node. Expressions support at most 8 levels and 100 total nodes. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |
| `subscription_purchase` | Conditional | [DeliveryCustomerBooleanCondition](../models/DeliveryCustomerBooleanCondition.md#deliverycustomerbooleancondition) | A delivery eligibility condition that tests a true or false fact about the customer against `value`. |
| `window_time` | Conditional | [DeliveryWindowTimeCondition](../models/DeliveryWindowTimeCondition.md#deliverywindowtimecondition) | Eligibility condition that matches by time of day, using `start_minute` and `end_minute`, on the listed `weekdays`. |
| `zone` | Conditional | [DeliveryZoneCondition](../models/DeliveryZoneCondition.md#deliveryzonecondition) | Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`. `zone`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallzone). |

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

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryEligibilityExpressionRequest.all[].customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryEligibilityExpressionRequest.all[].postal_code

Field definitions: [CreateDeliveryZoneRequest.configuration.postal_code](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code).

### DeliveryEligibilityExpressionRequest.all[].radius

Field definitions: [CreateDeliveryZoneRequest.configuration.radius](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius).

### DeliveryEligibilityExpressionRequest.all[].state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryEligibilityExpressionRequest.all[].zone

Eligibility condition that matches when the destination or buyer location falls inside the delivery zone `delivery_zone_id`.

Field definitions: [shared fields](DeliveryZoneCondition.md#deliveryzonecondition).

### DeliveryEligibilityExpressionRequest.any[]

Declared alternatives: [DeliveryEligibilityExpressionRequest.all[]](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall).

### DeliveryEligibilityExpressionRequest.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryEligibilityExpressionRequest.customer_segment

Field definitions: [DeliveryEligibilityExpression.all[].customer_segment](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallcustomer_segment).

### DeliveryEligibilityExpressionRequest.not

Declared alternatives: [DeliveryEligibilityExpressionRequest.all[]](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestall).

### DeliveryEligibilityExpressionRequest.postal_code

Field definitions: [CreateDeliveryZoneRequest.configuration.postal_code](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code).

### DeliveryEligibilityExpressionRequest.radius

Field definitions: [CreateDeliveryZoneRequest.configuration.radius](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius).

### DeliveryEligibilityExpressionRequest.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

### DeliveryEligibilityExpressionRequest.zone

Field definitions: [DeliveryEligibilityExpressionRequest.all[].zone](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallzone).

