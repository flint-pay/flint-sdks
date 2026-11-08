[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreviewResponseInput

The response for: Preview subscription.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionCreatePreviewInput](../models/SubscriptionCreatePreviewInput.md#subscriptioncreatepreviewinput) or [SubscriptionPreviewInput](../models/SubscriptionPreviewInput.md#subscriptionpreviewinput) or [SubscriptionDeliveryMethodImpactInput](../models/SubscriptionDeliveryMethodImpactInput.md#subscriptiondeliverymethodimpactinput) or [SubscriptionRenewalPreviewInput](../models/SubscriptionRenewalPreviewInput.md#subscriptionrenewalpreviewinput) or [SubscriptionPlanChangePreviewInput](../models/SubscriptionPlanChangePreviewInput.md#subscriptionplanchangepreviewinput) or [SubscriptionQuantityChangePreviewInput](../models/SubscriptionQuantityChangePreviewInput.md#subscriptionquantitychangepreviewinput) or [SubscriptionPromotionApplyPreviewInput](../models/SubscriptionPromotionApplyPreviewInput.md#subscriptionpromotionapplypreviewinput) | Resource, collection, or operation result returned by this request. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

