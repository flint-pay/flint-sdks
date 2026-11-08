[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionEffectivePolicy

The collection policy applied to a merchant account session: which requirements it targets, how they are collected, and whether future requirements are included.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_strategy` | Optional | string | How the session collects requirements. Omitted when `targeting` is `none`. Values: `"upfront"`, `"incremental"`. |
| `future_requirements` | Optional | string | Whether the session also collects requirements that will apply later. Omitted when `targeting` is `none`. Values: `"omit"`, `"include"`. |
| `targeting` | Required | string | Which requirements the session's policy-aware components collect. Values: `"none"`, `"all"`, `"all_due"`, `"targeted"`. |

