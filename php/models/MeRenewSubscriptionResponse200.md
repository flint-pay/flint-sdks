[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeRenewSubscriptionResponse200

A response containing `BuyerSubscriptionRenewalResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerSubscriptionRenewalResult](../models/BuyerSubscriptionRenewalResult.md#buyersubscriptionrenewalresult) | The subscription is the primary resource and expected_version target; the result uses the same subscription and order fields as the corresponding /v1/me reads. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

