[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPolicyRevision

A saved revision of a return policy.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Required | Array of string | Resolution types a request can use under this policy. A value can't repeat. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approval_mode` | Required | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Optional | string | Outcome Flint creates and confirms itself when `resolution_selection_mode` is `policy_default`. Must be one of `allowed_resolution_types`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `completion_mode` | Optional | string | Whether Flint completes a Return judged under this policy when its last completion blocker clears (`automatic`) or waits for you (`manual`). Values: `"manual"`, `"automatic"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `effective_at` | Optional | string | When this revision started judging requests: when it became current on an active policy, or when its policy was first activated. Absent if it was never current while the policy was active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `eligibility_result` | Required | string | What the policy decides for items it covers. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `ineligibility_reason` | Optional | string | Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Optional | boolean | Whether returned merchandise must be inspected. Leave out when no merchandise has to come back. |
| `is_merchandise_return_required` | Required | boolean | Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the Return settles the money. |
| `priority` | Required | integer | Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: `int32`. minimum: `0`. |
| `receipt_disposition_mode` | Required | string | Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Optional | string | ID of the Location buyers send the merchandise to. Required when merchandise has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `release_timing` | Optional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `resolution_mode` | Optional | string | Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you (`manual`). Values: `"automatic"`, `"manual"`. |
| `resolution_selection_mode` | Optional | string | Who picks an automatic outcome. Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy) | Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible revision, the fee is stored but ignored; the percent range is not enforced, but the four-decimal precision limit still applies. A restocking fee in a return policy, charged as a flat amount or a percent. `restocking_fee`: [field definitions](../models/ReturnPolicyRevision.md#returnpolicyrevisionrestocking_fee). |
| `return_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Required | string | Unique identifier for this return policy revision, prefixed `rpolv_`. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_shipping` | Optional | [ReturnShippingPolicy](../models/ReturnShippingPolicy.md#returnshippingpolicy) | Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer. `return_shipping`: [field definitions](../models/ReturnPolicyRevision.md#returnpolicyrevisionreturn_shipping). |
| `return_window` | Optional | [ReturnWindow](../models/ReturnWindow.md#returnwindow) | How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. `return_window`: [field definitions](../models/ReturnPolicyRevision.md#returnpolicyrevisionreturn_window). |
| `scope` | Required | [ReturnPolicyScope](../models/ReturnPolicyScope.md#returnpolicyscope) | Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. `scope`: [declared alternatives](../models/ReturnPolicyRevision.md#returnpolicyrevisionscope). |

### ReturnPolicyRevision.restocking_fee

Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible revision, the fee is stored but ignored; the percent range is not enforced, but the four-decimal precision limit still applies. A restocking fee in a return policy, charged as a flat amount or a percent.

Field definitions: [shared fields](ReturnRestockingFeePolicy.md#returnrestockingfeepolicy).

### ReturnPolicyRevision.restocking_fee.flat_money

Fixed fee proposed for each line, whatever the quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnPolicyRevision.return_shipping

Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payer` | Required | string | Who pays for shipping the goods back. This states your policy and charges nothing. Values: `"merchant"`, `"buyer"`. |

### ReturnPolicyRevision.return_window

How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy.

Field definitions: [shared fields](ReturnWindow.md#returnwindow).

### ReturnPolicyRevision.scope

Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.

Field definitions: [shared fields](ReturnPolicyScope.md#returnpolicyscope).

### ReturnPolicyRevision.scope variant 1: `match_type` = `"all"`

oneOf with match_type: "all": The `all` variant of `ReturnPolicyScope`..

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### ReturnPolicyRevision.scope variant 2: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### ReturnPolicyRevision.scope variant 3: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### ReturnPolicyRevision.scope variant 4: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyRevision.scope variant 5: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### ReturnPolicyRevision.scope variant 6: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `match_type`: Values: `"include"`.

