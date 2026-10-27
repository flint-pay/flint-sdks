[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePromotionRequest

The request body for: Create promotion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | [PromotionApplicationMethodRequest](../models/PromotionApplicationMethodRequest.md#promotionapplicationmethodrequest) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. |
| `codes` | Optional | Array of [CreatePromotionCodeRequest](../models/CreatePromotionCodeRequest.md#createpromotioncoderequest) | Codes to create with a code-gated promotion, at most 100. The create response returns them in `codes`. Add more later with `POST /v1/promotions/{promotion_id}/codes`, and manage each code through the `/v1/promotions/{promotion_id}/codes/{promotion_code_id}` routes. maxItems: `100`. |
| `combines_with` | Optional | [PromotionCombinesWithPatch](../models/PromotionCombinesWithPatch.md#promotioncombineswithpatch) | Which discount classes this promotion can combine with. Omitted classes default to true. Which promotion discount classes this promotion can combine with. Omitted classes default to true. `combines_with`: [field definitions](../models/CreatePromotionRequest.md#createpromotionrequestcombines_with). |
| `description` | Optional | string | Optional description of the promotion for your own records. minLength: `1`. maxLength: `500`. |
| `discount_class` | Optional | string | Defaults to order when omitted. Default: `"order"`. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Optional | string | Buyer-facing promotion name shown in checkout and order discount surfaces. Defaults to name when omitted. minLength: `1`. maxLength: `255`. |
| `eligibility_rules` | Optional | [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest) | Conditions an order must satisfy for the promotion to apply. Omit to create a promotion with no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `exclusivity` | Optional | [PromotionExclusivityRequest](../models/PromotionExclusivityRequest.md#promotionexclusivityrequest) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `max_uses` | Optional | integer string | Maximum number of redemptions across all codes and automatic applications. Omit for no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Map values: minLength: `1`. |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. This is not intended for buyer-facing checkout or receipt copy. minLength: `1`. maxLength: `255`. |
| `redemption_type` | Optional | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. |
| `status` | Optional | string | Lifecycle status. Defaults to active; send inactive to create a promotion that is switched off. Default: `"active"`. Values: `"active"`, `"inactive"`. |

### CreatePromotionRequest.combines_with

Which discount classes this promotion can combine with. Omitted classes default to true. Which promotion discount classes this promotion can combine with. Omitted classes default to true.

Field definitions: [shared fields](PromotionCombinesWithPatch.md#promotioncombineswithpatch).

