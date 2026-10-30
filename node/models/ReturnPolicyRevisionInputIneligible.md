[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevisionInputIneligible

The `ineligible` variant of `ReturnPolicyRevisionInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `eligibility_result` | Required | string | Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. Values: `"ineligible"`. |
| `ineligibility_reason` | Optional | string | Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Optional | boolean |  |
| `is_merchandise_return_required` | Required | boolean |  |
| `priority` | Required | integer | Format: `int32`. |
| `receipt_disposition_mode` | Optional | string | Controls verified merchandise after receipt. automatic creates a successful sellable disposition at the receiving location. For tracked merchandise, it also creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If the Return line requires inspection, creation waits for an accepted inspection. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Optional | string | Where returned merchandise is sent. Required when is_merchandise_return_required is true. Presence is checked when the revision is written; whether the Location exists, is active, and carries a postal address is checked when the policy is activated. minLength: `1`. |
| `resolution_selection_mode` | Optional | string | Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy) | A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_shipping` | Optional | [ReturnShippingPolicy](../models/ReturnShippingPolicy.md#returnshippingpolicy) | Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Optional | [ReturnWindow](../models/ReturnWindow.md#returnwindow) | How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Required | [ReturnPolicyScope](../models/ReturnPolicyScope.md#returnpolicyscope) | The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. |

