[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceListResponse

A list of `MerchantBillingBalance` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/MerchantBillingBalanceListResponse.md#merchantbillingbalancelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantBillingBalanceListResponse.data[]

Current Flint merchant billing balance for one billing account and currency.

Field definitions: [shared fields](MerchantBillingBalanceResponse.md#merchantbillingbalanceresponsedata).

### MerchantBillingBalanceListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

