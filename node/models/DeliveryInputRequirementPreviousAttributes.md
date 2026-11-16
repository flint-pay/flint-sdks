[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputRequirementPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Optional | [DeliveryInputConstraintPreviousAttributes](../models/DeliveryInputConstraintPreviousAttributes.md#deliveryinputconstraintpreviousattributes) or null | The rules the input must follow. |
| `delivery_choice_group_ids` | Optional | Array of string or null | Choice groups that need this input. `delivery_choice_group_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_choice_group_ids). |
| `delivery_input_requirement_id` | Optional | string or null | Unique ID of this requirement. `delivery_input_requirement_id`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_input_requirement_id). |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods that need this input. `delivery_method_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_method_ids). |
| `delivery_option_ids` | Optional | Array of string or null | Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. `delivery_option_ids`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesdelivery_option_ids). |
| `field_path` | Optional | string or null | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](DeliveryInputRequirement.md#deliveryinputrequirement-field_path-values). `field_path`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributesfield_path). |
| `purpose` | Optional | string or null | When the input is needed. Values: `"quote"`, `"selection"`, `"pickup_availability"`. `purpose`: [declared alternatives](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributespurpose). |

### DeliveryInputRequirementPreviousAttributes.delivery_choice_group_ids

### DeliveryInputRequirementPreviousAttributes.delivery_choice_group_ids variant 1

anyOf variant 1: Choice groups that need this input..

- Value shape: Array of string. Choice groups that need this input. Items: Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### DeliveryInputRequirementPreviousAttributes.delivery_choice_group_ids variant 2

anyOf variant 2.

- Value shape: null. Choice groups that need this input. 

### DeliveryInputRequirementPreviousAttributes.delivery_input_requirement_id

### DeliveryInputRequirementPreviousAttributes.delivery_input_requirement_id variant 1

anyOf variant 1: Unique ID of this requirement..

- Value shape: string. Unique ID of this requirement. Unique ID of this requirement. Example: `"req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580"`. 

### DeliveryInputRequirementPreviousAttributes.delivery_input_requirement_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this requirement. 

### DeliveryInputRequirementPreviousAttributes.delivery_method_ids

### DeliveryInputRequirementPreviousAttributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods that need this input..

- Value shape: Array of string. Delivery methods that need this input. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliveryInputRequirementPreviousAttributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods that need this input. 

### DeliveryInputRequirementPreviousAttributes.delivery_option_ids

### DeliveryInputRequirementPreviousAttributes.delivery_option_ids variant 1

anyOf variant 1: Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole..

- Value shape: Array of string. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. Items: Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliveryInputRequirementPreviousAttributes.delivery_option_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery options that need this input. Omitted when the requirement applies to the choice group or method as a whole. 

### DeliveryInputRequirementPreviousAttributes.field_path

### DeliveryInputRequirementPreviousAttributes.field_path variant 1

anyOf variant 1: Request property to fill in, using the same path as error params. Array templates use [] in place of an index..

- Value shape: string. Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: `"destination_address"`, `"destination_address.line1"`, `"destination_address.line2"`, `"destination_address.city"`, `"destination_address.country"`, `"destination_address.state"`, `"destination_address.postal_code"`, `"buyer_location"`, `"buyer_location.address.line1"`, `"buyer_location.address.line2"`, `"buyer_location.address.city"`, `"buyer_location.address.country"`, `"buyer_location.address.state"`, `"buyer_location.address.postal_code"`, `"buyer_location.coordinate"`, `"recipient.name"`, `"recipient.email"`, `"recipient.phone"`, `"choices[].input.delivery_window_id"`, `"method_results"`.

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

