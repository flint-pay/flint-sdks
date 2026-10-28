[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Promotion

Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | [PromotionApplicationMethod](../models/PromotionApplicationMethod.md#promotionapplicationmethod) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. |
| `available` | Required | boolean | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. |
| `codes` | Optional | Array of [PromotionCode](../models/PromotionCode.md#promotioncode) | The codes this request created, in request order. Present only on the `POST /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes later with `GET /v1/promotion-codes?promotion_id=`. |
| `codes_summary` | Optional | [PromotionCodesSummary](../models/PromotionCodesSummary.md#promotioncodessummary) | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. A count of a promotion's codes, including how many are redeemable now and the newest redeemable code. |
| `combines_with` | Required | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. |
| `created_at` | Optional | string | When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Optional description of the promotion for your own records. |
| `discount_class` | Required | string | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Required | string | Buyer-facing promotion name shown in checkout and order discount surfaces. |
| `eligibility_rules` | Optional | [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup) | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `max_uses` | Optional | integer string | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns the promotion. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Key-value data you attach to the promotion. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/IncomingWebhook25e323147b49Payload.md#incomingwebhook25e323147b49payloaddataobjectmetadata). |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. |
| `promotion_id` | Required | string | Unique identifier for the promotion. |
| `redemption_type` | Required | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. `schedule`: [field definitions](../models/IncomingWebhook25e323147b49Payload.md#incomingwebhook25e323147b49payloaddataobjectschedule). |
| `status` | Required | string | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. |
| `updated_at` | Optional | string | When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. |
| `uses_count` | Required | integer string | Number of times the promotion has been redeemed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `version` | Required | integer string | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### Promotion.metadata

Field definitions: [IncomingWebhook25e323147b49Payload.data.object.metadata](../models/IncomingWebhook25e323147b49Payload.md#incomingwebhook25e323147b49payloaddataobjectmetadata).

### Promotion.schedule fields 1

Field definitions: [IncomingWebhook25e323147b49Payload.data.object.schedule](../models/IncomingWebhook25e323147b49Payload.md#incomingwebhook25e323147b49payloaddataobjectschedule).

