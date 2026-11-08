[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionListResponse

A page of `BalanceTransaction` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BalanceTransaction](../models/BalanceTransaction.md#balancetransaction) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BalanceTransactionListResponse.md#balancetransactionlistresponsedata). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. `meta`: [field definitions](../models/BalanceListResponse.md#balancelistresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BalanceTransactionListResponse.data[]

A change to the merchant's balance.

Field definitions: [shared fields](BalanceTransactionResponse.md#balancetransactionresponsedata).

### BalanceTransactionListResponse.data[].order

Declared alternatives: [BalanceTransactionResponse.data.order](../models/BalanceTransactionResponse.md#balancetransactionresponsedataorder).

### BalanceTransactionListResponse.data[].related_resource

Field definitions: [BalanceTransactionResponse.data.related_resource](../models/BalanceTransactionResponse.md#balancetransactionresponsedatarelated_resource).

### BalanceTransactionListResponse.meta

Field definitions: [BalanceListResponse.meta](../models/BalanceListResponse.md#balancelistresponsemeta).

