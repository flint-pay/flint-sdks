[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableInputRequirementsItem

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableInputRequirementsItemConstraint](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableInputRequirementsItemConstraint.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableinputrequirementsitemconstraint) | The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. `constraint`: [field definitions](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableInputRequirementsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueunavailableinputrequirementsitemconstraint-fields-1). |
| `delivery_choice_group_ids` | Optional | Array of string |  |
| `delivery_input_requirement_id` | Required | string |  |
| `delivery_method_ids` | Optional | Array of string |  |
| `delivery_option_ids` | Optional | Array of string |  |
| `field_path` | Required | string | Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). |
| `purpose` | Required | string | Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

### DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueUnavailableInputRequirementsItem.constraint fields 1

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.

Field definitions: [shared fields](DeliveryInputConstraint.md#deliveryinputconstraint).

