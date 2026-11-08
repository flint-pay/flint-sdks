[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevisionInputReturnableInput

The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Resolution types a request can use under this policy. A value can't repeat. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Outcome Flint creates and confirms itself when `resolution_selection_mode` is `policy_default`. Must be one of `allowed_resolution_types`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `completion_mode` | Required | string | Whether Flint completes a Return judged under this policy when its last completion blocker clears (`automatic`) or waits for you (`manual`). Values: `"manual"`, `"automatic"`. |
| `eligibility_result` | Required | string | Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. What the policy decides for items it covers. Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. What the policy decides for items it covers. Values: `"eligible"`, `"review_required"`. |
| `is_inspection_required` | Optional | boolean | Whether returned merchandise must be inspected. Leave out when no merchandise has to come back. |
| `is_merchandise_return_required` | Required | boolean | Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the Return settles the money. |
| `priority` | Required | integer | Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: `int32`. |
| `receipt_disposition_mode` | Optional | string | Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Conditional | string | Where returned merchandise is sent. Required when is_merchandise_return_required is true. Presence is checked when the revision is written; whether the Location exists, is active, and carries a postal address is checked when the policy is activated. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `release_timing` | Optional | string | Required whenever allowed_resolution_types contains refund or store_credit. For other types, an omitted timing defaults to after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required. after_handoff and after_receipt require is_merchandise_return_required, and after_inspection also requires is_inspection_required. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `resolution_mode` | Required | string | Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you (`manual`). Values: `"automatic"`, `"manual"`. |
| `resolution_selection_mode` | Conditional | string | Who picks an automatic outcome. Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicyRequestInput](../models/ReturnRestockingFeePolicyRequestInput.md#returnrestockingfeepolicyrequestinput) | Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_shipping` | Optional | [ReturnShippingPolicyRequestInput](../models/ReturnShippingPolicyRequestInput.md#returnshippingpolicyrequestinput) | Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Optional | [ReturnWindowRequestInput](../models/ReturnWindowRequestInput.md#returnwindowrequestinput) | How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Required | [ReturnPolicyScopeRequestInput](../models/ReturnPolicyScopeRequestInput.md#returnpolicyscoperequestinput) | Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. |

### ReturnPolicyRevisionInputReturnableInput variant 1: `resolution_mode` = `"manual"`

anyOf group 1 variant 1.

- Condition: not (at least one(present(`ineligibility_reason`))).
- Condition: not (at least one(present(`resolution_selection_mode`); present(`automatic_resolution_type`))).
- Optional: `receiving_location_id`, `resolution_selection_mode`.
- Constraints for `resolution_mode`: Values: `"manual"`.

### ReturnPolicyRevisionInputReturnableInput variant 2: `resolution_mode` = `"automatic"`

anyOf group 1 variant 2.

- Condition: not (at least one(present(`ineligibility_reason`))).
- Required: `resolution_selection_mode`.
- Optional: `receiving_location_id`.
- Constraints for `resolution_mode`: Values: `"automatic"`.

### ReturnPolicyRevisionInputReturnableInput variant 3: `is_merchandise_return_required` = `false`

anyOf group 2 variant 1.

- Condition: not (at least one(present(`ineligibility_reason`))).
- Optional: `receiving_location_id`, `resolution_selection_mode`.
- Constraints for `is_merchandise_return_required`: Values: `false`.

### ReturnPolicyRevisionInputReturnableInput variant 4: `is_merchandise_return_required` = `true`

anyOf group 2 variant 2.

- Condition: not (at least one(present(`ineligibility_reason`))).
- Required: `receiving_location_id`.
- Optional: `resolution_selection_mode`.
- Constraints for `is_merchandise_return_required`: Values: `true`.

