[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionPlanChangeResultResponseInput

A response containing `BuyerSubscriptionPlanChangeResult` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionPlanChangeResultInput](../models/BuyerSubscriptionPlanChangeResultInput.md#buyersubscriptionplanchangeresultinput) | Resource, collection, or operation result returned by this request. The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads. The order and order_payment_attempt are null when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

