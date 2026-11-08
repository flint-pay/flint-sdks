[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingBalanceResponse

A response containing `MerchantBillingBalance` data.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MerchantBillingBalance](../models/MerchantBillingBalance.md#merchantbillingbalance) | Resource, collection, or operation result returned by this request. Current Flint merchant billing balance for one billing account and currency. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

