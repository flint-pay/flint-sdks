[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutListResponse

A page of `Payout` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Payout](../models/Payout.md#payout) | `data[]`: [field definitions](../models/PayoutResponse.md#payoutresponsedata). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutListResponse.data[]

Field definitions: [PayoutResponse.data](../models/PayoutResponse.md#payoutresponsedata).

