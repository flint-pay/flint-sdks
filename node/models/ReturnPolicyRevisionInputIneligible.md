[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevisionInputIneligible

The `ineligible` variant of `ReturnPolicyRevisionInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Outcome Flint creates and confirms itself when `resolution_selection_mode` is `policy_default`. Must be one of `allowed_resolution_types`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `eligibility_result` | Required | string | Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. What the policy decides for items it covers. Whether merchandise matching this scope may be returned. An ineligible revision commits no resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and review_required revisions require allowed_resolution_types, resolution_mode, and completion_mode. What the policy decides for items it covers. Values: `"ineligible"`. |
| `ineligibility_reason` | Required | string | Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Optional | boolean | Whether returned merchandise must be inspected. Leave out when no merchandise has to come back. |
| `is_merchandise_return_required` | Required | boolean | Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the Return settles the money. |
| `priority` | Required | integer | Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: `int32`. minimum: `0`. |
| `receipt_disposition_mode` | Optional | string | Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Optional | string | Where returned merchandise is sent. Required when is_merchandise_return_required is true. Presence is checked when the revision is written; whether the Location exists, is active, and carries a postal address is checked when the policy is activated. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `resolution_selection_mode` | Optional | string | Who picks an automatic outcome. Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy) | Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible revision, the fee is stored but ignored; the percent range is not enforced, but the four-decimal precision limit still applies. A restocking fee in a return policy, charged as a flat amount or a percent. `restocking_fee`: [field definitions](../models/ReturnPolicyRevisionInputIneligible.md#returnpolicyrevisioninputineligiblerestocking_fee). |
| `return_shipping` | Optional | [ReturnShippingPolicy](../models/ReturnShippingPolicy.md#returnshippingpolicy) | Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer. `return_shipping`: [field definitions](../models/ReturnPolicyRevisionInputIneligible.md#returnpolicyrevisioninputineligiblereturn_shipping). |
| `return_window` | Optional | [ReturnWindow](../models/ReturnWindow.md#returnwindow) | How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. `return_window`: [field definitions](../models/ReturnPolicyRevisionInputIneligible.md#returnpolicyrevisioninputineligiblereturn_window). |
| `scope` | Required | [ReturnPolicyScope](../models/ReturnPolicyScope.md#returnpolicyscope) | Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. `scope`: [declared alternatives](../models/ReturnPolicyRevisionInputIneligible.md#returnpolicyrevisioninputineligiblescope). |

### ReturnPolicyRevisionInputIneligible.restocking_fee

Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible revision, the fee is stored but ignored; the percent range is not enforced, but the four-decimal precision limit still applies. A restocking fee in a return policy, charged as a flat amount or a percent.

Field definitions: [shared fields](ReturnRestockingFeePolicy.md#returnrestockingfeepolicy).

### ReturnPolicyRevisionInputIneligible.restocking_fee.flat_money

Field definitions: [ReturnPolicyRevision.restocking_fee.flat_money](../models/ReturnPolicyRevision.md#returnpolicyrevisionrestocking_feeflat_money).

### ReturnPolicyRevisionInputIneligible.return_shipping

Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payer` | Required | string | Who pays for shipping the goods back. This states your policy and charges nothing. Values: `"merchant"`, `"buyer"`. |

### ReturnPolicyRevisionInputIneligible.return_window

How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.

Field definitions: [shared fields](ReturnWindow.md#returnwindow).

### ReturnPolicyRevisionInputIneligible.scope

Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.

Field definitions: [shared fields](ReturnPolicyScope.md#returnpolicyscope).

### ReturnPolicyRevisionInputIneligible.scope variant 1: `match_type` = `"all"`

oneOf with match_type: "all": The `all` variant of `ReturnPolicyScope`..

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### ReturnPolicyRevisionInputIneligible.scope variant 2: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyRevisionInputIneligible.scope variant 3: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyRevisionInputIneligible.scope variant 4: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyRevisionInputIneligible.scope variant 5: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyRevisionInputIneligible.scope variant 6: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `match_type`: Values: `"include"`.

