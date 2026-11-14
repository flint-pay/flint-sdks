[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPolicyResponse

A response containing `ReturnPolicy` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnPolicy](../models/ReturnPolicy.md#returnpolicy) | Resource, collection, or operation result returned by this request. Rules governing whether and how purchased items can be returned. `data`: [field definitions](../models/CreateReturnPolicyResponse.md#createreturnpolicyresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateReturnPolicyResponse.data

Resource, collection, or operation result returned by this request. Rules governing whether and how purchased items can be returned.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_return_policy_revision_id` | Required | string | ID of the revision Flint judges new requests by. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `current_revision` | Optional | [ReturnPolicyRevision](../models/ReturnPolicyRevision.md#returnpolicyrevision) or null | Present only when `expand` includes `current_revision`; `null` when expanded and there is no related return policy revision. `current_revision`: [declared alternatives](../models/CreateReturnPolicyResponse.md#createreturnpolicyresponsedatacurrent_revision). |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `metadata` | Required | Map of string | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/OrderResponse.md#orderresponsedatachargesmetadata). |
| `name` | Required | string | Name of the policy. |
| `return_policy_id` | Required | string | Unique identifier for this return policy, prefixed `rpol_`. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `status` | Required | string | active policies apply to new Returns; inactive policies do not. Toggle active and inactive with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Values: `"active"`, `"inactive"`, `"archived"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. minimum: `1`. |

### CreateReturnPolicyResponse.data.current_revision

Present only when `expand` includes `current_revision`; `null` when expanded and there is no related return policy revision.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Conditional | Array of string | Resolution types a request can use under this policy. A value can't repeat. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. |
| `approval_mode` | Conditional | string | Whether Flint approves eligible lines automatically or waits for merchant review. Automatic approval still waits for the buyer to request a Return. Values: `"automatic"`, `"manual"`. |
| `automatic_resolution_type` | Conditional | string | Outcome Flint creates and confirms itself when `resolution_selection_mode` is `policy_default`. Must be one of `allowed_resolution_types`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. |
| `completion_mode` | Conditional | string | Whether Flint completes a Return judged under this policy when its last completion blocker clears (`automatic`) or waits for you (`manual`). Values: `"manual"`, `"automatic"`. |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `effective_at` | Conditional | string | When this revision started judging requests: when it became current on an active policy, or when its policy was first activated. Absent if it was never current while the policy was active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `eligibility_result` | Conditional | string | What the policy decides for items it covers. Values: `"eligible"`, `"ineligible"`, `"review_required"`. |
| `ineligibility_reason` | Conditional | string | Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. |
| `is_inspection_required` | Conditional | boolean | Whether returned merchandise must be inspected. Leave out when no merchandise has to come back. |
| `is_merchandise_return_required` | Conditional | boolean | Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the Return settles the money. |
| `priority` | Conditional | integer | Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: `int32`. minimum: `0`. |
| `receipt_disposition_mode` | Conditional | string | Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Conditional | string | ID of the Location buyers send the merchandise to. Required when merchandise has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `release_timing` | Conditional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `resolution_mode` | Conditional | string | Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you (`manual`). Values: `"automatic"`, `"manual"`. |
| `resolution_selection_mode` | Conditional | string | Who picks an automatic outcome. Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Conditional | [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy) | Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible revision, the fee is stored but ignored; the percent range is not enforced, but the four-decimal precision limit still applies. A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_policy_id` | Conditional | string | ID of the policy this revision belongs to. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Conditional | string | Unique identifier for this return policy revision, prefixed `rpolv_`. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_shipping` | Conditional | [ReturnShippingPolicy](../models/ReturnShippingPolicy.md#returnshippingpolicy) | Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Conditional | [ReturnWindow](../models/ReturnWindow.md#returnwindow) | How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Conditional | object and Alternative shapes (see declared variants) | Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. `scope`: [declared alternatives](../models/CreateReturnPolicyResponse.md#createreturnpolicyresponsedatacurrent_revision-variant-1scope). |

### CreateReturnPolicyResponse.data.current_revision variant 1

anyOf ReturnPolicyRevision: A saved revision of a return policy..

- Required: `allowed_resolution_types`, `approval_mode`, `created_at`, `eligibility_result`, `is_merchandise_return_required`, `priority`, `receipt_disposition_mode`, `return_policy_id`, `return_policy_revision_id`, `scope`.
- Optional: `automatic_resolution_type`, `completion_mode`, `effective_at`, `ineligibility_reason`, `is_inspection_required`, `receiving_location_id`, `release_timing`, `resolution_mode`, `resolution_selection_mode`, `restocking_fee`, `return_shipping`, `return_window`.

### CreateReturnPolicyResponse.data.current_revision variant 2

anyOf variant 2.

- Undeclared: `allowed_resolution_types`, `approval_mode`, `automatic_resolution_type`, `completion_mode`, `created_at`, `effective_at`, `eligibility_result`, `ineligibility_reason`, `is_inspection_required`, `is_merchandise_return_required`, `priority`, `receipt_disposition_mode`, `receiving_location_id`, `release_timing`, `resolution_mode`, `resolution_selection_mode`, `restocking_fee`, `return_policy_id`, `return_policy_revision_id`, `return_shipping`, `return_window`, `scope`.
- Value shape: null. Present only when `expand` includes `current_revision`; `null` when expanded and there is no related return policy revision. 

### CreateReturnPolicyResponse.data.current_revision variant 1.scope

Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them.

Field definitions: [shared fields](ReturnPolicyScopeInput.md#returnpolicyscopeinput).

### CreateReturnPolicyResponse.data.current_revision variant 1.scope variant 1: `match_type` = `"all"`

oneOf with match_type: "all": The `all` variant of `ReturnPolicyScope`..

- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: maxItems: `0`.
- Constraints for `channel_types`: maxItems: `0`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `location_ids`: maxItems: `0`.
- Constraints for `match_type`: Values: `"all"`.
- Constraints for `product_ids`: maxItems: `0`.
- Constraints for `variant_ids`: maxItems: `0`.

### CreateReturnPolicyResponse.data.current_revision variant 1.scope variant 2: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 1.

- Required: `product_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `variant_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `product_ids`: minItems: `1`.

### CreateReturnPolicyResponse.data.current_revision variant 1.scope variant 3: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 2.

- Required: `variant_ids`.
- Optional: `category_handles`, `channel_types`, `location_ids`, `product_ids`.
- Constraints for `match_type`: Values: `"include"`.
- Constraints for `variant_ids`: minItems: `1`.

### CreateReturnPolicyResponse.data.current_revision variant 1.scope variant 4: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 3.

- Required: `category_handles`.
- Optional: `channel_types`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `category_handles`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### CreateReturnPolicyResponse.data.current_revision variant 1.scope variant 5: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 4.

- Required: `location_ids`.
- Optional: `category_handles`, `channel_types`, `product_ids`, `variant_ids`.
- Constraints for `location_ids`: minItems: `1`.
- Constraints for `match_type`: Values: `"include"`.

### CreateReturnPolicyResponse.data.current_revision variant 1.scope variant 6: `match_type` = `"include"`

oneOf with match_type: "include": The `include` variant of `ReturnPolicyScope`.; anyOf variant 5.

- Required: `channel_types`.
- Optional: `category_handles`, `location_ids`, `product_ids`, `variant_ids`.
- Constraints for `channel_types`: minItems: `1`. Items values: `"checkout"`, `"payment_link"`, `"virtual_terminal"`, `"api"`, `"subscription"`.
- Constraints for `match_type`: Values: `"include"`.

### CreateReturnPolicyResponse.data.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### CreateReturnPolicyResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

