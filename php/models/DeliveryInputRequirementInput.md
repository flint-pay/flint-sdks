[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputRequirementInput

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryInputConstraintInput](../models/DeliveryInputConstraintInput.md#deliveryinputconstraintinput) | The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. |
| `delivery_choice_group_ids` | Optional | Array of string |  |
| `delivery_input_requirement_id` | Required | string |  |
| `delivery_method_ids` | Optional | Array of string |  |
| `delivery_option_ids` | Optional | Array of string |  |
| `field_path` | Required | string | Values: [20 declared values](#deliveryinputrequirementinput-field_path-values). |
| `purpose` | Required | string | Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

#### DeliveryInputRequirementInput field_path values

- `"destination_address"`
- `"destination_address.line1"`
- `"destination_address.line2"`
- `"destination_address.city"`
- `"destination_address.country"`
- `"destination_address.state"`
- `"destination_address.postal_code"`
- `"buyer_location"`
- `"buyer_location.line1"`
- `"buyer_location.line2"`
- `"buyer_location.city"`
- `"buyer_location.country"`
- `"buyer_location.state"`
- `"buyer_location.postal_code"`
- `"buyer_location.coordinate"`
- `"recipient.name"`
- `"recipient.email"`
- `"recipient.phone"`
- `"choices[].input.delivery_window_id"`
- `"caller_supplied_rates"`

