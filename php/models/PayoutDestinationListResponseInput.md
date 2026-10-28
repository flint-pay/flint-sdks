[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutDestinationListResponseInput

A page of `PayoutDestination` objects.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PayoutDestinationInput](../models/PayoutDestinationInput.md#payoutdestinationinput) |  |
| `meta` | Optional | [MoneyMovementListMetaInput](../models/MoneyMovementListMetaInput.md#moneymovementlistmetainput) | Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

