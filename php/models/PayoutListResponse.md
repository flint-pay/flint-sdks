[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutListResponse

A page of `Payout` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Payout](../models/Payout.md#payout) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PayoutListResponse.md#payoutlistresponsedata). |
| `meta` | Optional | [MoneyMovementListMeta](../models/MoneyMovementListMeta.md#moneymovementlistmeta) | Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history. `meta`: [field definitions](../models/BalanceListResponse.md#balancelistresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PayoutListResponse.data[]

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutListResponse.data[].metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### PayoutListResponse.data[].original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutListResponse.data[].payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutListResponse.data[].reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

### PayoutListResponse.meta

Field definitions: [BalanceListResponse.meta](../models/BalanceListResponse.md#balancelistresponsemeta).

