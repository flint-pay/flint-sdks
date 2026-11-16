[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputConstraintPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string or null | Values the input must be one of. `allowed_values`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesallowed_values). |
| `earliest_at` | Optional | string or null | Earliest time the input can name. `earliest_at`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesearliest_at). |
| `format` | Optional | string or null | Format the input must follow. `format`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesformat). |
| `latest_at` | Optional | string or null | Latest time the input can name. `latest_at`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributeslatest_at). |
| `maximum_length` | Optional | integer or null | Most characters the input can have. `maximum_length`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesmaximum_length). |
| `minimum_length` | Optional | integer or null | Fewest characters the input can have. `minimum_length`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesminimum_length). |
| `offered_windows` | Optional | Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes) or null | Delivery windows the buyer can choose from. `offered_windows`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows). |
| `supported_countries` | Optional | Array of string or null | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. `supported_countries`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributessupported_countries). |
| `type` | Optional | string or null | Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. `type`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributestype). |

### DeliveryInputConstraintPreviousAttributes.allowed_values

### DeliveryInputConstraintPreviousAttributes.allowed_values variant 1

anyOf variant 1: Values the input must be one of..

- Value shape: Array of string. Values the input must be one of. 

### DeliveryInputConstraintPreviousAttributes.allowed_values variant 2

anyOf variant 2.

- Value shape: null. Values the input must be one of. 

### DeliveryInputConstraintPreviousAttributes.earliest_at

### DeliveryInputConstraintPreviousAttributes.earliest_at variant 1

anyOf variant 1: Earliest time the input can name..

- Value shape: string. Earliest time the input can name. Earliest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputConstraintPreviousAttributes.earliest_at variant 2

anyOf variant 2.

- Value shape: null. Earliest time the input can name. 

### DeliveryInputConstraintPreviousAttributes.format

### DeliveryInputConstraintPreviousAttributes.format variant 1

anyOf variant 1: Format the input must follow..

- Value shape: string. Format the input must follow. 

### DeliveryInputConstraintPreviousAttributes.format variant 2

anyOf variant 2.

- Value shape: null. Format the input must follow. 

### DeliveryInputConstraintPreviousAttributes.latest_at

### DeliveryInputConstraintPreviousAttributes.latest_at variant 1

anyOf variant 1: Latest time the input can name..

- Value shape: string. Latest time the input can name. Latest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputConstraintPreviousAttributes.latest_at variant 2

anyOf variant 2.

- Value shape: null. Latest time the input can name. 

### DeliveryInputConstraintPreviousAttributes.maximum_length

### DeliveryInputConstraintPreviousAttributes.maximum_length variant 1

anyOf variant 1: Most characters the input can have..

- Value shape: integer. Most characters the input can have. Most characters the input can have. Format: `int32`. 

### DeliveryInputConstraintPreviousAttributes.maximum_length variant 2

anyOf variant 2.

- Value shape: null. Most characters the input can have. 

### DeliveryInputConstraintPreviousAttributes.minimum_length

### DeliveryInputConstraintPreviousAttributes.minimum_length variant 1

anyOf variant 1: Fewest characters the input can have..

- Value shape: integer. Fewest characters the input can have. Fewest characters the input can have. Format: `int32`. 

### DeliveryInputConstraintPreviousAttributes.minimum_length variant 2

anyOf variant 2.

- Value shape: null. Fewest characters the input can have. 

### DeliveryInputConstraintPreviousAttributes.offered_windows

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1

anyOf variant 1: Delivery windows the buyer can choose from..

- Value shape: Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes). Delivery windows the buyer can choose from. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 2

anyOf variant 2.

- Value shape: null. Delivery windows the buyer can choose from. 

### DeliveryInputConstraintPreviousAttributes.supported_countries

### DeliveryInputConstraintPreviousAttributes.supported_countries variant 1

anyOf variant 1: Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them..

- Value shape: Array of string. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. 

### DeliveryInputConstraintPreviousAttributes.supported_countries variant 2

anyOf variant 2.

- Value shape: null. Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. 

### DeliveryInputConstraintPreviousAttributes.type

### DeliveryInputConstraintPreviousAttributes.type variant 1

anyOf variant 1: Kind of input the requirement asks for..

- Value shape: string. Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`.

### DeliveryInputConstraintPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of input the requirement asks for. 

