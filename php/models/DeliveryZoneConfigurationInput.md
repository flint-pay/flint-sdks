[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationInput

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinputall). |
| `any` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinputall). |
| `country` | Conditional | [DeliveryCountryConditionInput](../models/DeliveryCountryConditionInput.md#deliverycountryconditioninput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `not` | Conditional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinputall). |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionInput](../models/DeliveryPostalCodeConditionInput.md#deliverypostalcodeconditioninput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius). |
| `state` | Conditional | [DeliveryStateConditionInput](../models/DeliveryStateConditionInput.md#deliverystateconditioninput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |

### DeliveryZoneConfigurationInput variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfigurationInput variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfigurationInput variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfigurationInput.all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryCountryConditionInput](../models/DeliveryCountryConditionInput.md#deliverycountryconditioninput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `not` | Conditional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionInput](../models/DeliveryPostalCodeConditionInput.md#deliverypostalcodeconditioninput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius). |
| `state` | Conditional | [DeliveryStateConditionInput](../models/DeliveryStateConditionInput.md#deliverystateconditioninput) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |

### DeliveryZoneConfigurationInput.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput.all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationInput.all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfigurationInput.all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfigurationInput.all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfigurationInput.all[].radius

Field definitions: [DeliveryEligibilityExpressionInput.all[].radius](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius).

### DeliveryZoneConfigurationInput.any[]

Declared alternatives: [DeliveryZoneConfigurationInput.all[]](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinputall).

### DeliveryZoneConfigurationInput.not

Declared alternatives: [DeliveryZoneConfigurationInput.all[]](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinputall).

### DeliveryZoneConfigurationInput.radius

Field definitions: [DeliveryEligibilityExpressionInput.all[].radius](../models/DeliveryEligibilityExpressionInput.md#deliveryeligibilityexpressioninputallradius).

