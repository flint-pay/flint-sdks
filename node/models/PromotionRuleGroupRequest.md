[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleGroupRequest

A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all). |

### PromotionRuleGroupRequest variant 1

oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionRuleGroupRequest variant 2

oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionRuleGroupRequest variant 1.all[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all).

### PromotionRuleGroupRequest variant 2.any[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all).

