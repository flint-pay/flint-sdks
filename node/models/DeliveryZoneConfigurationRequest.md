[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationRequest

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequestall). |
| `any` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequestall). |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry). |
| `not` | Conditional | [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate). |

### DeliveryZoneConfigurationRequest variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfigurationRequest variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfigurationRequest variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfigurationRequest.all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry). |
| `not` | Conditional | [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate). |

### DeliveryZoneConfigurationRequest.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest.all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequest.all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfigurationRequest.all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfigurationRequest.all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfigurationRequest.all[].country

Field definitions: [DeliveryEligibilityExpressionRequest.all[].country](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry).

### DeliveryZoneConfigurationRequest.all[].postal_code

Field definitions: [DeliveryEligibilityExpressionRequest.all[].postal_code](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code).

### DeliveryZoneConfigurationRequest.all[].radius

Field definitions: [DeliveryEligibilityExpressionRequest.all[].radius](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius).

### DeliveryZoneConfigurationRequest.all[].state

Field definitions: [DeliveryEligibilityExpressionRequest.all[].state](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate).

### DeliveryZoneConfigurationRequest.any[]

Declared alternatives: [DeliveryZoneConfigurationRequest.all[]](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequestall).

### DeliveryZoneConfigurationRequest.country

Field definitions: [DeliveryEligibilityExpressionRequest.all[].country](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallcountry).

### DeliveryZoneConfigurationRequest.postal_code

Field definitions: [DeliveryEligibilityExpressionRequest.all[].postal_code](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_code).

### DeliveryZoneConfigurationRequest.radius

Field definitions: [DeliveryEligibilityExpressionRequest.all[].radius](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallradius).

### DeliveryZoneConfigurationRequest.state

Field definitions: [DeliveryEligibilityExpressionRequest.all[].state](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallstate).

