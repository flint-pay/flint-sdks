[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProcessExistingReturnLineItemRequestInput

How to process one line of an existing return: the received quantity, inspection, decision, disposition, and resolution.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `decision` | Optional | [ReturnProcessDecisionInput](../models/ReturnProcessDecisionInput.md#returnprocessdecisioninput) | Start from the pinned policy proposal recomputed for approved_quantity when the line has a policy evaluation and the proposal can be built. Otherwise start with return_required_quantity equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless of whether the original payment is refundable, no automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise is required and inspection is required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. Validate the merged decision for quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned policy always requires override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal, other decision fields use these defaults and override_reason is otherwise optional. Example: `{"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}`. |
| `disposition` | Optional | [ReturnProcessDispositionRequestInput](../models/ReturnProcessDispositionRequestInput.md#returnprocessdispositionrequestinput) | What was done with a returned item, such as restocked as sellable or sent for repair, supplied when processing an existing return. |
| `inspection` | Optional | [ReturnProcessInspectionRequestInput](../models/ReturnProcessInspectionRequestInput.md#returnprocessinspectionrequestinput) | An inspection result for a returned item, supplied when processing an existing return. |
| `received_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `resolution` | Optional | [ReturnProcessResolutionRequestInput](../models/ReturnProcessResolutionRequestInput.md#returnprocessresolutionrequestinput) | The resolution to apply to a returned item, such as refund or exchange, with the quantity and any replacement items. |
| `return_line_item_id` | Required | string | minLength: `1`. |

