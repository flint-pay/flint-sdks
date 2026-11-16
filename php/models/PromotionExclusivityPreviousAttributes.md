[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionExclusivityPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `group` | Optional | string or null | Exact, case-sensitive group name, 1 to 100 characters after trimming. `group`: [declared alternatives](../models/PromotionExclusivityPreviousAttributes.md#promotionexclusivitypreviousattributesgroup). |
| `priority` | Optional | integer or null | Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. `priority`: [declared alternatives](../models/PromotionExclusivityPreviousAttributes.md#promotionexclusivitypreviousattributespriority). |

### PromotionExclusivityPreviousAttributes.group

### PromotionExclusivityPreviousAttributes.group variant 1

anyOf variant 1: Exact, case-sensitive group name, 1 to 100 characters after trimming..

- Value shape: string. Exact, case-sensitive group name, 1 to 100 characters after trimming. Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: `1`. maxLength: `100`. 

### PromotionExclusivityPreviousAttributes.group variant 2

anyOf variant 2.

- Value shape: null. Exact, case-sensitive group name, 1 to 100 characters after trimming. 

### PromotionExclusivityPreviousAttributes.priority

### PromotionExclusivityPreviousAttributes.priority variant 1

anyOf variant 1: Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id..

- Value shape: integer. Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Format: `int32`. Default: `0`. 

### PromotionExclusivityPreviousAttributes.priority variant 2

anyOf variant 2.

- Value shape: null. Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. 

