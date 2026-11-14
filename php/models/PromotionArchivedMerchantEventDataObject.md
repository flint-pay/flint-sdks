[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedMerchantEventDataObject

The affected public resource without expansions, client authority fields, or fields computed for an individual caller.

The resource snapshot, without expansions. Webhooks omit these fields: `codes`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | Alternative shapes (see declared variants) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. `application_method`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_method). |
| `available` | Required | boolean | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. |
| `codes_summary` | Optional | [PromotionCodesSummary](../models/PromotionCodesSummary.md#promotioncodessummary) | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. A count of a promotion's codes, including how many are redeemable now and the newest redeemable code. |
| `combines_with` | Required | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. |
| `created_at` | Optional | string | When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Optional description of the promotion for your own records. |
| `discount_class` | Required | string | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Required | string | Buyer-facing promotion name shown in checkout and order discount surfaces. |
| `eligibility_rules` | Optional | Alternative shapes (see declared variants) | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `eligibility_rules`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedatacodespromotioneligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `max_uses` | Optional | integer | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: `int64`. |
| `max_uses_per_customer` | Required | integer or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns the promotion. |
| `metadata` | Optional | Map of string | Key-value data you attach to the promotion. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodespromotionmetadata). |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. |
| `promotion_id` | Required | string | Unique identifier for the promotion. |
| `redemption_type` | Required | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. `schedule`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodespromotionschedule). |
| `status` | Required | string | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. |
| `updated_at` | Optional | string | When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. |
| `uses_count` | Required | integer | Number of times the promotion has been redeemed. Format: `int64`. |
| `version` | Required | integer | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. |

### PromotionArchivedMerchantEventDataObject.application_method

Declared alternatives: [PromotionResponse.data.application_method](../models/PromotionResponse.md#promotionresponsedataapplication_method).

### PromotionArchivedMerchantEventDataObject.eligibility_rules

Declared alternatives: [PromotionResponse.data.codes[].promotion.eligibility_rules](../models/PromotionResponse.md#promotionresponsedatacodespromotioneligibility_rules).

### PromotionArchivedMerchantEventDataObject.metadata

Field definitions: [PromotionResponse.data.codes[].promotion.metadata](../models/PromotionResponse.md#promotionresponsedatacodespromotionmetadata).

### PromotionArchivedMerchantEventDataObject.schedule

Field definitions: [PromotionResponse.data.codes[].promotion.schedule](../models/PromotionResponse.md#promotionresponsedatacodespromotionschedule).

