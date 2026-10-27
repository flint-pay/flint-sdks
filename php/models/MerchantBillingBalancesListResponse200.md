[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalancesListResponse200

A page of `MerchantBillingBalance` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | `data[]`: [field definitions](../models/MerchantBillingBalancesGetResponse200.md#merchantbillingbalancesgetresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantBillingBalancesListResponse200.data[]

Field definitions: [MerchantBillingBalancesGetResponse200.data](../models/MerchantBillingBalancesGetResponse200.md#merchantbillingbalancesgetresponse200data).

