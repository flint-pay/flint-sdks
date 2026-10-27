[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevision

A saved revision of a return policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `completion_mode` | Optional | string | Values: `"manual"`, `"automatic"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `effective_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `eligibility_result` | Required | string | Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `ineligibility_reason` | Optional | string | Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Optional | boolean |  |
| `is_merchandise_return_required` | Required | boolean |  |
| `priority` | Required | integer | Format: `int32`. |
| `receipt_disposition_mode` | Required | string | Controls verified merchandise after receipt. automatic creates a successful sellable disposition at the receiving location. For tracked merchandise, it also creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If the Return line requires inspection, creation waits for an accepted inspection. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Optional | string |  |
| `release_timing` | Optional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `resolution_mode` | Optional | string | Values: `"automatic"`, `"manual"`. |
| `resolution_selection_mode` | Optional | string | Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy) | A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_policy_id` | Required | string |  |
| `return_policy_revision_id` | Required | string |  |
| `return_shipping` | Optional | [ReturnShippingPolicy](../models/ReturnShippingPolicy.md#returnshippingpolicy) | Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Optional | [ReturnWindow](../models/ReturnWindow.md#returnwindow) | How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Required | [ReturnPolicyScope](../models/ReturnPolicyScope.md#returnpolicyscope) | The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. |

