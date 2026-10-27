[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionExclusivityInput

Only one promotion in an exclusivity group continues. See Promotion for the evaluation order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `group` | Required | string | Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: `1`. maxLength: `100`. |
| `priority` | Required | integer | Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Format: `int32`. Default: `0`. |

