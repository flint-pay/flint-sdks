[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Optional | integer or null | First charged cycle eligible for this promotion. `first_cycle`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesfirst_cycle). |
| `name` | Optional | string or null | Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. `name`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesname). |
| `promotion_code_id` | Optional | string or null | ID of the promotion code used to attach the promotion. Null when no promotion code was used. `promotion_code_id`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributespromotion_code_id). |
| `promotion_id` | Optional | string or null | ID of the promotion attached to the subscription. `promotion_id`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributespromotion_id). |
| `recurrence` | Optional | [PromotionRecurrencePreviousAttributes](../models/PromotionRecurrencePreviousAttributes.md#promotionrecurrencepreviousattributes) or null | How often the promotion's discount repeats, frozen when the promotion was attached. |
| `remaining_cycles` | Optional | integer or null | Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. `remaining_cycles`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesremaining_cycles). |

### SubscriptionPromotionPreviousAttributes.first_cycle

### SubscriptionPromotionPreviousAttributes.first_cycle variant 1

anyOf variant 1: First charged cycle eligible for this promotion..

- Value shape: integer. First charged cycle eligible for this promotion. First charged cycle eligible for this promotion. Format: `uint64`. minimum: `1`. 

### SubscriptionPromotionPreviousAttributes.first_cycle variant 2

anyOf variant 2.

- Value shape: null. First charged cycle eligible for this promotion. 

### SubscriptionPromotionPreviousAttributes.name

### SubscriptionPromotionPreviousAttributes.name variant 1

anyOf variant 1: Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached..

- Value shape: string. Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. 

### SubscriptionPromotionPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. 

### SubscriptionPromotionPreviousAttributes.promotion_code_id

### SubscriptionPromotionPreviousAttributes.promotion_code_id variant 1

anyOf variant 1: ID of the promotion code used to attach the promotion. Null when no promotion code was used..

- Value shape: string. ID of the promotion code used to attach the promotion. Null when no promotion code was used. ID of the promotion code used to attach the promotion. Null when no promotion code was used. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. 

### SubscriptionPromotionPreviousAttributes.promotion_code_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion code used to attach the promotion. Null when no promotion code was used. 

### SubscriptionPromotionPreviousAttributes.promotion_id

### SubscriptionPromotionPreviousAttributes.promotion_id variant 1

anyOf variant 1: ID of the promotion attached to the subscription..

- Value shape: string. ID of the promotion attached to the subscription. ID of the promotion attached to the subscription. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. 

### SubscriptionPromotionPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion attached to the subscription. 

### SubscriptionPromotionPreviousAttributes.remaining_cycles

### SubscriptionPromotionPreviousAttributes.remaining_cycles variant 1

anyOf variant 1: Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up..

- Value shape: integer. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: `int64`. 

### SubscriptionPromotionPreviousAttributes.remaining_cycles variant 2

anyOf variant 2.

- Value shape: null. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. 

