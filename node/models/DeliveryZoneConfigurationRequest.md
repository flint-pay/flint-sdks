[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationRequest

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `any` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `not` | Conditional | [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius). |
| `state` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate). |

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

Declared alternatives: [CreateDeliveryZoneRequest.configuration](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration).

### DeliveryZoneConfigurationRequest.any[]

Declared alternatives: [CreateDeliveryZoneRequest.configuration](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration).

### DeliveryZoneConfigurationRequest.country

Field definitions: [CreateDeliveryZoneRequest.configuration.country](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry).

### DeliveryZoneConfigurationRequest.not

Declared alternatives: [CreateDeliveryZoneRequest.configuration](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration).

### DeliveryZoneConfigurationRequest.postal_code

Field definitions: [CreateDeliveryZoneRequest.configuration.postal_code](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code).

### DeliveryZoneConfigurationRequest.radius

Field definitions: [CreateDeliveryZoneRequest.configuration.radius](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius).

### DeliveryZoneConfigurationRequest.state

Field definitions: [CreateDeliveryZoneRequest.configuration.state](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationstate).

