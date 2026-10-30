[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutReversedEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [PayoutReversedEventDataObject](../models/PayoutReversedEventDataObject.md#payoutreversedeventdataobject) | Funds sent from a merchant balance to a payout destination. `object`: [field definitions](../models/PayoutReversedEventData.md#payoutreversedeventdataobject-fields-1). |

### PayoutReversedEventData.object fields 1

Funds sent from a merchant balance to a payout destination.

Field definitions: [shared fields](PayoutResponse.md#payoutresponsedata).

### PayoutReversedEventData.object fields 1.metadata

Field definitions: [PayoutResponse.data.metadata](../models/PayoutResponse.md#payoutresponsedatametadata).

### PayoutReversedEventData.object fields 1.original_payout

Declared alternatives: [PayoutResponse.data.original_payout](../models/PayoutResponse.md#payoutresponsedataoriginal_payout).

### PayoutReversedEventData.object fields 1.payout_destination

Declared alternatives: [PayoutResponse.data.payout_destination](../models/PayoutResponse.md#payoutresponsedatapayout_destination).

### PayoutReversedEventData.object fields 1.reversed_by_payout

Declared alternatives: [PayoutResponse.data.reversed_by_payout](../models/PayoutResponse.md#payoutresponsedatareversed_by_payout).

