[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCreatedEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PayoutCreatedEventDataObject](../models/PayoutCreatedEventDataObject.md#payoutcreatedeventdataobject) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/PayoutCreatedEventData.md#payoutcreatedeventdataobject-fields-1). |

### PayoutCreatedEventData.object fields 1

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutCreatedEventData.object fields 1.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### PayoutCreatedEventData.object fields 1.original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutCreatedEventData.object fields 1.payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutCreatedEventData.object fields 1.reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

