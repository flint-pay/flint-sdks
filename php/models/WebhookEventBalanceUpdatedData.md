[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEventBalanceUpdatedData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [WebhookEventBalanceUpdatedDataObject](../models/WebhookEventBalanceUpdatedDataObject.md#webhookeventbalanceupdateddataobject) | Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money. `object`: [field definitions](../models/WebhookEventBalanceUpdatedData.md#webhookeventbalanceupdateddataobject-fields-1). |

### WebhookEventBalanceUpdatedData.object fields 1

Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.

Field definitions: [shared fields](BalancesListResponse200.md#balanceslistresponse200data).

