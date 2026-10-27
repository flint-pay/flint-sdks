[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PurchasedGiftCard

A gift card issued for one unit of a purchased order line item, with its last four code characters and any card it replaced.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string |  |
| `last4` | Required | string | Last four characters of the card's current code. |
| `original_gift_card_id` | Optional | string |  |
| `restoration_reason` | Optional | string | Values: `"manual_recollection"`, `"processor_recollection"`. |
| `unit_ordinal` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

