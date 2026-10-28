[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsListPayoutDestinationsResponse200

A page of `PayoutDestination` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PayoutDestination](../models/PayoutDestination.md#payoutdestination) | `data[]`: [field definitions](../models/PayoutSettingsDeletePayoutDestinationResponse200.md#payoutsettingsdeletepayoutdestinationresponse200data). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutSettingsListPayoutDestinationsResponse200.data[]

Field definitions: [PayoutSettingsDeletePayoutDestinationResponse200.data](../models/PayoutSettingsDeletePayoutDestinationResponse200.md#payoutsettingsdeletepayoutdestinationresponse200data).

