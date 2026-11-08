[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevisionInputIneligibleInput

The `ineligible` variant of `ReturnPolicyRevisionInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Outcome Flint creates and confirms itself when `resolution_selection_mode` is `policy_default`. Must be one of `allowed_resolution_types`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `eligibility_result` | Required | string | Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. What the policy decides for items it covers. Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. What the policy decides for items it covers. Values: `"ineligible"`. |
| `ineligibility_reason` | Required | string | Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Optional | boolean | Whether returned merchandise must be inspected. Leave out when no merchandise has to come back. |
| `is_merchandise_return_required` | Required | boolean | Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the Return settles the money. |
| `priority` | Required | integer | Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: `int32`. |
| `receipt_disposition_mode` | Optional | string | Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Optional | string | Where returned merchandise is sent. Required when is_merchandise_return_required is true. Presence is checked when the revision is written; whether the Location exists, is active, and carries a postal address is checked when the policy is activated. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `resolution_selection_mode` | Optional | string | Who picks an automatic outcome. Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicyRequestInput](../models/ReturnRestockingFeePolicyRequestInput.md#returnrestockingfeepolicyrequestinput) | Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_shipping` | Optional | [ReturnShippingPolicyRequestInput](../models/ReturnShippingPolicyRequestInput.md#returnshippingpolicyrequestinput) | Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Optional | [ReturnWindowRequestInput](../models/ReturnWindowRequestInput.md#returnwindowrequestinput) | How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Required | [ReturnPolicyScopeRequestInput](../models/ReturnPolicyScopeRequestInput.md#returnpolicyscoperequestinput) | Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. |

