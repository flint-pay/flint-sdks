[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnEligibilityPreviewRequestInput

A request to preview which items of an order can be returned, given an order and a selection.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | ID of the Order to return items from. minLength: `1`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `selection` | Required | [ReturnEligibilitySelectionRequestInput](../models/ReturnEligibilitySelectionRequestInput.md#returneligibilityselectionrequestinput) | Which fulfilled units to check. Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific list of lines. |

