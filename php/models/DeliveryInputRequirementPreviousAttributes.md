[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputRequirementPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Optional | Alternative shapes (see declared variants) | The rules the input must follow. `constraint`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint). |
| `delivery_choice_group_ids` | Optional | Array of string or null | Choice groups that need this input. `delivery_choice_group_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_choice_group_ids). |
| `delivery_input_requirement_id` | Optional | string or null | Unique ID of this requirement. `delivery_input_requirement_id`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_input_requirement_id). |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods that need this input. `delivery_method_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_method_ids). |
| `delivery_option_ids` | Optional | Array of string or null | Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. `delivery_option_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_option_ids). |
| `field_path` | Optional | string or null | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). `field_path`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1field_path). |
| `purpose` | Optional | string or null | When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`. `purpose`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1purpose). |

### DeliveryInputRequirementPreviousAttributes.constraint

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.constraint](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1constraint).

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

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.field_path](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1field_path).

### DeliveryInputRequirementPreviousAttributes.purpose

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.delivery variant 1.choice_groups variant 1.[] fields 1.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1.purpose](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesdelivery-variant-1choice_groups-variant-1-fields-1candidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1purpose).

