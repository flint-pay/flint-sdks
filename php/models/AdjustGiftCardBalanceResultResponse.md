[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AdjustGiftCardBalanceResultResponse

A response containing `AdjustGiftCardBalanceResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AdjustGiftCardBalanceResult](../models/AdjustGiftCardBalanceResult.md#adjustgiftcardbalanceresult) | Resource, collection, or operation result returned by this request. The result of adjusting a gift card's value: the updated gift card, the transactions the adjustment created, and a gift card load when one was made. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### AdjustGiftCardBalanceResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

