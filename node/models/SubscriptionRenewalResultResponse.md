[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionRenewalResultResponse

A response containing `SubscriptionRenewalResult` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionRenewalResult](../models/SubscriptionRenewalResult.md#subscriptionrenewalresult) | The subscription is the primary resource and expected_version target; order and order_payment_attempt report the renewal outcome. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

