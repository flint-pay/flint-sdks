[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryInputRequirement

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryInputConstraint](../models/DeliveryInputConstraint.md#deliveryinputconstraint) | The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. |
| `delivery_choice_group_ids` | Optional | Array of string | Items: Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_input_requirement_id` | Required | string | Example: `"req_24c2628d965d791d993ab70c2c9f77882cc189e3039ef9ef68bf935e59717580"`. |
| `delivery_method_ids` | Optional | Array of string | Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_option_ids` | Optional | Array of string | Items: Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `field_path` | Required | string | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](#deliveryinputrequirement-field_path-values). |
| `purpose` | Required | string | Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

#### DeliveryInputRequirement field_path values

- `"destination_address"`
- `"destination_address.line1"`
- `"destination_address.line2"`
- `"destination_address.city"`
- `"destination_address.country"`
- `"destination_address.state"`
- `"destination_address.postal_code"`
- `"buyer_location"`
- `"buyer_location.address.line1"`
- `"buyer_location.address.line2"`
- `"buyer_location.address.city"`
- `"buyer_location.address.country"`
- `"buyer_location.address.state"`
- `"buyer_location.address.postal_code"`
- `"buyer_location.coordinate"`
- `"recipient.name"`
- `"recipient.email"`
- `"recipient.phone"`
- `"choices[].input.delivery_window_id"`
- `"method_results"`

