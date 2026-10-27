[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionEffectivePolicy

The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | Values: `"upfront"`, `"incremental"`. |
| `future_requirements` | Optional | string | Values: `"omit"`, `"include"`. |
| `targeting` | Required | string | Values: `"none"`, `"all"`, `"all_due"`, `"targeted"`. |

