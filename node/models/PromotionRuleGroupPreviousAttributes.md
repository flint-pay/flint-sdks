[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleGroupPreviousAttributes

A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of (([PromotionRulePreviousAttributes](../models/PromotionRulePreviousAttributes.md#promotionrulepreviousattributes) or [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes))) or null | Rules and nested groups that must all match. `all`: [declared alternatives](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes-variant-1all). |
| `any` | Conditional | Array of (([PromotionRulePreviousAttributes](../models/PromotionRulePreviousAttributes.md#promotionrulepreviousattributes) or [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes))) or null | Rules and nested groups of which at least one must match. `any`: [declared alternatives](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes-variant-2any). |

### PromotionRuleGroupPreviousAttributes variant 1

anyOf variant 1.

- Optional: `all`.
- Undeclared: `any`.

### PromotionRuleGroupPreviousAttributes variant 2

anyOf variant 2.

- Optional: `any`.
- Undeclared: `all`.

### PromotionRuleGroupPreviousAttributes variant 1.all

### PromotionRuleGroupPreviousAttributes variant 1.all variant 1

anyOf variant 1: Rules and nested groups that must all match..

- Value shape: (Array of (([PromotionRulePreviousAttributes](../models/PromotionRulePreviousAttributes.md#promotionrulepreviousattributes) or [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes)))). Rules and nested groups that must all match. Rules and nested groups that must all match. minItems: `1`. 

### PromotionRuleGroupPreviousAttributes variant 1.all variant 2

anyOf variant 2.

- Value shape: null. Rules and nested groups that must all match. 

### PromotionRuleGroupPreviousAttributes variant 2.any

### PromotionRuleGroupPreviousAttributes variant 2.any variant 1

anyOf variant 1: Rules and nested groups of which at least one must match..

- Value shape: (Array of (([PromotionRulePreviousAttributes](../models/PromotionRulePreviousAttributes.md#promotionrulepreviousattributes) or [PromotionRuleGroupPreviousAttributes](../models/PromotionRuleGroupPreviousAttributes.md#promotionrulegrouppreviousattributes)))). Rules and nested groups of which at least one must match. Rules and nested groups of which at least one must match. minItems: `1`. 

### PromotionRuleGroupPreviousAttributes variant 2.any variant 2

anyOf variant 2.

- Value shape: null. Rules and nested groups of which at least one must match. 

