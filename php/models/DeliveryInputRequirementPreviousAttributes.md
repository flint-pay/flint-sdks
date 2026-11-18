[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputRequirementPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Optional | [DeliveryInputConstraintPreviousAttributes](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributes) or null | The rules the input must follow. `constraint`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesconstraint). |
| `delivery_choice_group_ids` | Optional | Array of string or null | Choice groups that need this input. `delivery_choice_group_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_choice_group_ids). |
| `delivery_input_requirement_id` | Optional | string or null | Unique ID of this requirement. `delivery_input_requirement_id`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_input_requirement_id). |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods that need this input. `delivery_method_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_method_ids). |
| `delivery_option_ids` | Optional | Array of string or null | Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. `delivery_option_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_option_ids). |
| `field_path` | Optional | string or null | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [21 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). `field_path`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesfield_path). |
| `purpose` | Optional | string or null | When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`. `purpose`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributespurpose). |

### DeliveryInputRequirementPreviousAttributes.constraint

The rules the input must follow.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Conditional | Array of string or null | Values the input must be one of. `allowed_values`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesallowed_values). |
| `earliest_at` | Conditional | string or null | Earliest time the input can name. `earliest_at`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesconstraint-variant-1earliest_at). |
| `format` | Conditional | string or null | Format the input must follow. `format`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesformat). |
| `latest_at` | Conditional | string or null | Latest time the input can name. `latest_at`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesconstraint-variant-1latest_at). |
| `maximum_length` | Conditional | integer or null | Most characters the input can have. `maximum_length`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesmaximum_length). |
| `minimum_length` | Conditional | integer or null | Fewest characters the input can have. `minimum_length`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesminimum_length). |
| `offered_windows` | Conditional | Array of [DeliveryWindowResourcePreviousAttributes](../models/DeliveryWindowResourcePreviousAttributes.md#deliverywindowresourcepreviousattributes) or null | Delivery windows the buyer can choose from. `offered_windows`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows). |
| `supported_countries` | Conditional | Array of string or null | Sorted ISO 3166-1 alpha-2 countries the delivery methods can serve, derived from eligibility and rate-table conditions. Only methods that need this address contribute countries. Alternative methods are unioned within each choice group; intersect across groups and, for automatic tax, order.tax.supported_countries. A listed country may still require state, postal code, or other eligibility input. Excludes CU, IR, KP, and SY; sanctioned regions within UA and RU are excluded when address data identifies them. `supported_countries`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributessupported_countries). |
| `type` | Conditional | string or null | Kind of input the requirement asks for. Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. `type`: [declared alternatives](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributestype). |

### DeliveryInputRequirementPreviousAttributes.constraint variant 1

anyOf DeliveryInputConstraintPreviousAttributes.

- Optional: `allowed_values`, `earliest_at`, `format`, `latest_at`, `maximum_length`, `minimum_length`, `offered_windows`, `supported_countries`, `type`.

### DeliveryInputRequirementPreviousAttributes.constraint variant 2

anyOf variant 2.

- Undeclared: `allowed_values`, `earliest_at`, `format`, `latest_at`, `maximum_length`, `minimum_length`, `offered_windows`, `supported_countries`, `type`.
- Value shape: null. The rules the input must follow. 

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.allowed_values

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.allowed_values](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesallowed_values).

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.earliest_at

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.earliest_at variant 1

anyOf variant 1: Earliest time the input can name..

- Value shape: string. Earliest time the input can name. Earliest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.earliest_at variant 2

anyOf variant 2.

- Value shape: null. Earliest time the input can name. 

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.format

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.format](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesformat).

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.latest_at

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.latest_at variant 1

anyOf variant 1: Latest time the input can name..

- Value shape: string. Latest time the input can name. Latest time the input can name. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.latest_at variant 2

anyOf variant 2.

- Value shape: null. Latest time the input can name. 

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.maximum_length

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.maximum_length](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesmaximum_length).

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.minimum_length

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.minimum_length](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesminimum_length).

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.offered_windows

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.offered_windows](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributesoffered_windows).

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.supported_countries

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.supported_countries](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributessupported_countries).

### DeliveryInputRequirementPreviousAttributes.constraint variant 1.type

Declared alternatives: [DeliveryInputConstraintPreviousAttributes.type](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributestype).

### DeliveryInputRequirementPreviousAttributes.delivery_choice_group_ids

### DeliveryInputRequirementPreviousAttributes.delivery_choice_group_ids variant 1

anyOf variant 1: Choice groups that need this input..

- Value shape: Array of string. Choice groups that need this input. 

### DeliveryInputRequirementPreviousAttributes.delivery_choice_group_ids variant 2

anyOf variant 2.

- Value shape: null. Choice groups that need this input. 

### DeliveryInputRequirementPreviousAttributes.delivery_input_requirement_id

### DeliveryInputRequirementPreviousAttributes.delivery_input_requirement_id variant 1

anyOf variant 1: Unique ID of this requirement..

- Value shape: string. Unique ID of this requirement. 

### DeliveryInputRequirementPreviousAttributes.delivery_input_requirement_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this requirement. 

### DeliveryInputRequirementPreviousAttributes.delivery_method_ids

### DeliveryInputRequirementPreviousAttributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods that need this input..

- Value shape: Array of string. Delivery methods that need this input. 

### DeliveryInputRequirementPreviousAttributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods that need this input. 

### DeliveryInputRequirementPreviousAttributes.delivery_option_ids

### DeliveryInputRequirementPreviousAttributes.delivery_option_ids variant 1

anyOf variant 1: Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole..

- Value shape: Array of string. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. 

### DeliveryInputRequirementPreviousAttributes.delivery_option_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. 

### DeliveryInputRequirementPreviousAttributes.field_path

### DeliveryInputRequirementPreviousAttributes.field_path variant 1

anyOf variant 1: Request property to fill in, using the same path as error params. Array templates use [] in place of an index..

- Value shape: string. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: `"destination_address"`, `"destination_address.line1"`, `"destination_address.line2"`, `"destination_address.city"`, `"destination_address.country"`, `"destination_address.state"`, `"destination_address.postal_code"`, `"buyer_location"`, `"buyer_location.address.line1"`, `"buyer_location.address.line2"`, `"buyer_location.address.city"`, `"buyer_location.address.country"`, `"buyer_location.address.state"`, `"buyer_location.address.postal_code"`, `"buyer_location.coordinate"`, `"pickup_location_id"`, `"recipient.name"`, `"recipient.email"`, `"recipient.phone"`, `"choices[].input.delivery_window_id"`, `"method_results"`.

### DeliveryInputRequirementPreviousAttributes.field_path variant 2

anyOf variant 2.

- Value shape: null. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. 

### DeliveryInputRequirementPreviousAttributes.purpose

### DeliveryInputRequirementPreviousAttributes.purpose variant 1

anyOf variant 1: When the input is needed..

- Value shape: string. When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`.

### DeliveryInputRequirementPreviousAttributes.purpose variant 2

anyOf variant 2.

- Value shape: null. When the input is needed. 

