[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputConstraintPreviousAttributes



Response model.

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

- Value shape: string. Earliest time the input can name. Earliest time the input can name. Format: `date-time`. 

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

- Value shape: string. Latest time the input can name. Latest time the input can name. Format: `date-time`. 

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

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Price of delivery in this window. |
| `delivery_window_id` | Optional | string or null | ID of this window. The buyer sends it to choose the window. `delivery_window_id`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows-variant-1-fields-1delivery_window_id). |
| `end_at` | Optional | string or null | End of this delivery window. `end_at`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows-variant-1-fields-1end_at). |
| `expires_at` | Optional | string or null | Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. `expires_at`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows-variant-1-fields-1expires_at). |
| `start_at` | Optional | string or null | Start of this delivery window. `start_at`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows-variant-1-fields-1start_at). |

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.delivery_window_id

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.delivery_window_id variant 1

anyOf variant 1: ID of this window. The buyer sends it to choose the window..

- Value shape: string. ID of this window. The buyer sends it to choose the window. ID of this window. The buyer sends it to choose the window. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of this window. The buyer sends it to choose the window. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.end_at

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.end_at variant 1

anyOf variant 1: End of this delivery window..

- Value shape: string. End of this delivery window. End of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.end_at variant 2

anyOf variant 2.

- Value shape: null. End of this delivery window. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.expires_at

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.expires_at variant 1

anyOf variant 1: Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier..

- Value shape: string. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.expires_at variant 2

anyOf variant 2.

- Value shape: null. Last moment the buyer can choose this window. For a schedule_window method it is the preparation lead time before the window starts, or the same-day cutoff when that is earlier. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.start_at

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.start_at variant 1

anyOf variant 1: Start of this delivery window..

- Value shape: string. Start of this delivery window. Start of this delivery window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputConstraintPreviousAttributes.offered_windows variant 1.[] fields 1.start_at variant 2

anyOf variant 2.

- Value shape: null. Start of this delivery window. 

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

