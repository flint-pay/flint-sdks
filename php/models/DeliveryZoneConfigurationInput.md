[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationInput

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinputconfiguration). |
| `any` | Conditional | Array of [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinputconfiguration). |
| `country` | Conditional | [DeliveryCountryConditionInput](../models/DeliveryCountryConditionInput.md#deliverycountryconditioninput) | A delivery eligibility condition that matches when the address country is one of `values`. |
| `not` | Conditional | [DeliveryZoneConfigurationInput](../models/DeliveryZoneConfigurationInput.md#deliveryzoneconfigurationinput) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinputconfiguration). |
| `postal_code` | Conditional | [DeliveryPostalCodeConditionInput](../models/DeliveryPostalCodeConditionInput.md#deliverypostalcodeconditioninput) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. |
| `radius` | Conditional | [DeliveryRadiusConditionInput](../models/DeliveryRadiusConditionInput.md#deliveryradiusconditioninput) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. |
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

Declared alternatives: [CreateDeliveryZoneRequestInput.configuration](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinputconfiguration).

### DeliveryZoneConfigurationInput.any[]

Declared alternatives: [CreateDeliveryZoneRequestInput.configuration](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinputconfiguration).

### DeliveryZoneConfigurationInput.not

Declared alternatives: [CreateDeliveryZoneRequestInput.configuration](../models/CreateDeliveryZoneRequestInput.md#createdeliveryzonerequestinputconfiguration).

