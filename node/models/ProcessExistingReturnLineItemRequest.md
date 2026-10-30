[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProcessExistingReturnLineItemRequest

How to process one line of an existing return: the received quantity, inspection, decision, disposition, and resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `decision` | Optional | [ReturnProcessDecision](../models/ReturnProcessDecision.md#returnprocessdecision) | Start from the pinned policy proposal recomputed for approved_quantity when the line has a policy evaluation and the proposal can be built. Otherwise start with return_required_quantity equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless of whether the original payment is refundable, no automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise is required and inspection is required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. Validate the merged decision for quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned policy always requires override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal, other decision fields use these defaults and override_reason is otherwise optional. Example: `{"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}`. |
| `disposition` | Optional | [ReturnProcessDispositionRequest](../models/ReturnProcessDispositionRequest.md#returnprocessdispositionrequest) | What was done with a returned item, such as restocked as sellable or sent for repair, supplied when processing an existing return. |
| `inspection` | Optional | [ReturnProcessInspectionRequest](../models/ReturnProcessInspectionRequest.md#returnprocessinspectionrequest) | An inspection result for a returned item, supplied when processing an existing return. |
| `received_quantity` | Optional | integer | Whole number of units received. It must equal the line's committed return_required_quantity; fractional quantities are not supported. Format: `int64`. |
| `resolution` | Optional | [ReturnProcessResolutionRequest](../models/ReturnProcessResolutionRequest.md#returnprocessresolutionrequest) | The resolution to apply to a returned item, such as refund or exchange, with the quantity and any replacement items. |
| `return_line_item_id` | Required | string | minLength: `1`. |

