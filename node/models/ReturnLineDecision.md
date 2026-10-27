[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineDecision

Start from the pinned policy proposal recomputed for approved_quantity when the line has a policy evaluation and the proposal can be built. Otherwise start with return_required_quantity equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless of whether the original payment is refundable, no automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise is required and inspection is required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. Validate the merged decision for quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned policy always requires override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal, other decision fields use these defaults and override_reason is otherwise optional. Example: `{"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string | Optional replacement for the entire starting list. Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in that order, independent of the original payment's refundability. The resulting list must be valid and non-empty when approved_quantity is above zero. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approved_quantity` | Required | integer string | Required whole-number quantity from zero through the line's requested_quantity; fractional quantities are not supported. When approved_quantity is below requested_quantity, send decline_reason; decline_reason_message is optional. Both decline fields are forbidden when all requested quantity is approved. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |
| `automatic_resolution_type` | Optional | string or null | Optional refund, store_credit, or no_monetary_action that Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the absent value from no-policy defaults. Send null to resolve the line manually; clearing a policy proposal's automatic value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`, `null`. |
| `decline_reason` | Conditional | string | Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. |
| `decline_reason_message` | Optional | string | Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code points), counted before normalization. Requires decline_reason and is forbidden when all requested quantity is approved. minLength: `1`. maxLength: `2048`. |
| `is_inspection_required` | Optional | boolean | Optional inspection requirement. Defaults to the buildable pinned policy proposal or false when no proposal can be built. The resulting requirement must be reachable with the merged merchandise quantity and release timing. |
| `override_reason` | Conditional | string | Required when a decision differs from a buildable pinned policy proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. The release timing fill also applies to the proposal and does not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`. |
| `override_reason_message` | Optional | string | Optional explanation accompanying override_reason. Requires override_reason and is forbidden without a pinned policy. minLength: `1`. |
| `receiving_location_id` | Optional | string | Optional receiving Location with a postal address. Defaults to the buildable pinned policy proposal or no location when no proposal can be built. Required when the resulting return_required_quantity is above zero and there is no starting location. A process receipt does not supply the decision's location. minLength: `1`. |
| `release_timing` | Optional | string | Optional gate for every resolution type. Defaults to the policy proposal's timing when set. After merging supplied fields, an unset timing becomes after_inspection when return_required_quantity is above zero and inspection is required, after_receipt when return_required_quantity is above zero without inspection, or after_approval when return_required_quantity is zero. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `return_line_item_id` | Required | string | minLength: `1`. |
| `return_required_quantity` | Optional | integer string | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. |

### ReturnLineDecision variant 1

anyOf group 1 variant 1.

- Condition: not (present(`decline_reason_message`)).
- Optional: `decline_reason`, `override_reason`.

### ReturnLineDecision variant 2

anyOf group 1 variant 2.

- Required: `decline_reason`.
- Optional: `override_reason`.

### ReturnLineDecision variant 3

anyOf group 2 variant 1.

- Condition: not (present(`override_reason_message`)).
- Optional: `decline_reason`, `override_reason`.

### ReturnLineDecision variant 4

anyOf group 2 variant 2.

- Required: `override_reason`.
- Optional: `decline_reason`.

