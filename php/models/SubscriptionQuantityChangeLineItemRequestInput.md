[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionQuantityChangeLineItemRequestInput

Quantity for an existing subscription line.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number line quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `subscription_line_item_id` | Required | string | The existing subscription line to change. minLength: `1`. pattern: `^sli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |

