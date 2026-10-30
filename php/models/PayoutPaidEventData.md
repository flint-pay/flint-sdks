[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutPaidEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PayoutPaidEventDataObject](../models/PayoutPaidEventDataObject.md#payoutpaideventdataobject) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/PayoutPaidEventData.md#payoutpaideventdataobject-fields-1). |

### PayoutPaidEventData.object fields 1

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutPaidEventData.object fields 1.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### PayoutPaidEventData.object fields 1.original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutPaidEventData.object fields 1.payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutPaidEventData.object fields 1.reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

