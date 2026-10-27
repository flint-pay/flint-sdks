[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemDecisionProposalInput

The pinned policy decision recomputed for based_on_quantity. A decide with only approved_quantity commits these values. Policy automatic resolution selects the policy automatic_resolution_type for policy_default or the line's requested_resolution_type for buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset release_timing is filled with after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `automatic_resolution_type` | Optional | string | The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `based_on_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `is_inspection_required` | Required | boolean |  |
| `receiving_location_id` | Optional | string |  |
| `release_timing` | Optional | string | The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `return_required_quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

