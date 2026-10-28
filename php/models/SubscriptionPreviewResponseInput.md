[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponseInput

The response for: Preview subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPreviewInput](../models/SubscriptionPreviewInput.md#subscriptionpreviewinput) or [SubscriptionDeliveryMethodImpactInput](../models/SubscriptionDeliveryMethodImpactInput.md#subscriptiondeliverymethodimpactinput) or [SubscriptionRenewalPreviewInput](../models/SubscriptionRenewalPreviewInput.md#subscriptionrenewalpreviewinput) or [SubscriptionPlanChangePreviewInput](../models/SubscriptionPlanChangePreviewInput.md#subscriptionplanchangepreviewinput) |  |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

