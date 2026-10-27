[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevisionRequestInput

The rules for a return policy revision: scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Conditional | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `completion_mode` | Conditional | string | Values: `"manual"`, `"automatic"`. |
| `eligibility_result` | Required | string | Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `ineligibility_reason` | Optional | string | Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Optional | boolean |  |
| `is_merchandise_return_required` | Required | boolean |  |
| `priority` | Required | integer | Format: `int32`. |
| `receipt_disposition_mode` | Optional | string | Controls verified merchandise after receipt. automatic creates a successful sellable disposition at the receiving location. For tracked merchandise, it also creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If the Return line requires inspection, creation waits for an accepted inspection. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Conditional | string | Where returned merchandise is sent. Required when is_merchandise_return_required is true. Presence is checked when the revision is written; whether the Location exists, is active, and carries a postal address is checked when the policy is activated. minLength: `1`. |
| `release_timing` | Optional | string | Required whenever allowed_resolution_types contains refund or store_credit. For other types, an omitted timing defaults to after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required. after_handoff and after_receipt require is_merchandise_return_required, and after_inspection also requires is_inspection_required. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `resolution_mode` | Conditional | string | Values: `"automatic"`, `"manual"`. |
| `resolution_selection_mode` | Conditional | string | Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicyInput](../models/ReturnRestockingFeePolicyInput.md#returnrestockingfeepolicyinput) | A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_shipping` | Optional | [ReturnShippingPolicyInput](../models/ReturnShippingPolicyInput.md#returnshippingpolicyinput) | Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Optional | [ReturnWindowInput](../models/ReturnWindowInput.md#returnwindowinput) | How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Required | [ReturnPolicyScopeInput](../models/ReturnPolicyScopeInput.md#returnpolicyscopeinput) | The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. |

### ReturnPolicyRevisionRequestInput variant 1: `eligibility_result` = `"ineligible"`

oneOf variant 1: The `ineligible` variant of `ReturnPolicyRevisionInput`..

- Condition: not (at least one(present(`allowed_resolution_types`); present(`resolution_mode`); present(`release_timing`); present(`completion_mode`))).
- Optional: `allowed_resolution_types`, `completion_mode`, `receiving_location_id`, `resolution_mode`, `resolution_selection_mode`.
- Constraints for `eligibility_result`: Values: `"ineligible"`.

### ReturnPolicyRevisionRequestInput variant 2: `resolution_mode` = `"manual"`

oneOf variant 2: The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.; anyOf group 1 variant 1.

- Condition: not (at least one(present(`resolution_selection_mode`); present(`automatic_resolution_type`))).
- Required: `allowed_resolution_types`, `completion_mode`, `resolution_mode`.
- Optional: `receiving_location_id`, `resolution_selection_mode`.
- Constraints for `eligibility_result`: Values: `"eligible"`, `"review_required"`.
- Constraints for `resolution_mode`: Values: `"manual"`.

### ReturnPolicyRevisionRequestInput variant 3: `resolution_mode` = `"automatic"`

oneOf variant 2: The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.; anyOf group 1 variant 2.

- Required: `allowed_resolution_types`, `completion_mode`, `resolution_mode`, `resolution_selection_mode`.
- Optional: `receiving_location_id`.
- Constraints for `eligibility_result`: Values: `"eligible"`, `"review_required"`.
- Constraints for `resolution_mode`: Values: `"automatic"`.

### ReturnPolicyRevisionRequestInput variant 4: `is_merchandise_return_required` = `false`

oneOf variant 2: The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.; anyOf group 2 variant 1.

- Required: `allowed_resolution_types`, `completion_mode`, `resolution_mode`.
- Optional: `receiving_location_id`, `resolution_selection_mode`.
- Constraints for `eligibility_result`: Values: `"eligible"`, `"review_required"`.
- Constraints for `is_merchandise_return_required`: Values: `false`.

### ReturnPolicyRevisionRequestInput variant 5: `is_merchandise_return_required` = `true`

oneOf variant 2: The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.; anyOf group 2 variant 2.

- Required: `allowed_resolution_types`, `completion_mode`, `receiving_location_id`, `resolution_mode`.
- Optional: `resolution_selection_mode`.
- Constraints for `eligibility_result`: Values: `"eligible"`, `"review_required"`.
- Constraints for `is_merchandise_return_required`: Values: `true`.

