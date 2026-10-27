[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfiguration

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `any` | Conditional | Array of [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `not` | Conditional | [DeliveryZoneConfiguration](../models/DeliveryZoneConfiguration.md#deliveryzoneconfiguration) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |

### DeliveryZoneConfiguration variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfiguration variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfiguration variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfiguration variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneConfiguration variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneConfiguration variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneConfiguration variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneConfiguration.all[]

Declared alternatives: [CreateDeliveryZoneRequest.configuration](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration).

### DeliveryZoneConfiguration.any[]

Declared alternatives: [CreateDeliveryZoneRequest.configuration](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration).

### DeliveryZoneConfiguration.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryZoneConfiguration.not

Declared alternatives: [CreateDeliveryZoneRequest.configuration](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration).

### DeliveryZoneConfiguration.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

