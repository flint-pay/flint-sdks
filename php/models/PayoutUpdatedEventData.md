[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutUpdatedEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PayoutUpdatedEventDataObject](../models/PayoutUpdatedEventDataObject.md#payoutupdatedeventdataobject) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/PayoutUpdatedEventData.md#payoutupdatedeventdataobject-fields-1). |

### PayoutUpdatedEventData.object fields 1

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutUpdatedEventData.object fields 1.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### PayoutUpdatedEventData.object fields 1.original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutUpdatedEventData.object fields 1.payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutUpdatedEventData.object fields 1.reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

