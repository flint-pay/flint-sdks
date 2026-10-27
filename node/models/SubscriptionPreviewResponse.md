[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponse

The response for: Preview subscription.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPreview](../models/SubscriptionPreview.md#subscriptionpreview) or [SubscriptionDeliveryMethodImpact](../models/SubscriptionDeliveryMethodImpact.md#subscriptiondeliverymethodimpact) or [SubscriptionRenewalPreview](../models/SubscriptionRenewalPreview.md#subscriptionrenewalpreview) or [SubscriptionPlanChangePreview](../models/SubscriptionPlanChangePreview.md#subscriptionplanchangepreview) |  |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

