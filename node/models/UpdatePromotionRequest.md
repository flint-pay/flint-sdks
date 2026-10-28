[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePromotionRequest

The request body for: Update promotion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | [PromotionApplicationMethodPatch](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatch) | Fields of the discount effect to change. Omitted fields keep their stored values. Send only application_method fields to change. Omitted fields keep their stored values. Sending a different type replaces the effect with the supplied effect fields; allocation, calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y. minProperties: `1`. |
| `combines_with` | Optional | [PromotionCombinesWithPatch](../models/PromotionCombinesWithPatch.md#promotioncombineswithpatch) | Send only the classes to change. Omitted classes keep their current value. null, an empty object, and null classes are invalid. Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values. minProperties: `1`. `combines_with`: [field definitions](../models/UpdatePromotionRequest.md#updatepromotionrequestcombines_with). |
| `description` | Optional | string or null | Description of the promotion for your own records. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `discount_class` | Optional | string | Promotion discount class. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Optional | string | Buyer-facing promotion name shown in checkout and order discount surfaces. minLength: `1`. maxLength: `255`. |
| `eligibility_rules` | Optional | [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest) or null | Replaces the promotion's eligibility conditions. Send null to remove all eligibility conditions. `eligibility_rules`: [declared alternatives](../models/UpdatePromotionRequest.md#updatepromotionrequesteligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivityPatch](../models/PromotionExclusivityPatch.md#promotionexclusivitypatch) or null | Fields of the exclusivity group and priority to change. Send null to remove the promotion from its exclusivity group. |
| `expected_version` | Optional | integer string | Resource version last read by the caller. Required when application_method or eligibility_rules is present, including an empty collection or a supported null clear. Optional for scalar updates. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `max_uses` | Optional | integer string or null | Maximum number of redemptions across all codes and automatic applications. Send null to remove the redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. |
| `name` | Optional | string | Internal promotion name for dashboards, searching, and reporting. minLength: `1`. maxLength: `255`. |
| `schedule` | Optional | [PromotionSchedulePatch](../models/PromotionSchedulePatch.md#promotionschedulepatch) or null | Fields of the promotion schedule to change. Send null to remove the schedule. |
| `status` | Optional | string | Lifecycle status to set: active or inactive. Archived promotions cannot be updated. Values: `"active"`, `"inactive"`. |

### UpdatePromotionRequest.combines_with

Send only the classes to change. Omitted classes keep their current value. null, an empty object, and null classes are invalid. Change which promotion discount classes this promotion can combine with. Omitted classes keep their current values. minProperties: `1`.

Field definitions: [shared fields](PromotionCombinesWithPatch.md#promotioncombineswithpatch).

### UpdatePromotionRequest.eligibility_rules

Replaces the promotion's eligibility conditions. Send null to remove all eligibility conditions.

Field definitions: [shared fields](PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules).

### UpdatePromotionRequest.eligibility_rules variant 1

anyOf variant 1: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf variant 1.

- Required: `all`.
- Undeclared: `any`.

### UpdatePromotionRequest.eligibility_rules variant 2

anyOf variant 1: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf variant 2.

- Required: `any`.
- Undeclared: `all`.

### UpdatePromotionRequest.eligibility_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Replaces the promotion's eligibility conditions. Send null to remove all eligibility conditions. 

### UpdatePromotionRequest.eligibility_rules variant 1.all[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all).

### UpdatePromotionRequest.eligibility_rules variant 2.any[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all).

