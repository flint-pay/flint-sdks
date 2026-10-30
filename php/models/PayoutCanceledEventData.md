[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCanceledEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PayoutCanceledEventDataObject](../models/PayoutCanceledEventDataObject.md#payoutcanceledeventdataobject) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/PayoutCanceledEventData.md#payoutcanceledeventdataobject-fields-1). |

### PayoutCanceledEventData.object fields 1

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutCanceledEventData.object fields 1.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### PayoutCanceledEventData.object fields 1.original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutCanceledEventData.object fields 1.payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutCanceledEventData.object fields 1.reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

