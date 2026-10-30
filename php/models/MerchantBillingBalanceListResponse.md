[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceListResponse

A page of `MerchantBillingBalance` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | `data[]`: [field definitions](../models/MerchantBillingBalanceResponse.md#merchantbillingbalanceresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantBillingBalanceListResponse.data[]

Field definitions: [MerchantBillingBalanceResponse.data](../models/MerchantBillingBalanceResponse.md#merchantbillingbalanceresponsedata).

