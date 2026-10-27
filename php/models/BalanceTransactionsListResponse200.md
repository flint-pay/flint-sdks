[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionsListResponse200

A page of `BalanceTransaction` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | `data[]`: [field definitions](../models/BalanceTransactionsGetResponse200.md#balancetransactionsgetresponse200data). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BalanceTransactionsListResponse200.data[]

Field definitions: [BalanceTransactionsGetResponse200.data](../models/BalanceTransactionsGetResponse200.md#balancetransactionsgetresponse200data).

