[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionListResponse

A page of `BalanceTransaction` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | `data[]`: [field definitions](../models/BalanceTransactionResponse.md#balancetransactionresponsedata). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BalanceTransactionListResponse.data[]

Field definitions: [BalanceTransactionResponse.data](../models/BalanceTransactionResponse.md#balancetransactionresponsedata).

