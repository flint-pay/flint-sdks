[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeResultResponse

A response containing `SubscriptionPlanChangeResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPlanChangeResult](../models/SubscriptionPlanChangeResult.md#subscriptionplanchangeresult) | The result of changing a subscription plan, including the subscription and any order and payment attempt created for immediate billing. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

