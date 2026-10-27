[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryZoneRequest

The request body for: Create delivery zone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `configuration`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |

### CreateDeliveryZoneRequest.configuration

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `not` | Conditional | [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |

### CreateDeliveryZoneRequest.configuration variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### CreateDeliveryZoneRequest.configuration variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### CreateDeliveryZoneRequest.configuration variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### CreateDeliveryZoneRequest.configuration variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### CreateDeliveryZoneRequest.configuration variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### CreateDeliveryZoneRequest.configuration variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### CreateDeliveryZoneRequest.configuration variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### CreateDeliveryZoneRequest.configuration.country

A delivery eligibility condition that matches when the address country is one of `values`.

Field definitions: [shared fields](DeliveryCountryConditionInput.md#deliverycountryconditioninput).

### CreateDeliveryZoneRequest.configuration.state

Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.

Field definitions: [shared fields](DeliveryStateConditionInput.md#deliverystateconditioninput).

