[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemAddition

The risk list item matched or created for one requested value, and its creation outcome.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Values: `"created"`, `"existing"`. |
| `risk_list_item` | Required | [RiskListItem](../models/RiskListItem.md#risklistitem) | One value in a payment risk list. |

