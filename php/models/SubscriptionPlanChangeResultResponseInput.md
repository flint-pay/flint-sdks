[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanChangeResultResponseInput

A response containing `SubscriptionPlanChangeResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SubscriptionPlanChangeResultInput](../models/SubscriptionPlanChangeResultInput.md#subscriptionplanchangeresultinput) | Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; order and order_payment_attempt report immediate billing and are null when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

