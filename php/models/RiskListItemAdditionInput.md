[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemAdditionInput

The risk list item matched or created for one requested value, and its creation outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Whether the value was added or was already on the list. Values: `"created"`, `"existing"`. |
| `risk_list_item` | Required | [RiskListItemInput](../models/RiskListItemInput.md#risklistiteminput) | The list item holding the value. One value in a payment risk list. |

