[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemAddition

The risk list item matched or created for one requested value, and its creation outcome.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Whether the value was added or was already on the list. Values: `"created"`, `"existing"`. |
| `risk_list_item` | Required | [RiskListItem](../models/RiskListItem.md#risklistitem) | The list item holding the value. One value in a payment risk list. `risk_list_item`: [field definitions](../models/RiskListItemAddition.md#risklistitemadditionrisk_list_item). |

### RiskListItemAddition.risk_list_item

The list item holding the value. One value in a payment risk list.

Field definitions: [shared fields](RiskListItemResponse.md#risklistitemresponsedata).

### RiskListItemAddition.risk_list_item.created_by

Declared alternatives: [RiskListItemResponse.data.created_by](../models/RiskListItemResponse.md#risklistitemresponsedatacreated_by).

