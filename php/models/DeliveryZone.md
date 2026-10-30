[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZone

A geographic area served by a delivery method.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object and Alternative shapes (see declared variants) | Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `configuration`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfiguration). |
| `created_at` | Required | string | Time the zone was created. Format: `date-time`. |
| `current_delivery_zone_revision_id` | Required | string | Immutable revision used for new quotes. |
| `delivery_zone_id` | Required | string | Stable delivery zone ID. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/LocationResponse.md#locationresponsedatametadata). |
| `name` | Required | string | Merchant-facing zone name. |
| `status` | Required | string | Current zone lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the zone last changed. Format: `date-time`. |
| `version` | Required | integer | Optimistic-concurrency version for zone writes. Format: `uint64`. minimum: `1`. |

### DeliveryZone.configuration

Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfigurationall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfigurationall). |
| `country` | Conditional | object | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfigurationall). |
| `postal_code` | Conditional | object | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code). |
| `radius` | Conditional | object | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius). |
| `state` | Conditional | object | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate). |

### DeliveryZone.configuration variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZone.configuration variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZone.configuration variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZone.configuration.all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `all[]`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfigurationallall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. `any[]`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfigurationallall). |
| `country` | Conditional | object | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/DeliveryZone.md#deliveryzoneconfigurationallall). |
| `postal_code` | Conditional | object | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code). |
| `radius` | Conditional | object | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius). |
| `state` | Conditional | object | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate). |

### DeliveryZone.configuration.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZone.configuration.all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZone.configuration.all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZone.configuration.all[].all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [field definitions](../models/DeliveryZone.md#deliveryzoneconfigurationall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [field definitions](../models/DeliveryZone.md#deliveryzoneconfigurationall). |
| `country` | Conditional | object | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [field definitions](../models/DeliveryZone.md#deliveryzoneconfigurationall). |
| `postal_code` | Conditional | object | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code). |
| `radius` | Conditional | object | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius). |
| `state` | Conditional | object | Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate). |

### DeliveryZone.configuration.all[].all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[].all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[].all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[].all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZone.configuration.all[].all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZone.configuration.all[].all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZone.configuration.all[].all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZone.configuration.all[].all[].all[]

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[]

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryZone.configuration.all[].all[].not

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryZone.configuration.all[].all[].radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryZone.configuration.all[].all[].state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryZone.configuration.all[].all[].all[] fields 1

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[] fields 1

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].not fields 1

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].all[] fields 2

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[] fields 2

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].not fields 2

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].all[] fields 3

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[] fields 3

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].not fields 3

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].all[] fields 4

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[] fields 4

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].not fields 4

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].all[] fields 5

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[] fields 5

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].not fields 5

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].all[] fields 6

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].any[] fields 6

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].all[].not fields 6

Field definitions: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.all[].any[]

Declared alternatives: [DeliveryZone.configuration.all[].all[]](../models/DeliveryZone.md#deliveryzoneconfigurationallall).

### DeliveryZone.configuration.all[].country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryZone.configuration.all[].not

Declared alternatives: [DeliveryZone.configuration.all[].all[]](../models/DeliveryZone.md#deliveryzoneconfigurationallall).

### DeliveryZone.configuration.all[].postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryZone.configuration.all[].radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryZone.configuration.all[].state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryZone.configuration.any[]

Declared alternatives: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.country

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].country](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallcountry).

### DeliveryZone.configuration.not

Declared alternatives: [DeliveryZone.configuration.all[]](../models/DeliveryZone.md#deliveryzoneconfigurationall).

### DeliveryZone.configuration.postal_code

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].postal_code](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallpostal_code).

### DeliveryZone.configuration.radius

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].radius](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallradius).

### DeliveryZone.configuration.state

Field definitions: [DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.when variant 1.all[].all[].state](../models/DeliveryMethodConfigurationPricingCalculatedRateTableRatesItem.md#deliverymethodconfigurationpricingcalculatedratetableratesitemwhen-variant-1allallstate).

### DeliveryZone.metadata

Field definitions: [LocationResponse.data.metadata](../models/LocationResponse.md#locationresponsedatametadata).

