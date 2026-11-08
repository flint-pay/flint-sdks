[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceTransactionListResponseInput

A page of `BalanceTransaction` objects.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BalanceTransactionInput](../models/BalanceTransactionInput.md#balancetransactioninput) | Resource, collection, or operation result returned by this request. |
| `meta` | Optional | [MoneyMovementListMetaInput](../models/MoneyMovementListMetaInput.md#moneymovementlistmetainput) | Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

