[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPromotionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Optional | integer or null | First charged cycle eligible for this promotion. `first_cycle`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesfirst_cycle). |
| `name` | Optional | string or null | Name the promotion shows buyers: its display name, or its name when it has no display name. Frozen when the promotion was attached. `name`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesname). |
| `promotion_code_id` | Optional | string or null | ID of the promotion code used to attach the promotion. Null when no promotion code was used. `promotion_code_id`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributespromotion_code_id). |
| `promotion_id` | Optional | string or null | ID of the promotion attached to the subscription. `promotion_id`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributespromotion_id). |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) or null | How often the promotion's discount repeats, frozen when the promotion was attached. `recurrence`: [declared alternatives](../models/SubscriptionPromotionPreviousAttributes.md#subscriptionpromotionpreviousattributesrecurrence). |
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

- Value shape: string. ID of the promotion code used to attach the promotion. Null when no promotion code was used. 

### SubscriptionPromotionPreviousAttributes.promotion_code_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion code used to attach the promotion. Null when no promotion code was used. 

### SubscriptionPromotionPreviousAttributes.promotion_id

### SubscriptionPromotionPreviousAttributes.promotion_id variant 1

anyOf variant 1: ID of the promotion attached to the subscription..

- Value shape: string. ID of the promotion attached to the subscription. 

### SubscriptionPromotionPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. ID of the promotion attached to the subscription. 

### SubscriptionPromotionPreviousAttributes.recurrence

How often the promotion's discount repeats, frozen when the promotion was attached.

Field definitions: [shared fields](PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence).

### SubscriptionPromotionPreviousAttributes.recurrence variant 1: `type` = `"once"`

anyOf PromotionRecurrencePreviousAttributes; anyOf PromotionRecurrenceOncePreviousAttributes.

- Optional: `period_count`, `type`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### SubscriptionPromotionPreviousAttributes.recurrence variant 2: `type` = `"repeating"`

anyOf PromotionRecurrencePreviousAttributes; anyOf PromotionRecurrenceRepeatingPreviousAttributes.

- Optional: `period_count`, `type`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### SubscriptionPromotionPreviousAttributes.recurrence variant 3: `type` = `"forever"`

anyOf PromotionRecurrencePreviousAttributes; anyOf PromotionRecurrenceForeverPreviousAttributes.

- Optional: `period_count`, `type`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

### SubscriptionPromotionPreviousAttributes.recurrence variant 4

anyOf variant 2.

- Undeclared: `period_count`, `type`.
- Value shape: null. How often the promotion's discount repeats, frozen when the promotion was attached. 

### SubscriptionPromotionPreviousAttributes.recurrence variant 1.period_count

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1period_count).

### SubscriptionPromotionPreviousAttributes.recurrence variant 1.type

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.type](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1type).

### SubscriptionPromotionPreviousAttributes.recurrence variant 2.period_count

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1period_count).

### SubscriptionPromotionPreviousAttributes.recurrence variant 2.type

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.type](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-2type).

### SubscriptionPromotionPreviousAttributes.recurrence variant 3.period_count

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1period_count).

### SubscriptionPromotionPreviousAttributes.recurrence variant 3.type

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.type](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-3type).

### SubscriptionPromotionPreviousAttributes.remaining_cycles

### SubscriptionPromotionPreviousAttributes.remaining_cycles variant 1

anyOf variant 1: Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up..

- Value shape: integer. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. Format: `int64`. 

### SubscriptionPromotionPreviousAttributes.remaining_cycles variant 2

anyOf variant 2.

- Value shape: null. Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion lasts forever and no replacement limits it. With incomplete historical records, remaining cycles may be lower than the unused allowance. If no reliable bound is available, the allowance is treated as used up. 

