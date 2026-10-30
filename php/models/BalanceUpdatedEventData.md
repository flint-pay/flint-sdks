[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BalanceUpdatedEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [BalanceUpdatedEventDataObject](../models/BalanceUpdatedEventDataObject.md#balanceupdatedeventdataobject) | Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money. `object`: [field definitions](../models/BalanceUpdatedEventData.md#balanceupdatedeventdataobject-fields-1). |

### BalanceUpdatedEventData.object fields 1

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

Field definitions: [shared fields](BalanceListResponse.md#balancelistresponsedata).

