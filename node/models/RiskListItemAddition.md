[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemAddition

The risk list item matched or created for one requested value, and its creation outcome.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Whether the value was added or was already on the list. Values: `"created"`, `"existing"`. |
| `risk_list_item` | Required | [RiskListItem](../models/RiskListItem.md#risklistitem) | The list item holding the value. One value in a payment risk list. |

