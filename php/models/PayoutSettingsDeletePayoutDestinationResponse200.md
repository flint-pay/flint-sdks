[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutSettingsDeletePayoutDestinationResponse200

A response containing `PayoutDestination` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PayoutDestination](../models/PayoutDestination.md#payoutdestination) | The account that receives merchant payouts. `data`: [field definitions](../models/PayoutSettingsDeletePayoutDestinationResponse200.md#payoutsettingsdeletepayoutdestinationresponse200data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutSettingsDeletePayoutDestinationResponse200.data

The account that receives merchant payouts.

Field definitions: [shared fields](PayoutDestinationInput.md#payoutdestinationinput).

