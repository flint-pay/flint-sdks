[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GetReturnPolicyRevisionResponse

A response containing `ReturnPolicyRevision` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ReturnPolicyRevision](../models/ReturnPolicyRevision.md#returnpolicyrevision) | Resource, collection, or operation result returned by this request. A saved revision of a return policy. `data`: [field definitions](../models/GetReturnPolicyRevisionResponse.md#getreturnpolicyrevisionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GetReturnPolicyRevisionResponse.data

Resource, collection, or operation result returned by this request. A saved revision of a return policy.

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
| `priority` | Required | integer | Which policy wins when several cover an item: the highest priority applies. Zero or higher. Format: `int32`. |
| `receipt_disposition_mode` | Required | string | Controls verified merchandise after receipt. automatic creates a disposition at the receiving location with reason inspection_result: sellable without inspection; after an accepted inspection, new and unopened map to sellable, opened, used, incomplete, and undetermined map to quality_control, and damaged and defective map to damaged. Successful tracked dispositions also create an inventory receipt and movement. Untracked merchandise has no inventory effect. If the inventory item is unmapped, the observation is recorded and the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or create a replacement; retry is unavailable. manual leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value defaults to automatic. Default: `"automatic"`. Values: `"automatic"`, `"manual"`. |
| `receiving_location_id` | Optional | string | ID of the Location buyers send the merchandise to. Required when merchandise has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `release_timing` | Optional | string | Release gate for every resolution type, including exchanges and replacements. Released after the Return is approved. Released after the buyer hands back the required merchandise. Released after the required merchandise is received. Released after the required merchandise passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. |
| `resolution_mode` | Optional | string | Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you (`manual`). Values: `"automatic"`, `"manual"`. |
| `resolution_selection_mode` | Optional | string | Who picks an automatic outcome. Values: `"policy_default"`, `"buyer_requested"`. |
| `restocking_fee` | Optional | [ReturnRestockingFeePolicy](../models/ReturnRestockingFeePolicy.md#returnrestockingfeepolicy) | Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return policy, charged as a flat amount or a percent. |
| `return_policy_id` | Required | string | ID of the policy this revision belongs to. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. |
| `return_policy_revision_id` | Required | string | Unique identifier for this return policy revision, prefixed `rpolv_`. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_shipping` | Optional | [ReturnShippingPolicy](../models/ReturnShippingPolicy.md#returnshippingpolicy) | Who pays for shipping the goods back. Who pays for return shipping in a return policy: the merchant or the buyer. |
| `return_window` | Optional | [ReturnWindow](../models/ReturnWindow.md#returnwindow) | How long after its starting event a line can be returned. Leave out for no deadline. How long after an event, such as fulfillment or delivery, an order can be returned under a return policy. |
| `scope` | Required | object and Alternative shapes (see declared variants) | Which items the policy covers. The products, variants, categories, channels, or locations a return policy revision applies to, or all of them. `scope`: [declared alternatives](../models/CreateReturnPolicyResponse.md#createreturnpolicyresponsedatacurrent_revision-variant-1scope). |

### GetReturnPolicyRevisionResponse.data.scope

Declared alternatives: [CreateReturnPolicyResponse.data.current_revision variant 1.scope](../models/CreateReturnPolicyResponse.md#createreturnpolicyresponsedatacurrent_revision-variant-1scope).

### GetReturnPolicyRevisionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

