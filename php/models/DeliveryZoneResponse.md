[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneResponse

A response containing `DeliveryZone` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryZone](../models/DeliveryZone.md#deliveryzone) | Resource, collection, or operation result returned by this request. A geographic area served by a delivery method. `data`: [field definitions](../models/DeliveryZoneResponse.md#deliveryzoneresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryZoneResponse.data

Resource, collection, or operation result returned by this request. A geographic area served by a delivery method.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | object and Alternative shapes (see declared variants) | Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `configuration`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfiguration). |
| `created_at` | Required | string | Time the zone was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_delivery_zone_revision_id` | Required | string | Immutable revision used for new quotes. Example: `"dzoner_01KEZF7C00DF2H9VW29JN861K6"`. |
| `delivery_zone_id` | Required | string | Stable delivery zone ID. Example: `"dzone_01KEZF7C005RY7KGCN4M2CH5WP"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata). |
| `name` | Required | string | Merchant-facing zone name. |
| `status` | Required | string | Current zone lifecycle status. Values: `"active"`, `"archived"`. |
| `updated_at` | Required | string | Time the zone last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Optimistic-concurrency version for zone writes. Format: `uint64`. minimum: `1`. |

### DeliveryZoneResponse.data.configuration

Current geographic eligibility conditions. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |

### DeliveryZoneResponse.data.configuration variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneResponse.data.configuration variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneResponse.data.configuration.all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. `all[]`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. `any[]`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |

### DeliveryZoneResponse.data.configuration.all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneResponse.data.configuration.all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[]

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [field definitions](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [field definitions](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [declared alternatives](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |

### DeliveryZoneResponse.data.configuration.all[].all[] variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[] variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[] variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[] variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[] variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneResponse.data.configuration.all[].all[] variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[] variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].all[]

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].any[]

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneResponse.data.configuration.all[].all[].not

Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when every nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `all[]`: [field definitions](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall). |
| `any` | Conditional | Array of (object and Alternative shapes (see declared variants)) | Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. Items: A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `any[]`: [field definitions](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall). |
| `country` | Conditional | object | Matches when the address is in one of the listed countries. A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry). |
| `not` | Conditional | object and Alternative shapes (see declared variants) | Matches when the nested expression does not match. A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `not`: [field definitions](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot). |
| `postal_code` | Conditional | object | Matches when the address postal code matches one of the listed codes. A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code). |
| `radius` | Conditional | object | Matches when the address is within a set distance of an origin. Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius). |
| `state` | Conditional | object | Matches when the address is in one of the listed states or provinces. Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes. `state`: [field definitions](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate). |

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 1

oneOf variant 1.

- Required: `all`.
- Optional: `any`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 2

oneOf variant 2.

- Required: `any`.
- Optional: `all`, `country`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 3

oneOf variant 3.

- Required: `not`.
- Optional: `all`, `any`, `country`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 4

oneOf variant 4.

- Required: `country`.
- Optional: `all`, `any`, `not`, `postal_code`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 5

oneOf variant 5.

- Required: `state`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `radius`.

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 6

oneOf variant 6.

- Required: `postal_code`.
- Optional: `all`, `any`, `country`, `not`, `radius`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].not variant 7

oneOf variant 7.

- Required: `radius`.
- Optional: `all`, `any`, `country`, `not`, `postal_code`, `state`.

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[]

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.any[]

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].not.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneResponse.data.configuration.all[].all[].not.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneResponse.data.configuration.all[].all[].not.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[] fields 1

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not fields 1

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[] fields 2

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not fields 2

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[] fields 3

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not fields 3

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[] fields 4

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not fields 4

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[] fields 5

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not fields 5

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].not.all[] fields 6

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].not.not fields 6

Field definitions: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].all[].postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneResponse.data.configuration.all[].all[].radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneResponse.data.configuration.all[].all[].state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneResponse.data.configuration.all[].all[].all[] fields 1

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].all[] fields 2

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].all[] fields 3

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].all[] fields 4

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].all[] fields 5

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].all[].all[] fields 6

Field definitions: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.all[].any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallall).

### DeliveryZoneResponse.data.configuration.all[].country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneResponse.data.configuration.all[].not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.all[].postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneResponse.data.configuration.all[].radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneResponse.data.configuration.all[].state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneResponse.data.configuration.any[]

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[]](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationall).

### DeliveryZoneResponse.data.configuration.country

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].country](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallcountry).

### DeliveryZoneResponse.data.configuration.not

Declared alternatives: [DeliveryZoneResponse.data.configuration.all[].all[].not](../models/DeliveryZoneResponse.md#deliveryzoneresponsedataconfigurationallallnot).

### DeliveryZoneResponse.data.configuration.postal_code

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.postal_code](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotpostal_code).

### DeliveryZoneResponse.data.configuration.radius

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.radius](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotradius).

### DeliveryZoneResponse.data.configuration.state

Field definitions: [DeliveryMethodResponse.data.configuration.eligibility.all[].all[].not.state](../models/DeliveryMethodResponse.md#deliverymethodresponsedataconfigurationeligibilityallallnotstate).

### DeliveryZoneResponse.data.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### DeliveryZoneResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

