[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryZoneRequest

The request body for: Create delivery zone.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `configuration` | Required | [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. `configuration`: [declared alternatives](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfiguration). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. `metadata`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata). |
| `name` | Required | string | minLength: `1`. |

### CreateDeliveryZoneRequest.configuration

A reusable geographic predicate containing only country, state, postal_code, and radius conditions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | minItems: `1`. maxItems: `100`. |
| `any` | Conditional | Array of [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | minItems: `1`. maxItems: `100`. |
| `country` | Conditional | [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition) | A delivery eligibility condition that matches when the address country is one of `values`. `country`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationcountry). |
| `not` | Conditional | [DeliveryZoneConfigurationRequest](../models/DeliveryZoneConfigurationRequest.md#deliveryzoneconfigurationrequest) | A reusable geographic predicate containing only country, state, postal_code, and radius conditions. |
| `postal_code` | Conditional | [DeliveryPostalCodeCondition](../models/DeliveryPostalCodeCondition.md#deliverypostalcodecondition) | A delivery eligibility condition that matches the address postal code against exact or prefix `values`. `postal_code`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_code). |
| `radius` | Conditional | [DeliveryRadiusCondition](../models/DeliveryRadiusCondition.md#deliveryradiuscondition) | Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line. `radius`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradius). |
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

Field definitions: [shared fields](DeliveryCountryConditionRequestInput.md#deliverycountryconditionrequestinput).

### CreateDeliveryZoneRequest.configuration.postal_code

A delivery eligibility condition that matches the address postal code against exact or prefix `values`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of [DeliveryPostalCodeValue](../models/DeliveryPostalCodeValue.md#deliverypostalcodevalue) | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values[]`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationpostal_codevalues). |

### CreateDeliveryZoneRequest.configuration.postal_code.values[]

A postal code or postal code prefix with its country, used in a postal code condition.

Field definitions: [shared fields](DeliveryPostalCodeValue.md#deliverypostalcodevalue).

### CreateDeliveryZoneRequest.configuration.radius

Eligibility condition that matches when the destination or buyer location is within `maximum_distance` of an origin, measured in a straight line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_distance` | Required | [DeliveryDistance](../models/DeliveryDistance.md#deliverydistance) | A distance as a `value` in meters, kilometers, or miles. `maximum_distance`: [field definitions](../models/CreateDeliveryZoneRequest.md#createdeliveryzonerequestconfigurationradiusmaximum_distance). |
| `measurement` | Optional | string | Default: `"straight_line"`. Values: `"straight_line"`. |
| `origin` | Required | [DeliveryRadiusOrigin](../models/DeliveryRadiusOrigin.md#deliveryradiusorigin) | The point a radius condition measures from: a specific Location (`location_id`) or the delivery method's own origin (`method_origin`). |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |

### CreateDeliveryZoneRequest.configuration.radius.maximum_distance

A distance as a `value` in meters, kilometers, or miles.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number |  |

### CreateDeliveryZoneRequest.configuration.state

Eligibility condition that matches when the destination or buyer location is in one of the listed states or provinces, given as ISO 3166-2 codes.

Field definitions: [shared fields](DeliveryStateConditionRequestInput.md#deliverystateconditionrequestinput).

### CreateDeliveryZoneRequest.metadata

Field definitions: [AddLineItemsRequest.line_items[].metadata](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsmetadata).

