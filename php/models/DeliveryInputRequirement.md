[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputRequirement

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryInputConstraint](../models/DeliveryInputConstraint.md#deliveryinputconstraint) | The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. |
| `delivery_choice_group_ids` | Optional | Array of string |  |
| `delivery_input_requirement_id` | Required | string |  |
| `delivery_method_ids` | Optional | Array of string |  |
| `delivery_option_ids` | Optional | Array of string |  |
| `field_path` | Required | string | Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). |
| `purpose` | Required | string | Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

