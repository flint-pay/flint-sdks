[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItemAdditionInput

The risk list item matched or created for one requested value, and its creation outcome.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `outcome` | Required | string | Values: `"created"`, `"existing"`. |
| `risk_list_item` | Required | [RiskListItemInput](../models/RiskListItemInput.md#risklistiteminput) | One value in a payment risk list. |

