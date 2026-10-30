[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationListResponse

A page of `PayoutDestination` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PayoutDestination](../models/PayoutDestination.md#payoutdestination) | `data[]`: [field definitions](../models/PayoutDestinationResponse.md#payoutdestinationresponsedata). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutDestinationListResponse.data[]

Field definitions: [PayoutDestinationResponse.data](../models/PayoutDestinationResponse.md#payoutdestinationresponsedata).

