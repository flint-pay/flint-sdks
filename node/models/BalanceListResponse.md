[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceListResponse

A page of `Balance` objects.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Balance](../models/Balance.md#balance) |  |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string | Omitted because all currency balances fit on one page. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

