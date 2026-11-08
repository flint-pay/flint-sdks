[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceListResponse

A list of `Balance` objects.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Balance](../models/Balance.md#balance) | Resource, collection, or operation result returned by this request. |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

