[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutListResponse

A page of `Payout` objects.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Payout](../models/Payout.md#payout) |  |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

