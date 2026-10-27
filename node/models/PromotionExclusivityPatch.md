[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionExclusivityPatch

Send only fields to change. Omitted fields keep their stored values. Send priority 0 to reset it. An empty object is invalid. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `group` | Optional | string | Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: `1`. maxLength: `100`. |
| `priority` | Optional | integer | Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Format: `int32`. Default: `0`. |

