[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueInputRequiredInputRequirementsItemConstraint

The rules for an input a delivery method needs, chosen by `type`, such as allowed values, length limits, supported countries, or offered time windows.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_values` | Optional | Array of string |  |
| `earliest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `format` | Optional | string |  |
| `latest_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `maximum_length` | Optional | integer | Format: `int32`. |
| `minimum_length` | Optional | integer | Format: `int32`. |
| `offered_windows` | Optional | Array of ([DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueInputRequiredInputRequirementsItemConstraintOfferedWindowsItem](../models/DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueInputRequiredInputRequirementsItemConstraintOfferedWindowsItem.md#deliveryquotechoicegroupresourcecandidateoutcomesvalueinputrequiredinputrequirementsitemconstraintofferedwindowsitem) and [DeliveryWindowResource](../models/DeliveryWindowResource.md#deliverywindowresource)) |  |
| `supported_countries` | Optional | Array of string |  |
| `type` | Required | string | Values: `"string"`, `"address_field"`, `"email"`, `"phone"`, `"time_window"`, `"coordinate"`, `"caller_supplied_rate"`. |

