[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItem

An input a delivery method needs, such as an address field or time window, with its `field_path`, purpose, and constraint.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `constraint` | Required | [DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItemConstraint](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItemConstraint.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableinputrequirementsitemconstraint) | The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows. `constraint`: [field definitions](../models/DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItem.md#deliverypreviewchoicegroupresourcecandidateoutcomesvalueavailableinputrequirementsitemconstraint-fields-1). |
| `delivery_choice_group_ids` | Optional | Array of string |  |
| `delivery_input_requirement_id` | Required | string |  |
| `delivery_method_ids` | Optional | Array of string |  |
| `delivery_option_ids` | Optional | Array of string |  |
| `field_path` | Required | string | Request property to fill in, using the same path as error params. Array templates use [] in place of an index. Values: [20 declared values](DeliveryInputRequirementInput.md#deliveryinputrequirementinput-field_path-values). |
| `purpose` | Required | string | Values: `"quote"`, `"selection"`, `"pickup_availability"`. |

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItem.constraint fields 1

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.

Field definitions: [shared fields](CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraint).

### DeliveryPreviewChoiceGroupResourceCandidateOutcomesValueAvailableInputRequirementsItem.constraint fields 1.offered_windows[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[].constraint.offered_windows[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirementsconstraintoffered_windows).

