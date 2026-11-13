[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationRequestInput

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationRequestInput](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinput) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinputall). |
| `any` | Conditional | Array of [DeliveryZoneConfigurationRequestInput](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinput) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinputall). |
| `country` | Conditional | [DeliveryCountryConditionRequestInput](../models/DeliveryCountryConditionRequestInput.md#deliverycountryconditionrequestinput) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. |
| `not` | Conditional | [DeliveryZoneConfigurationRequestInput](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinput) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionRequestInput](../models/DeliveryPostalCodeConditionRequestInput.md#deliverypostalcodeconditionrequestinput) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionRequestInput](../models/DeliveryRadiusConditionRequestInput.md#deliveryradiusconditionrequestinput) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateConditionRequestInput](../models/DeliveryStateConditionRequestInput.md#deliverystateconditionrequestinput) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |

### DeliveryZoneConfigurationRequestInput variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfigurationRequestInput variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfigurationRequestInput.all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationRequestInput](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinput) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryZoneConfigurationRequestInput](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinput) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryCountryConditionRequestInput](../models/DeliveryCountryConditionRequestInput.md#deliverycountryconditionrequestinput) | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. |
| `not` | Conditional | [DeliveryZoneConfigurationRequestInput](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinput) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionRequestInput](../models/DeliveryPostalCodeConditionRequestInput.md#deliverypostalcodeconditionrequestinput) | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionRequestInput](../models/DeliveryRadiusConditionRequestInput.md#deliveryradiusconditionrequestinput) | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateConditionRequestInput](../models/DeliveryStateConditionRequestInput.md#deliverystateconditionrequestinput) | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. |

### DeliveryZoneConfigurationRequestInput.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput.all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput.all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfigurationRequestInput.all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfigurationRequestInput.all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfigurationRequestInput.any[]

Declared alternatives: [DeliveryZoneConfigurationRequestInput.all[]](../models/DeliveryZoneConfigurationRequestInput.md#deliveryzoneconfigurationrequestinputall).

